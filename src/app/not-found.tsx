'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import logo from '../../public/images/diary ai 2.jpeg'
import Image from 'next/image'


export default function NotFound() {
  const router = useRouter()


 

  return (
    <div className="min-h-screen overflow-hidden relative bg-[#03012a] text-white font-sans">

      {/* Animated stars background */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}


      <div className="container mx-auto  flex flex-col items-center justify-center min-h-screen">
        {/* Brand logo */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <Image
        src={logo} // Use StaticImageData here
        alt="Not Found"
        width={200} // Set appropriate width
        height={200} // Set appropriate height
        />
        </motion.div>

        {/* 404 Text */}
        <motion.h1 
          className="text-9xl font-bold mb-4 tracking-tighter"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          4<span className="text-purple-400">0</span>4
        </motion.h1>

        {/* Message */}
        <motion.p 
          className="text-2xl text-center mb-8 text-purple-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! Looks like you've ventured into deep space.
        </motion.p>

        {/* Navigation buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        > 
          
          <motion.button
            className="px-6 py-3 bg-purple-600 bg-opacity-65  backdrop-blur-sm text-white rounded-full font-semibold hover:bg-purple-600 transition duration-300"
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Return Home
          </motion.button>
          <motion.button
            className="px-6 py-3 bg-transparent border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition duration-300"
            onClick={() => router.back()}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}