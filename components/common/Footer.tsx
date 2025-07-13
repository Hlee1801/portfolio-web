import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-[#8b7355] dark:text-gray-500">
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://www.facebook.com/le.hoang.771599"
          target="_blank"
          className="bg-[#d4a574] text-white p-3 rounded-lg hover:bg-[#c49660] transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/hlee_18/"
          target="_blank"
          className="bg-[#d4a574] text-white p-3 rounded-lg hover:bg-[#c49660] transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/le-hoang-57a151248/"
          target="_blank"
          className="bg-[#d4a574] text-white p-3 rounded-lg hover:bg-[#c49660] transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Hlee1801"
          target="_blank"
          className="bg-[#d4a574] text-white p-3 rounded-lg hover:bg-[#c49660] transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <FaGithub />
        </a>
      </div>

      
      <div className="flex justify-center gap-4 text-xs mb-2">
        <a href="#home" className="hover:underline hover:text-[#d4a574] dark:hover:text-teal-400">Introduction</a>
        <a href="#skills" className="hover:underline hover:text-[#d4a574] dark:hover:text-teal-400">Skill</a>
        <a href="#projects" className="hover:underline hover:text-[#d4a574] dark:hover:text-teal-400">Projects</a>
        <a href="#experience" className="hover:underline hover:text-[#d4a574] dark:hover:text-teal-400">Experience</a>
        <a href="#education" className="hover:underline hover:text-[#d4a574] dark:hover:text-teal-400">Education</a>
        <a href="#contact" className="hover:underline hover:text-[#d4a574] dark:hover:text-teal-400">Contact</a>
      </div>
    </footer>
  );
}
