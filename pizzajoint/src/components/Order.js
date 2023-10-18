/* eslint-disable react/prop-types */
import { motion, } from 'framer-motion';
import React, { useEffect } from 'react';

function Order({ pizza, setShowModal }) {

  useEffect(() => {
    setTimeout(() => {
      console.log('certo');
    }, 4000);



  }, [setShowModal])

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
        mass: 0.4,
        damping: 8,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const childVariant2 = {
    ...childVariant,
    hidden: {
      ...childVariant.hidden,
    },
    visible: {
      ...childVariant.visible,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 7,
      },
    },


  };


  console.log(childVariant2)

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={childVariant}
      >
        You ordered a
        {pizza.base}
        {' '}
        pizza with:
      </motion.p>
      <motion.div
        variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <motion.div
            variants={childVariant2}
            key={topping}
          >
            {topping}
          </motion.div>))}
      </motion.div>
    </motion.div>
  );
}

export default Order;
