import Link from 'next/link'

interface CTAButtonProps {
  href: string;  // Explicitly type 'href' as a string
  children: React.ReactNode;  // Type 'children' to accept any valid JSX content
  color?: string;  // Optional color prop with default value
}

export const CTAButton: React.FC<CTAButtonProps> = ({ href, children, color = 'bg-purple-600' }) => {
  return (
    <Link href={href} className={`${color} text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-purple-700 transition duration-300`}>
      {children}
    </Link>
  )
}
