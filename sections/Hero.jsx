'use client';

import React from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const layerRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      // const { clientX, clientY } = event;

      const mouseX = (window.innerWidth - event.pageX * 5) / 80;
      const mouseY = (window.innerHeight - event.pageY * 5) / 80;
      layerRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
  }, []);

  return (
    <section className={`${styles.yPaddings} sm:px-16 px-4`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.2)} className={`${styles.heroHeading} text-center cursor-scale`} ref={layerRef} style={{ animation: 'all 0.3s linear' }}>
            Hi guys, I'm <span className="text-gradient">Bang</span> 👋 <br className="md:block hidden" />
            a front-end developer who has a passion for ui/ux design
          </motion.h1>
        </div>

        {/* <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
