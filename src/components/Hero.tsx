'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const profiles = [
    { 
      src: '/img/female.png', 
      fallback: '/img/female.png',
      delay: 0, 
      position: 1
    },
    { 
      src: '/img/male1.png',
      fallback: '/img/male.png',
      delay: 0.2, 
      position: 2
    },
    { 
      src: '/img/male.png',
      fallback: '/img/male.png',
      delay: 0.4, 
      position: 3
    },
    { 
      src: '/img/female2.png',
      fallback: '/img/female.png',
      delay: 0.6, 
      position: 4
    },
  ]

  const getPosition = (position: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    
    // Calculate horizontal position for centered row with right offset
    const imageWidth = isMobile ? 12 : 14 // width percentage
    const horizontalCenter =60 // center point moved right (was 50)
    const totalWidth = imageWidth * 4 // total width of all images
    const startOffset = horizontalCenter - (totalWidth / 2) // start from middle minus half total width
    const basePosition = startOffset + (position - 1) * (imageWidth - 4) // Tight horizontal spacing
    
    return {
      left: `${basePosition}%`,
      top: isMobile ? '15%' : '20%', // Position above text
      transform: 'translateX(-50%)',
      zIndex: position
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 md:py-0">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Primary floating orbs - Adjusted for mobile */}
        <div className="absolute top-[5%] left-[15%] w-48 md:w-96 h-48 md:h-96 bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin" />
        <div className="absolute top-[15%] right-[15%] w-48 md:w-96 h-48 md:h-96 bg-green-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin animation-delay-2000" />
        <div className="absolute bottom-[15%] left-[35%] w-48 md:w-96 h-48 md:h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin animation-delay-4000" />
      </div>

      {/* Updated Floating Profile Images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <AnimatePresence>
          {profiles.map((profile) => (
            <motion.div
              key={profile.src}
              className="absolute"
              initial={{ 
                opacity: 0, 
                scale: 0.5,
                y: -50
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{
                delay: profile.delay,
                duration: 0.7,
                ease: "easeOut"
              }}
              style={getPosition(profile.position)}
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: profile.delay,
                  ease: "easeInOut"
                }}
              >
                {/* Glowing ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 blur-md opacity-50 scale-110"
                  animate={{
                    scale: [1.1, 1.15, 1.1],
                    opacity: [0.5, 0.6, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Profile image */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-emerald-400/50 overflow-hidden shadow-lg">
                  <Image
                    src={profile.src}
                    alt={`AI Companion ${profile.position}`}
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.src = profile.fallback;
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Content - Increased top margin */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-40 sm:mt-48">
        <div className="relative mb-6 md:mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-600/20 blur-3xl -z-10 rounded-full transform animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
            Mind Aid AI
          </h1>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-gray-600 max-w-2xl mx-auto backdrop-blur-sm bg-white/30 p-4 md:p-6 rounded-2xl">
          Your compassionate AI companion for mental wellness. 
          Talk freely in a safe, judgment-free space.
        </p>

        <div className="flex gap-4 md:gap-6 flex-row justify-center items-center">
          <Link 
            href="/chat"
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full bg-emerald-600 text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 text-sm md:text-base"
          >
            <span className="relative z-10">Start Chatting</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
          </Link>
          
          <Link
            href="#about"
            className="group px-6 md:px-8 py-3 md:py-4 rounded-full bg-white/50 backdrop-blur-sm border border-emerald-100 text-emerald-600 font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white/80 text-sm md:text-base"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  )
} 