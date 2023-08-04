"use client";

import { useState, useEffect } from "react";

export default function useSticky(value: number) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= value ? true : false;
    setSticky(stickyClass);
  };

  return sticky;
}
