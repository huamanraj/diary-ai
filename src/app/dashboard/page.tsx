'use client'

import { Book, ChevronRight,  Sun, PlusCircle, User, LogOut, Zap, Brain, Target, Smile } from 'lucide-react'

import Link from 'next/link'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'



export default function UserDashboard() {
  

  return (
    <div className="min-h-screen bg-[#03012a] text-gray-300">
      {/* Enhanced Header */}
      <header className="bg-[#050233] shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Book className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-purple-300">Diary AI</span>
            </Link>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button className="text-purple-400 hover:text-purple-300">
                <Sun className="h-6 w-6" />
              </button>
              <Link href="/journal" className="bg-purple-600 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300 flex items-center">
                <PlusCircle className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">New Entry</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/profile" className="text-purple-300 hover:text-purple-200 flex items-center">
                  <User className="h-5 w-5 sm:mr-1" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
                <button className="text-purple-300 hover:text-purple-200 flex items-center">
                  <LogOut className="h-5 w-5 sm:mr-1" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-purple-300 mb-8">Welcome back, User!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StreakCard title="Journaling Streak" icon={<Zap className="h-6 w-6" />} streak={7} total={30} />
          <StreakCard title="Mood Consistency" icon={<Smile className="h-6 w-6" />} streak={5} total={30} />
          <StreakCard title="Productivity" icon={<Target className="h-6 w-6" />} streak={4} total={30} />
          <StreakCard title="Self-Reflection" icon={<Brain className="h-6 w-6" />} streak={6} total={30} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Growth Analysis */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Journaling Growth</h2>
            <div className="bg-[#050233] rounded-lg shadow-lg p-4">
              <GrowthChart />
            </div>
          </div>

          {/* Past Journals */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Past Journals</h2>
            <div className="bg-[#050233] rounded-lg shadow-lg p-4">
              <JournalList  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StreakCard({ title, icon, streak, total }: { title: string, icon: React.ReactNode, streak: number, total: number }) {
  const percentage = (streak / total) * 100;

  return (
    <div className="bg-[#050233] rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end">
        <span className="text-3xl font-bold text-purple-400">{streak}</span>
        <span className="text-sm text-purple-500 ml-1">/ {total} days</span>
      </div>
      <div className="mt-2 bg-purple-900 rounded-full h-2">
        <div
          className="bg-purple-400 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function GrowthChart() {
  const data = [
    { name: 'Week 1', journaling: 2, mood: 60, productivity: 50, reflection: 40 },
    { name: 'Week 2', journaling: 3, mood: 65, productivity: 55, reflection: 45 },
    { name: 'Week 3', journaling: 4, mood: 70, productivity: 65, reflection: 55 },
    { name: 'Week 4', journaling: 5, mood: 75, productivity: 70, reflection: 60 },
    { name: 'Week 5', journaling: 6, mood: 80, productivity: 80, reflection: 70 },
    { name: 'Week 6', journaling: 7, mood: 85, productivity: 85, reflection: 80 },
  ];

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorJournaling" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorProductivity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorReflection" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8042" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff8042" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip contentStyle={{ backgroundColor: '#050233', border: 'none' }} />
          <Area type="monotone" dataKey="journaling" stroke="#8884d8" fillOpacity={1} fill="url(#colorJournaling)" />
          <Area type="monotone" dataKey="mood" stroke="#82ca9d" fillOpacity={1} fill="url(#colorMood)" />
          <Area type="monotone" dataKey="productivity" stroke="#ffc658" fillOpacity={1} fill="url(#colorProductivity)" />
          <Area type="monotone" dataKey="reflection" stroke="#ff8042" fillOpacity={1} fill="url(#colorReflection)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function JournalList() {
  const journals = [
    { id: 1, date: '2023-05-01', title: 'A day of reflection', excerpt: 'Today I took some time to reflect on my recent achievements...' },
    { id: 2, date: '2023-05-03', title: 'Overcoming challenges', excerpt: 'I faced a difficult situation at work, but I managed to...' },

    { id: 3, date: '2023-05-05', title: 'New beginnings', excerpt: 'Im excited about the new project I m starting. It s a bit daunting...' } ,
    { id: 4, date: '2023-05-07', title: 'Gratitude practice', excerpt: 'Today I focused on being grateful for the little things in life...' },
  ];

  return (
    <ul className="space-y-4">
      {journals.map((journal) => (
        <li key={journal.id} className="bg-[#080545] rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-purple-300">{journal.title}</h3>
            <span className="text-sm text-purple-400">{journal.date}</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">{journal.excerpt.substring(0, 100)}...</p>
          <Link
            href={`/edit-journal/${journal.id}`}
            className="text-purple-400 hover:text-purple-300 text-sm flex items-center"
            
          >
            <span className="mr-1">Read more</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </li>
      ))}
    </ul>
  );
}