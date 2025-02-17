"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from "@react-three/drei"

const projects = [
  {
    id: 1,
    title: "AI-Powered Inventory Management",
    category: "Tech",
    image: "/projects/inventory.jpg",
    description:
      "Developed an AI-driven inventory management system for a leading e-commerce platform, optimizing stock levels and reducing costs.",
  },
  {
    id: 2,
    title: "Smart Home Automation Hub",
    category: "Tech",
    image: "/projects/smart-home.jpg",
    description:
      "Created a centralized IoT hub for seamless integration of various smart home devices, enhancing user experience and energy efficiency.",
  },
  {
    id: 3,
    title: "Ergonomic Office Chair",
    category: "Design",
    image: "/projects/chair.jpg",
    description:
      "Designed an innovative ergonomic office chair, combining comfort with cutting-edge materials for improved posture and productivity.",
  },
  {
    id: 4,
    title: "Autonomous Drone Delivery System",
    category: "Tech",
    image: "/projects/drone.jpg",
    description:
      "Engineered an AI-powered autonomous drone delivery system, revolutionizing last-mile logistics for urban areas.",
  },
  {
    id: 5,
    title: "Immersive VR Training Platform",
    category: "Tech",
    image: "/projects/vr-training.jpg",
    description:
      "Developed a virtual reality training platform for industrial workers, enhancing safety and skill development through immersive simulations.",
  },
  {
    id: 6,
    title: "Sustainable Packaging Design",
    category: "Design",
    image: "/projects/packaging.jpg",
    description:
      "Created eco-friendly packaging solutions for a cosmetics brand, reducing environmental impact while maintaining product integrity.",
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8">Our Projects</h1>

        <div className="relative h-64 mb-12">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial color="#4B0082" attach="material" distort={0.3} speed={1.5} />
            </Sphere>
            <Text position={[0, 0, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
              Innovative Solutions
            </Text>
          </Canvas>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          {["All", "Tech", "Design"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-xl mb-8">
            Our team of experts is ready to help you create innovative solutions that will transform your business.
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

