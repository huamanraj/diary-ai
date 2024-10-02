'use client'

import { useState, useEffect } from 'react'
import { Book, Edit3, List, Sun, ArrowLeft, X } from 'lucide-react'
import Link from 'next/link'

export default function NewJournal() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [aiInsights, setAiInsights] = useState('')

  const handleSave = () => {
    // In a real application, you would save the journal entry here
    console.log('Saving journal:', { title, content })
    
    // Simulate getting AI insights
    const mockAiInsights = "Your journal entry shows great self-reflection. You've touched on important aspects of personal growth and identified areas for improvement. Consider setting specific goals for the areas you want to work on, and remember to celebrate your progress along the way. Your awareness of both your strengths and challenges is a powerful tool for continued personal development."
    setAiInsights(mockAiInsights)
    setIsDialogOpen(true)
  }

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDialogOpen])

  return (
    <div className="min-h-screen bg-[#03012a] text-gray-300">
      {/* Navbar */}
      <nav className="bg-[#050233] shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Book className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-purple-300">Diary AI</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-purple-400 hover:text-purple-300">
                <Sun className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="text-purple-400 hover:text-purple-300 mr-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-3xl font-bold text-purple-300">New Journal Entry</h1>
        </div>

        <div className="bg-[#050233] rounded-lg shadow-lg p-6">
          <div className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Journal Title"
              className="w-full bg-[#03012a] border border-purple-700 rounded-md p-2 text-purple-300 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your thoughts here..."
              className="w-full h-64 bg-[#03012a] border border-purple-700 rounded-md p-2 text-purple-300 placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            />
            <div className="flex justify-between items-center">
              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300 flex items-center"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Save Journal
              </button>
              <button className="text-purple-400 hover:text-purple-300">
                <List className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#050233] border border-purple-700 text-gray-300 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-purple-300">AI Insights</h2>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="bg-[#03012a] text-purple-400 hover:text-purple-300 hover:bg-[#040136] rounded-full p-2 focus:outline-none"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <p className="text-gray-300">{aiInsights}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}