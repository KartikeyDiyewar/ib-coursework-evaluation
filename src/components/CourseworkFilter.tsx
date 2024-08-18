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

const CourseworkFilter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const courseworkList = useCourseworkStore((state) => state.courseworkList);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDownload = (coursework: any) => {
    const link = document.createElement("a");
    link.href = coursework.content;
    link.download = coursework.name;
    link.click();
  };

  const filteredCoursework = courseworkList.filter((coursework) => {
    return selectedSubject === "All" || coursework.subject === selectedSubject;
  });

  return (
    <div>
      <h1 className="font-bold text-[#5B6170] my-2">Explore coursework</h1>
      <div className="flex space-x-4 mb-4">
        <span>
          <span
            className="mr-2 px-2 py-1 rounded-2xl hover:bg-white hover:cursor-pointer text-[#98A1BB]"
            onClick={(e) => setSelectedSubject("All")}
            id="All"
          >
            All
          </span>
          <span
            className="mx-2 px-2 py-1 rounded-2xl hover:bg-white hover:cursor-pointer text-[#98A1BB]"
            onClick={(e) => setSelectedSubject("IA")}
            id="IA"
          >
            IA Example
          </span>
          <span
            className="mx-2 px-2 py-1 rounded-2xl hover:bg-white hover:cursor-pointer text-[#98A1BB]"
            onClick={(e) => setSelectedSubject("EE")}
            id="EE"
          >
            EE Example
          </span>
          <span
            className="mx-2 px-2 py-1 rounded-2xl hover:bg-white hover:cursor-pointer text-[#98A1BB]"
            onClick={(e) => setSelectedSubject("IO")}
            id="IO"
          >
            IO Example
          </span>
          <span
            className="mx-2 px-2 py-1 rounded-2xl hover:bg-white hover:cursor-pointer text-[#98A1BB]"
            onClick={(e) => setSelectedSubject("TOK")}
            id="TOK"
          >
            TOK Example
          </span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCoursework.map((coursework, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
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

export default CourseworkFilter;
