
'use client'

import { useState, useEffect } from 'react'
import {  LogIn, Menu, X, UserPlus } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from '../../../public/images/diary_ai_2-removebg-preview.png'
import Image from 'next/image'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#03012a] bg-opacity-90 backdrop-blur-md shadow-lg' : ''
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
          <Image
            src={logo} // Path to the logo image in the public folder
            alt="Logo"
            width={100} // Set the width of the image
            height={100} // Set the height of the image
            className=" text-purple-400 p-1" // Optional class names for styling
          />
            {/* <Book className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-purple-300">Diary AI</span> */}
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
            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div className="md:hidden block px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#050233] shadow-lg">
          <NavLink href="#features" mobile>Features</NavLink>
          <NavLink href="#mental-health" mobile>Mental Health</NavLink>
          <NavLink href="#quotes" mobile>Quotes</NavLink>
          <NavLink href="#get-started" mobile>Get Started</NavLink>
          <NavLink href="/login" mobile>Log In</NavLink>
          <NavLink href="/signup" mobile>Sign Up</NavLink>
        </motion.div>
      )}
    </nav>
  )
}

interface NavLinkProps {
  href: string;                // The URL the link should point to
  children: React.ReactNode;   // The content of the link (text, elements, etc.)
  mobile?: boolean;            // Optional prop to determine if the link should use mobile styling (default is `false`)
}

interface NavButtonProps {
  href: string;                // The URL the button should point to
  children: React.ReactNode;   // The content of the button (text, elements, etc.)
  icon?: React.ReactNode;      // Optional icon to display next to the button text
}

function NavLink({ href, children, mobile = false }:NavLinkProps) {
  const baseClasses = "text-purple-400 hover:text-purple-300 transition duration-300"
  const desktopClasses = "px-3 py-2 rounded-md text-sm"
  const mobileClasses = "block px-3 py-2 rounded-md text-base"

  return (
    <Link href={href} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  )
}

function NavButton({ href, children, icon }:NavButtonProps) {
  return (
    <Link href={href} className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300 flex items-center">
      {icon}
      {children}
    </Link>
  )
}
