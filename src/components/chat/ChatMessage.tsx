import { Message } from 'ai'
import { motion } from 'framer-motion'
import Image from 'next/image'

type MessageProps = {
  message: Message & {
    timestamp?: Date
  }
  theme: {
    primary: string
    secondary: string
    light: string
    border: string
    hover: string
  }
  agentImage: string
  agentName: string
}

export default function ChatMessage({ message, theme, agentImage, agentName }: MessageProps) {
  const isUser = message.role === 'user'

  return (
    <motion.div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end gap-2`}
      initial={{ 
        opacity: 0, 
        y: 20,
        scale: 0.95,
        x: isUser ? 20 : -20 
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        x: 0 
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      {!isUser && (
        <div className="flex-shrink-0">
          <Image
            src={agentImage}
            alt={agentName}
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      )}
      
      <motion.div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser ? 'text-white ml-12' : 'text-gray-800'
        }`}
        style={{
          backgroundColor: isUser ? theme.primary : theme.light
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <p className="text-sm sm:text-base">{message.content}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp?.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      </motion.div>
    </motion.div>
  )
} 