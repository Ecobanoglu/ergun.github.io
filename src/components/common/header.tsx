"use client";

import { Logo, DarkMode, Menu } from "@/components/common";

import { useSticky } from "@/lib/hooks";

export default function Header() {
  const sticky = useSticky(5) ? "bg-white dark:bg-gray-800 shadow-md" : "";
  return (
    <header
      className={`sticky left-0 top-0 w-full py-2 z-50 mb-6 lg:mb-8 border-b border-gray-200 dark:border-gray-800 ${sticky}`}
    >
      <div className="max-w-5xl px-4 lg:px-8 mx-auto">
        <div className="w-full flex flex-row items-center justify-end text-center relative">
          <Logo />
          <Menu />
          <DarkMode />
        </div>
      </div>
    </header>
  );
}
