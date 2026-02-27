
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ><div className='flex items-center justify-center'>
            <img src="./images/ai.png" alt="" className="w-48 md:w-auto" loading="lazy" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Welcome to National Level Technical Symposium <br /> <span className='font-bold'>Department of Artificial Intelligence & Data Science</span><br />
            Join us for an immersive experience of innovation, learning, and networking. <br /><p className='font-bold '>LAST DATE OF REGISTRATION <span className=' font-[cursive] '>- March 10</span></p>
          </p>


        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 bg-white bg-opacity-90 backdrop-blur-sm px-4 md:px-5 py-2 rounded-full shadow-lg border border-white/20">
            <Calendar className="text-indigo-700 w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-black text-xs md:text-base">March 13, 2026</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white bg-opacity-90 backdrop-blur-sm px-4 md:px-5 py-2 rounded-full shadow-lg border border-white/20">
            <MapPin className="text-indigo-700 w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-black text-xs md:text-base">MAHENDRA ENGINEERING COLLEGE (Autonomous), MEC</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white bg-opacity-90 backdrop-blur-sm px-4 md:px-5 py-2 rounded-full shadow-lg border border-white/20">
            <Users className="text-indigo-700 w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold text-black text-xs md:text-base">300+ Participants</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#events" className="btn btn-primary">
            Explore Events
          </a>
          <a href="#about" className="btn bg-white text-indigo-600 hover:bg-gray-100">
            Learn More
          </a>
        </motion.div>

        <Countdown />
      </div>
    </div>
  );
};

export default Hero;