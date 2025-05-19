import React from 'react'
import { motion , useScroll} from 'framer-motion'

const LiIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    );
    return (
        <figure className='absolute left-0 stroke-[var(--color-dark)] dark:stroke-[var(--color-light)]'>
            <svg className='-rotate-90 max-md:w-[60px] max-md:h-[60px] max-sm:w-[40px] max-sm:h-[40px]' width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20"
                    className='stroke-[var(--color-primary)] stroke-1 fill-none dark:stroke-[var(--color-primary-dark)]' />
                <motion.circle cx="75" cy="50" r="20"
                    className='stroke-[5px] fill-[var(--color-light)] dark:fill-[var(--color-dark)]'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10"
                    className='animate-pulse stroke-1 fill-[var(--color-primary)] dark:fill-[var(--color-primary-dark)]'
                />
            </svg>
        </figure>
    )
}


export default LiIcon
