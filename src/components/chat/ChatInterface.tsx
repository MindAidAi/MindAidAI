'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ChatMessage from './ChatMessage'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type Message = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

type AgentType = 'male' | 'female'

// Add interface for agent type
interface Agent {
  id: string
  name: string
  description: string
  image: string
  available: boolean
  theme: string
}

// Add interface for theme type
interface Theme {
  primary: string
  secondary: string
  light: string
  border: string
  hover: string
}

const agentThemes = {
  female: {
    primary: '#db2777',
    secondary: '#ec4899',
    light: '#fdf2f8',
    border: '#fce7f3',
    hover: '#be185d'
  },
  male: {
    primary: '#059669',
    secondary: '#10b981',
    light: '#ecfdf5',
    border: '#d1fae5',
    hover: '#047857'
  }
} as const

const WelcomeScreen = ({ agent, theme }: { agent: Agent; theme: Theme }) => {
  return (
    <motion.div 
      className="flex-1 flex flex-col items-center justify-center p-8 text-center"
      initial={{ opacity: 0, scale: 0.95, y: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ 
        opacity: 0, 
        scale: 0.95, 
        y: -100,
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 25,
          delay: 0.2 
        }}
        className="relative"
      >
        {/* Glowing effect behind avatar */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-30"
          style={{ backgroundColor: theme.primary }}
        />
        <Image
          src={agent.image}
          alt={agent.name}
          width={160}
          height={160}
          className="rounded-full mb-8 border-4 relative shadow-lg"
          style={{ borderColor: theme.light }}
          priority
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.src = '/img/female.png';
          }}
        />
      </motion.div>
      
      <motion.div
        className="max-w-md mx-auto space-y-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 
          className="text-3xl font-semibold"
          style={{ color: theme.primary }}
        >
          Hello, I&apos;m {agent.name}
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Your mental wellness companion, here to provide a safe and understanding space. 
          Feel free to share your thoughts, concerns, or anything on your mind.
        </p>

        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="flex items-center gap-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>Type your message below to begin</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chatHistory')
      return saved ? JSON.parse(saved) : []
    }
    return []
  })
  
  const [selectedAgent, setSelectedAgent] = useState<AgentType>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedAgent') as AgentType || 'female'
    }
    return 'female'
  })

  const [isLoading, setIsLoading] = useState(false)

  // Add ref for the messages container
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Add auto scroll function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Add effect to scroll on new messages
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Save to localStorage whenever messages or agent changes
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages))
    localStorage.setItem('selectedAgent', selectedAgent)
  }, [messages, selectedAgent])

  const clearChat = () => {
    setMessages([])
    localStorage.removeItem('chatHistory')
  }

  const switchAgent = (type: AgentType) => {
    setSelectedAgent(type)
    setMessages([])
    localStorage.removeItem('chatHistory')
  }

  const handleSendMessage = async (message: string) => {
    try {
      setIsLoading(true)
      
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message,
        role: 'user',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ content, role }) => ({
            content,
            role
          })),
          agent: selectedAgent
        })
      })

      if (!response.ok) throw new Error('Failed to fetch response')

      const data = await response.json()
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message.content,
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])

    } catch (error) {
      console.error('Chat error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.querySelector('input')
    if (!input?.value.trim()) return
    
    await handleSendMessage(input.value)
    input.value = ''
  }

  const agents = [
    {
      id: 'female',
      name: 'Sarah',
      description: 'Empathetic & Nurturing',
      image: '/img/female.png',
      available: true,
      theme: 'pink'
    },
    {
      id: 'male',
      name: 'David',
      description: 'Calm & Supportive',
      image: '/img/male.png',
      available: true,
      theme: 'blue'
    },
    {
      id: 'therapist',
      name: 'Dr. Emma',
      description: 'Professional Therapist',
      image: '/img/female2.png',
      available: false,
      theme: 'purple'
    },
    {
      id: 'coach',
      name: 'Coach Mike',
      description: 'Motivational Expert',
      image: '/img/male1.png',
      available: false,
      theme: 'orange'
    },
    {
      id: 'mindfulness',
      name: 'Luna',
      description: 'Mindfulness Guide',
      image: '/img/female.png',
      available: false,
      theme: 'indigo'
    },
    {
      id: 'wellness',
      name: 'Alex',
      description: 'Wellness Coach',
      image: '/img/male.png',
      available: false,
      theme: 'teal'
    }
  ]

  const currentTheme = agentThemes[selectedAgent]

  // Add a new state for mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="fixed inset-0 flex flex-col md:flex-row">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-emerald-100/20 bg-white/50 backdrop-blur-md">
        <h3 className="text-sm font-medium text-gray-600">Mind Aid AI</h3>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Agent Selector Sidebar */}
      <div className={`
        fixed inset-0 z-50 md:relative md:w-72 bg-white/50 backdrop-blur-md border-r border-emerald-100/20
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-between items-center p-4 border-b border-emerald-100/20">
          <h3 className="text-sm font-medium text-gray-600">Choose your companion</h3>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block p-4 border-b border-emerald-100/20">
          <h3 className="text-sm font-medium text-gray-600">Choose your companion</h3>
        </div>
        
        {/* Rest of the sidebar content */}
        <div className="py-8 px-4 space-y-4 h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] overflow-y-auto">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => agent.available && switchAgent(agent.id as AgentType)}
              disabled={!agent.available}
              className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all duration-300 relative ${
                agent.available
                  ? selectedAgent === agent.id
                    ? `bg-${agent.theme}-50 border-${agent.theme}-200 shadow-sm`
                    : `hover:bg-${agent.theme}-50/50`
                  : 'opacity-80 cursor-not-allowed'
              }`}
            >
              <div className="relative">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={48}
                  height={48}
                  className={`rounded-full ${!agent.available && 'blur-[4px] grayscale'}`}
                  priority
                  onError={(e) => {
                    const imgElement = e.target as HTMLImageElement;
                    imgElement.src = '/img/female.png';
                  }}
                />
                {!agent.available && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-gray-500 bg-white/90 px-2 py-0.5 rounded-full">
                      SOON
                    </span>
                  </div>
                )}
              </div>
              <div className="text-left flex-1">
                <div className="font-medium text-gray-900 flex items-center justify-between">
                  {agent.name}
                  {!agent.available && (
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{agent.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white/70 backdrop-blur-md relative h-[calc(100vh-64px)] md:h-screen">
        <div className="p-4 border-b flex justify-between items-center gap-4" 
          style={{ borderColor: currentTheme.border }}
        >
          <div>
            <h2 className="text-xl font-semibold" style={{ color: currentTheme.primary }}>
              Your Safe Space
            </h2>
            <p className="text-sm text-gray-500">
              Chatting with {selectedAgent === 'female' ? 'Sarah' : 'David'}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {messages.length > 0 && (
              <motion.button
                onClick={clearChat}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2"
                style={{ 
                  borderColor: currentTheme.border,
                  color: currentTheme.primary
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: currentTheme.light
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Clear History
              </motion.button>
            )}
            <Link
              href="/"
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 flex items-center gap-2"
              style={{ 
                borderColor: currentTheme.border,
                color: currentTheme.primary
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Home
            </Link>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 relative">
          <AnimatePresence mode="wait">
            {messages.length === 0 ? (
              <WelcomeScreen 
                key="welcome"
                agent={agents.find(a => a.id === selectedAgent) as Agent} 
                theme={currentTheme}
              />
            ) : (
              <motion.div 
                key="messages"
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {messages.map((message) => (
                  <ChatMessage 
                    key={message.id} 
                    message={{
                      ...message,
                      timestamp: new Date()
                    }}
                    theme={currentTheme}
                    agentImage={agents.find(a => a.id === selectedAgent)?.image || ''}
                    agentName={agents.find(a => a.id === selectedAgent)?.name || ''}
                  />
                ))}
                <div ref={messagesEndRef} />
                
                {isLoading && (
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.div 
                      className="rounded-2xl px-4 py-2"
                      style={{ backgroundColor: currentTheme.light }}
                      animate={{
                        scale: [1, 1.02, 1],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                        },
                      }}
                    >
                      <div className="flex space-x-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: currentTheme.primary }}
                            animate={{
                              y: ["0%", "-50%", "0%"],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.15,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4 border-t" style={{ borderColor: currentTheme.border }}>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-full px-4 py-2 bg-white border focus:outline-none focus:ring-2 transition-all"
              style={{
                borderColor: currentTheme.border,
                '--tw-ring-color': `${currentTheme.secondary}33`,
                '--tw-ring-opacity': 0.2
              } as React.CSSProperties}
            />
            <motion.button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 rounded-full text-white transition-colors duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: currentTheme.primary
              }}
              whileHover={{ backgroundColor: currentTheme.hover }}
            >
              <span>Send</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )
} 