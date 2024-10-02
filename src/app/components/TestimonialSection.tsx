import { motion } from 'framer-motion'

export function TestimonialSection() {
  return (
    <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <TestimonialCard 
          name="John Doe"
          feedback="Diary AI has transformed my journaling experience. It offers insightful prompts and helps me understand my emotions better."
        />
        <TestimonialCard 
          name="Jane Smith"
          feedback="The AI analysis is so helpful! It's like having a personal therapist available 24/7. Highly recommend this app to everyone."
        />
      </div>
    </section>
  )
}

interface TestimonialCardProps{
  name:string, feedback:string
}

function TestimonialCard({ name, feedback }:TestimonialCardProps) {
  return (
    <motion.div
      className="bg-[#050233] p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-lg sm:text-xl text-purple-300 mb-4">
      &#34{feedback}&#34</p>
      <p className="text-sm sm:text-base text-purple-400">- {name}</p>
    </motion.div>
  )
}
