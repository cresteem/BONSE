import { AiFillThunderbolt } from "react-icons/ai";
import { BsFillRocketFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { LLMResponse } from "../scripts/broker";
import InputArea from "./input-area";
import Process from "./process";
import Result from "./result";

export default ({
  result,
  loading,
}: {
  result: LLMResponse;
  loading: boolean;
}) => {
  return (
    <section
      id="app"
      className={
        "my-20 w-[95%] mx-auto border border-gray-200 rounded-lg py-20 shadow-2xl relative hidden lg:flex flex-col"
      }
    >
      <div
        id="block-msg"
        className="absolute top-[40%] left-[40%] w-[30%] h-[10%] z-10 flex justify-center items-center space-x-5 text-primary"
      >
        <FaLock size={40} />
        <p className="text-4xl font-black">Login Required</p>
      </div>

      <div className="w-[100%] h-10 bg-white border-b pb-1 absolute top-0 rounded-t-lg flex">
        <p className="text-black font-medium p-2 ml-5 mt-1">BONSE</p>

        <div className="shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-20 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto">
          <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-y-0">
            <BsFillRocketFill className="bg-red-500 w-3 h-3 rounded-full p-1 text-white" />
            <FiSearch className="bg-blue-500 w-3 h-3 rounded-full p-1 text-white" />
            <AiFillThunderbolt className="bg-green-500 w-3 h-3 rounded-full p-1 text-white" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-5">
        {" "}
        <InputArea loading={loading} />
        {loading ? <Process /> : <Result result={result} />}
      </div>
    </section>
  );
};
