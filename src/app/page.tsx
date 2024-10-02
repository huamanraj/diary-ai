'use client'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { QuotesSection } from './components/QuotesSection'
import { TestimonialSection } from './components/TestimonialSection'
import { GetStartedSection } from './components/GetStartedSection'
import { Footer } from './components/Footer'
import { MentalHealthSection } from './components/MentalHealthSection'
// import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='min-h-screen bg-[#03012a] text-gray-300'>


      


      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MentalHealthSection />
      <QuotesSection />
      <TestimonialSection />
      <GetStartedSection />
      <Footer />
      
    </div>
  )
}
