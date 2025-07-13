"use client";

import React from "react";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common";
import EducationCard from "./EducationCard";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>Education</SectionHeading>
      
      <div className="max-w-[53rem] mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 w-0.5 bg-[#e8e0d6] dark:bg-gray-700" 
               style={{ top: '2rem', bottom: '8rem' }}></div>
          
          {educationData.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
          
          {/* Bottom message */}
          {/*<div className="text-center mt-16">*/}
          {/*  <div className="inline-block bg-gradient-to-r from-[#d4a574] to-[#c49660] dark:from-teal-400 dark:to-blue-500 text-white px-8 py-6 rounded-full max-w-md mx-auto">*/}
          {/*    <p className="text-sm font-medium mb-1">Learning New things is endless...</p>*/}
          {/*    <p className="text-lg font-bold mb-1">Always learning new things in my own world</p>*/}
          {/*    <p className="text-sm">to develop myself.</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}
