"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, NaukariIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }) => {
  const pathname = usePathname(); // Get current path
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-[var(--color-dark)] absolute left-0 -bottom-0.5 transition-[width] duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full flex items-center justify-between p-8">
      {/* Primary Navigation */}
      <nav className="flex items-center space-x-4">
        <CustomLink href="/" title="Home" className="" />
        <CustomLink href="/about" title="About" className="" />
        <CustomLink href="/projects" title="Projects" className="" />
        <CustomLink href="/contact" title="Contact" className="" />
      </nav>

      {/* Logo */}
      <div className="text-2xl font-bold">
        <Logo />
      </div>

      {/* Secondary Navigation */}
      <nav className="flex items-center justify-center flex-wrap space-x-4">
        <motion.a
          href="/http://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 w-6 "
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>

        <motion.a
          href="/https://github.com/shubs2144"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />{" "}
        </motion.a>

        <motion.a
          href="/https://www.linkedin.com/in/shubham-patil-1a066b280/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >     
          <LinkedInIcon />{" "}
        </motion.a>

        {/* <motion.a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 w-6"
        >
       
          <NaukariIcon />{" "}
        </motion.a> */}

        <motion.a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >     
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
