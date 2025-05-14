'use client'

import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import img1 from '../../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'

const FreamerImage = motion(Image)

const FeaturedProjects = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="relative">
      {/* Main content */}
      <div className="flex items-center justify-between w-full p-12 bg-[var(--color-light)] shadow-2xl rounded-3xl border border-solid border-[var(--color-dark)] relative rounded-br-2xl z-10 dark:bg-[var(--color-dark)] dark:border-[var(--color-light)]">
        <Link href={link} target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg dark:shadow-[var(--color-light)]"
        >
         <FreamerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        </Link>
        <div className="flex flex-col items-start justify-between w-1/2 pl-12">
          <span className="text-xl mb-2 font-medium text-[var(--color-primary)] dark:text-[var(--color-primary-dark)]">
            {type}
          </span>
          <Link href={link} target="_blank"
            className="hover:underline underline-offset-2 dark:text-[var(--color-light)]">
            <h2 className="my-2 text-4xl font-bold text-left hover:underline dark:text-[var(--color-light)]">
              {title}
            </h2>
          </Link>
          <p className="my-2 text-text-[var(--color-dark)] font-medium dark:text-[var(--color-light)]">
            {summary}
          </p>
          <div className='flex items-center w-full mt-2'>
            <Link href={githubLink} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link href={link} target="_blank" className="ml-4 px-6 p-2 text-lg font-semibold text-[var(--color-light)] bg-[var(--color-dark)] rounded-lg dark:bg-[var(--color-light)] dark:text-[var(--color-dark)] hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] transition-colors duration-300 ease-in-out">
              View Project
            </Link>
          </div>
        </div>
      </div>
      
      {/* 3D effect shadow - positioned outside the article */}
      <div className="absolute -right-3 top-3 w-full h-full rounded-3xl bg-[var(--color-dark)] rounded-br-3xl dark:bg-[var(--color-light)]" />
    </article>
  )
}

const Project = ({ title, type, link, githubLink, img }) => {
  return (
    <article className="relative w-full">

      <div className='flex flex-col items-center justify-center p-6 mt-4 bg-[var(--color-light)] shadow-2xl rounded-3xl border border-solid border-[var(--color-dark)] relative z-10 rounded-br-2xl dark:bg-[var(--color-dark)] dark:border-[var(--color-light)]'>

      <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
       <FreamerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full pl-6">
        <span className="text-xl font-medium mt-4 text-[var(--color-primary)] dark:text-[var(--color-primary-dark)]">
          {type}
        </span>
        <Link href={link} target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="mt-2 w-full text-3xl font-bold text-left hover:underline">
            {title}
          </h2>
        </Link>
        <div className='flex items-center justify-between w-full'>
          <Link href={link} target="_blank" className="text-lg font-semibold underline">
            View
          </Link>
          <Link href={githubLink} target="_blank" className="w-10 ">

            <GithubIcon />
          </Link>

        </div>
      </div>
      </div>
       <div className="absolute top-3 left-3 w-full h-full rounded-3xl bg-[var(--color-dark)] rounded-br-3xl dark:bg-[var(--color-light)]" />
    </article>
  )
}

const page = () => {
  return (
    <>
      <Head>
        <title>Shubham | Projects Page</title>
        <meta name="description" content="This is the Project page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className='w-full flex flex-col items-center justify-center  dark:text-[var(--color-light)] dark:bg-[var(--color-dark)]'>
        <Layout className="pt-16 dark:bg-[var(--color-dark)]">
          <AnimatedText text={"Projects"} className='mb-16' />
          <div className="grid grid-cols-12 gap-24 gap-y-32 dark:bg-[var(--color-dark)]">
            <div className="col-span-12">
              <FeaturedProjects

                type="Featured Project -1"
                title="Project Title 1"
                summary="This is a brief description of the project.This is a brief description of the project.This is a brief description of the project.This is a brief description of the project.This is a brief description of the project."
                img={img1}
                link="https://project-link1.com"
                githubLink=""
              />
            </div>
            <div className="col-span-6">
              <Project

                type="Featured Project -1"
                title="Project Title 1"
                summary="This is a brief description of the project."
                img={img1}
                link="https://project-link1.com"
                githubLink=""
              />

            </div>
            <div className="col-span-6">
              <Project

                type="Featured Project -1"
                title="Project Title 1"
                summary="This is a brief description of the project."
                img={img1}
                link="https://project-link1.com"
                githubLink=""
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects

                type="Featured Project -1"
                title="Project Title 1"
                summary="This is a brief description of the project."
                img={img1}
                link="https://project-link1.com"
                githubLink=""
              />


            </div>
            <div className="col-span-6">
              <Project

                type="Featured Project -1"
                title="Project Title 1"
                summary="This is a brief description of the project."
                img={img1}
                link="https://project-link1.com"
                githubLink=""
              />


            </div>
            <div className="col-span-6">
              <Project

                type="Featured Project -1"
                title="Project Title 1"
                summary="This is a brief description of the project."
                img={img1}
                link="https://project-link1.com"
                githubLink=""
              />

            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default page
