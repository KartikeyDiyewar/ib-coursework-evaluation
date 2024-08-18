import Image from "next/image";
import astroImg from "@/assets/Rectangle astro.png";
import evalImg from "@/assets/Evaluate.png";
import FileUpload from "@/components/FileUpload";
import CourseworkList from "@/components/CourseworkList";
import CourseworkFilter from "@/components/CourseworkFilter";

export default function Home() {
  return (
    <div className="p-20 flex justify-center">
      <div className="w-[75%] gap-[40px] flex flex-col justify-between items-start">
        <div className="flex gap-4 items-end">
          <div className="w-[60%] p-1">
            <h1 className="font-extrabold text-2xl">
              Hey IB Folks! Unsure about the quality of your answers?
              <span className="text-purple-700">We get you.</span>
            </h1>
            <div>
              <FileUpload />
            </div>
          </div>
          <div className="w-[28%] flex flex-col items-center">
            <Image src={astroImg} alt="Astro" />
            <Image src={evalImg} alt="Evaluate" />
          </div>
        </div>
        <div className="w-[75%] gap-[40px] flex flex-col justify-between items-start">
          <CourseworkList />
          <CourseworkFilter />
        </div>
      </div>
    </div>
  );
}
