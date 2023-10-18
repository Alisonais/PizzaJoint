import { motion } from 'framer-motion';
import React from 'react';

const Bottom = ({ text }) => {

  const BottonVariants = {
    hover: {
      scale: 1.1,
      textShadow: '0px 0px 8px rgb(255,255,255)',
      boxShadow: '0px 0px 8px rgb(255,255,255)',
      transition: {
        duration: 1,
        yoyo: Infinity,
      }
    }
  }

  return (
    <motion.button
      variants={BottonVariants}
      whileHover='hover'
    >
      {text}
    </motion.button>
  )
}

export default Bottom;
