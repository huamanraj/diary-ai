import { motion } from 'framer-motion'
import { Brain, HeartPulse, Smile } from 'lucide-react'

export function MentalHealthSection() {
  return (
    <section id="mental-health" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#03012a] rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8 text-center">Mental Health Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <MentalHealthCard
          icon={<Brain className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
          title="Cognitive Clarity"
          description="Enhance self-awareness and mental clarity by writing down your thoughts."
        />
        <MentalHealthCard
          icon={<HeartPulse className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
          title="Emotional Balance"
          description="Find emotional stability through consistent journaling practice."
        />
        <MentalHealthCard
          icon={<Smile className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />}
          title="Improved Well-being"
          description="Support your mental health with personalized coping strategies and prompts."
        />
      </div>
    </section>
  )
} 

interface MentalHealthCardProps {
  icon: React.ReactNode;       // The icon to display at the top of the card
  title: string;               // The title of the mental health card
  description: string;         // The description of the mental health card
}


function MentalHealthCard({ icon, title, description }:MentalHealthCardProps) {
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
