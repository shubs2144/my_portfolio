import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 , type: 'spring' }}>

        <h3 className='capitalize  text-2xl font-bold mb-2'>{position}&nbsp; <a href={companyLink}
          target='_blank '
          className='text-[var(--color-primary)] hover:text-[var(--color-dark)] font-bold capitalize text-2xl dark:text-[var(--color-primary-dark)] dark:hover:text-[var(--color-light)]'
        > @{company}</a></h3>
        <span className='capitalize font-medium text-[--var(--color-dark)]/75 dark:text-[var(--color-light)]/75'>
          {time} | {address}
        </span>
        <p className='w-full font-medium'>{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center"]
    }
  );

  return (
    <div className='my-48'>
      <h2 className='text-8xl font-bold mb-32 text-center '>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 left-9 w-[4px] h-full bg-[var(--color-dark)] origin-top dark:bg-[var(--color-light)]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position="Jr. Software Engineer" company="Quad Technologies Ltd"
            companyLink="https://quadtechnologies.in/"
            time="2024 - Present" address=" Bengaluru, India"
            work="As a Junior Software Engineer at Quad Technologies Ltd, I developed scalable web applications using Next.js, TypeScript, and Node.js. I built automated testing frameworks with Playwright and Cucumber, achieving 85% code coverage and reducing manual testing by 70%. I also optimized deployment with CI/CD pipelines (GitHub Actions), containerized apps using Docker, and enhanced features with Genkit LLM for image generation, collaborating effectively in an agile team."
          />

          <Details
            position="Jr. Software Engineer" company="Quad Technologies Ltd"
            companyLink="https://quadtechnologies.in/"
            time="2024 - Present" address=" Bengaluru, India"
            work="As a Junior Software Engineer at Quad Technologies Ltd, I developed scalable web applications using Next.js, TypeScript, and Node.js. I built automated testing frameworks with Playwright and Cucumber, achieving 85% code coverage and reducing manual testing by 70%. I also optimized deployment with CI/CD pipelines (GitHub Actions), containerized apps using Docker, and enhanced features with Genkit LLM for image generation, collaborating effectively in an agile team."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
