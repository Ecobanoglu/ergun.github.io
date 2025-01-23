import React from "react";
import cn from "@/lib/utils";

interface ITag {
  className?: string;
  children?: React.ReactNode;
}

export default function Tag({ className, children }: ITag) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-gray-500 bg-gray-200/80 border-gray-300 dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:text-gray-400 dark:border-gray-600",
        className
      )}
    >
      {children}
    </span>
  );
}
