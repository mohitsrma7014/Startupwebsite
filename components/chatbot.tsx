"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I assist you today?", isUser: false },
  ])
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }])
      // Here you would typically send the message to a backend API
      // and get a response. For this example, we'll just echo the message.
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: `You said: ${input}`, isUser: false }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-4 mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">Chat with our AI</h2>
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${message.isUser ? "bg-blue-600 ml-auto" : "bg-gray-700"} max-w-[80%]`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 bg-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md transition duration-300 ease-in-out"
        >
          Send
        </button>
      </form>
    </motion.div>
  )
}

