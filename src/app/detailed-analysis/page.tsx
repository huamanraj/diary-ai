'use client'

import { useState } from 'react'
import { Book, Sun, ArrowLeft,  TrendingUp, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function DetailedAnalysis() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const growthData = [
    { category: 'Mood', score: 75, trend: 'up' },
    { category: 'Productivity', score: 80, trend: 'up' },
    { category: 'Self-reflection', score: 90, trend: 'up' },
    { category: 'Goal achievement', score: 70, trend: 'down' },
    { category: 'Stress management', score: 65, trend: 'up' },
    { category: 'Sleep quality', score: 85, trend: 'stable' },
  ]

  const emotionData = [
    { emotion: 'Joy', percentage: 40 },
    { emotion: 'Sadness', percentage: 15 },
    { emotion: 'Anger', percentage: 10 },
    { emotion: 'Fear', percentage: 5 },
    { emotion: 'Surprise', percentage: 20 },
    { emotion: 'Disgust', percentage: 10 },
  ]

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
          <h1 className="text-3xl font-bold text-purple-300">Detailed Analysis</h1>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setSelectedPeriod('week')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedPeriod === 'week' ? 'bg-purple-600 text-white' : 'bg-[#050233] text-purple-400 hover:bg-purple-900'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setSelectedPeriod('month')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedPeriod === 'month' ? 'bg-purple-600 text-white' : 'bg-[#050233] text-purple-400 hover:bg-purple-900'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setSelectedPeriod('year')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                selectedPeriod === 'year' ? 'bg-purple-600 text-white' : 'bg-[#050233] text-purple-400 hover:bg-purple-900'
              }`}
            >
              Year
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#050233] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Growth Analysis</h2>
            <div className="space-y-4">
              {growthData.map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-purple-300">{item.category}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-purple-400 mr-2">{item.score}%</span>
                      {item.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                      {item.trend === 'down' && <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />}
                      {item.trend === 'stable' && <TrendingUp className="h-4 w-4 text-yellow-500 transform rotate-90" />}
                    </div>
                  </div>
                  <div className="w-full bg-purple-900 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#050233] rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Emotion Distribution</h2>
            <div className="space-y-4">
              {emotionData.map((item) => (
                <div key={item.emotion}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-purple-300">{item.emotion}</span>
                    <span className="text-sm font-medium text-purple-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-purple-900 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#050233] rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Journal Entry Frequency</h2>
          <div className="flex items-center justify-center h-64">
            <Calendar className="h-32 w-32 text-purple-400" />
            <div className="ml-8">
              <p className="text-4xl font-bold text-purple-300">15</p>
              <p className="text-lg text-purple-400">Entries this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}