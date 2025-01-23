import React from "react";
import cn from "@/lib/utils";

interface BoxProp {
  className?: string;
  children: React.ReactNode;
}

export default function Box({ children, className }: BoxProp) {
  return (
    <div
      className={cn(
        "bg-gray-100 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-3 lg:p-4 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
