'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/logo-dark.svg"
        alt="logo"
        className="w-[52px] h-[52px] object-contain"
      />
      <a href="NguyenDucBang_Frontend.pdf" download>
        <div
          className={`${styles.flexCenter} w-[150px] h-[50px] border-slate-400 border`}
        >
          <p className="text-[20px] text-white text-center">
            My Resume
          </p>
        </div>
      </a>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[52px] h-[52px] object-contain"
      /> */}
    </div>
  </motion.nav>
);

export default Navbar;
