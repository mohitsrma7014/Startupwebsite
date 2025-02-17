"use client"

import { motion } from "framer-motion"

const timelineEvents = [
  { year: 2023, event: "NexaInnovate founded by Mohit Sharma and Sourabh Chouchan" },
  { year: 2023, event: "Launched first AI-powered web application" },
  { year: 2023, event: "Completed our first industrial design project" },
  { year: 2024, event: "Expanded team to include expert developers and designers" },
  { year: 2024, event: "Introduced educational programs for aspiring tech professionals" },
  { year: 2025, event: "Projected: Reach 50+ clients milestone" },
]

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          className="relative mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
            <div className="w-1/2"></div>
            <div className="w-6 h-6 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="w-1/2 p-4 glassmorphism">
              <h3 className="text-xl font-bold">{event.year}</h3>
              <p>{event.event}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

