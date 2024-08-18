import React from "react";
import Image from "next/image";
import zuicon from "@/assets/Zu icon.svg";
import fire from "@/assets/fire.svg";
import dates from "@/assets/calendar.svg";
import flip from "@/assets/flip pages.svg";

const Rightbar = () => {
  return (
    <div className="h-[100%] p-[8px] gap-[10px] fixed right-0">
      <div className="h-[100%] p-[8px] rounded-[16px] gap-[16px] flex flex-col items-center">
        <div className="bg-white flex items-center px-2 py-1 rounded-3xl">
          <Image src={zuicon} alt="zu count" />
          <p>120</p>
        </div>
        <div className="bg-white flex items-center px-2 py-1 rounded-3xl">
          <Image src={fire} alt="like count" />
          <p>115</p>
        </div>
        <div className="bg-white flex items-center p-1 rounded-3xl">
          <Image src={dates} alt="calendar" />
        </div>
        <div className="bg-white flex items-center p-1 rounded-3xl">
          <Image src={flip} alt="flip pages" />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
