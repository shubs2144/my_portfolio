'use client';

import { motion, stagger } from "framer-motion";
import React from "react";

const quoteAnimation = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.08,
    },
  },
};

const wordAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
        transition: {
            duration: 1,
        },
    },
  };

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full py-2 mx-auto flex items-center justify-center text-center overflow-hidden max-sm:py-0 ${className}`}
    >
      <motion.h1
        className={`inline-block w-full text-[--var(--color-dark)] font-bold capitalize text-8xl ${className} dark:text-[var(--color-light)]`}
        variants={quoteAnimation}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "_" + index}
            className="inline-block"
            variants={wordAnimation}
            
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
