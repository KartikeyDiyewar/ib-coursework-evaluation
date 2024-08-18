import React from "react";
import Image from "next/image";
import logo from "@/assets/ZuAi icon.svg";
import home from "@/assets/Homepage icon.svg";
import book from "@/assets/Book icon.svg";
import pages from "@/assets/Pages icon.svg";
import faq from "@/assets/FAQ icon.svg";
import teen from "@/assets/TEEN SET 1 A.jpg";

const Sidebar = () => {
  return (
    <div className="h-[100%] p-[8px] gap-[10px] fixed">
      <div className="h-[100%] bg-white p-[8px] rounded-[16px] gap-[16px] flex flex-col items-center">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="h-[100%] gap-[8px]">
          <div>
            <Image src={home} alt="Home" />
          </div>
          <div>
            <Image src={book} alt="Book" />
          </div>
          <div>
            <Image src={pages} alt="Pages" />
          </div>
          <div>
            <Image src={faq} alt="FAQ" />
          </div>
        </div>
        <div>
          <Image src={teen} alt="teen img" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
