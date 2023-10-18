/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Bottom from './bottom';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  },
};

const nextVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const liVariants = {
  hidden: {
    display: 'none',
    y: 30,
  },
  show: {
    display: 'block',
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 4,
    },
  },
};

function Base({ addBase, pizza }) {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          const spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={liVariants}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          ainmate="visible"
        >
          <Link to="/toppings">
            <Bottom text="Next" />
          </Link>
        </motion.div>
      )}

    </motion.div>
  );
}

export default Base;
