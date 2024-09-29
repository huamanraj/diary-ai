'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Book, Lightbulb, Heart, Menu, X, Moon, Star, LogIn, UserPlus } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#03012a] text-gray-300">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#03012a] bg-opacity-90 backdrop-blur-md shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Book className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-purple-300">Diary AI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#mental-health">Mental Health</NavLink>
              <NavLink href="#quotes">Quotes</NavLink>
              <NavLink href="#get-started">Get Started</NavLink>
              <NavButton href="/login" icon={<LogIn className="h-4 w-4 mr-2" />}>Log In</NavButton>
              <NavButton href="/signup" icon={<UserPlus className="h-4 w-4 mr-2" />}>Sign Up</NavButton>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-purple-400 hover:text-purple-300 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#050233] shadow-lg">
            <NavLink href="#features" mobile>Features</NavLink>
            <NavLink href="#mental-health" mobile>Mental Health</NavLink>
            <NavLink href="#quotes" mobile>Quotes</NavLink>
            <NavLink href="#get-started" mobile>Get Started</NavLink>
            <NavLink href="/login" mobile>Log In</NavLink>
            <NavLink href="/signup" mobile>Sign Up</NavLink>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto h-[70vh] content-center px-4 sm:px-6 lg:px-8 py-5 mt-20 text-center relative">
        <motion.div style={{ opacity, scale }}>
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

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard 
            icon={<Lightbulb className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
            title="AI-Powered Insights"
            description="Gain deeper understanding of your thoughts and emotions with our advanced AI analysis."
          />
          <FeatureCard 
            icon={<Heart className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
            title="Emotional Support"
            description="Receive personalized support and coping strategies based on your journal entries."
          />
          <FeatureCard 
            icon={<Moon className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
            title="Guided Journaling"
            description="Get daily prompts and exercises to help you explore your thoughts and feelings more deeply."
          />
        </div>
      </section>

      {/* Mental Health Section */}
      <section id="mental-health" className="bg-[#050233] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8 text-center">Nurture Your Mental Health</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/placeholder.svg?height=400&width=400" 
                  alt="Mental Health Illustration" 
                  width={400} 
                  height={400} 
                  className="rounded-lg shadow-lg mx-auto w-full max-w-sm lg:max-w-md"
                />
              </motion.div>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg text-purple-300 mb-4">
                  Journaling is a powerful tool for maintaining and improving your mental health. With Diary AI, you can:
                </p>
                <ul className="list-disc list-inside text-purple-400 space-y-2 text-sm sm:text-base">
                  <li>Track your mood and emotional patterns</li>
                  <li>Identify triggers and stressors</li>
                  <li>Develop healthy coping mechanisms</li>
                  <li>Celebrate your progress and achievements</li>
                  <li>Gain clarity and self-awareness</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8 text-center">Inspirational Quotes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <QuoteCard 
            quote="The life of every man is a diary in which he means to write one story, and writes another."
            author="J.M. Barrie"
          />
          <QuoteCard 
            quote="Journal writing is a voyage to the interior."
            author="Christina Baldwin"
          />
          <QuoteCard 
            quote="Fill your paper with the breathings of your heart."
            author="William Wordsworth"
          />
          <QuoteCard 
            quote="Writing in a journal reminds you of your goals and of your learning in life."
            author="Robin Sharma"
          />
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="bg-purple-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-base sm:text-lg mb-8">Experience the power of AI-enhanced journaling with Diary AI.</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/signup" className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-purple-700 transition duration-300 inline-block">
              Sign Up Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020122] text-purple-300 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <Link href="/" className="flex items-center">
                <Book className="h-6 w-6 sm:h-8 sm:w-8" />
                <span className="ml-2 text-lg sm:text-xl font-bold">Diary AI</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 text-sm sm:text-base">
              <Link href="/privacy" className="hover:text-purple-400 transition duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-purple-400 transition duration-300">Terms of Service</Link>
              <Link href="/contact" className="hover:text-purple-400 transition duration-300">Contact Us</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs sm:text-sm">
            © {new Date().getFullYear()} Diary AI. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating stars animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

function NavLink({ href, children, mobile = false }) {
  const baseClasses = "text-purple-400 hover:text-purple-300 transition duration-300"
  const desktopClasses = "px-3 py-2 rounded-md text-sm"
  const mobileClasses = "block px-3 py-2 rounded-md text-base"
  
  return (
    <Link href={href} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  )
}

function NavButton({ href, children, icon }) {
  return (
    <Link href={href} className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300 flex items-center">
      {icon}
      {children}
    </Link>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-[#050233] p-4 sm:p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-purple-400">{description}</p>
    </motion.div>
  )
}

function QuoteCard({ quote, author }) {
  return (
    <motion.div 
      className="bg-[#050233] p-4 sm:p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <blockquote className="text-base sm:text-lg text-purple-300 mb-2">"{quote}"</blockquote>
      <cite className="text-xs sm:text-sm text-purple-400">- {author}</cite>
    </motion.div>
  )
}