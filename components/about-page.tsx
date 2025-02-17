"use client"

import { motion } from "framer-motion"
import { TeamMember } from "@/components/team-member"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mohit Sharma",
      role: "Co-Founder & CEO",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image0%20(4)-ewc2UdcqhyKJazEDTCsCb4zQsZXDLO.jpeg",
      bio: "AI & Data Science Specialist | Passionate about turning complex challenges into AI-driven solutions that enhance business growth and efficiency.",
    },
    {
      name: "Sourabh Chouchan",
      role: "Co-Founder & CTO",
      image: "/placeholder.svg",
      bio: "Innovative Product Designer | Specializing in industrial design, 3D modeling, and UI/UX for seamless digital experiences.",
    },
  ]

  const expertise = [
    "Artificial Intelligence & Data Science",
    "Machine Learning & Deep Learning",
    "Computer Vision & Image Processing",
    "Natural Language Processing (NLP)",
    "Predictive Analytics & Data Insights",
    "AI Chatbots & Virtual Assistants",
    "Full-Stack Web & Mobile App Development",
    "API Development & Integration",
    "Cloud-Native Solutions",
    "DevOps & Continuous Deployment",
    "Blockchain & Smart Contracts",
    "UI/UX Design & Prototyping",
    "3D Modeling & CAD Design",
    "Motion Graphics & Visual Effects",
    "Industrial Prototyping & Manufacturing Support",
    "Embedded Systems & Smart Devices",
    "Industrial IoT (IIoT) Solutions",
    "Robotics & Process Automation",
    "Home & Office Automation",
  ]

  const technologies = [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenCV",
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "Next.js",
    "FastAPI",
    "AWS",
    "Google Cloud",
    "Azure",
    "Docker",
    "Kubernetes",
    "SolidWorks",
    "AutoCAD",
    "Blender",
    "Fusion 360",
    "Adobe Suite",
  ]

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8">About LavaInnovate</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6"
            >
              Founded in 2025, LavaInnovate is a dynamic freelancing-driven tech company committed to delivering
              cutting-edge solutions tailored to your specific needs. Unlike conventional AI or industrial design firms,
              we specialize in flexible, client-driven innovation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl mb-6"
            >
              Our diverse team of engineers, designers, and strategists brings fresh perspectives to every project,
              ensuring unique and effective outcomes. We bridge the gap between imagination and execution, providing
              tailor-made technological solutions for businesses, entrepreneurs, and startups.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg">Work With Us</Button>
              </Link>
            </motion.div>
          </div>
          <div className="relative h-96">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial color="#4B0082" attach="material" distort={0.3} speed={1.5} />
              </Sphere>
              <Text position={[0, 0, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
                LavaInnovate
              </Text>
            </Canvas>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-6 mt-16"
        >
          Our Visionary Founders
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold mb-6 mt-16"
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glassmorphism p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glassmorphism p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 glassmorphism p-8"
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-xl">
            We envision a future where technology seamlessly integrates into every aspect of business and daily life.
            LavaInnovate is committed to making cutting-edge technology accessible, adaptable, and impactful for
            businesses of all sizes. We believe in building solutions that not only solve problems but also create
            opportunities for innovation and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-xl mb-8">
            Join us on our journey to shape the future of technology. Let's create something extraordinary together.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

