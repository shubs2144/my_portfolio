import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-[var(--color-dark)] font-medium text-lg dark:bg-[var(--color-dark)] dark:text-[var(--color-light)] dark:border-[var(--color-light)] max-sm:text-base">
      <Layout className="!py-8 !flex !items-center !justify-between max-lg:flex-col max-lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] text-2xl mx-1">&#9825;</span> by{" "}
          <Link href="/" className="text-[var(--color-dark)] font-bold px-1 dark:text-[var(--color-light)]">
            @Shubham
          </Link>
        </div>
        <div>
          <Link
            href="mailto:shubspatil17@gmail.com"
            target="_blank"
            className="text-[var(--color-dark)] text-2xl px-1 underline underline-offset-2 hover:text-[var(--color-primary)] dark:text-[var(--color-light)] dark:hover:text-[var(--color-primary)]"
          >
            Say hello
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
