import React from 'react';
import './hero.scss';
import {motion } from 'framer-motion';
const textvarient ={
  initial:{
    x:-500, opacity:0
  },
  animate:{
    x:0,
   opacity:1,
   transition:{
    duration:1.2,
    staggerChildren:0.1,
   },
  },
  scrollbutton:{
     opacity:0,
     y:10,
     transition:{
      duration:2,
      repeat:Infinity,
     }
  }

}

export default function Hero() {
  return (
    <div className='hero'>
      <motion.div className='txtcontainer' variants={textvarient} initial="initial" animate="animate">
        <motion.h2 variants={textvarient}>ALEN YELDHO</motion.h2>
        <motion.h1 variants={textvarient}>Web developer and UI designer</motion.h1>
        <motion.div className='buttons' variants={textvarient}>
          <motion.button variants={textvarient}>See the Latest Works</motion.button>
          <motion.button variants={textvarient}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants={textvarient} src='/scroll.png' alt='scroll icon' animate="scrollbutton" />
      </motion.div>
      <div className='imgcontainer'>
        <img src='/hero.png' alt='hero image' />
      </div>
    </div>
  );
}
