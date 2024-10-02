import Link from 'next/link'
import { motion } from 'framer-motion'

export function GetStartedSection() {
  return (
    <section id="get-started" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-lg shadow-lg mt-10 text-center">
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ready to Start Your Journaling Journey?
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sign up now and unlock personalized journaling tools powered by AI!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/signup" className="bg-white text-purple-600 px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-purple-100 transition duration-300">
          Get Started
        </Link>
      </motion.div>
    </section>
  )
}
