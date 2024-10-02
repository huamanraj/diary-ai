'use client'
import Link from 'next/link'
import { Book, FileText } from 'lucide-react'

export default function TermsOfService() {
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
          <FileText className="mr-4 h-8 w-8 text-purple-400" />
          Terms of Service
        </h1>

        <div className="space-y-6 text-sm sm:text-base">
          <p>
            Welcome to Diary AI. By using our services, you agree to be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Diary AI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">2. Description of Service</h2>
          <p>
            Diary AI provides an AI-powered journaling platform. We reserve the right to modify, suspend, or discontinue the service at any time without notice.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">4. User Content</h2>
          <p>
            You retain all rights to the content you submit to Diary AI. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with the service.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">5. Prohibited Uses</h2>
          <p>
            You agree not to use Diary AI for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">6. Limitation of Liability</h2>
          <p>
            Diary AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes via email or through the service.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">8. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mt-6 mb-4">9. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:terms@diaryai.com" className="text-purple-400 hover:text-purple-300">terms@diaryai.com</a>.
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