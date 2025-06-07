'use client'

import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../components/Icons'
import img1 from '../../../public/images/projects/crypto-screener-cover-image.jpg'
import gigster from '../../../public/images/projects/gigster.png'
import portfolio from '../../../public/images/projects/portfolio-dark.png'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const ProjectTag = ({ tag }) => {
  return (
    <span className="inline-block px-2 py-1 mr-2 mb-2 text-sm font-medium rounded-lg bg-[var(--color-dark)] text-[var(--color-light)] dark:bg-[var(--color-light)] dark:text-[var(--color-dark)]">
      {tag}
    </span>
  )
}

const FeaturedProjects = ({ type, title, summary, img, link, githubLink, tags }) => {
  return (
    <article className="relative">
      <div className="flex items-center justify-between w-full p-12 bg-[var(--color-light)] shadow-2xl rounded-3xl border border-solid border-[var(--color-dark)] relative rounded-br-2xl z-10 dark:bg-[var(--color-dark)] dark:border-[var(--color-light)] max-lg:flex-col max-lg:p-8 max-sm:rounded-2xl max-sm:rounded-br-3xl max-sm:p-4">
        <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg dark:shadow-[var(--color-light)] max-lg:w-full">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="flex flex-col items-start justify-between w-1/2 pl-12 max-lg:pl-0 max-lg:pt-6 max-lg:w-full">
          <span className="text-xl mb-2 font-medium text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] max-sm:text-base">
            {type}
          </span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2 dark:text-[var(--color-light)]">
            <h2 className="my-2 text-4xl font-bold text-left hover:underline dark:text-[var(--color-light)] max-sm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 text-[var(--color-dark)] font-medium dark:text-[var(--color-light)] max-sm:text-sm">
            {summary}
          </p>
          <div className="flex flex-wrap my-2">
            {tags.map((tag, index) => (
              <ProjectTag key={index} tag={tag} />
            ))}
          </div>
          <div className='flex justify-between w-full mt-2'>
             <Link href={link} target="_blank" className="mt-2 text-2xl font-semibold text-[var(--color-dark)] underline rounded-lg dark:text-[var(--color-light)] transition-colors duration-300 ease-in-out max-sm:px-4 max-sm:text-base">
              View Project
            </Link>
            <Link href={githubLink} target="_blank" className="w-10">
              <GithubIcon />
            </Link>          
          </div>
        </div>
      </div>
      <div className="absolute -right-3 top-3 w-full h-full rounded-3xl bg-[var(--color-dark)] rounded-br-3xl dark:bg-[var(--color-light)] max-lg:-right-2 max-lg:top-2 max-sm:-right-2 max-sm:top-0 max-sm:h-[102%] max-sm:rounded-br-4xl" />
    </article>
  )
}

