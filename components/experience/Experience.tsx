"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { SectionHeading } from "@/components/common";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-16 sm:mb-24">
      <SectionHeading>Experience</SectionHeading>
      <p className="text-center mb-6 text-[#6b5b47] dark:text-gray-300">
        I'm optimists who love to work together.
      </p>
      <p className="text-center mb-8 text-[#8b7355] dark:text-gray-400 max-w-[45rem] mx-auto">
        I got 2+ year experience working on main Java and java framework, beside that I got a bit exp with
      </p>
      
      <div className="max-w-[53rem] mx-auto px-4">
        <div className="space-y-12">
          {experiencesData.map((company, companyIndex) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: companyIndex * 0.2 }}
              className="relative"
            >
              {/* Company Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-[#d4a574] dark:bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {company.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2d2d2d] dark:text-white">
                      {company.company}
                    </h3>
                    <p className="text-[#8b7355] dark:text-gray-400">
                      {company.period}
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects List with Timeline */}
              <div className="relative">
                {/* Timeline line going through dots - positioned with more space from dates */}
                <div className="absolute left-[12rem] top-0 bottom-0 w-0.5 bg-[#e8e0d6] dark:bg-gray-700"></div>
                
                <div className="space-y-6">
                  {company.projects.map((project, projectIndex) => (
                    <motion.div
                      key={`${company.company}-${projectIndex}`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (companyIndex * 0.2) + (projectIndex * 0.1) }}
                      className="flex items-start"
                    >
                      {/* Timeline Date - Left side with more space */}
                      <div className="w-40 flex-shrink-0 pr-6">
                        <span className="inline-block px-4 py-2 bg-[#d4a574] dark:bg-teal-500 text-white text-sm rounded-full font-medium whitespace-nowrap">
                          {project.period}
                        </span>
                      </div>
                      
                      {/* Decorative Dot on Timeline - repositioned */}
                      <div className="w-14 flex-shrink-0 flex justify-center mt-3 relative z-10">
                        <div className="w-3 h-3 bg-[#d4a574] dark:bg-teal-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                      </div>
                      
                      {/* Project Card - Right side */}
                      <div className="flex-1 ml-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-[#e8e0d6] dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          {/* Project Icon */}
                          <div className="flex-shrink-0 w-12 h-12 bg-[#f1ede8] dark:bg-gray-700 rounded-lg flex items-center justify-center text-[#d4a574] dark:text-teal-400 text-xl">
                            {project.icon}
                          </div>
                          
                          <div className="flex-1">
                            {/* Project Header */}
                            <div className="mb-3">
                              <h4 className="text-xl font-semibold text-[#2d2d2d] dark:text-white mb-2">
                                {project.title}
                              </h4>
                              <p className="text-[#d4a574] dark:text-teal-400 font-medium">
                                {project.role}
                              </p>
                            </div>

                            {/* Project Description */}
                            <div className="mb-4">
                              {/* First line - Project overview (no bullet) */}
                              <p className="text-[#6b5b47] dark:text-gray-300 leading-relaxed text-sm mb-3">
                                {project.description[0]}
                              </p>
                              
                              {/* Rest of lines - Bullet points với alignment tốt hơn */}
                              {project.description.length > 1 && (
                                <div className="space-y-2">
                                  {project.description.slice(1).map((point, pointIndex) => (
                                    <div key={pointIndex} className="flex items-start gap-3">
                                      <span className="text-[#d4a574] dark:text-teal-400 flex-shrink-0 text-sm font-bold mt-0.5">•</span>
                                      <span className="text-[#6b5b47] dark:text-gray-300 text-sm leading-relaxed">{point}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-[#f7f5f3] dark:bg-gray-700 text-[#8b7355] dark:text-gray-300 text-xs rounded-full border border-[#e8e0d6] dark:border-gray-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Company separator line */}
              {companyIndex < experiencesData.length - 1 && (
                <div className="mt-12 border-b border-[#e8e0d6] dark:border-gray-700"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
