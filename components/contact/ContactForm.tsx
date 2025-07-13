"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        
        try {
            const { data, error } = await sendEmail(formData);
            if (error) {
                toast.error(error);
                return;
            }
            toast.success("Email sent successfully!");
            
            // Reset form
            const form = document.querySelector('form') as HTMLFormElement;
            if (form) {
                form.reset();
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            className="flex flex-col dark:text-black"
            action={handleSubmit}
        >
            <input
                className="h-14 px-4 rounded-lg border border-[#e8e0d6] bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:border-[#d4a574] dark:border-gray-700"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="ex: your_email@gmail.com"
                disabled={isSubmitting}
            />
            <input
                className="h-14 px-4 rounded-lg border border-[#e8e0d6] bg-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mt-4 focus:border-[#d4a574] dark:border-gray-700"
                name="senderName"
                type="text"
                required
                maxLength={500}
                placeholder="Type your full name here"
                disabled={isSubmitting}
            />
            <textarea
                className="h-52 my-4 rounded-lg border border-[#e8e0d6] bg-white p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:border-[#d4a574] dark:border-gray-700"
                name="message"
                placeholder="Type your full message here."
                required
                maxLength={5000}
                disabled={isSubmitting}
            />
            <div className="flex items-center gap-4 mb-4">
                <button
                    className="text-[#8b7355] hover:text-[#d4a574] dark:text-gray-400 dark:hover:text-gray-200 transition disabled:opacity-50"
                    type="button"
                    disabled={isSubmitting}
                >
                    📎 Attach files
                </button>
            </div>
            <SubmitButton pending={isSubmitting} />
        </form>
    );
}
