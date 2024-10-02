'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Book, Mail, Lock, LogIn } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulated login - replace with actual authentication logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03012a] bg-opacity-50 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#050233] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex items-center justify-center mb-8">
          <Book className="h-10 w-10 text-purple-400 mr-2" />
          <h1 className="text-3xl font-bold text-purple-300">Diary AI</h1>
        </div>
        <h2 className="text-2xl font-semibold text-purple-300 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-[#03012a] text-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                placeholder="Enter your email"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-purple-400" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 bg-[#03012a] text-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 pl-10"
                placeholder="Enter your password"
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-purple-400" />
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <LogIn className="h-5 w-5" />
              </motion.div>
            ) : (
              <>
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </>
            )}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-purple-300">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-purple-400 hover:text-purple-300 transition duration-300">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}