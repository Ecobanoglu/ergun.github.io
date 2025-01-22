"use client";

import { useState } from "react";

import { Button } from "@/components/ui";

import { useDarkMode } from "@/lib/hooks";

export default function DarkMode() {
  const [checked, setChecked] = useState(false);

  const toggleMenu = () => {
    setChecked(!checked);

    if (checked) {
      useDarkMode("dark");
    } else {
      useDarkMode("light");
    }
  };

  return (
    <Button
      variant="link"
      onClick={toggleMenu}
      className={`relative ml-4 z-50 ${
        checked ? "text-white ring-white dark:hover:text-primary-600" : ""
      } `}
      aria-label="Toogle mode"
    >
      {!checked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </Button>
  );
}
