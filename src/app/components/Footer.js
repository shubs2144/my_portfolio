import Link from "next/link";
import React from "react";
import Layout from "./Layout";

// Update Footer.js
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-[var(--color-dark)] font-medium text-lg dark:bg-[var(--color-dark)] dark:text-[var(--color-light)] dark:border-[var(--color-light)] max-sm:text-base">
      <Layout className="!py-8 !flex !items-center !justify-between max-lg:flex-col max-lg:py-6">
        <div className="flex flex-col">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <span className="text-sm mt-2">Made with Next.js, Tailwind CSS & more...</span>
        </div>
        <div className="flex items-center max-lg:py-2">
          <span className="mr-2">Connect:</span>
          <a href="https://github.com/shubs2144" className="mx-1 hover:underline">GitHub</a>
          <span>•</span>
          <a href="https://linkedin.com/in/yourprofile" className="mx-1 hover:underline">LinkedIn</a>
          <span>•</span>
          <a href="mailto:shubspatil17@gmail.com" className="mx-1 hover:underline">Gmail</a>
        </div>
        <div>
          <Link
            href="mailto:shubspatil17@gmail.com"
            target="_blank"
            className="text-[var(--color-dark)] text-2xl px-1 underline underline-offset-2 dark:text-[var(--color-light)] dark:hover:text-[var(--color-primary)]"
          >
            Say hello
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
