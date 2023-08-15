import { useState, useRef } from "react";

import { Button } from "@/components/ui";
import { IconSun, IconMoon } from "@/assets/icons";
import { useDarkMode } from "@/utils";

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
        <IconSun className="w-6 h-6" />
      ) : (
        <IconMoon className="w-6 h-6" />
      )}
    </Button>
  );
}
