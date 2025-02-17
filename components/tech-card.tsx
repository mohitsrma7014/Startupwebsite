"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TechCardProps {
  name: string
  category: string
  icon: string
}

export function TechCard({ name, category, icon }: TechCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-lg p-6 shadow-lg flex items-center">
      <Image src={icon || "/placeholder.svg"} alt={name} width={64} height={64} className="mr-4" />
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-400">{category}</p>
      </div>
    </motion.div>
  )
}

