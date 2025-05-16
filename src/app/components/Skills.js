import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="rounded-full flex items-center justify-center flex-wrap py-3 px-6 font-semibold bg-[var(--color-dark)]/90 text-[var(--color-light)] shadow-[var(--color-dark)] cursor-pointer absolute dark:bg-[var(--color-light)]/90 dark:text-[var(--color-dark)] dark:shadow-[var(--color-light)] max-lg:py-2 max-lg:px-4 max-md:text-sm max-md:py-1 max-md:px-2 max-sm:bg-transparent max-sm:dark:bg-transparent max-sm:dark:text-[var(--color-light)] max-sm:text-[var(--color-dark)] max-sm:font-bold max-sm:m-4 max-sm:p-4 max-md:p-4"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, }}
      transition={{ duration: 3, type: "spring" }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-48 text-center max-md:text-7xl max-sm:text-5xl max-xs:text-4xl max-md:mt-24">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular-light max-lg:h-[70vh] max-sm:h-[50vh] max-lg:bg-circular-lightLg max-lg:bg-circular-darkLg max-md:bg-circular-lightMd max-md:bg-circular-darkMd max-sm:bg-circular-lightSm max-sm:bg-circular-darkSm">
        <motion.div
          className=" rounded-full flex items-center justify-center flex-wrap p-6 font-semibold bg-[var(--color-dark)]/90 text-[var(--color-light)] shadow-[var(--color-dark)] cursor-pointer absolute dark:bg-[var(--color-light)]/90 dark:text-[var(--color-dark)] max-lg:p-6 max-md:p-4 max-sm:text-xs max-sm:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML5" x="0vw" y="7vw" />
        <Skill name="CSS" x="10vw" y="-5vw" />
        <Skill name="JavaScript" x="18vw" y="-12vw" />
        <Skill name="React" x="20vw" y="0vw" />
        <Skill name="NextJS" x="18vw" y="10vw" />
        <Skill name="NodeJS" x="15vw" y="18vw" />
        <Skill name="ExpressJS" x="0vw" y="20vw" />
        <Skill name="MongoDB" x="-15vw" y="18vw" />
        <Skill name="PostgreSQL" x="-20vw" y="0vw" />
        <Skill name="TailwindCSS" x="-13vw" y="-5vw" />
        <Skill name="Python" x="0vw" y="-7vw" />
        <Skill name="FastAPI" x="-15vw" y="-12vw" />
        <Skill name="Git" x="-0vw" y="-15vw" />
        <Skill name="GitHub" x="0vw" y="-20vw" />
        <Skill name="Postgres" x="25vw" y="-5vw" />
        <Skill name="REST APIs" x="10vw" y="5vw" />
        <Skill name="JWT Authentication" x="0vw" y="15vw" />
        <Skill name="AOAuth2" x="-18vw" y="10vw" />
        <Skill name="Canva" x="-10vw" y="5vw" />
        <Skill name="Jira" x="27vw" y="10vw" />
        <Skill name="WebSockets" x="-27vw" y="-10vw" />
        <Skill name="C++" x="-27vw" y="15vw" />
        <Skill name="SQL" x="27vw" y="5vw" />
        <Skill name="Context API" x="15vw" y="-20vw" />
        <Skill name="VS Code" x="-15vw" y="-20vw" />
        <Skill name="Postman" x="30vw" y="-15vw" />
        <Skill name="SQLAlchemy" x="-30vw" y="7vw" />
        <Skill name="Playwright" x="-35vw" y="0vw" />
        <Skill name="Vitest" x="36vw" y="-5vw" />
        <Skill name="Cucumber" x="35vw" y="5vw" />
        <Skill name="CI/CD" x="-30vw" y="-17vw" />

      </div>
    </>
  );
};

export default Skills;
