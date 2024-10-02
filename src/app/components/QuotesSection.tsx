'use client'
import { motion } from 'framer-motion'
import React from 'react';

// Define the prop types for QuoteCard
interface QuoteCardProps {
  quote: string;
  author: string;
}

// QuoteCard component
function QuoteCard({ quote, author }: QuoteCardProps) {
  return (
    <motion.div
      className="bg-[#050233] p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-lg  sm:text-xl text-purple-300 mb-4">&   #34{quote}&#34</p>
      <p className="text-sm sm:text-base text-purple-400">- {author}</p>
    </motion.div>
  );
}

// QuotesSection component
export function QuotesSection() {
  return (
    <section id="quotes" className="container text-center mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-8 text-center">Inspirational Quotes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <QuoteCard 
          quote="Journaling is like whispering to one's self and listening at the same time."
          author="Mina Murray"
        />
        <QuoteCard 
          quote="Writing is the painting of the voice."
          author="Voltaire"
        />
      </div>
    </section>
  );
}
