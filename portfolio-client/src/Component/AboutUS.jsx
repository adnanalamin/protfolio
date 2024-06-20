import image from '../assets/myphoto.png'
import { motion } from "framer-motion";
const AboutUS = () => {
  return (
    <div id='about' className="bg-[#170550]">
      <div className="lg:max-w-7xl lg:mx-auto pb-28">
        <div className="w-full text-center pt-16">
          <h2 className="font-ex2 font-semibold text-white text-[40px]">
            About <span className="text-[#F86F03]">Me</span>
          </h2>
          <hr className="w-56 bg-[#D9D9D9] mx-auto" />
        </div>
        <div className="sm:flex items-center max-w-screen-xl mt-20">
          <motion.div 
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: 0
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }} className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
              <img src={image} className='h-[410px] w-[360px] object-cover rounded-2xl'/>
            </div>
          </motion.div>
          <motion.div initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: -50
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1 // Animation duration
        }
      }}
      viewport={{ once: true }} className="sm:w-1/2">
            <div className="text">
              <h2 className="font-ex2 font-semibold  text-3xl text-white">
                Frontend Web Developer
              </h2>
              <p className="text-white text-lg font-semibold font-ex2 mt-8">
              My name is Al Amin, and I am a MERN Stack Web Developer specializing in building robust and scalable web applications. I have expertise in MongoDB, Express.js, React, and Node.js, allowing me to develop full-stack solutions that offer seamless user experiences and efficient backend operations. My skill set includes creating dynamic, responsive interfaces with React, building RESTful APIs with Node.js and Express.js, and managing databases with MongoDB. I am dedicated to continuous learning and staying updated with the latest industry trends, ensuring that my projects are innovative, efficient, and meet the highest standards of quality.
              </p>
              
              <button className="text-[#461959] bg-white py-2 mt-16 font-ex2 text-lg font-semibold px-8 rounded-3xl">Read More</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
