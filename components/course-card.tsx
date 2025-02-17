"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CourseCardProps {
  title: string
  duration: string
  level: string
  image: string
}

export function CourseCard({ title, duration, level, image }: CourseCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">Duration: {duration}</p>
        <p className="text-gray-400">Level: {level}</p>
      </div>
    </motion.div>
  )
}

