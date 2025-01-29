"use client";

import { Logo, DarkMode } from "@/components";

import useSticky from "@/lib/hooks/use-sticky";

export default function Header() {
  const sticky = useSticky(5) ? "bg-white dark:bg-gray-800 shadow-md" : "";
  return (
    <header
      className={`sticky left-0 top-0 w-full py-2 z-50 lg:mb-8 border-b border-gray-200 dark:border-gray-800 ${sticky}`}
    >
      <div className="max-w-screen-xl px-3 md:px-4 lg:px-8 mx-auto">
        <div className="w-full flex flex-row items-center justify-end text-center relative">
          <Logo className="w-16 h-16" />

          <DarkMode />
        </div>
      </div>
    </header>
  );
}
