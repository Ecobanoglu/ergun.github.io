"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui";
import { Social } from "@/components/common/";
import { useOnClickOutside } from "@/utils";

import { IconMenu, IconClose } from "@/assets/icons";

export default function Menu() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  useOnClickOutside(dropdownRef, () => setShowMenu(false));

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLinkClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined,
    url: string
  ) => {
    e?.preventDefault();
    router.push(url);
    setTimeout(() => {
      setShowMenu(false);
    }, 100);
  };

  const styleMenuItem =
    "py-2 block relative text-gray-200 text-2xl transition  hover:text-primary-500 rounded-3xl transition xl:text-current font-medium xl:text-base after:content-[''] after:absolute after:left-0 after:top-full after:h-0.5 after:w-0  hover:after:w-full after:bg-current after:transition-all after:duration-300 ";

  const menuItems = [
    {
      id: 0,
      title: "Anasayfa",
      slug: "/",
    },
    {
      id: 1,
      title: "Hakkımda",
      slug: "about",
    },
    {
      id: 2,
      title: "Deneyimler",
      slug: "deneyimler",
    },
    {
      id: 3,
      title: "Projeler",
      slug: "projeler",
    },
    {
      id: 4,
      title: "İletişim",
      slug: "iletisim",
    },
  ];

  return (
    <div className="flex" ref={dropdownRef}>
      <Button
        variant="link"
        onClick={toggleMenu}
        className={`relative z-50 xl:hidden ${
          showMenu
            ? "text-white ring-white hover:text-primary-600 dark:hover:text-primary-600"
            : ""
        } `}
      >
        {!showMenu ? (
          <IconMenu className="w-6 h-6" />
        ) : (
          <IconClose className="w-6 h-6" />
        )}
      </Button>
      <nav
        className={`fixed xl:static inset-0 bg-slate-950 p-4 flex flex-col items-center justify-center transition text-center opacity-0 z-0 xl:opacity-100 xl:bg-transparent xl:visible xl:z-40  ${
          showMenu ? "opacity-100 visible z-40" : "invisible"
        }`}
      >
        <ul className="list-none p-0 m-0 mb-4 xl:mb-0 text-center flex flex-col xl:flex-row items-center">
          {menuItems.map((item) => (
            <li key={item.id} className="px-6">
              <Link
                href="#"
                onClick={(e) => handleLinkClick(e, item.slug)}
                className={styleMenuItem}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {showMenu && <Social />}
      </nav>
    </div>
  );
}
