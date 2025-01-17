'use client'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaClock, FaComments, FaBrain } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      icon: <FaShieldAlt className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />,
      title: "Private & Secure",
      description: "End-to-end encrypted conversations and strict data protection protocols",
      glowColor: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20"
    },
    {
      icon: <FaClock className="text-teal-500 group-hover:text-teal-400 transition-colors" />,
      title: "24/7 Availability",
      description: "Always here to listen and support you, any time of day",
      glowColor: "from-teal-500/20 via-emerald-500/20 to-teal-500/20"
    },
    {
      icon: <FaComments className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />,
      title: "Judgment-Free Space",
      description: "Express yourself freely in a safe, confidential environment",
      glowColor: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20"
    },
    {
      icon: <FaBrain className="text-teal-500 group-hover:text-teal-400 transition-colors" />,
      title: "Personalized Support",
      description: "Adaptive responses based on your unique needs and preferences",
      glowColor: "from-teal-500/20 via-emerald-500/20 to-teal-500/20"
    }
  ]

  return (
    <section id="features" className="py-12 md:py-24 relative overflow-hidden px-4 md:px-6">
      {/* Animated background shapes - Adjusted for mobile */}
      <div className="absolute inset-0">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -left-24 md:-left-48 -top-24 md:-top-48 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin" />
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -right-24 md:-right-48 -bottom-24 md:-bottom-48 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4"
          >
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Why Choose Mind Aid AI?
            </h2>
          </motion.div>
        </motion.div>

        {/* Features Grid - Updated for better mobile layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl border border-emerald-200/30 hover:border-emerald-300/50 p-4 md:p-6 overflow-hidden transition-colors duration-300">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 opacity-80" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon - Adjusted size for mobile */}
                  <motion.div 
                    className="text-2xl md:text-3xl mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/50 flex items-center justify-center border border-emerald-100/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base md:text-xl font-semibold mb-2 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Security indicator */}
                  {feature.title === "Private & Secure" && (
                    <motion.div
                      className="absolute top-2 right-2 md:top-3 md:right-3 flex space-x-1"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animation-delay-200" />
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animation-delay-400" />
                    </motion.div>
                  )}
                </div>

                {/* Decorative corner lines - Adjusted for mobile */}
                <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8">
                  <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-emerald-500/50 to-transparent" />
                  <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-emerald-500/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 