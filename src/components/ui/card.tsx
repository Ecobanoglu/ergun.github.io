import React from "react";
import cn from "@/lib/utils";

interface ICard {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Card({ title, className, children }: ICard) {
  return (
    <div
      className={cn(
        "bg-white border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700 p-3 lg:p-4 xl:p-6 mb-4 lg:mb-6 rounded-xl",
        className
      )}
    >
      {title && (
        <h3 className="mb-3 lg:mb-5 font-bold text-xl text-black dark:text-gray-300">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
