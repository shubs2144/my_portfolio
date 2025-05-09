import Head from "next/head";
import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import ProfilePic from "../../../public/images/profile/shubham-profile.jpg";

const page = () => {
  return (
    <>
      <Head>
        <title>Shubham | About Page</title>
        <meta name="description" content="This is the about page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="w-full flex flex-col items-center justify-center ">
        <Layout className="pt-16">
          <AnimatedText text="Code smart. Test smarter!" className="mb-14" />
          <div className="grid grid-cols-8 gap-16 w-full">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="text-lg font-bold mb-4 uppercase text-[var(--color-dark)]/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Shubham Patil — As a results-driven Full Stack
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

            <div className="col-span-3 relative h-max flex flex-col rounded-2xl border-2 border-solid border-[var(--color-dark)] bg-[var(--color-light)] p-8 items-start justify-start">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[var(--color-dark)]"></div>
              <Image
                src={ProfilePic}
                alt="Shubham"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">20+</span>
                <h2 className="text-xl font-medium capitalize text-[var(--color-dark)]/75">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">0.6+</span>
                <h2 className="text-xl font-medium capitalize text-[var(--color-dark)]/75">
                  years of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">50+</span>
                <h2 className="text-xl font-medium capitalize text-[var(--color-dark)]/75">
                  Projects completed
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
