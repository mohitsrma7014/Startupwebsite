"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
}

export function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-sm mb-2">{category}</span>
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

