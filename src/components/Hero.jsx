import React from 'react';
import {HERO_CONTENT} from '../constants';
import profile from '../assets/kevinRushProfile.png';
import { motion } from 'framer-motion';

const Hero = () => {

  const container = (delay) => ({
      hidden: { x: -100, opacity: 0},
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},
      },
  });

  return (
    <div className=' border-b border-cyan-900 pb-4 lg:mb-35'>
          <div className=' flex flex-wrap'>

                  <div className=' w-full lg:w-1/2'>
                    <div className=' flex flex-col items-center lg:items-start'>
                        <motion.h2 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className=' text-6xl font-thin tracking-tighter lg:text-8xl lg:mt-16 pb-16 mt-8'>Ahmed Raza</motion.h2>

                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className=' bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tighter'>Full Stack Web Developer</motion.span>

                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className=' my-4 max-w-xl font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                    </div>
              </div>

                <div className=' w-full lg:w-1/2 lg:p-8'>
                        <div className=' flex justify-center'>
                              <motion.img
                              initial={{ x:100, opacity: 0}}
                              animate={{ x: 0, opacity: 1}}
                              transition={{ duration: 0.5, delay: 1.2}}
                              
                              className=" w-[450px]" src={profile} alt="profile" />
                        </div>
                </div>

          </div>
    </div>
  )
}

export default Hero
