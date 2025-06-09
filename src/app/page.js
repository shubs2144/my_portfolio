import Image from "next/image";
import Layout from "./components/Layout";
import HomeProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Head from "next/head";
import Chatbot from '../app/components/Chatbot';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shubham Patil | Full Stack Developer</title>
        <meta
          name="description"
          content="Shubham Patil's Portfolio - Full Stack Developer"
        />
      </Head>

      <main className="flex items-center w-full min-h-screen text-[var(--color-dark)] dark:text-[var(--color-light)] dark:bg-[var(--color-dark)] ">
        <Layout className="pt-0 max-md:pt-16 max-sm:pt-8 dark:bg-[var(--color-dark)]">
          <div className="flex items-center justify-between w-full max-lg:flex-col">
            <div className="w-1/2 max-md:w-full">
              <Image
                src={HomeProfilePic}
                alt="Shubham's Portfolio"
                className="w-full h-auto max-lg:hidden max-md:inline-block max-md:full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-start justify-center pl-8 max-lg:pl-0 max-lg:w-full max-lg:text-center">
              <AnimatedText
                text="From Frontend to Backend, and Beyond with Automation."
                className="!text-6xl !text-left max-xl:!text-5xl max-lg:!text-center max-lg:!text-6xl max-md:!text-5xl max-sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium max-md:text-sm max-sm:text-xs">
                Results-driven Full Stack Developer skilled in building scalable applications and automating quality assurance. I turn complex concepts into user-friendly solutions. Explore my latest projects and articles, showcasing my expertise in Web development and Automation testing.
              </p>
              <div className="flex items-center self-start mt-2 max-lg:self-center">
                <Link
                  href="/Shubham_FullStack_Developer_2025.pdf"
                  target="_blank"
                  download={true}
                  className="flex items-center px-6 py-2 text-lg font-semibold text-center text-[var(--color-light)] bg-[var(--color-dark)] rounded-lg hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] border-2 border-solid  border-transparent hover:border-[var(--color-dark)] transition-all duration-300 ease-in-out dark:bg-[var(--color-light)] dark:text-[var(--color-dark)] hover:dark:bg-[var(--color-dark)] dark:hover:text-[var(--color-light)] dark:border-[var(--color-dark)] dark:hover:border-[var(--color-light)] max-md:p-2 max-md:px-4 max-md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:shubspatil17@gmail.com"
                  target="_blank"
                  className="px-6 py-2 ml-4 text-lg font-semibold text-center text-[var(--color-light)] bg-[var(--color-dark)] rounded-lg hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] border-2 border-solid border-[var(--color-dark)]  border-transparent hover:border-[var(--color-dark)] transition-all duration-300 ease-in-out dark:text-[var(--color-dark)] dark:bg-[var(--color-light)] dark:border-[var(--color-light)] hover:dark:bg-[var(--color-dark)] dark:hover:text-[var(--color-light)] dark:hover:border-[var(--color-light)] max-md:p-2 max-md:px-4 max-md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 max-md:hidden">
          <Image
            src={LightBulb}
            alt="Shubham's Portfolio"
            className="w-full h-auto"
          />
        </div>
      </main>
      <div className="absolute right-8 bottom-72 inline-block w-24 max-md:hidden">
          <Chatbot />
      </div>
      
      {/* <div className="absolute right-20 top-1/4 w-64 h-64 max-lg:hidden">
        <TechSphere />
      </div> */}
    </>
  );
}
