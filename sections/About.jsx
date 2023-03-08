'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <div className="w-[180px] h-[180px] rounded-full my-8">
        <img src="duc-bang-avt.jpg" alt="portfolio-avt" className="w-full h-full rounded-full" />
      </div>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white cursor-scale"
      >
        <span className="font-extrabold text-white">Front-end developer with 1+ years of experience </span> used to work for Unigwork, PSA Solutions, <span className="font-extrabold text-white">and</span> teaching assistant at Kmin Academy. I love to explore creative things about <span className="font-extrabold text-white">UI design, </span> and <span className="font-extrabold text-white"> Front-end stuff</span> which drives a desire to accomplish great things in a career. Scrolling down to find out more about me!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        style={{ animation: 'bounce 2s infinite' }}
      />
    </motion.div>
  </section>
);

export default About;
