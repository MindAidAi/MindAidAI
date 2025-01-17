'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaBrain, FaCode, FaChartLine, FaHeadset } from 'react-icons/fa6'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Careers() {
  const openings = [
    {
      icon: <FaBrain />,
      title: "AI Research Scientist",
      type: "Full-time",
      location: "Remote / London",
      description: "Join our AI team in developing cutting-edge emotional intelligence models."
    },
    {
      icon: <FaCode />,
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote / New York",
      description: "Build the future of mental wellness technology using modern tech stack."
    },
    {
      icon: <FaChartLine />,
      title: "Growth Marketing Manager",
      type: "Full-time",
      location: "Remote / Singapore",
      description: "Drive our global expansion and help more people access mental wellness support."
    },
    {
      icon: <FaHeadset />,
      title: "Mental Health Specialist",
      type: "Part-time",
      location: "Remote",
      description: "Guide our AI development with your professional mental health expertise."
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

          <div className="max-w-7xl mx-auto px-4">
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
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                Join Our Mission
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Help us revolutionize mental wellness support through AI technology and make a positive impact on millions of lives.
              </p>
            </motion.div>

            {/* Open Positions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-20"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 text-center mb-12">
                Open Positions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {openings.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20 hover:border-emerald-300/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-emerald-50 text-emerald-600">
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {job.description}
                          </p>
                          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                            Learn More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20"
            >
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
                Don&apos;t see the right position?
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;re always looking for talented individuals. Send your CV to{' '}
                <a href="mailto:careers@mindaidai.com" className="text-emerald-600 hover:text-emerald-500 transition-colors">
                  careers@mindaidai.com
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