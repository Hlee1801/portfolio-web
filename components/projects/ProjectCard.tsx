"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group h-full"
    >
      <div className="bg-white border border-[#e8e0d6] dark:bg-gray-800 dark:border-gray-700 rounded-xl overflow-hidden hover:bg-[#f1ede8] dark:hover:bg-gray-700/50 transition cursor-pointer h-full flex flex-col shadow-lg">
        <div className="relative h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60"></div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-[#2d2d2d] dark:text-white mb-2">{title}</h3>
          <p className="text-[#8b7355] dark:text-gray-400 text-sm mb-4 flex-1">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span
                className="bg-[#d4a574] dark:bg-gray-700 px-2 py-1 text-xs text-white dark:text-gray-300 rounded-full"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
