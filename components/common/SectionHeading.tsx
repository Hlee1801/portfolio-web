import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-bold text-center mb-8 text-[#2d2d2d] dark:text-white">
      {children}
    </h2>
  );
}
