'use client'
import { motion } from 'framer-motion'
import { FaUserFriends, FaComments, FaHandHoldingHeart } from 'react-icons/fa'

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaUserFriends className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />,
      title: "Choose Your Companion",
      description: "Select between Sarah or David, each with unique approaches to support",
      glowColor: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20"
    },
    {
      number: "02",
      icon: <FaComments className="text-teal-500 group-hover:text-teal-400 transition-colors" />,
      title: "Start Chatting",
      description: "Share your thoughts and feelings in a safe, encrypted space",
      glowColor: "from-teal-500/20 via-emerald-500/20 to-teal-500/20"
    },
    {
      number: "03",
      icon: <FaHandHoldingHeart className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />,
      title: "Get Support",
      description: "Receive personalized guidance and emotional support",
      glowColor: "from-emerald-500/20 via-teal-500/20 to-emerald-500/20"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -left-48 top-48 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin" />
        <div className="absolute w-[500px] h-[500px] -right-48 -bottom-48 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
            How Mind Aid Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-emerald-200/30 hover:border-emerald-300/50 p-8 overflow-hidden transition-colors duration-300">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 opacity-80" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number and Icon Container */}
                  <div className="relative mb-6">
                    {/* Floating number */}
                    <motion.div
                      className="absolute -top-4 -left-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div 
                      className="ml-8 text-3xl md:text-4xl w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center border border-emerald-100/20"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-emerald-500/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
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