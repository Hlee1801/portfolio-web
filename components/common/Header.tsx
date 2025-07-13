"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-0 right-0 w-full h-[5rem] bg-white/80 backdrop-blur-md border-b border-[#e8e0d6] dark:bg-gray-900/80 dark:border-gray-800"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="max-w-[1400px] mx-auto h-full px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center dark:bg-teal-400">
              <span className="text-white font-bold text-xl dark:text-gray-900">H</span>
            </div>
            <span className="text-[#4a4a4a] font-medium dark:text-white">HLee</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "text-[#6b5b47] hover:text-[#4a4a4a] transition text-sm dark:text-white/70 dark:hover:text-white",
                      {
                        "text-[#d4a574] dark:text-teal-400": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="bg-transparent border-2 border-[#d4a574] text-[#d4a574] px-6 py-2 rounded-full hover:bg-[#d4a574] hover:text-white transition font-medium dark:border-yellow-500 dark:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact Now
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
