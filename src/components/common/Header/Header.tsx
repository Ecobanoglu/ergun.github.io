import { useState, useEffect } from "react";

import { Menu, Logo, DarkMode } from "@/components/common";
import { Switch } from "@/components/ui";

import { useSticky } from "@/utils";

export default function Header() {
  const sticky = useSticky(80) ? "bg-white dark:bg-gray-800 shadow-lg" : "";

  return (
    <header className={`fixed left-0 top-0 w-full py-2 md:py-4 z-50 ${sticky}`}>
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="w-full flex flex-row items-center justify-end text-center relative">
          <Logo />
          <Menu />
          <DarkMode />
        </div>
      </div>
    </header>
  );
}
