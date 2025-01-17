'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaBook, FaVideo, FaPodcast, FaNewspaper } from 'react-icons/fa6'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface ResourceItem {
  title: string;
  description: string;
  readTime?: string;
  duration?: string;
  frequency?: string;
  date?: string;
}

interface ResourceSection {
  category: string;
  icon: React.ReactNode;
  items: ResourceItem[];
}

export default function Resources() {
  const resources: ResourceSection[] = [
    {
      category: "Guides & Articles",
      icon: <FaBook />,
      items: [
        {
          title: "Understanding Anxiety",
          description: "A comprehensive guide to recognizing and managing anxiety symptoms.",
          readTime: "5 min read"
        },
        {
          title: "Mindfulness Basics",
          description: "Learn the fundamentals of mindfulness and meditation practices.",
          readTime: "7 min read"
        },
        {
          title: "Stress Management",
          description: "Effective techniques for managing daily stress and building resilience.",
          readTime: "6 min read"
        }
      ]
    },
    {
      category: "Video Resources",
      icon: <FaVideo />,
      items: [
        {
          title: "Guided Meditation Series",
          description: "Collection of calming meditation sessions for different needs.",
          duration: "10-15 mins each"
        },
        {
          title: "Expert Talks",
          description: "Mental health professionals sharing insights and strategies.",
          duration: "20-30 mins"
        }
      ]
    },
    {
      category: "Podcasts",
      icon: <FaPodcast />,
      items: [
        {
          title: "Wellness Conversations",
          description: "Weekly discussions about mental health and personal growth.",
          frequency: "New episode weekly"
        },
        {
          title: "Mindful Moments",
          description: "Short, practical mental wellness tips and exercises.",
          frequency: "Daily episodes"
        }
      ]
    },
    {
      category: "Latest Research",
      icon: <FaNewspaper />,
      items: [
        {
          title: "AI in Mental Health",
          description: "Recent developments in AI-powered mental health support.",
          date: "Updated monthly"
        },
        {
          title: "Wellness Studies",
          description: "Latest findings in mental wellness research and practices.",
          date: "Updated weekly"
        }
      ]
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
                Mental Wellness Resources
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our collection of guides, videos, and research to support your mental wellness journey.
              </p>
            </motion.div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-emerald-800">
                      {section.category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                        className="group"
                      >
                        <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20 hover:border-emerald-300/50 transition-all duration-300">
                          <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-emerald-600 bg-emerald-50/50 px-2 py-1 rounded-full">
                              {item.readTime || item.duration || item.frequency || item.date}
                            </span>
                            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-20 text-center p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20"
            >
              <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest resources and wellness tips.
              </p>
              <div className="flex max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:border-emerald-500 bg-white/70"
                />
                <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
} 