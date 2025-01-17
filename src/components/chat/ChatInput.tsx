'use client'
import { useState } from 'react'

type ChatInputProps = {
  onSendMessage: (message: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded-full px-4 py-2 bg-white border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300 flex items-center gap-2"
      >
        <span>Send</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>
    </form>
  )
} 