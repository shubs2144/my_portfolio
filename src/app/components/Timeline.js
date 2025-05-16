'use client';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
import { useRef } from 'react';

const TimelineItem = ({ year, title, description }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[73%] mx-auto flex flex-col items-start justify-between'>
      {/* Custom LiIcon with year */}
      <div className='absolute left-0 stroke-[var(--color-dark)] dark:stroke-[var(--color-light)]'>
        <figure className='flex items-center justify-center'>
          <svg className='-rotate-' width="75" height="75" viewBox="25 0 100 100">
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
        <h3 className='capitalize text-2xl font-bold'>{title}</h3>
        <p className='w-full font-medium mt-2'>{description}</p>
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
      year: '2022',
      title: 'First Internship',
      description: 'Completed internship in IoT and Embedded Systems'
    },
    {
      year: '2023',
      title: 'Web Development Journey',
      description: 'Started learning full-stack development with MERN stack'
    },
    {
      year: '2024',
      title: 'Professional Developer',
      description: 'Joined Quad Technologies as Junior Software Engineer'
    },
    {
      year: 'Now',
      title: 'Expanding Skills',
      description: 'Working with Next.js, TypeScript, and advanced testing frameworks'
    }
  ];

  return (
    <div className='my-48'>
      <h2 className='text-8xl font-bold mb-32 text-center'>My Journey</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute top-0 left-9 w-[4px] h-full bg-[var(--color-dark)] origin-top dark:bg-[var(--color-light)]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
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