import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Bottom from './bottom';

function Home() {

const containerVariants = {
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 4
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

  return (
    <motion.div
    className='home container'
    variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit= "exit"
    >
      <h2> Welcome to Pizza Joint </h2>
      <Link to="/base">
        <Bottom text="Create Your Pizza" />
      </Link>
      <Loader />
    </motion.div>
  );
}

export default Home;
