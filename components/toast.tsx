import { useEffect } from "react";

import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

export default function ({
  callback,
  message,
}: {
  callback: Function;
  message: string;
}) {
  const messageDuration: number = 13000; //6s

  useEffect(() => {
    let timoutRef: any = setTimeout(callback, messageDuration);

    document.getElementById("toast-cls").addEventListener("click", function () {
      clearTimeout(timoutRef);
      callback();
    });
  }, []);

  return (
    <section
      className={"bg-gray-2 py-[60px] sticky right-10 top-0 z-50"}
      id="error-toast"
    >
      <div className="mx-auto px-4 sm:container">
        <div className="flex justify-end">
          <div className="relative flex w-full max-w-[460px] items-center rounded-lg border border-primary bg-gray-50/75 px-5 py-[18px] justify-between">
            <span className="mr-4 flex h-[40px] w-full max-w-[40px] items-center justify-center rounded-full bg-primary">
              <BsEmojiSmileUpsideDownFill className="text-white" size={30} />
            </span>

            <p className="text-base font-semibold text-primary sm:text-lg">
              {message}
            </p>

            <button className="text-primary" id="toast-cls">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