const Project = ({ title, type, link, githubLink, img, tags }) => {
  return (
    <article className="relative w-full">
      <div className='flex flex-col items-center justify-center p-6 mt-4 bg-[var(--color-light)] shadow-2xl rounded-3xl border border-solid border-[var(--color-dark)] relative z-10 rounded-br-2xl dark:bg-[var(--color-dark)] dark:border-[var(--color-light)] max-sm:p-4'>
        <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="flex flex-col items-start justify-between w-full">
          <span className="text-xl font-medium mt-4 text-[var(--color-primary)] dark:text-[var(--color-primary-dark)] max-lg:text-lg max-md:text-base">
            {type}
          </span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="mt-2 w-full text-3xl font-bold text-left hover:underline max-lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="flex flex-wrap my-2">
            {tags.map((tag, index) => (
              <ProjectTag key={index} tag={tag} />
            ))}
          </div>
          <div className='flex items-center justify-between w-full mt-2'>
            <Link href={link} target="_blank" className="text-lg font-semibold underline max-md:text-base">
              View
            </Link>
            <Link href={githubLink} target="_blank" className="w-10 max-md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-3 w-full h-full rounded-3xl bg-[var(--color-dark)] rounded-br-3xl dark:bg-[var(--color-light)] max-lg:left-2 max-lg:top-2 max-sm:-right-1 max-sm:top-1 max-sm:h-[102%] max-lg:w-[100%]" />
    </article>
  )
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample projects data with categories and tags
  const projectsData = [
    {
      id: 1,
      title: "GIGSTER - Freelance P",
      type: "Full Stack Project",
      summary: "Developed a full-stack freelancing platform using MERN stack with JWT authentication, Stripe payments, and Cloudinary integration that increased user engagement by 20%.",
      img: gigster,
      link: "https://gigster.netlify.app/",
      githubLink: "https://github.com/shubs2144/Gigster-front-end",
      category: "Full Stack",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      type: "Frontend Project",
      summary: "Built a modern, fully responsive portfolio using Next.js, Tailwind CSS, and Framer Motion animations to showcase projects with smooth, interactive UI/UX.",
      img: portfolio,
      link: "https://project-link2.com",
      githubLink: "https://github.com/shubs2144/my_portfolio",
      category: "Frontend",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 3,
      title: "REST API Service",
      type: "Backend Project",
      summary: "A scalable REST API service with authentication and database integration.",
      img: img1,
      link: "https://project-link3.com",
      githubLink: "",
      category: "Backend",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      type: "Frontend Project",
      summary: "Built a modern, fully responsive portfolio using Next.js, Tailwind CSS, and Framer Motion animations to showcase projects with smooth, interactive UI/UX.",
      img: portfolio,
      link: "https://project-link4.com",
      githubLink: "https://github.com/shubs2144/my_portfolio",
      category: "Frontend",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 5,
      title: "DevOps Pipeline",
      type: "DevOps Project",
      summary: "CI/CD pipeline implementation with automated deployment and monitoring.",
      img: img1,
      link: "https://project-link5.com",
      githubLink: "",
      category: "DevOps",
      tags: ["Docker", "Kubernetes", "GitHub Actions", "AWS"]
    },
    {
      id: 6,
      title: "UI Component Library",
      type: "Frontend Project",
      summary: "Reusable UI component library for consistent design across applications.",
      img: img1,
      link: "https://project-link6.com",
      githubLink: "",
      category: "Frontend",
      tags: ["React", "Storybook", "TypeScript", "Styled Components"]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  // Categories for filtering
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Testing', 'DevOps'];

  return (
    <>
      <Head>
        <title>Shubham | Projects Page</title>
        <meta name="description" content="This is the Project page" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center dark:text-[var(--color-light)] dark:bg-[var(--color-dark)]'>
        <Layout className="pt-10 dark:bg-[var(--color-dark)]">
          <AnimatedText text={"Witness My Development Journey"} className='mb-10 max-lg:!text-7xl max-sm:!text-6xl max-sm:mb-6' />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 max-sm:gap-2 max-sm:mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors max-sm:px-4 max-sm:text-sm ${activeCategory === category
                  ? 'bg-[var(--color-primary)] text-[var(--color-light)]'
                  : 'bg-[var(--color-light)] dark:bg-[var(--color-dark)] border border-[var(--color-dark)] dark:border-[var(--color-light)] hover:bg-[var(--color-dark)] hover:text-[var(--color-light)] dark:hover:bg-[var(--color-light)] dark:hover:text-[var(--color-dark)]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32 dark:bg-[var(--color-dark)] max-xl:gap-x-32 max-lg:gap-x-16 max-md:gap-y-24 max-sm:gap-x-0 max-sm:gap-y-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${index % 3 === 0 ? 'col-span-12' : 'col-span-6'
                  } max-sm:col-span-12`}
              >
                {index % 3 === 0 ? (
                  <FeaturedProjects
                    type={project.type}
                    title={project.title}
                    summary={project.summary}
                    img={project.img}
                    link={project.link}
                    githubLink={project.githubLink}
                    tags={project.tags}
                  />
                ) : (
                  <Project
                    type={project.type}
                    title={project.title}
                    link={project.link}
                    githubLink={project.githubLink}
                    img={project.img}
                    tags={project.tags}
                  />
                )}
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default page