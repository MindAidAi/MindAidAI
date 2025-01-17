'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Data Collection",
      content: "We collect only essential information needed to provide our mental wellness support services. This includes chat conversations, user preferences, and basic account information. All data collection is transparent and with your consent."
    },
    {
      title: "2. Data Security",
      content: "Your privacy is our top priority. We use military-grade encryption for all communications and data storage. Our systems are regularly audited and updated to maintain the highest security standards."
    },
    {
      title: "3. Data Usage",
      content: "Your data is used solely to improve your experience and our services. We analyze anonymized conversation patterns to enhance our AI's understanding and responses. Personal data is never sold or shared with third parties."
    },
    {
      title: "4. User Rights",
      content: "You have complete control over your data. You can request access, modification, or deletion of your personal information at any time. We comply with GDPR, CCPA, and other relevant privacy regulations."
    },
    {
      title: "5. Cookies & Tracking",
      content: "We use essential cookies to maintain your session and preferences. Analytics cookies are optional and can be disabled. We do not use tracking cookies for advertising purposes."
    },
    {
      title: "6. Third-Party Services",
      content: "When we use third-party services, we ensure they meet our strict privacy standards. We only share the minimum necessary information required for service operation."
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
                Privacy Policy
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
                For privacy-related inquiries, contact our Data Protection Officer at{' '}
                <a href="mailto:privacy@mindaidai.com" className="text-emerald-600 hover:text-emerald-500 transition-colors">
                  privacy@mindaidai.com
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