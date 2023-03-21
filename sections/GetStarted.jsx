'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      {/* <motion.div
        variants={fadeIn('right', 'spring', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="border-[#888] border-2 rounded-[20px] overflow-hidden w-[90%]">
          <div className="border-black border-[8px]">
            <img
              src="/experience-1.png"
              alt="get-started"
              className="w-full h-auto object-contain rounded-[12px]"
            />
          </div>
        </div>
      </motion.div> */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Selected Project" />
        <TitleText title={<>Logistics Landing Page</>} />
        <div className="mt-[30px] flex flex-col max-w-[370px] gap-[24px]">
          <div className="flex flex-col">
            <div className="grid justify-center grid-cols-4 md:grid-cols-5 gap-y-[10px] md:gap-y-[20px] mb-[20px]">
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
                <img className="w-[52px] h-[52px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
                <img className="w-[52px] h-[52px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/next.svg" alt="" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="item flex flex-col items-center justify-around group">
                <img className="w-[52px] h-[52px] transition duration-300 group-hover:scale-110" src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/tailwindcss.svg" alt="" />
              </a>
            </div>
            <p className="flex-1 font-normal text-[18px] text-[#B0B0B0] leading-[32.4px] mb-[20px]">
              A landing page made with react, typescript, tailwind, nextjs with responsive for multi-device.
            </p>
            <div className="flex justify-center items-center w-[150px] h-[50px] bg-[#1876d2] hover:bg-[#2884e0] text-white rounded transition duration-300"><p className="text-[20px]">Live Demo</p></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
