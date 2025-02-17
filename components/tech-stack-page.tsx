"use client"

import { motion } from "framer-motion"
import { TechCard } from "@/components/tech-card"

const techStack = [
  { name: "Django", category: "Backend", icon: "/tech/django.svg" },
  { name: "Python", category: "Backend", icon: "/tech/python.svg" },
  { name: "React", category: "Frontend", icon: "/tech/react.svg" },
  { name: "TensorFlow", category: "AI", icon: "/tech/tensorflow.svg" },
  { name: "OpenAI", category: "AI", icon: "/tech/openai.svg" },
  { name: "Jupyter", category: "Data Science", icon: "/tech/jupyter.svg" },
  { name: "SolidWorks", category: "CAD", icon: "/tech/solidworks.svg" },
  { name: "AutoCAD", category: "CAD", icon: "/tech/autocad.svg" },
  { name: "Canva", category: "Design", icon: "/tech/canva.svg" },
]

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8">Our Tech Stack</h1>
        <p className="text-xl mb-12">
          At NexaInnovate, we leverage cutting-edge technologies to deliver innovative solutions across various domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

