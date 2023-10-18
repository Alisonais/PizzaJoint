import { motion } from 'framer-motion';
import React from 'react';
import Svg from './Svg';

function Header() {
  const title = 'Pizza Joint';

  const h1Container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1 },
    },
  };

  const titleVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
      x: 30,
    },
    show: {
      display: 'inline-block',
      opacity: 1,
      x: 0,
      transition: {
        // type: 'tween',
        // ease: 'easeIn',
      },
    },
  };

  return (
    <header>
      <div className="logo">
        <Svg />
      </div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 60 }}
      >
        <motion.h1
          variants={h1Container}
          initial="hidden"
          animate="show"
        >
          {Array.from(title).map((letra, index) => (
            <motion.span
              variants={titleVariants}
              key={index}
            >
              {letra === ' ' ? '\u00A0' : letra}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </header>
  );
}

export default Header;
