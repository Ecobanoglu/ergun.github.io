"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

import { useDarkMode } from "@/utils";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Switch = ({ children, className = "", ...attributes }: Props) => {
  const [checked, setChecked] = useState(false);

  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);

    setTheme(theme === "dark" ? "light" : "dark");

    if (value) {
      useDarkMode("light");
    } else {
      useDarkMode("dark");
    }
  };
  return (
    <>
      <div className="relative flex flex-col items-center justify-center ml-4 overflow-hidden">
        <div className="flex">
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checked}
              onChange={handleChange}
              {...attributes}
            />
            <div className="w-14 h-8 bg-gray-200 rounded-full peer  peer-focus:ring-primary-300  peer-checked:after:translate-x-[1.5rem] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Switch;
