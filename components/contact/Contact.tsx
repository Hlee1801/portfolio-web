"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { SectionHeading } from "@/components/common";
import ContactForm from "./ContactForm";
import SubmitButton from "./SubmitButton";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-full max-w-[1200px] mx-auto px-8"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Left side - Image */}
                <div className="flex-1 flex justify-center lg:justify-start">
                    <img
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
                        alt="Contact illustration"
                        className="w-64 h-64"
                    />
                </div>
                
                {/* Right side - Form */}
                <div className="flex-1">
                    <ContactForm />
                </div>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <a
                    href="tel:0975440258"
                    className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg hover:scale-105 transition border border-[#e8e0d6] dark:border-gray-700"
                >
                    <span className="text-3xl mb-2">📞</span>
                    <h3 className="font-semibold text-center text-[#2d2d2d] dark:text-white">0975 440 258</h3>
                    <p className="text-sm text-[#8b7355] dark:text-gray-400 text-center mt-2">
                        Available for professional discussions and opportunities
                    </p>
                </a>

                <a
                    href="mailto:hoang.lvforwork@gmail.com"
                    className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg hover:scale-105 transition border border-[#e8e0d6] dark:border-gray-700"
                >
                    <span className="text-3xl mb-2">✉️</span>
                    <h3 className="font-semibold text-center text-[#2d2d2d] dark:text-white">hoang.lv184870@gmail.com</h3>
                    <p className="text-sm text-[#8b7355] dark:text-gray-400 text-center mt-2">
                        Feel free to reach out for collaboration or job opportunities
                    </p>
                </a>

                <button
                    className="flex flex-col items-center p-6 bg-[#d4a574] text-white rounded-lg hover:scale-105 transition hover:bg-[#c49660] dark:bg-teal-500 dark:hover:bg-teal-600"
                >
                    <span className="text-3xl mb-2">➤</span>
                    <h3 className="font-semibold text-center">Send Message</h3>
                    <p className="text-sm text-center mt-2">
                        We reply 24 hrs. Normal inquiries by bot & important inquiries within an hr.
                    </p>
                </button>
            </div>
        </motion.section>
    );
}
