import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 -bottom-28 flex items-center justify-center overflow-hidden max-md:right-6 max-md:left-auto max-md:-top-44 z-10 max-md:bottom-auto max-md:absolute">
      <div className="w-48 h-[450px] flex items-center justify-center relative max-md:w-24">
        <CircularText
          className={"fill-[var(--color-dark)] animate-spin-slow dark:fill-[var(--color-light)] dark:text-[var(--color-light)]"}
        />

        <Link
          href={"mailto:shubspatil17@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-dark)] text-[var(--color-light)] shadow-md border border-solid border-[var(--color-dark)] w-20 h-20 rounded-full font-semibold hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] transition-colors duration-300 ease-in-out dark:bg-[var(--color-light)] dark:text-[var(--color-dark)] dark:border-[var(--color-light)] dark:hover:bg-[var(--color-dark)] dark:hover:text-[var(--color-light)] dark:hover:border-[var(--color-light)] max-md:w-12 max-md:h-12 max-md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
