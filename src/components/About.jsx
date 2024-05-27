import about from '../assets/about.jpg';
import { ABOUT_TEXT} from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
   <div className=" border-b border-cyan-900  pb-4">
        <h1 className=" text-center my-4 text-4xl">
            About
            <span className=" text-neutral-500"> Me</span>
        </h1>

        <div  className=" flex flex-wrap">
                <motion.div className=" w-full lg:w-1/2 lg:p-8"
                 whileInView={{ x: 0, opacity: 1}}
                 initial={{ x:-100, opacity:0 }}
                 transition={{ duration: 0.5}}
                >
                    <div className=" flex items-center justify-center">
                        
                            <img className=' rounded-2xl' src={about} alt="about" />
                    
                    </div>
                    </motion.div>

                    <motion.div className=" w-full lg:w-1/2 p-8" 
                     whileInView={{ x: 0, opacity: 1}}
                    initial={{ x:100, opacity:0 }}
                    transition={{ duration: 0.5}}>
                    <div className=" flex justify-center lg:justify-start">
                        <p className=' lg:my-14 max-w-xl'>{ABOUT_TEXT}</p>
                    </div>

                </motion.div>
        
        </div>
   </div>
  )
}

export default About