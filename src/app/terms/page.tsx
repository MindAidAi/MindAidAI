'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Terms of Use",
      content: "By accessing and using Mind Aid AI, you agree to be bound by these terms and conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws."
    },
    {
      title: "2. Privacy & Security",
      content: "We employ industry-standard encryption and security measures to protect your conversations and personal data. All communications are end-to-end encrypted, and we never share your information with third parties without your explicit consent."
    },
    {
      title: "3. Service Description",
      content: "Mind Aid AI provides AI-powered emotional support and wellness guidance. Our service is not a replacement for professional mental health treatment. If you're experiencing a mental health emergency, please contact appropriate emergency services."
    },
    {
      title: "4. User Responsibilities",
      content: "Users must be 18 years or older to use our service. You agree to provide accurate information and maintain the confidentiality of your account. Any misuse of the service may result in immediate termination of your account."
    },
    {
      title: "5. Data Usage",
      content: "We collect and process data to improve our services. All data is anonymized and used in compliance with relevant data protection regulations. You retain all rights to your personal data and can request its deletion at any time."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen pt-16">
        <div className="py-16 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute w-[500px] h-[500px] -left-48 top-0 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin" />
            <div className="absolute w-[500px] h-[500px] -right-48 bottom-0 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin animation-delay-4000" />
          </div>

          <div className="max-w-4xl mx-auto px-4">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-500 transition-colors"
              >
                <FaArrowLeft className="text-sm" />
                <span>Back to Home</span>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20 hover:border-emerald-300/50 transition-all duration-300">
                    {/* Decorative corner lines */}
                    <div className="absolute top-0 left-0 w-8 h-8">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8">
                      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-emerald-500/50 to-transparent" />
                      <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-emerald-500/50 to-transparent" />
                    </div>

                    <h2 className="text-xl font-semibold text-emerald-800 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20 text-center"
            >
              <p className="text-gray-600">
                If you have any questions about these terms, please contact us at{' '}
                <a href="mailto:support@mindaidai.com" className="text-emerald-600 hover:text-emerald-500 transition-colors">
                  support@mindaidai.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
} 