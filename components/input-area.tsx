import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import Submitbtn from "./submitbtn";
import Textbox from "./textbox";
import Uploadcard from "./uploadcard";

export default ({ loading }: { loading: boolean }) => {
  const [selectedTab, setSelectedTab] = useState("Text Mode");
  const [type, setType] = useState<"text" | "file">("text");

  const tabItems = ["Text Mode", "File Mode"];

  return (
    <Tabs.Root
      className="max-w-screen-2xl w-[25%] flex-col flex items-center justify-center p-10"
      value={selectedTab}
      onValueChange={(val) => {
        setSelectedTab(val);
        setType(type === "text" ? "file" : "text");
      }}
    >
      <Tabs.List
        className="hidden bg-gray-100 rounded-lg gap-x-3 overflow-x-auto text-sm sm:flex p-2.5"
        aria-label="BONSE APP"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-primary hover:bg-white active:bg-white/50 font-medium"
            value={item}
          >
            {item}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="relative text-gray-500 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <select
          value={selectedTab}
          className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-primary text-sm"
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabItems.map((item, idx) => (
            <option key={idx} tabIndex={idx}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/*  */}

      <Tabs.Content key={0} className="mt-10 flex w-80" value={tabItems[0]}>
        <Textbox />
      </Tabs.Content>

      {/*  */}
      <Tabs.Content key={1} className="flex w-80" value={tabItems[1]}>
        <Uploadcard />
      </Tabs.Content>

      <Submitbtn loading={loading} type={type} />

      {/*  */}
    </Tabs.Root>
  );
};
