"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { SectionHeading } from "@/components/common";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsCalendar, BsGeoAlt, BsPeople } from "react-icons/bs";

const workDailyData = [
  {
    id: 1,
    src: "/WorkDaily/1.jpeg",
    alt: "Team Building Event",
    title: "Team Building Event",
    date: "March 2024",
    location: "8Seneca Office",
    description: "Annual team building event with all team members. Great opportunity to bond with colleagues and strengthen team relationships.",
    participants: "25+ members",
    category: "Team Event"
  },
  {
    id: 2,
    src: "/WorkDaily/2.jpeg", 
    alt: "Project Celebration",
    title: "Project Milestone Celebration",
    date: "February 2024",
    location: "Conference Room",
    description: "Celebrating Women's Day March 8",
    participants: "15+ members",
    category: "Achievement"
  },
  {
    id: 3,
    src: "/WorkDaily/3.jpeg",
    alt: "Development Meeting",
    title: "Sprint Planning Meeting",
    date: "January 2024",
    location: "Meeting Room",
    description: "Weekly sprint planning session where we discuss upcoming tasks, priorities, and technical challenges for the development team.",
    participants: "8+ members",
    category: "Planning"
  },
  {
    id: 4,
    src: "/WorkDaily/4.jpeg",
    alt: "Vacation",
    title: "Code Review & Knowledge Sharing",
    date: "December 2024",
    location: "Dai Lai",
    description: "Vacation 2024",
    participants: "6+ members",
    category: "Learning"
  },
  {
    id: 5,
    src: "/WorkDaily/5.jpeg",
    alt: "Team Outing",
    title: "Outdoor Team Activity",
    date: "December 2023",
    location: "Resort Location",
    description: "Company retreat and team outing. A great opportunity to relax, have fun, and build stronger relationships outside of work.",
    participants: "20+ members",
    category: "Recreation"
  },
  {
    id: 6,
    src: "/WorkDaily/6.jpeg",
    alt: "Java Team Meeting",
    title: "Java Development Team",
    date: "November 2023",
    location: "Outdoor Venue",
    description: "Java development team gathering for technical discussions and team coordination. Focused on improving our backend development processes.",
    participants: "12+ members",
    category: "Technical"
  }
];

export default function WorkDaily() {
  const { ref } = useSectionInView("Work Daily");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? workDailyData.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === workDailyData.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="work-daily" ref={ref} className="scroll-mt-28 mb-16 sm:mb-24 bg-[#f7f5f3] dark:bg-gray-900 py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        <SectionHeading>Work Daily</SectionHeading>
        <p className="text-center mb-12 text-[#8b7355] dark:text-gray-400 max-w-[45rem] mx-auto">
          Glimpses from my daily work life and development journey
        </p>
        
        {/* Horizontal Scrolling Gallery */}
        <div className="relative mb-16">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 w-max">
              {workDailyData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative w-80 h-56 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-[#e8e0d6] dark:border-gray-700 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.date}</p>
                    </div>
                    {/* Zoom indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {workDailyData.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-[#d4a574] dark:bg-teal-400 opacity-30"
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <FiX size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <FiChevronLeft size={24} />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                <FiChevronRight size={24} />
              </button>

              {/* Image container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-6xl max-h-[90vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={workDailyData[selectedImage].src}
                  alt={workDailyData[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    {workDailyData[selectedImage].title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {workDailyData[selectedImage].description}
                  </p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-300">
                    <span>{workDailyData[selectedImage].date}</span>
                    <span>•</span>
                    <span>{workDailyData[selectedImage].location}</span>
                  </div>
                </div>
              </motion.div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 rounded-full px-4 py-2 text-white text-sm">
                {selectedImage + 1} of {workDailyData.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}