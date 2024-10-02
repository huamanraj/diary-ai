'use client'
import React from 'react'
import {  useState } from 'react'
import Link from 'next/link'
import { Book, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#03012a] text-gray-300">
      <nav className="bg-[#050233] shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Book className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-purple-300">Diary AI</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-8 flex items-center">
          <Mail className="mr-4 h-8 w-8 text-purple-400" />
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6 text-sm sm:text-base">
              We&#39d love to hear from you. Please fill out the form below or use our contact information to get in touch.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-2" />
                <a href="mailto:contact@diaryai.com" className="text-purple-300 hover:text-purple-400">contact@diaryai.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-purple-400 mr-2" />
                <span>123 AI Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#050233] border border-purple-700 rounded-md text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-[#050233] border border-purple-700 rounded-md text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 bg-[#050233] border border-purple-700 rounded-md text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300 flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-[#020122] text-purple-300 py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Diary AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}