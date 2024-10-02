
'use client'
import { motion, useTransform, useScroll } from 'framer-motion'
import Link from 'next/link'
//import logo from '../../../public/images/diary_ai_2-removebg-preview.png'
//import Image from 'next/image'

export function HeroSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <header className="container mx-auto h-[70vh]  content-center px-4 sm:px-6 lg:px-8 py-5 pt-20 text-center relative">
      <motion.div style={{ opacity, scale }}>
      
      {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
      <Image
            src={logo} // Path to the logo image in the public folder
            alt="Logo"
            width={250} // Set the width of the image
            height={250} // Set the height of the image
            className=" text-purple-400 p-1" // Optional class names for styling
          />
          </motion.div> */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your AI-Powered Journal Companion
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-purple-400 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Unlock the power of journaling with AI-driven insights and emotional support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#get-started" className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-purple-700 transition duration-300 inline-block">
            Start Journaling
          </Link>

          
        </motion.div>
      </motion.div>
    </header>
  )
}
