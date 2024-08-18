"use-client";
import React from "react";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  size?: "sm" | "lg";
  value: number;
  children?: React.ReactNode;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = "lg",
  value,
  children,
}) => {
  let color = "text-blue-600";
  if (value < 40) {
    color = "text-red-600";
  } else if (value > 60) {
    color = "text-green-600";
  } else {
    color = "text-yellow-600";
  }

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        size === "lg" ? "w-16 h-16" : "w-12 h-12"
      )}
    >
      <svg className="absolute inset-0" viewBox="0 0 44 44">
        <circle
          className="text-gray-300"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="22"
          cy="22"
        />
        <circle
          className={color}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="22"
          cy="22"
          style={{
            transition: "stroke-dashoffset 0.35s",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>
      <span className={`${color} text-sm font-medium`}>{children}</span>
    </div>
  );
};

export default CircularProgress;
