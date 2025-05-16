"use client";

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, LinkedInIcon, MoonIcon, NaukariIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import Chatbot from "./Chatbot";

const CustomLink = ({ href, title, className }) => {
  const pathname = usePathname(); // Get current path
  const isActive = pathname === href;

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-[var(--color-dark)] absolute left-0 -bottom-0.5 transition-[width] duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
          } dark:bg-[var(--color-light)]`}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const pathname = usePathname(); // Get current path
  const router = useRouter(); // Get router instance
  const isActive = pathname === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button href={href} className={`${className} relative group text-[var(--color-light)] dark:text-[var(--color-dark)] my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] inline-block bg-[var(--color-light)] absolute left-0 -bottom-0.5 transition-[width] duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        } dark:bg-[var(--color-dark)]`}
      ></span>
    </button>
  );
};


const NavBar = () => {

  const { theme, setTheme } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full flex items-center justify-between px-32 py-10 font-medium dark:bg-[var(--color-dark)] dark:text-[var(--color-light)] relative z-10 max-lg:px-16 max-md:px-12 max-sm:px-8">

      <button className="flex-col items-center justify-center hover:cursor-pointer hidden max-lg:flex" onClick={handleClick}  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}>
        <span className={`bg-[var(--color-dark)] dark:bg-[var(--color-light)] transition-all duration-300 ease-out w-6 h-0.5 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-[var(--color-dark)] dark:bg-[var(--color-light)] transition-all duration-300 ease-out w-6 h-0.5 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-[var(--color-dark)] dark:bg-[var(--color-light)] transition-all duration-300 ease-out w-6 h-0.5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>


      <div className="w-full flex justify-between items-center max-lg:hidden">
        {/* Primary Navigation */}
        <nav className="flex items-center space-x-4 pl-4 text-lg">
          <CustomLink href="/" title="Home" className="" />
          <CustomLink href="/about" title="About" className="" />
          <CustomLink href="/projects" title="Projects" className="" />
          <CustomLink href="/insights" title="Insights" className="" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap space-x-4">
          <motion.a
            href="/https://x.com/ShubhamPat77625"
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
          ></motion.a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${theme === "light" ? "bg-[var(--color-dark)] text-[var(--color-light)]" : "bg-[var(--color-light)] text-[var(--color-dark)]"}
          `}
          >
            {
              theme === "light" ?
                <SunIcon className={"fill-[var(--color-dark)]"} /> :
                <MoonIcon className={"fill-[var(--color-dark)]"} />
            }
          </button>


        </nav>
      </div>

      {
        isOpen ?
        <motion.div 
        initial = {{scale:0, opacity:0}}
        animate = {{scale:1, opacity:1}}
        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[var(--color-dark)]/90 dark:bg-[var(--color-light)]/75 rounded-lg backdrop-blur-md py-32">
        {/* Primary Navigation */}
        <nav className="flex items-center justify-center flex-col">
          <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className="" toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
          <CustomMobileLink href="/insights" title="Insights" className="" toggle={handleClick} />
        </nav>

        <nav className="flex items-center justify-center flex-wrap space-x-4 mt-2">
          <motion.a
            href="/https://x.com/ShubhamPat77625"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 w-6 max-sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="/https://github.com/shubs2144"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 w-6 bg-[var(--color-light)] dark:bg-[var(--color-dark)] rounded-full max-sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />{" "}
          </motion.a>

          <motion.a
            href="/https://www.linkedin.com/in/shubham-patil-1a066b280/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 w-6 max-sm:mx-1"
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
            className="hover:text-blue-500 w-6 max-sm:mx-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          ></motion.a>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${theme === "light" ? "bg-[var(--color-dark)] text-[var(--color-light)]" : "bg-[var(--color-light)] text-[var(--color-dark)]"}
          `}
          >
            {
              theme === "light" ?
                <SunIcon className={"fill-[var(--color-dark)]"} /> :
                <MoonIcon className={"fill-[var(--color-dark)]"} />
            }
          </button>


        </nav>
      </motion.div>
        : null
      }

      {/* Logo */}
      {/* <div className="absolute left-[50%] top-4 translate-x-[-50%] text-2xl font-bold ">
        <Logo />
      </div> */}

      {/* <div className="absolute left-[50%] top-4 translate-x-[-50%] text-2xl font-bold "> */}
        <Chatbot />
      {/* </div> */}


      {/* Secondary Navigation */}

    </header>
  );
};

export default NavBar;
