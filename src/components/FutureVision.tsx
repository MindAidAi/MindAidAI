'use client'
import { motion } from 'framer-motion'
import { FaRobot, FaChartLine, FaGlobeAmericas } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'

export default function FutureVision() {
  const visionPoints = [
    {
      icon: <FaRobot className="text-emerald-500 group-hover:text-emerald-400" />,
      title: "Advanced AI Models",
      description: "Implementing multimodal AI for enhanced emotional understanding and support",
      launch: "Q2 2025"
    },
    {
      icon: <FaGlobeAmericas className="text-teal-500 group-hover:text-teal-400" />,
      title: "Global Expansion",
      description: "Expanding to 50+ languages with cultural-specific mental health approaches",
      launch: "Q3 2025"
    },
    {
      icon: <IoSparkles className="text-emerald-500 group-hover:text-emerald-400" />,
      title: "Predictive Wellness",
      description: "AI-powered early intervention system with 95% accuracy rate",
      launch: "Q4 2025"
    }
  ]

  return (
    <section id="future-vision" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -right-48 top-48 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Vision Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Future Vision
            </h2>
            
            <p className="text-gray-600 text-lg">
              Pioneering the next generation of mental wellness support through advanced AI and personalized care.
            </p>

            {/* Growth Metrics */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-emerald-200/30">
                <FaChartLine className="text-2xl text-emerald-500" />
                <div>
                  <h4 className="font-semibold text-emerald-800">2025 Growth Target</h4>
                  <p className="text-sm text-gray-600">2M+ active users globally</p>
                </div>
              </div>

              {/* ROI Indicator */}
              <motion.div 
                className="flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-emerald-200/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="p-2 rounded-lg bg-emerald-50">
                  <span className="text-lg font-bold text-emerald-600">ROI</span>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-800">Projected Returns</h4>
                  <p className="text-sm text-gray-600">300% growth in enterprise partnerships</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Future Features */}
          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="p-2 rounded-lg bg-white/50 border border-emerald-100/20">
                      {point.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-emerald-800 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {point.description}
                      </p>
                    </div>

                    {/* Launch Date */}
                    <div className="text-xs font-medium text-emerald-600 bg-emerald-50/50 px-2 py-1 rounded-full border border-emerald-100/20">
                      {point.launch}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 