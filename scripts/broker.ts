import declutter from "./declutter";
import { getUserMeta, inputValidate } from "./utils";

export interface LLMResponse {
  headlines: string[];
  metaDescriptions: string[];
  keywords: string[];
  urlStructures: string[];
}

export type brokerCallbackSign = (
  result: LLMResponse,
  message: false | string
) => void;

export default (
  triggerID: any,
  callFirst: () => void,
  callback: brokerCallbackSign
) => {
  const trigger = document.getElementById(triggerID);

  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    const type: any = trigger.dataset.type;

    dispatcher(type, callFirst, callback);
  });
};

function dispatcher(
  type: "text" | "file",
  callFirst: () => void,
  callback: brokerCallbackSign
) {
  const textInputID: string = "prompt";
  const fileInputID: string = "file";

  callFirst();

  inputHandler(textInputID, fileInputID, type)
    .then((promptContent: string) => {
      //valiadtion
      if (!inputValidate(promptContent)) {
        errorHandler("xsm", callback);
      } else {
        sendRequest(promptContent, callback);
      }
    })
    .catch((err: Error) => {
      /* Input parsing */
      console.warn(err);
      errorHandler("idk", callback);
    });
}

function inputHandler(
  textInputID: string,
  fileInputID: string,
  type: "text" | "file"
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (type === "text") {
      textModeHandler(textInputID)
        .then((pageContent: string) => {
          const cleanHTML: string = declutter(pageContent);
          resolve(cleanHTML);
        })
        .catch(reject);
    } else {
      fileModeHandler(fileInputID)
        .then((pageContent: string) => {
          const cleanHTML: string = declutter(pageContent);
          resolve(cleanHTML);
        })
        .catch(reject);
    }
  });
}

function fileModeHandler(fileInputID: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const file = (document.getElementById(fileInputID) as HTMLInputElement)
      .files[0];

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onerror = reject;

    reader.onload = function (event) {
      const fileContent: string = event.target.result.toString();
      resolve(fileContent);
    };
  });
}

/* Promisifying text mode */
function textModeHandler(textInputID: string): Promise<string> {
  return new Promise((resolve) => {
    const prompt: string = (document.getElementById(textInputID) as any).value;
    resolve(prompt);
  });
}

function sendRequest(promptContent: string, callback: brokerCallbackSign) {
  const uid = getUserMeta().uid;
  const formData = JSON.stringify({ prompt: promptContent, uid: uid });

  fetch("https://asia-south1-bonse-430603.cloudfunctions.net/bonse-llm", {
    method: "POST",
    body: formData,
  })
    .then((response: Response) => {
      if (response.status === 200) {
        response
          .text()
          .then((llmResponse: string) => {
            const jsonStart: number = llmResponse.indexOf("{");
            const jsonEnd: number = llmResponse.lastIndexOf("}") + 1;

            const jsonString: string = llmResponse.slice(jsonStart, jsonEnd);

            const parsedjson: LLMResponse = JSON.parse(jsonString);

            callback(parsedjson, false);
          })
          .catch(() => {
            /* console.log("Unexpected LLM response."); */
            errorHandler("llmerr", callback);
          });
      } else {
        errorHandler(response.status, callback);
      }
    })
    .catch((err: Error) => {
      /* request wide error */
      errorHandler("000", callback);
    });
}

const messageRecord: Record<string, string> = {
  "500":
    "Something went wrong on our end—Sherlock Holmes is on the case. Please try again later!",

  "400":
    "Looks like we’re missed some info. Can you fill in the blanks and try again?",

  "429":
    "Whoa there! You've hit the daily limit. Take a break and try again tomorrow!",

  "000":
    "Connection failed. Our tech wizards are on it. Please try again later!",

  idk: "Oops! Something went wrong. Please try again later!",

  llmerr:
    "Looks like our writer was hijacked by mischievous robots. Try again while we regain control.",

  xsm: "Input too small! Give us more to work with and try again.",
};

function errorHandler(
  statusCode: number | string,
  callback: brokerCallbackSign
) {
  callback(
    {} as LLMResponse,
    messageRecord[`${statusCode}`] ?? messageRecord["idk"]
  );
}
