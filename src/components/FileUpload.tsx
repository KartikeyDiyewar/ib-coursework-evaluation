"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { useCourseworkStore } from "@/store/courseworkStore";
import Image from "next/image";
import upfile from "@/assets/upload_file.svg";
import stargrey from "@/assets/star gray.svg";

const MAX_FILE_SIZE = 25 * 1024 * 1024;

const FileUpload: React.FC = () => {
  const addCoursework = useCourseworkStore((state) => state.addCoursework);
  const [courseworkType, setCourseworkType] = useState("Type 1");
  const [subject, setSubject] = useState("Subject 1");
  const [essayTitle, setEssayTitle] = useState("");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];
      if (uploadedFile.size > MAX_FILE_SIZE) {
        alert("File size exceeds 25 MB!");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;
        const fileName = essayTitle.trim() ? essayTitle : uploadedFile.name;
        addCoursework({
          name: fileName,
          size: uploadedFile.size,
          lastModified: uploadedFile.lastModified,
          content: fileContent,
          file: uploadedFile,
          subject,
          wordCount: 3286,
        });
        console.log(uploadedFile);
      };
      reader.readAsDataURL(uploadedFile);
    },
    [addCoursework, subject, essayTitle]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  });

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer 
        ${
          isDragActive
            ? "border-blue-400 bg-blue-100"
            : "border-gray-300 bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          <Image src={upfile} alt="upload file" />
          <p className="text-gray-600">Drag and drop a PDF</p>
          <p className="text-sm text-gray-500 mt-1">*Limit 25 MB per file</p>
        </div>
        <Button variant="outline" className="mt-4">
          <p className="text-purple-700 font-bold">Upload your file</p>
        </Button>
      </div>
      <label htmlFor="coursework-type" className="block mb-1 text-[#7A8196]">
        Select your course and subjects
      </label>
      <div className="flex space-x-4 mt-4">
        <div className="w-1/2">
          <select
            id="coursework-type"
            value={courseworkType}
            onChange={(e) => setCourseworkType(e.target.value)}
            className="block w-full border-gray-300 rounded-lg shadow-sm"
          >
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          </select>
        </div>

        <div className="w-1/2">
          <select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block w-full border-gray-300 rounded-lg shadow-sm"
          >
            <option value="All">All Types</option>
            <option value="IA">IA Example</option>
            <option value="EE">EE Example</option>
            <option value="IO">IO Example</option>
            <option value="TOK">TOK Example</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="essay-title" className="block mb-1 text-[#7A8196]">
          Enter your essay title*(Required)
        </label>
        <input
          id="essay-title"
          type="text"
          value={essayTitle}
          onChange={(e) => setEssayTitle(e.target.value)}
          placeholder="how nation works..."
          className="block w-1/2 border-2 border-orange-500 shadow-sm px-3 py-2 rounded-3xl"
        />
      </div>
      <div className="bg-[#ADB8C9] inline-block rounded-3xl px-3 py-2">
        <button
          className="flex gap-1"
          onClick={() => alert(`Evaluating score for: ${essayTitle}`)}
        >
          <span>
            <Image src={stargrey} alt="icon" />
          </span>
          Evaluate your coursework
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
