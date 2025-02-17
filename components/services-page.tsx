"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/service-card"
import { Code, Database, Cpu, PenTool, Video, FileText, Palette, Zap, Layers, Cloud } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

export default function ServicesPage() {
  const techServices = [
    {
      icon: Code,
      title: "AI-Enhanced Web & App Development",
      description: "Smart applications powered by AI and modern frameworks.",
    },
    {
      icon: Cpu,
      title: "Machine Learning & Automation",
      description: "Custom ML models to optimize workflows and predict trends.",
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Actionable insights through Jupyter dashboards and AI-driven analytics tools.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable and secure architectures for startups and enterprises.",
    },
  ]

  const designServices = [
    {
      icon: PenTool,
      title: "3D Modeling & Industrial Design",
      description: "High-precision modeling for manufacturing and product design.",
    },
    { icon: Zap, title: "Rapid Prototyping", description: "Fast and efficient concept-to-prototype transformations." },
    {
      icon: Layers,
      title: "IoT Integration",
      description: "Connecting products with smart technologies for seamless automation.",
    },
    {
      icon: Palette,
      title: "User-Centric UI/UX",
      description: "Creating intuitive and aesthetically pleasing interfaces for web and mobile apps.",
    },
  ]

  const creativeServices = [
    {
      icon: Video,
      title: "Motion Graphics & Animation",
      description: "Engaging visual storytelling for products and brands.",
    },
    {
      icon: FileText,
      title: "Technical Content & Documentation",
      description: "Well-structured guides, research papers, and product manuals.",
    },
    {
      icon: Palette,
      title: "Brand Identity & Digital Marketing",
      description: "Helping startups build a unique and compelling brand presence.",
    },
  ]

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tech & AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Design & Prototyping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Creative & Digital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glassmorphism p-8"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Sphere args={[1, 100, 200]} scale={1.5}>
                  <MeshDistortMaterial color="#00BFFF" attach="material" distort={0.3} speed={1.5} />
                </Sphere>
              </Canvas>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Work Process</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Initial Consultation</li>
                <li>Strategic Planning</li>
                <li>Design & Development</li>
                <li>Quality Assurance & Testing</li>
                <li>Deployment & Launch</li>
                <li>Ongoing Support & Maintenance</li>
              </ol>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">Let's collaborate to transform your ideas into real-world solutions.</p>
          <motion.button
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

