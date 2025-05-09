import Image from "next/image";
import Layout from "./components/Layout";
import HomeProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";

export default function Home() {
  return (
    <>
      <main className="flex items-center w-full min-h-screen text-[var(--color-dark)] ">
        <Layout className="pt-0 md:pt-16 sm:pt-8 xs:pt-4">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 ">
              <Image
                src={HomeProfilePic}
                alt="Shubham's Portfolio"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center pl-8">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs xs:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Shubham_FullStack_Developer_2025.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center px-6 py-2 text-lg font-semibold text-center text-[var(--color-light)] bg-[var(--color-dark)] rounded-lg hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] border-2 border-solid  border-transparent hover:border-[var(--color-dark)] transition-all duration-300 ease-in-out"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:shubspatil17@gmail.com"
                  target="_blank"
                  className="px-6 py-2 ml-4 text-lg font-semibold text-center text-[var(--color-light)] bg-[var(--color-dark)] rounded-lg hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] border-2 border-solid border-[var(--color-dark)]  border-transparent hover:border-[var(--color-dark)] transition-all duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

          <HireMe />
      </main>
    </>
  );
}
