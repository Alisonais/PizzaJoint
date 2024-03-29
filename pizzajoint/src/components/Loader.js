import { motion, useCycle } from 'framer-motion';
import React from "react";

const loaderVariants = {
  animationOne: {
    x: [-20, 20,],
    y: [10, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      },
    }
  },
  animationTwo: {
    y: [10, -30],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
      duration: 0.25,
      ease: 'easeOut'
      }
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      >
      </motion.div>
      <div
      style={{cursor: 'pointer'}}
        onClick={() => cycleAnimation()}
      >change loader</div>
    </>
  );
};

export default Loader;
