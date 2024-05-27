import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineJavaScript } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa6";
import { animate, motion } from 'framer-motion';

const Technologies = () => {

    const iconVariants = (duration) => ({
            initial: { y: -10},
            animate: {
                y: [10, -10],
                transition: {
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                    reapeatType: "reverse",
                },
            },

    })
   
  return (
    <div className=' border-b border-cyan-900 pb-24'>
            <motion.h1 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ duration: 1.5 }}
            className=' text-center text-4xl my-20'>Technologies</motion.h1>

            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0 , x: -100}}
            transition={{ duration: 1.5}}
            className=' flex flex-wrap gap-4 items-center justify-center'>


                    <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"

                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiReactjsLine className='text-3xl text-cyan-300'/>
                    </motion.div>

                    <motion.div 
                     variants={iconVariants(3)}
                     initial="initial"
                     animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <TbBrandNextjs className='text-3xl '/>
                    </motion.div>

                    <motion.div 
                     variants={iconVariants(5)}
                     initial="initial"
                     animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <AiOutlineJavaScript className='text-3xl text-yellow-300'/>
                    </motion.div>

                    <motion.div 
                     variants={iconVariants(7)}
                     initial="initial"
                     animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <RiTailwindCssFill className='text-3xl text-red-500'/>
                    </motion.div>

                    <motion.div
                     variants={iconVariants(5)}
                     initial="initial"
                     animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <IoLogoHtml5 className='text-3xl text-green-500'/>
                    </motion.div>

                    <motion.div
                     variants={iconVariants(6)}
                     initial="initial"
                     animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <FaCss3 className='text-3xl text-blue-800'/>
                    </motion.div>
            </motion.div>
    </div>
  )
}

export default Technologies