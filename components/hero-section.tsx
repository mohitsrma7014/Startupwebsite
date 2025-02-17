"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const words = ["Innovate.", "Automate.", "Elevate."]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl mb-12"
        >
          Empowering businesses with cutting-edge technology and visionary design.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
        >
          Discover Our Solutions
        </motion.button>
      </div>
    </section>
  )
}

