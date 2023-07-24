import React, { RefObject, useEffect, useState } from "react";
type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

function setLocalStorage(key: string, value: any) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    console.log("hata" + e);
  }
}

function getLocalStorage(key: string, initialValue?: any) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function removeLocalStorage(key: string, initialValue: any) {
  try {
    const value = window.localStorage.removeItem(key);
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

const useDarkMode = (theme: string) => {
  const colorTheme = theme === "dark" ? "light" : "dark";

  const root = window.document.documentElement;

  root.classList.remove(theme);
  root.classList.add(colorTheme);

  if (typeof window !== "undefined") {
    localStorage.setItem("ec_theme", colorTheme);
  }
  root.setAttribute("style", `color-scheme: ${colorTheme};`);
};

export {
  useOnClickOutside,
  useDarkMode,
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
};
