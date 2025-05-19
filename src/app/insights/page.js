'use client'

import Head from 'next/head'
import React, { useRef } from 'react'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../../public/images/articles/pagination component in reactjs.jpg'
import article2 from '../../../public/images/articles/What is higher order component in React.jpg'
import article3 from '../../../public/images/articles/smooth scrolling in reactjs.png'  
import article4 from '../../../public/images/articles/todo list app built using react redux and framer motion.png'
import { motion, useMotionValue } from 'framer-motion'

const FreamerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block"
    x.set(event.pageX)
    y.set(-10)
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    
    <Link href={link} target="_blank" className='relative z-10' 

      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
>
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FreamerImage style={{ x:x, y:y }} ref={imgRef} src={img} alt={title} className='z-50 w-96 h-auto hidden absolute rounded-lg max-md:!hidden'/>
      </Link>
  )
}

const Article = ({ title, date, link, img }) => {
  return (
    <motion.li 
    initial={{ y: 200 }}
    whileInView={{ y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    viewport={{ once: true }}
    className='relative w-full flex items-center justify-between p-4 py-6 my-6 bg-[var(--color-light)] rounded-2xl border border-solid border-[var(--color-dark)] z-10 first:mt-0 border-r-4 border-b-4 dark:bg-[var(--color-dark)] dark:border-[var(--color-light)] max-sm:flex-col'> 
     <MovingImg title={title} img={img} link={link} />
      <span className='text-[var(--color-primary)] font-semibold pl-4 dark:text-[var(--color-primary-dark)] max-sm:self-start max-sm:pl-0 max-sm:text-sm'>{date}</span>
    </motion.li>
      )
}


const FeaturedArticles = ({ time, title, summary, img, link }) => {
  return (
    <li className='relative'>
    <div className='col-span-1 w-full p-4 bg-[var(--color-light)]  rounded-3xl border border-solid border-[var(--color-dark)] z-10 relative dark:bg-[var(--color-dark)] dark:border-[var(--color-light)]'>
      <Link href={link} target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FreamerImage src={img} alt={title} className="w-full h-auto" 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank"
        className="hover:underline underline-offset-2">
        <h2 className="capitalize my-2 mt-4 text-2xl font-bold hover:underline max-sm:text-lg">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">
        {summary}
      </p>
      <span className="font-semibold text-[var(--color-primary)] dark:text-[var(--color-primary-dark)]">
        {time}
      </span>
    </div>
    <div className="absolute -right-3 top-3 w-full h-full rounded-3xl bg-[var(--color-dark)] rounded-br-3xl dark:bg-[var(--color-light)]" />
    </li>
  )
}


const page = () => {
  return (
    <>
      <Head>
        <title>Shubham | Insights Page</title>
        <meta name="description" content="This is the Blogs and Articles page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className='w-full flex flex-col items-center justify-center overflow-hidden dark:text-[var(--color-light)] dark:bg-[var(--color-dark)]'>
        <Layout className="pt-16">
          <AnimatedText text="Insights" className="mb-14 max-lg:!text-7xl max-sm:!text-6xl max-sm:mb-8" />
          <ul className='grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 max-md:gap-y-16'>
            <FeaturedArticles
              time="10 min read"
              title="Article Title 1"
              summary="This is a brief description of the article. This is a brief description of the article."
              img={article1}
              link="/articles/article1"
            />
            <FeaturedArticles
              time="5 min read"
              title="Article Title 2"
              summary="This is a brief description of the article. This is a brief description of the article."
              img={article1}
              link="/articles/article2"
            />

          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
          <ul className=''>
            <Article
              title="Article Title 1"
              date="2023-10-01"
              link="/articles/article1"
              img={article2}
            />
            <Article
              title="Article Title 2"
              date="2023-10-02"
              link="/articles/article2"
              img={article3}
            />
            <Article
              title="Article Title 3"
              date="2023-10-03"
              link="/articles/article3"
              img={article3}
            />
            <Article
              title="Article Title 4"
              date="2023-10-04"
              link="/articles/article4"
              img={article4}
            />

            {/* last article is hiding behind the footer */}
            <Article
              title="Article Title 5"
              date="2023-10-05"
              link="/articles/article5"
              img={article2}
            />
            </ul>
        </Layout>
      </main>
    </>
  )
}

export default page
