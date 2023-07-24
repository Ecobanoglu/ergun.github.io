"use client";

import { useState, useRef } from "react";

import { Button } from "../../ui";
import { Social } from "@/app/components/common/";
import { useOnClickOutside } from "@/app/utils";

const styleMenuItem =
  "py-3 px-6 block text-gray-200 text-2xl hover:text-primary-500 rounded-3xl transition";

export default function Menu() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useOnClickOutside(dropdownRef, () => setShowMenu(false));

  return (
    <div className="flex" ref={dropdownRef}>
      <Button
        variant="icon"
        onClick={toggleMenu}
        className={`relative z-50 ${showMenu ? "text-white ring-white" : ""} `}
      >
        {!showMenu ? (
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M16.293 17.707a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 101.414 1.414L10 11.414l6.293 6.293z"
            />
          </svg>
        )}
      </Button>
      {showMenu && (
        <nav className="fixed inset-0 bg-slate-950 p-4 flex flex-col items-center justify-center text-center visible z-40">
          <ul className="list-none p-0 m-0 mb-4 text-center">
            <li>
              <a href="#" className={styleMenuItem}>
                Anasayfa
              </a>
            </li>
            <li>
              <a href="#" className={styleMenuItem}>
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" className={styleMenuItem}>
                Hizmetler
              </a>
            </li>
            <li>
              <a href="#" className={styleMenuItem}>
                Portföy
              </a>
            </li>
            <li>
              <a href="#" className={styleMenuItem}>
                İletişim
              </a>
            </li>
          </ul>
          <Social />
        </nav>
      )}
    </div>
  );
}
