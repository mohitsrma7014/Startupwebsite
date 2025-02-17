"use client"

import { motion } from "framer-motion"

interface TestimonialProps {
  name: string
  role: string
  content: string
}

export function Testimonial({ name, role, content }: TestimonialProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <p className="text-gray-300 mb-4">&ldquo;{content}&rdquo;</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-gray-400">{role}</p>
      </div>
    </motion.div>
  )
}

