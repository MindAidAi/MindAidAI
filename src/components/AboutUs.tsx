'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden px-4 md:px-6">
      {/* Background decorative elements - adjusted for mobile */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-48 md:w-72 h-48 md:h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob-spin" />
        <div className="absolute bottom-1/4 left-0 w-48 md:w-72 h-48 md:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob-spin animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent text-center md:text-left">
              About Mind Aid AI
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center md:text-left">
              Mind Aid AI was created with a simple yet powerful mission: to make mental wellness support accessible to everyone, anytime, anywhere.
            </p>

            <div className="space-y-4 max-w-lg mx-auto md:mx-0">
              {/* Feature points - Improved mobile layout */}
              <motion.div 
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Advanced AI technology trained to provide empathetic and understanding responses
                </p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Secure and confidential platform ensuring your privacy at every step
                </p>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  Available 24/7 to provide support whenever you need it
                </p>
              </motion.div>
            </div>

            {/* Social Media Buttons - Updated to always be side by side */}
            <div className="pt-6 flex flex-row items-center justify-center md:justify-start gap-4">
              <motion.a
                href="https://t.me/mindaidai"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-emerald-100/20 hover:border-emerald-300/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 text-sm md:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                {/* Icon and text */}
                <FaTelegramPlane className="text-emerald-600 text-xl relative z-10" />
                <span className="text-emerald-800 font-medium relative z-10">Join Telegram</span>
                
                {/* Animated dots */}
                <motion.div
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1"
                  initial="hidden"
                  whileHover="visible"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-emerald-500 rounded-full"
                      variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: {
                          opacity: [0, 1, 0],
                          y: [-2, 2, -2],
                          transition: {
                            delay: i * 0.1,
                            duration: 1,
                            repeat: Infinity,
                          },
                        },
                      }}
                    />
                  ))}
                </motion.div>
              </motion.a>

              <motion.a
                href="https://x.com/mindaidai"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-4 md:px-6 py-3 rounded-full bg-white/50 backdrop-blur-sm border border-emerald-100/20 hover:border-emerald-300/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 text-sm md:text-base"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                {/* Icon and text */}
                <FaXTwitter className="text-emerald-600 text-xl relative z-10" />
                <span className="text-emerald-800 font-medium relative z-10">Follow on X</span>
                
                {/* Animated dots */}
                <motion.div
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1"
                  initial="hidden"
                  whileHover="visible"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-emerald-500 rounded-full"
                      variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: {
                          opacity: [0, 1, 0],
                          y: [-2, 2, -2],
                          transition: {
                            delay: i * 0.1,
                            duration: 1,
                            repeat: Infinity,
                          },
                        },
                      }}
                    />
                  ))}
                </motion.div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Logo/Image - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="relative aspect-square max-w-[280px] md:max-w-md mx-auto">
              {/* Glowing effect behind logo - adjusted for mobile */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl md:blur-3xl transform animate-pulse" />
              
              {/* Logo container with glass effect - enhanced mobile appearance */}
              <div className="relative h-full w-full rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/20 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/img/logo.png"
                  alt="Mind Aid AI Logo"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Decorative elements - adjusted sizes for mobile */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 md:w-20 h-16 md:h-20 bg-emerald-400/10 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 md:w-16 h-12 md:h-16 bg-teal-400/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 