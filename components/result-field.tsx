import { useEffect, useRef, useState } from "react";
import { RiFileCopyLine, RiRefreshLine } from "react-icons/ri";
import { copy } from "../scripts/utils";

export default ({ values }: { values: string[] }) => {
  const [index, setindex] = useState<number>(0);

  const outputRef = useRef(null);
  const nextIconRef = useRef(null);

  useEffect(() => {
    outputRef.current.addEventListener("click", function () {
      copy(this.value);
    });

    nextIconRef.current.addEventListener("click", function () {
      /* animation */
      const aniclass = "clicked-gen";

      if (this.classList.contains(aniclass)) {
        return;
      }

      this.classList.add(aniclass);

      const aniDuration = 400; //ms
      setTimeout(() => {
        this.classList.remove(aniclass);
      }, aniDuration);
    });
  });

  return (
    <>
      <div className="w-[97%] mt-2">
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => {
              if (values.length > index + 1) {
                setindex(index + 1);
              } else {
                setindex(0);
              }
            }}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary border rounded-xl border-primary hover:opacity-[80%] focus:ring-4 focus:outline-none focus:ring-primary/5"
          >
            <span ref={nextIconRef}>
              <RiRefreshLine className="text-xl" />
            </span>
          </button>

          <button
            className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 hover:text-gray-900 rounded-xl bg-white border border-gray-200 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
            onClick={() => {
              copy(outputRef.current.value);
            }}
          >
            <RiFileCopyLine className="text-lg" />
          </button>

          <div className="relative w-full">
            <input
              type="text"
              className="bg-gray-50 border border-gray-200 rounded-xl text-gray-500 text-sm block w-full p-3"
              value={values[index]}
              readOnly={true}
              disabled
              ref={outputRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};
