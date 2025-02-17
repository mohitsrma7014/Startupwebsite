"use client"

import { motion } from "framer-motion"
import { CourseCard } from "@/components/course-card"
import { Testimonial } from "@/components/testimonial"
import { FAQ } from "@/components/faq"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from "@react-three/drei"

const courses = [
  {
    title: "AI & Machine Learning Fundamentals",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    image: "/courses/ai-ml.jpg",
  },
  {
    title: "Advanced Data Science with Python",
    duration: "10 weeks",
    level: "Intermediate to Advanced",
    image: "/courses/data-science.jpg",
  },
  {
    title: "Industrial CAD & 3D Modeling Masterclass",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    image: "/courses/cad.jpg",
  },
  {
    title: "IoT and Smart Systems Design",
    duration: "8 weeks",
    level: "Intermediate",
    image: "/courses/iot.jpg",
  },
]

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Data Scientist",
    content:
      "The AI & Machine Learning course provided an excellent foundation for my career in data science. The instructors were knowledgeable and supportive throughout the program.",
  },
  {
    name: "Emily Chen",
    role: "Product Designer",
    content:
      "The CAD & 3D Modeling Masterclass was exactly what I needed to take my design skills to the next level. The hands-on projects were challenging and rewarding.",
  },
  {
    name: "Michael Brown",
    role: "IoT Developer",
    content:
      "The IoT and Smart Systems Design course opened up a whole new world of possibilities for me. I now feel confident in developing innovative IoT solutions.",
  },
]

const faqs = [
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes, most of our courses are designed to accommodate beginners, with some offering more advanced content for experienced professionals. Each course description includes the recommended skill level.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "While we don't guarantee job placement, we do offer career support, including resume reviews, interview preparation, and networking opportunities with our industry partners. Many of our students have successfully transitioned into new roles after completing our programs.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. Please check the individual course descriptions for specific requirements. For most beginner-level courses, a basic understanding of programming concepts is helpful but not mandatory.",
  },
  {
    question: "Can I access the course materials after completing the program?",
    answer:
      "Yes, you will have lifetime access to the course materials after completion. This allows you to revisit the content and stay updated with any future course improvements or additions.",
  },
]

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold mb-8">Education & Training</h1>

        <div className="relative h-64 mb-12">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial color="#4B0082" attach="material" distort={0.3} speed={1.5} />
            </Sphere>
            <Text position={[0, 0, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
              Empower Your Future
            </Text>
          </Canvas>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 glassmorphism p-8"
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
              <h2 className="text-3xl font-bold mb-4">Why Learn with Us?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Industry-experienced instructors</li>
                <li>Hands-on, project-based learning</li>
                <li>Small class sizes for personalized attention</li>
                <li>Flexible learning options (online and in-person)</li>
                <li>Career support and networking opportunities</li>
                <li>Cutting-edge curriculum updated regularly</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Testimonial {...testimonial} />
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Skills?</h2>
          <p className="text-xl mb-8">
            Enroll in one of our courses today and take the first step towards advancing your career in tech and design.
          </p>
          <motion.button
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Courses
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

