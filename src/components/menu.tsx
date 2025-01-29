"use client";

import { useRef } from "react";
import Link from "next/link";

export default function Menu() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const styleMenuItem =
    "py-1 block relative text-black transition dark:text-white rounded-3xl transition font-medium  after:content-[''] after:absolute after:left-0 after:top-full after:h-0.5 after:w-0  hover:after:w-full after:bg-current after:transition-all after:duration-300 ";

  const menuItems = [
    {
      id: 2,
      title: "Deneyimler",
      slug: "experience",
    },
    {
      id: 4,
      title: "İletişim",
      slug: "iletisim",
    },
  ];

  return (
    <div className="flex" ref={dropdownRef}>
      <nav
        className={`fixed xl:static inset-0 bg-slate-950 p-4 flex flex-col items-center justify-center transition text-center opacity-0 z-0 xl:opacity-100 xl:bg-transparent xl:visible xl:z-40`}
      >
        <ul className="list-none p-0 m-0 mb-4 xl:mb-0 text-center flex flex-col xl:flex-row items-center">
          {menuItems.map((item) => (
            <li key={item.id} className="px-3">
              <Link
                href={item.slug}
                className={styleMenuItem}
                aria-label={item.title}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
