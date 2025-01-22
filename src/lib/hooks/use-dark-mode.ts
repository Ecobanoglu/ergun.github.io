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

export default useDarkMode;
