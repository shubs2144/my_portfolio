import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-[var(--color-dark)] font-medium text-lg">
      <Layout className="!py-8 !flex !items-center !justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With{" "}
          <span className="text-[var(--color-primary)] mx-1">&#9825;</span> by{" "}
          <Link href="/" className="text-[var(--color-dark)] font-bold px-1">
            @shubham
          </Link>
        </div>
        <div>
          <Link
            href="mailto:shubspatil17@gmail.com"
            target="_blank"
            className="text-[var(--color-dark)] text-2xl px-1 underline underline-offset-2 hover:text-[var(--color-primary)]"
          >
            Say hello
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
