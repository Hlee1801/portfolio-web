"use client";

import React from "react";
import { educationData } from "@/lib/data";
import { motion } from "framer-motion";

type EducationCardProps = {
  item: (typeof educationData)[number];
  index: number;
};

export default function EducationCard({ item, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative flex items-start mb-12 pl-20"
    >
      {/* Timeline dot */}
      <div className="absolute left-6 w-4 h-4 bg-[#d4a574] dark:bg-teal-500 rounded-full border-4 border-white dark:border-gray-900 z-10"
           style={{ top: '1.5rem' }}></div>
      
      {/* Content container */}
      <div className="w-full">
        <div className="bg-white border border-[#e8e0d6] dark:bg-gray-800 dark:border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="mb-2">
            <span className="text-sm text-[#d4a574] dark:text-teal-500 font-semibold">
              {item.date}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[#2d2d2d] dark:text-white">
            {item.title}
          </h3>
          <p className="text-[#6b5b47] dark:text-gray-300 mb-3 font-medium">
            {item.location}
          </p>
          <p className="text-[#8b7355] dark:text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
