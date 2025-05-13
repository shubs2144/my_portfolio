'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex items-center justify-center text-2xl font-bold'>
      <MotionLink 
        href='/' 
        className='w-16 h-16 flex items-center justify-center rounded-full bg-[var(--color-dark)] text-[var(--color-light)] border border-solid border-transparent dark:border-[var(--color-light)] '
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          backgroundColor: isHovered 
            ? ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"]
            : "#121212"
        }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
      >
        SP
      </MotionLink>
    </div>
  );
}

export default Logo;
