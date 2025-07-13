"use client";

import React, { useState, useRef, useEffect } from "react";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionHeading } from "@/components/common";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Hiển thị 4 project mặc định, tính toán số slide dựa trên việc scroll từng project
  const projectsPerView = 4;
  const totalSlides = projectsData.length - projectsPerView + 1;

  const scrollToSlide = (slideIndex: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const projectWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      const scrollPosition = slideIndex * (projectWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const projectWidth = 320;
      const gap = 24;
      const slideIndex = Math.round(scrollLeft / (projectWidth + gap));
      setCurrentSlide(Math.min(slideIndex, totalSlides - 1));
    }
  };

  return (
    <section ref={ref} id="projects" className="py-16 scroll-mt-28 bg-[#f1ede8] dark:bg-gray-950">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeading>My projects</SectionHeading>
        <div className="text-center mb-8">
          <p className="text-[#8b7355] dark:text-gray-400 max-w-2xl mx-auto">
            This is some project i got went i work!
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 -translate-x-5 ${
              currentSlide === 0 
                ? 'bg-gray-800/50 cursor-not-allowed' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <FiChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 translate-x-5 ${
              currentSlide === totalSlides - 1 
                ? 'bg-gray-800/50 cursor-not-allowed' 
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <FiChevronRight size={20} />
          </button>

          {/* Projects container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            onScroll={handleScroll}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className="flex-none w-80"
                style={{ scrollSnapAlign: 'start' }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-[#d4a574] dark:bg-teal-400' 
                  : 'w-2 bg-gray-700 hover:bg-gray-600'
              }`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
