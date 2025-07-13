import React from "react";
import { FaPaperPlane } from "react-icons/fa";

interface SubmitButtonProps {
  pending?: boolean;
}

export default function SubmitButton({ pending = false }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#d4a574] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-[#c49660] active:scale-105 dark:bg-teal-500 dark:hover:bg-teal-600 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
