'use client';

import clsx from "clsx";
import Avatar from "../avatar/Avatar";
// import Lottie from "lottie-react";
// import LoadingAiChatLottie from "../../public/loding.json"
import { FC } from "react";
import useChat from "@/src/hooks/useChat";


interface MessageBoxProps {
    data:any
    isLast:any
}


const MessageBox:FC<MessageBoxProps> = ({ 
  data, 
  isLast
}) => {

const chat = useChat();
const isOwn = data?.sender === "user" ? false : true;



  const container = clsx('flex gap-3 p-4', isOwn && 'justify-end');
  const avatar = clsx(isOwn && 'order-2');
  const body = clsx('flex flex-col gap-2', isOwn && 'items-end');
  const message = clsx(
    'text-sm w-fit overflow-hidden', 
    isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100 text-black', 
    data.image ? 'rounded-md p-0' : 'rounded-full py-2 px-3'
  );

  return ( 
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data?.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">
            {data?.sender || ""}
          </div>
        </div>
       
          <div className={message}>
            <div >{data.body}</div>
          </div>
          {/* {chat.isLoading  && isLast? (
            
                  <Lottie
                  style={{ width: 60, height: 40 }}
                  width={60}
                  height={20}
                  animationData={LoadingAiChatLottie}
                  loop={true}
                  autoPlay={true}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
          ):(
            <>
            </>
          )} */}
        
      </div>
    </div>
  );
}
 
export default MessageBox;
