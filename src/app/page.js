import Image from "next/image";
import Layout from "./components/Layout";
import HomeProfilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <main className="flex items-center w-full min-h-screen text-[var(--color-dark)] ">
        <Layout className="pt-0">
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
                text="From Frontend to Backend, and Beyond with Automation."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium ">
              Results-driven Full Stack Developer skilled in building scalable applications and automating quality assurance. I turn complex concepts into user-friendly solutions. Explore my latest projects and articles, showcasing my expertise in Web development and Automation testing.
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
        <div className="absolute right-8 bottom-8 inline-block w-24 ">
          <Image
            src={LightBulb}
            alt="Shubham's Portfolio"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
