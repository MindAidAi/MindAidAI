'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

interface LinkItem {
  name: string;
  href: string;
}

interface SocialLink extends LinkItem {
  icon: IconType;
}

interface Links {
  product: LinkItem[];
  company: LinkItem[];
  social: SocialLink[];
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const links: Links = {
    product: [
      { name: 'About', href: '#about' },
      { name: 'Features', href: '#features' },
      { name: 'Vision', href: '#future-vision' },
      { name: 'FAQ', href: '#faq' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/mindaidai', icon: FaXTwitter },
    ]
  }

  return (
    <footer className="relative overflow-hidden border-t border-emerald-100/20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -left-24 md:-left-48 -bottom-24 md:-bottom-48 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -right-24 md:-right-48 -bottom-24 md:-bottom-48 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 md:mb-12">
          {/* Logo and Description - spans 4 columns */}
          <div className="md:col-span-4 space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-12 w-40"
            >
              <Image
                src="/img/logo.png"
                alt="Mind Aid AI"
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="text-gray-600 text-sm">
              Empowering mental wellness through AI-driven support and compassionate technology.
            </p>
          </div>

          {/* Product and Company Links Container - spans 5 columns */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-emerald-800 mb-4">Product</h3>
              <ul className="space-y-2">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-emerald-800 mb-4">Company</h3>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-emerald-600 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links - spans 3 columns */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-emerald-800 mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {links.social.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 md:p-4 rounded-full bg-white/50 backdrop-blur-sm border border-emerald-100/20 hover:border-emerald-300/50 text-emerald-600 hover:text-emerald-500 transition-all duration-300 hover:shadow-lg"
                    whileHover={{ y: -4, scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SocialIcon className="w-6 h-6 md:w-7 md:h-7" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-emerald-100/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Mind Aid AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/privacy"
                className="text-gray-600 hover:text-emerald-600 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link 
                href="/terms"
                className="text-gray-600 hover:text-emerald-600 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 