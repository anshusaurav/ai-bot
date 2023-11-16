import React from "react";
const ChatItem = ({ item }) => {
  const indentOutput = () => {
    const str = item?.output?.output_text?.join("\n");
    return str?.split("\n").map((s, index) => {
      return (
        <p className="[&:not(:first-of-type)]:mt-2" key={index}>
          {s}
        </p>
      );
    });
  };

  return (
    <div className="chat w-full text-token-text-primary border-b border-black/10 dark:border-gray-900/50 dark:border-gray-900/50 dark:[&:nth-of-type(odd)]:dark:bg-zinc-600 dark:[&:nth-of-type(even)]:dark:bg-zinc-800 text-left">
      <div className="p-4 justify-center text-base md:gap-6 md:py-6 m-auto">
        <div className="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">
          <div className="flex-shrink-0 flex flex-col relative items-end">
            <div
              style={{ background: "rgb(25, 195, 125)" }}
              className="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center"
            >
              {item?.sender === "USER" ? (
                "User"
              ) : (
                <img
                  style={{ width: 36, height: 36 }}
                  src={
                    item?.image || "/assets/images/logo_black.png_400x400.png"
                  }
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="relative flex w-[calc(100%-50px)] flex-col lg:w-[calc(100%-115px)]">
            {indentOutput()}
            {item?.output?.output_audio?.length > 0 && (
              <audio className="my-4 w-full" controlsList="nodownload" controls>
                <source
                  src={item?.output?.output_audio?.[0]}
                  type="audio/mpeg"
                />
              </audio>
            )}
            {item?.output?.output_video?.length > 0 && (
              <video
                className="my-4 w-full rounded-md"
                controlsList="nodownload"
                controls
              >
                <source
                  src={item?.output?.output_video?.[0]}
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
