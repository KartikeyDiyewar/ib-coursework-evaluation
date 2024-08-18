"use client";
import React, { useState } from "react";
import { useCourseworkStore } from "@/store/courseworkStore";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const CourseworkList: React.FC = () => {
  const courseworkList = useCourseworkStore((state) => state.courseworkList);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleDownload = (coursework: any) => {
    const link = document.createElement("a");
    link.href = coursework.content;
    link.download = coursework.name;
    link.click();
  };

  const handleClick = (id: Number) => {
    router.push(`/pagedetails/${id}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-[#5B6170]">My coursework</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courseworkList.map((coursework, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md"
            onClick={() => handleClick(index)}
          >
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">{coursework.name}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setActiveDropdown(coursework.name)}
                  >
                    <span className="sr-only">Open options</span>⋮
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleDownload(coursework)}>
                    Download
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="text-sm text-gray-500">{coursework.subject}</p>
            <p className="text-sm text-gray-500">
              Word Count: {coursework.wordCount}
            </p>
            <p className="text-sm text-gray-700 mt-2 break-words">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit Atque
              omnis ab laboriosam...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseworkList;
