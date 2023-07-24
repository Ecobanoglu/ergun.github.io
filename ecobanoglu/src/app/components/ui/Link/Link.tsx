import React from "react";
import cn from "clsx";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  variant?: string;
  href?: string;
}

const buttonStyles: any = {
  base: "inline-flex justify-center items-center  font-semibold transition-all",
  theme: {
    link: "",
    button:
      "gap-2 rounded-3xl ring-2 py-3 px-8 bg-slate-950 text-white ring-slate-950 hover:bg-slate-600 hover:text-white hover:ring-slate-600 hover:shadow-lg  dark:bg-slate-100 dark:text-slate-800 dark:ring-slate-100 dark:hover:bg-slate-400 dark:hover:ring-slate-400",
    outline:
      "gap-2 rounded-3xl ring-2 py-3 px-8 bg-transparent text-slate-950 ring-slate-950 hover:bg-slate-950 hover:text-white hover:ring-slate-950 hover:shadow-lg  dark:text-slate-100 dark:ring-slate-100 dark:hover:bg-white dark:hover:text-slate-950 dark:hover:ring-white",
  },
};

export default function Link({
  children,
  className = "",
  color = "primary",
  variant = "link",
  href,
  ...attributes
}: Props) {
  return (
    <a
      href={href}
      className={cn(
        `${buttonStyles.base} ${variant && buttonStyles.theme[variant]} ${
          className && className
        }`
      )}
      {...attributes}
    >
      {children}
    </a>
  );
}
