"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Zap, Shield, Cpu, ArrowRight, Code, Lightbulb, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial color="#4B0082" attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
        </div>
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            LavaInnovate: Your Vision, Our Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Turning Ideas into Reality. We bridge the gap between imagination and execution, providing tailor-made
            technological solutions for businesses, entrepreneurs, and startups.
          </p>
          <div className="animate-fade-in-up">
            <Link href="/contact">
              <Button size="lg" className="mr-4">
                Get Started
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose LavaInnovate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Versatile Expertise",
                description:
                  "We adapt to your needs, offering solutions across multiple domains, from AI to web development and design.",
              },
              {
                icon: Shield,
                title: "Security First",
                description:
                  "Your data and intellectual property are our top priorities, ensuring compliance and reliability.",
              },
              {
                icon: Cpu,
                title: "Custom Development",
                description: "Every project is unique—our solutions are crafted to fit your exact requirements.",
              },
              {
                icon: Code,
                title: "Agile & Scalable",
                description: "Whether you're a startup or an enterprise, our solutions evolve and grow with you.",
              },
              {
                icon: Lightbulb,
                title: "Innovative Approach",
                description: "We blend technology, creativity, and strategy to deliver cutting-edge results.",
              },
              {
                icon: Rocket,
                title: "Transparent Workflow",
                description: "From consultation to deployment, we maintain clear communication with our clients.",
              },
            ].map((feature, index) => (
              <div key={index} className="glassmorphism p-6 animate-fade-in-up">
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Sphere args={[1, 100, 200]} scale={2}>
                  <MeshDistortMaterial color="#FF4500" attach="material" distort={0.3} speed={1.5} />
                </Sphere>
              </Canvas>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">Innovate with Us</h2>
              <p className="text-xl mb-6">
                At LavaInnovate, we're a dynamic freelancing-driven tech company committed to delivering cutting-edge
                solutions tailored to your specific needs. Our diverse team of engineers, designers, and strategists
                brings fresh perspectives to every project, ensuring unique and effective outcomes.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

