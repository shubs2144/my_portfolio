import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between max-md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 , type: 'spring' }}>

        <h3 className='capitalize  text-2xl font-bold mb-2 max-md:text-xl max-sm:text-lg'>{position}&nbsp; <a href={companyLink}
          target='_blank '
          className='text-[var(--color-primary)] hover:text-[var(--color-dark)] font-bold capitalize text-2xl dark:text-[var(--color-primary-dark)] dark:hover:text-[var(--color-light)]'
        > @{company}</a></h3>
        <span className='capitalize font-medium text-[--var(--color-dark)]/75 dark:text-[var(--color-light)]/75 max-sm:text-sm'>
          {time} | {address}
        </span>
        <p className='w-full font-medium max-md:text-sm'>{work}</p>
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
    <div className='my-48 max-md:my-24'>
      <h2 className='text-8xl font-bold mb-32 text-center max-md:text-7xl max-sm:text-5xl max-xs:text-4xl max-md:mb-18'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative max-lg:w-[90%] max-md:w-full'>

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 left-9 w-[4px] h-full bg-[var(--color-dark)] origin-top dark:bg-[var(--color-light)] max-md:w-[2px] max-md:left-[30px] max-sm:left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 max-sm:ml-2'>
          <Details
            position="Jr. Software Engineer" company="Quad Technologies Ltd"
            companyLink=""
            time="2024 - Present" address=" Bengaluru, India"
            work="As a Junior Software Engineer at Quad Technologies Ltd, I developed scalable web applications using Next.js, TypeScript, and Node.js. I built automated testing frameworks with Playwright and Cucumber, achieving 85% code coverage and reducing manual testing by 70%. I also optimized deployment with CI/CD pipelines (GitHub Actions), containerized apps using Docker, and enhanced features with Genkit LLM for image generation, collaborating effectively in an agile team."
          />

          <Details
            position="Backend Developer" company="O(1) coding"
            companyLink=""
            time="2024 - 2024" address="Remote"
            work="I’ve worked as a Backend Engineer for over 6 months, building and maintaining scalable APIs using FastAPI, Node.js, and Express.js. I’ve implemented secure authentication systems (JWT/OAuth2), designed database schemas with PostgreSQL and MongoDB, and integrated CI/CD pipelines using GitHub Actions. I also wrote unit tests to ensure reliability and maintainability of backend services."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
