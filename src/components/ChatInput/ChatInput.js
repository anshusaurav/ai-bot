import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import "./ChatInput.scss";

const ChatInput = ({ onSubmitCallback, isLoading }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const tempVal = e.target.value;
    setValue(tempVal);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      handleSubmit(e);
    } else {
      // if (/^.$/u.test(e.key)) {
      //   setValue((value) => value + e.key);
      // }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitCallback && onSubmitCallback(value);
    setValue("");
  };

  return (
    <div className="w-full pt-2 md:pt-0 border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent absolute bottom-0 left-0 md:bg-vert-light-gradient bg-white dark:bg-zinc-800 dark:md:bg-vert-dark-gradient">
      <form
        className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
        onSubmit={handleSubmit}
      >
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          <div className="flex w-full items-center">
            <div className="rounded-md flex flex-col w-full dark:border-gray-900/50 flex-grow relative border border-black/10 dark:text-white rounded-xl shadow-xs dark:shadow-xs dark:bg-zinc-700 bg-white">
              <textarea
                className="m-0 w-full rounded-md  resize-none border-0 bg-gray-500 py-[10px] pr-10 md:py-4 md:pr-12 pl-3 md:pl-4"
                type="text"
                value={value}
                placeholder="Send a message"
                autoFocus
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={value?.trim()?.length === 0 || isLoading}
                className="absolute p-1 rounded-md inset-y-1/2 -translate-y-full  md:p-2 md:right-3 right-2 disabled:text-gray-400 text-white  transition-colors disabled:opacity-40 text-white"
              >
                <IoMdSend size={20} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
