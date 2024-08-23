"use client";

import * as Avatar from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { googleSignOut, googleSSO } from "../scripts/firebase";
import { getUserMeta, UserMeta } from "../scripts/utils";

export default () => {
  const [userMeta, setUserMeta] = useState<UserMeta>({} as UserMeta);
  const hasMeta = Object.keys(userMeta).length !== 0;

  useEffect(() => {
    setUserMeta(getUserMeta());
  }, []);

  return (
    <div
      className={
        "flex items-center justify-around space-x-3 sm:bg-primary md:bg-transparent w-[40%] md:w-auto px-5 py-4 md:p-0 rounded-xl relative left-[10%] md:left-0 ml-[15%]"
      }
    >
      {hasMeta ? (
        <>
          <Avatar.Root className="items-center space-x-3 hidden sm:flex">
            <Avatar.Image
              src={userMeta.profilePicture}
              className="w-7 h-7 rounded-full object-cover bg-white p-[2px] md:p-0 "
            />
            <p className="truncate text-white md:text-gray-700">
              <span className="text-sm font-medium w-full">
                {userMeta.name}
              </span>
              <span className="block text-xs">{userMeta.email}</span>
            </p>
          </Avatar.Root>
          <button
            className="w-full sm:w-auto bg-primary md:bg-transparent flex sm:block justify-center py-4 sm:py-0 rounded-2xl"
            onClick={() => {
              googleSignOut();
            }}
          >
            <LuLogOut size={20} className="text-white md:text-black" />
          </button>
        </>
      ) : (
        <button
          className="px-3 py-1.5 text-sm text-white duration-150 bg-primary rounded-lg active:shadow-lg"
          onClick={() => {
            googleSSO();
          }}
        >
          Sign in
        </button>
      )}
    </div>
  );
};
