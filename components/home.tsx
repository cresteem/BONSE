"use client";
import { useEffect, useState } from "react";
import broker, { brokerCallbackSign, LLMResponse } from "../scripts/broker";
import { trackAuth } from "../scripts/firebase";
import App from "./app";
import Features from "./features";
import Toast from "./toast";
import ToolSuggestions from "./tool-suggestions";

interface MainStates {
  isError: false | string;
  result: LLMResponse;
  isLoading: boolean;
}

export default () => {
  const [states, updateStates] = useState<MainStates>({
    isError: false,
    isLoading: false,
    result: {} as LLMResponse,
  });

  useEffect(() => {
    trackAuth((userNotLogged: boolean) => {
      if (userNotLogged) {
        const app = document.getElementById("app");
        app.style.pointerEvents = "none";
        app.style.opacity = "0.5";

        document.getElementById("block-msg").style.display = "flex";
      }
    });

    const preResultCall = (): void => {
      updateStates({ ...states, isLoading: true });
    };

    const postResultCall: brokerCallbackSign = (
      result: LLMResponse,
      message: false | string
    ): void => {
      const currentStates: MainStates = {
        isError: message ? message : false,
        isLoading: false,
        result: result,
      };

      updateStates(currentStates);
    };

    const submitButtonID: string = "submit";

    broker(submitButtonID, preResultCall, postResultCall);
  }, []);

  return (
    <>
      <main>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
              Optimize your website for
              <span className="text-primary"> Search engine</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              BONSE (Boost on Search Engine) automates the generation of meta
              descriptions, titles, optimized URLs, and keywords to boost your
              site's visibility and ranking on search engines.
            </p>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <a
              href="#app"
              className="px-10 py-3.5 bg-primary text-white text-center rounded-md shadow-md block sm:w-auto"
            >
              Try it out
            </a>
          </div>
        </section>
        <Features />

        {states.isError ? (
          <Toast
            message={states.isError}
            callback={() => {
              updateStates({ ...states, isError: false });
            }}
          />
        ) : (
          ""
        )}

        <App result={states.result} loading={states.isLoading} />
        <ToolSuggestions />
      </main>
    </>
  );
};
