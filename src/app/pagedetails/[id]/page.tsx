// src/app/pagedetails/[id]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useCourseworkStore } from "@/store/courseworkStore";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import DataCard from "@/components/DataCard";
import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PageDetails: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const coursework = useCourseworkStore(
    (state) => state.courseworkList[Number(id)]
  );

  if (!coursework) {
    return (
      <div className="flex justify-center p-20">
        <h1>Coursework not found!</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-20">
      <div className="w-[80%] flex gap-1">
        <div className="flex flex-col items-start w-[70%] overflow-auto">
          <div className="pdf-container h-screen overflow-scroll">
            <div className="bg-[#FFFFFF7A] px-2 py-2 rounded-t-2xl">
              <div className="bg-white px-2 rounded-2xl inline-block">
                <p>{coursework.name}</p>
              </div>
            </div>
            <div className="p-4 rounded-b-2xl bg-white overflow-hidden">
              <Document file={coursework.file}>
                <Page pageNumber={1} />
              </Document>
            </div>
          </div>
        </div>
        <div className="inline-block flex flex-col gap-3">
          <DataCard
            title="Criteria:A"
            description="Random DataCard"
            value={66.66}
            valstring="7/10"
          />
          <DataCard
            title="Criteria:A"
            description="Random DataCard"
            value={50.0}
            valstring="5/10"
          />
          <DataCard
            title="Criteria:A"
            description="Random DataCard with th long text"
            value={33.33}
            valstring="3/10"
          />
          <div className="inline-block">
            <Button variant="secondary">
              <p className="text-purple-700 font-bold">
                Check detailed Evaluation &#9654;
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
