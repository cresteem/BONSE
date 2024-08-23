import { LLMResponse } from "../scripts/broker";
import ResultField from "./result-field";

export default ({ result }: { result: LLMResponse }) => {
  const results = {
    "Meta Descriptions": result.metaDescriptions,
    Headlines: result.headlines,
    Keywords: result.keywords,
    "Optimised URLs": result.urlStructures,
  };

  return (
    <>
      <div
        className="w-[65%] min-h-80 bg-white rounded-lg sm:p-8 border border-gray-100"
        id="result"
      >
        {Object.keys(result).length === 0 ? (
          <p className="text-gray-500 text-xl leading-relaxed">
            Give me your HTML, and let me make{" "}
            <span className="text-primary font-bold">SEO magic spells!</span>
          </p>
        ) : (
          <div>
            <h5 className="text-2xl font-semibold leading-none pb-3">
              Magic Spells for You 🚀
            </h5>

            <div className="flow-root w-full">
              <ul role="list" className="divide-y divide-gray-200">
                {Object.keys(results).map((type: string, idx: number) => (
                  <li className="py-3 sm:py-4" key={idx}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0"></div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-md font-medium text-gray-900 truncate">
                          {type.slice(0, -1)}
                        </p>
                        <ResultField values={results[type]} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
