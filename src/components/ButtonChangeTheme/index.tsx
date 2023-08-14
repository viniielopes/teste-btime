"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

export const ButtonChangeTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "light" ? (
        <RxMoon
          onClick={() => setTheme("dark")}
          className="h-6 w-6 cursor-pointer text-text-primary dark:text-white"
        ></RxMoon>
      ) : (
        <RxSun
          onClick={() => setTheme("light")}
          className="h-6 w-6 cursor-pointer text-text-primary dark:text-white"
        ></RxSun>
      )}
    </>
  );
};
