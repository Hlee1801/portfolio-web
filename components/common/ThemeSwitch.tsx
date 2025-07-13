"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-90 backdrop-blur-[0.5rem] border border-[#e8e0d6] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all text-[#d4a574] dark:bg-gray-950 dark:border-gray-700 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="w-4 h-4" /> : <BsMoon className="w-4 h-4" />}
    </button>
  );
}
