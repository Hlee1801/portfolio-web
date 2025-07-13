"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { skillsData } from "@/lib/data";
import { skillIcons } from "@/lib/skillIcons";

export default function Intro() {
  const { ref } = useSectionInView("Introduction", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Số skills hiển thị trên mỗi page
  const skillsPerPage = 12;
  const totalPages = Math.ceil(skillsData.length / skillsPerPage);

  const scrollLeft = () => {
    setIsAutoScrolling(false);
    setCurrentPage(prev => prev === 0 ? totalPages - 1 : prev - 1);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const scrollRight = () => {
    setIsAutoScrolling(false);
    setCurrentPage(prev => (prev + 1) % totalPages);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  // Auto scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 3000); // Đổi page mỗi 3 giây

    return () => clearInterval(interval);
  }, [isAutoScrolling, totalPages]);

  // Get skills for current page
  const getCurrentPageSkills = () => {
    const startIndex = currentPage * skillsPerPage;
    const endIndex = Math.min(startIndex + skillsPerPage, skillsData.length);
    return skillsData.slice(startIndex, endIndex);
  };

  const currentSkills = getCurrentPageSkills();

  return (
    <section
      ref={ref}
      id="home"
      className="h-[calc(100vh-4rem)] flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f5f3] via-[#f1ede8] to-[#e8e0d6] dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 -z-10"></div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 text-center lg:text-left"
            >
              <h2 className="text-[#4a4a4a] dark:text-white text-lg md:text-2xl mb-2 md:mb-3">
                Hi, I'm
                <span className="text-2xl md:text-4xl font-bold text-[#2d2d2d] dark:text-gray-100"> Lê Việt Hoàng </span>
              </h2>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d] dark:text-white mb-3 md:mb-6">
                Java Developer
              </h1>
              <p className="text-[#6b5b47] dark:text-gray-300 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I'm a Software Engineer with 3 years of experience, specializing in backend development with Java.
                I have a strong interest in designing scalable architectures, working with distributed systems, and
                delivering high-performance APIs. I’m continuously improving my craft and aiming to become a backend
                system architect who builds secure, resilient, and maintainable platforms.
              </p>
            </motion.div>

            {/* Right content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center"
            >
              <Image
                src="/Avatar2.png"
                alt="Hlee"
                width={320}
                height={320}
                className="rounded-2xl object-cover md:w-[320px] md:h-[320px] lg:w-[3600px] lg:h-[360px]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills section - bottom part */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="pb-6 md:pb-8"
      >
        <div className="w-full px-4">
          <h2 className="text-xl md:text-3xl font-bold text-center text-[#2d2d2d] dark:text-white mb-4 md:mb-6">
            My skills
          </h2>
          
          {/* Skills carousel container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Left arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:shadow-xl"
              aria-label="Previous skills"
            >
              <BsChevronLeft className="text-sm md:text-xl text-[#d4a574] dark:text-teal-400" />
            </button>

            {/* Right arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:shadow-xl"
              aria-label="Next skills"
            >
              <BsChevronRight className="text-sm md:text-xl text-[#d4a574] dark:text-teal-400" />
            </button>

            {/* Skills grid */}
            <div className="mx-6 md:mx-16 px-2 md:px-4">
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 md:gap-3">
                {currentSkills.map((skill, index) => {
                  const skillData = skillIcons[skill];
                  return (
                    <motion.div
                      key={`${skill}-page-${currentPage}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-105 p-2 md:p-3 w-full aspect-square"
                    >
                      <div 
                        className="text-sm md:text-lg lg:text-xl mb-1 transition-colors duration-300"
                        style={{ color: skillData?.color || "#6b7280" }}
                      >
                        {skillData?.icon || "?"}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-300 text-center font-medium leading-tight">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center items-center mt-3 md:mt-4 gap-2 md:gap-3">
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    setIsAutoScrolling(false);
                    setTimeout(() => setIsAutoScrolling(true), 3000);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentPage === index
                      ? 'bg-[#d4a574] dark:bg-teal-400'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {isAutoScrolling ? 'Auto-scrolling' : 'Manual'} • {currentPage + 1}/{totalPages}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
