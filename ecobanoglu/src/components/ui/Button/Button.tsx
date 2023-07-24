import React from "react";
import cn from "clsx";

import Link from "next/link";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  color?: string;
}

const buttonStyles: any = {
  base: "inline-flex justify-center items-center gap-2 rounded-3xl text-sm font-semibold transition-all ring-2",
  theme: {
    button:
      "gap-2 rounded-3xl ring-2 py-3 px-8 bg-gray-950 text-white ring-gray-950 hover:bg-gray-600 hover:text-white hover:ring-gray-600 hover:shadow-lg  dark:bg-gray-100 dark:text-gray-800 dark:ring-gray-100 dark:hover:bg-gray-400 dark:hover:ring-gray-400",
    outline:
      "gap-2 rounded-3xl ring-2 py-3 px-8 bg-transparent text-gray-950 ring-gray-950 hover:bg-gray-950 hover:text-white hover:ring-gray-950 hover:shadow-lg  dark:text-gray-100 dark:ring-gray-100 dark:hover:bg-white dark:hover:text-gray-950 dark:hover:ring-white",
    icon: "p-0 w-10 h-10 rounded-md bg-transparent text-gray-800 ring-gray-800 hover:bg-gray-800 hover:text-white hover:ring-gray-800 dark:text-white dark:ring-white dark:hover:bg-transparent dark:hover:ring-gray-400 dark:hover:text-gray-400",
    link: "bg-transparent border-0 ring-0 text-current hover:text-gray-800 hover:underline",
  },
};

export default function Button({
  children,
  className = "",
  variant = "normal",
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
