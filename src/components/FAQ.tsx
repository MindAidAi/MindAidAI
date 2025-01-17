'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQ() {
  const faqs = [
    {
      question: "How does Mind Aid AI protect my privacy?",
      answer: "Mind Aid AI employs end-to-end encryption and strict data protection protocols. Your conversations are completely private and secure. We never share your personal information with third parties, and all data is anonymized for system improvements."
    },
    {
      question: "Is Mind Aid AI a replacement for professional therapy?",
      answer: "No, Mind Aid AI is designed to be a supportive tool, not a replacement for professional mental health care. While we provide emotional support and coping strategies, we always recommend consulting licensed mental health professionals for clinical needs."
    },
    {
      question: "What kind of support can I expect?",
      answer: "Our AI companions offer emotional support, active listening, coping strategies, and general wellness guidance. They're available 24/7 and can help with stress management, anxiety, daily challenges, and emotional well-being."
    },
    {
      question: "How accurate is the AI in understanding emotions?",
      answer: "Our AI system achieves over 90% accuracy in emotion recognition and response appropriateness. We continuously improve our models through careful training and validation by mental health professionals."
    },
    {
      question: "Can I switch between different AI companions?",
      answer: "Yes, you can choose between different AI companions, each with unique conversation styles and approaches. You can switch anytime to find the best match for your comfort and needs."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] -left-48 -bottom-48 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob-spin" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to know about Mind Aid AI
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-300"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-semibold text-emerald-800">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-emerald-500"
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Decorative glow effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 