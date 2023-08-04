import React from "react";
import cn from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  value: number;
}

const BaseStyle: string =
  "flex justify-center items-center min-h-screen pt-28 pb-8 lg:pt-16 lg:pb-12 text-xl lg:text-xl";

export default function ProgressBar({
  children,
  title,
  value,
  className = "",
  ...attributes
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-between font-medium mb-3">
        <span>{title}</span>
        <span>{value}%</span>
      </div>
      <div
        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        {...attributes}
      >
        <div
          className={`bg-gray-950 h-2.5 rounded-full dark:bg-gray-200`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
