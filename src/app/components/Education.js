import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {

    const ref = useRef(null);

    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}>
            <h3 className='capitalize  text-2xl font-bold'>{type}</h3>
            <span className='capitalize font-medium text-[--var(--color-dark)]/75 dark:text-[var(--color-light)]/75'>
                {time} | {info}
            </span>
            <p className='w-full font-medium'>{place}</p>
        </motion.div>
    </li>
    )
}

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-48'>
            <h2 className='text-8xl font-bold mb-32 text-center '>Education</h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute top-0 left-9 w-[4px] h-full bg-[var(--color-dark)] origin-top dark:bg-[var(--color-light)]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        type="High School "
                        time="2017-2018 "
                        place="10th - Belgavi, Karnataka, India."
                        info="Government Higher Secondary School."
                    />

                    <Details
                        type="PUC"
                        time="2018-2020"
                        place="12th - Belgavi, Karnataka, India."
                        info="KLE GI Bagewadi PU College."
                    />

                    <Details
                        type="Bachelor of Engineering"
                        time="2020-2024"
                        place="Electronics and Communication Engineering - Belgavi, Karnataka, India."
                        info="Jain College of Engineering."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education;
