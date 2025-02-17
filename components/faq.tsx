"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQProps {
  faqs: { question: string; answer: string }[]
}

export function FAQ({ faqs }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
          <button
            className="w-full text-left p-4 focus:outline-none"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 pt-0 text-gray-300">{faq.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

