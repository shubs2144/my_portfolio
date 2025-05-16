'use client';

import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import ProfilePic from "../../../public/images/profile/shubham-profile.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Timeline from '../components/Timeline';


const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
    type: "spring",
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[var(--color-dark)]"></div>
  return (
    <span ref={ref} className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
      {value}
    </span>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Shubham | About Page</title>
        <meta name="description" content="This is the about page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-[var(--color-light)] overflow-x-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Code smart. Test smarter!" className="mb-14 max-lg:!text-7xl max-sm:!text-6xl max-sm:mb-8" />
          <div className="grid grid-cols-8 gap-12 w-full max-sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start max-xl:col-span-4 max-md:order-2 max-md:col-span-8">
              <h2 className="text-lg font-bold mb-4 uppercase text-[var(--color-dark)]/75 dark:text-[var(--color-light)]/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Shubham Patil — As a results-driven Full Stack
                Developer, I specialize in building scalable web applications
                and ensuring quality with robust automation testing. With
                hands-on experience in both frontend and backend development, I
                excel at creating responsive interfaces, optimizing performance,
                and maintaining clean, maintainable code.
              </p>
              <p className="font-medium my-4">
                My expertise extends to test-driven development (TDD) and
                behavior-driven development (BDD), where I have successfully
                reduced production bugs by 40% and minimized manual testing time
                by 70%. I am also skilled in implementing CI/CD pipelines,
                automating workflows, and containerizing applications for
                consistent deployment.
              </p>
              <p className="font-medium">
                Passionate about problem-solving and committed to excellence, I
                thrive in agile environments, where I collaborate with
                cross-functional teams to deliver seamless, user-centric
                solutions.
              </p>
            </div>


            <div className="col-span-3 relative max-xl:col-span-4 max-md:order-1 max-md:col-span-8">
              <div className="relative h-full z-10 rounded-2xl border-2 border-solid border-[var(--color-dark)] bg-[var(--color-light)] p-8 dark:bg-[var(--color-dark)] dark:border-[var(--color-light)] ">
                <Image
                  src={ProfilePic}
                  alt="Shubham"
                  className="w-full h-full rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute top-0 -right-3 w-[102%] h-[102%] rounded-[2rem] bg-[var(--color-dark)] dark:bg-[var(--color-light)]" />
            </div>



            <div className="col-span-2 flex flex-col items-end justify-between max-xl:col-span-8 max-xl:flex-row max-xl:items-center max-md:order-3">
              <div className="flex flex-col items-end justify-center max-xl:items-center max-xl:text-center">
                <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl"><AnimatedNumber value={20} />+</span>
                <h2 className="text-xl font-medium capitalize text-[var(--color-dark)]/75 dark:text-[var(--color-light)]/75 max-xl:text-center max-md:text-lg max-sm:text-base max-xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center max-xl:items-center max-xl:text-center">
                <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl"><AnimatedNumber value={6} />+</span>
                <h2 className="text-xl font-medium capitalize text-[var(--color-dark)]/75 dark:text-[var(--color-light)]/75 max-xl:text-center max-md:text-lg max-sm:text-base max-xs:text-sm">
                  Months of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center max-xl:items-center max-xl:text-center">
                <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl"><AnimatedNumber value={20} />+</span>
                <h2 className="text-xl font-medium capitalize text-[var(--color-dark)]/75 dark:text-[var(--color-light)]/75 max-xl:text-center max-md:text-lg max-sm:text-base max-xs:text-sm">
                  Projects completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Timeline />
        </Layout>
      </main>
    </>
  );
};

export default page;
