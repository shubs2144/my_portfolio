import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:left-2 md:bottom-2 sm:left-1 sm:bottom-1">
      <div className="w-48 h-[450px] flex items-center justify-center relative md:w-32 md:h-[350px] sm:w-24 sm:h-[300px]">
        <CircularText
          className={"fill-[var(--color-dark)] animate-spin-slow"}
        />

        <Link
          href={"mailto:shubspatil17@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-dark)] text-[var(--color-light)] shadow-md border border-solid border-[var(--color-dark)] w-10 h-10 rounded-full font-semibold hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] transition-colors duration-300 ease-in-out md:w-14 md:h-14 sm:w-10 sm:h-10"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
