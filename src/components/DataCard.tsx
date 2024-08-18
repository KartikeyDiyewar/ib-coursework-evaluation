"use-client";
import React from "react";
import CircularProgress from "@/components/CircularProgress";

interface DataCardProps {
  title: string;
  description: string;
  value: number;
  valstring: string;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  description,
  value,
  valstring,
}) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md flex items-center justify-start gap-2">
      <CircularProgress size="lg" value={value}>
        {valstring}
      </CircularProgress>
      <div>
        <p className="text-gray-700 text-sm font-medium">{title}</p>
        <p className="text-gray-700 text-sm font-bold">{description}</p>
      </div>
    </div>
  );
};

export default DataCard;
