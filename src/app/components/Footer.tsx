
import Link from 'next/link'
import logo from '../../../public/images/diary_ai_2-removebg-preview.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#050233] text-purple-300 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link href="/" className="flex items-center justify-center mb-4">
        <Image
            src={logo} // Path to the logo image in the public folder
            alt="Logo"
            width={100} // Set the width of the image
            height={100} // Set the height of the image
            className=" text-purple-400 p-1" // Optional class names for styling
          />
        </Link>
        <p className="text-sm sm:text-base mb-4">
          Empowering minds through journaling. © 2024 Diary AI.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>
          <Link href="/terms" className="text-purple-400 hover:text-purple-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
