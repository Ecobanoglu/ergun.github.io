import React from "react";

import cn from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  color?: string;
}

const buttonStyles: any = {
  base: "inline-flex justify-center items-center gap-2 rounded-3xl text-sm font-semibold transition-all",
  theme: {
    button:
      "ring-2 gap-2 rounded-3xl ring-2 py-3 px-8 bg-black text-white ring-black hover:bg-primary-600 hover:text-white hover:ring-primary-600 hover:shadow-lg  dark:bg-gray-100 dark:text-gray-800 dark:ring-gray-100 dark:hover:bg-gray-400 dark:hover:ring-gray-400",
    outline:
      "ring-2 gap-2 rounded-3xl ring-2 py-3 px-8 bg-transparent text-gray-950 ring-gray-950 hover:bg-gray-950 hover:text-white hover:ring-gray-950 hover:shadow-lg  dark:text-gray-100 dark:ring-gray-100 dark:hover:bg-white dark:hover:text-gray-950 dark:hover:ring-white",
    icon: " ring-2 p-0 w-10 h-10 rounded-md bg-transparent text-gray-800 ring-gray-800 hover:bg-gray-800 hover:text-white hover:ring-gray-800 dark:text-white dark:ring-white dark:hover:bg-transparent dark:hover:ring-gray-400 dark:hover:text-gray-400",
    link: "bg-transparent border-0 ring-0 text-current hover:text-primary-600 hover:underline",
  },
};

export default function Button({
  children,
  className = "",
  variant = "button",
  ...attributes
}: Props) {
  return (
    <button
      type="button"
      className={cn(
        `${buttonStyles.base} ${variant && buttonStyles.theme[variant]} ${
          className && className
        }`
      )}
      {...attributes}
    >
      {children}
    </button>
  );
}
