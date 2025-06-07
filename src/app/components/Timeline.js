'use client';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
import { useRef } from 'react';

const TimelineItem = ({ year, title, description }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[73%] mx-auto flex flex-col items-start justify-between max-md:w-[80%]'>
      {/* Custom LiIcon with year */}
      <div className='absolute left-0 stroke-[var(--color-dark)] dark:stroke-[var(--color-light)] max-sm:-left-2 max-md:-left-1'>
        <figure className='flex items-center justify-center'>
          <svg className='-rotate- max-md:w-[70px] max-md:h-[70px] max-sm:w-[60px] max-sm:h-[60px]' width="75" height="75" viewBox="25 0 100 100">
            <circle cx="75" cy="50" r="45" className='stroke-[var(--color-primary)] stroke-1 fill-none dark:stroke-[var(--color-primary-dark)]' />
            <circle cx="75" cy="50" r="35" className='stroke-[5px] fill-[var(--color-light)] dark:fill-[var(--color-dark)]' />
            <circle cx="75" cy="50" r="25" className='animate-pulse stroke-0 fill-[var(--color-primary)] dark:fill-[var(--color-primary-dark)]' />
            <text 
              x="75" 
              y="50" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className=" text-xl font-bold fill-[var(--color-dark)] dark:fill-[var(--color-light)]"
            >
              {year}
            </text>
          </svg>
        </figure>
      </div>
      
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="ml-16"
      >
        <h3 className='capitalize text-2xl font-bold max-md:text-xl max-sm:text-lg'>{title}</h3>
        <p className='w-full font-medium mt-2 max-md:text-sm'>{description}</p>
      </motion.div>
    </li>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"]
  });

  const items = [
    {
      year: '2020',
      title: 'Started Engineering',
      description: 'Began my B.E. in Electronics and Communication Engineering at Jain College of Engineering'
    },
    {
      year: '2021',
      title: 'First Internship - IoT & Embedded Systems Internship',
      description: 'Completed hands-on internship, exploring hardware-software integration.'
    },
    {
      year: '2022',
      title: 'Web Development Journey',
      description: 'Started learning full-stack development with MERN stack and Earned Full Stack Development certification.'
    },
    {
      year: '2023',
      title: 'Full Stack Foundation',
      description: 'Started working with the MERN stack and completed a web development internship at Aqumez Technologies.'
    },
    {
      year: '2024',
      title: 'Professional Developer',
      description: 'Joined Quad Technologies as a Junior Software Engineer, contributing to full stack projects and automation testing.'
    },
     {
      year: '2025',
      title: 'Expanding Skills',
      description: 'Advancing in software development with Next.js, TypeScript, CI/CD, and Playwright-based automation.'
    }
  ];

  return (
    <div className='my-48 max-md:my-24'>
      <h2 className='text-8xl font-bold mb-32 text-center max-md:text-7xl max-sm:text-5xl max-xs:text-4xl max-md:mb-18'>My Journey</h2>
      <div ref={ref} className='w-[75%] mx-auto relative max-lg:w-[90%] max-md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 left-9 w-[4px] h-full bg-[var(--color-dark)] origin-top dark:bg-[var(--color-light)] max-md:w-[2px] max-md:left-[30px] max-sm:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 max-sm:ml-2'>
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;