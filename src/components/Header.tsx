'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Vision', href: '#future-vision' },
    { name: 'FAQ', href: '#faq' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-emerald-100/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/img/logo.png" 
                alt="Mind Aid Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Mind Aid AI
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center space-x-8">
            {isHomePage ? (
              <>
                {navigationLinks.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </>
            ) : (
              <Link 
                href="/"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
            )}
            <Link 
              href="/chat"
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="sm:hidden p-2 rounded-md text-gray-600 hover:text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
} 