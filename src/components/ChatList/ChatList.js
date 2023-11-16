import { useRef, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import ChatItem from "../ChatItem/ChatItem";
import "./ChatList.scss";
const ChatList = ({ items, isLoading }) => {
  const messagesEndRef = useRef();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items?.length]);

  return (
    <>
      {items?.map((item) => (
        <ChatItem key={item?.id} item={item} />
      ))}
      {isLoading && (
        <div className="flex justify-center items-center p-4">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChatList;
