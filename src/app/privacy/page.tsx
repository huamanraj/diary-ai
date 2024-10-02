'use client'
import Link from 'next/link'
import { Book, Shield } from 'lucide-react'

export default function PrivacyPolicy() {
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
          <Shield className="mr-4 h-8 w-8 text-purple-400" />
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm sm:text-base">
          <p>
            At Diary AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered journaling application.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, write journal entries, or communicate with us. This may include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Personal information (e.g., name, email address)</li>
            <li>Journal entries and associated metadata</li>
            <li>Usage data and analytics</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Personalize your experience and deliver tailored insights</li>
            <li>Communicate with you about our services</li>
            <li>Protect against, identify, and prevent fraud and other illegal activities</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@diaryai.com" className="text-purple-400 hover:text-purple-300">privacy@diaryai.com</a>.
          </p>
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