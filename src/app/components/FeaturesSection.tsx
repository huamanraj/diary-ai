'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Heart, Moon } from 'lucide-react'

interface FeatureCardProps {
    icon: React.ReactNode, title: string, description:string 
  }


export function FeaturesSection() {
  return (
    <section id="features" className="container text-center mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
  )
}



function FeatureCard({ icon, title, description }:FeatureCardProps ) {
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
