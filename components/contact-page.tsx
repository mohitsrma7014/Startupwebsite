"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/contact-form"
import { Chatbot } from "@/components/chatbot"
import { SocialLinks } from "@/components/social-links"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from "@react-three/drei"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="relative h-64 mb-12">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial color="#4B0082" attach="material" distort={0.3} speed={1.5} />
            </Sphere>
            <Text position={[0, 0, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
              Let's Connect
            </Text>
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Chat with Us</h2>
            <Chatbot />
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4"></h2>
              <SocialLinks />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 glassmorphism p-8"
        >
          <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
          <p className="text-xl mb-4">
            Lavainnovate
            <br />
            123 Tech Avenue
            <br />
            City Alwar, 301001 State Rajasthan
            <br />
            India
          </p>
          <p className="text-xl">
            Email: info@Lavainnovate.com
            <br />
            Phone: +91 7014 028949
            <br />
            Phone: +91 9001 475882
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-xl mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help. Let's
            create something extraordinary together.
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

