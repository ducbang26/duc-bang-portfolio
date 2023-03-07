'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Skills = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| My Skills" textStyles="text-center" />
      <TitleText title={<>Technologies and languages that I use</>} textStyles="text-center" />
      <div className="grid justify-center grid-cols-4 md:grid-cols-5 gap-y-[10px] md:gap-y-[20px] mt-[50px]">
        <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg" alt="" />
          <p className="text-center text-secondary-white">HTML</p>
        </a>
        <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg" alt="" />
          <p className="text-center text-secondary-white">CSS</p>
        </a>
        <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" alt="" />
          <p className="text-center text-secondary-white">Javascript</p>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/typescript.svg" alt="" />
          <p className="text-center text-secondary-white">Typescript</p>
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/nodejs.svg" alt="" />
          <p className="text-center text-secondary-white">NodeJS</p>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
          <p className="text-center text-secondary-white">React</p>
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/next.svg" alt="" />
          <p className="text-center text-secondary-white">NextJS</p>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
          <p className="text-center text-secondary-white">TailwindCSS</p>
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/sass.svg" alt="" />
          <p className="text-center text-secondary-white">Sass</p>
        </a>
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
          <img className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/redux-action.svg" alt="" />
          <p className="text-center text-secondary-white">Redux</p>
        </a>
      </div>
    </motion.div>
  </section>
);

export default Skills;
