"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    setTheme(isDarkMode);
  }, []);

  const setTheme = (theme: boolean) => {
    const root = window.document.documentElement;
    const colorTheme = theme ? "dark" : "light";

    if (theme) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("ec_theme", colorTheme);
    }
    root.setAttribute("style", `color-scheme: ${colorTheme};`);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    setTheme(darkMode);
  };

  return (
    <Button
      variant="link"
      onClick={toggleDarkMode}
      className={`relative ml-4 z-50 `}
      aria-label="Toogle mode"
    >
      {!darkMode ? (
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
