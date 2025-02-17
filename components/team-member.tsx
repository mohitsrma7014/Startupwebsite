"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import type { Mesh } from "three"
import * as THREE from "three"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

function ImageFrame({ imageUrl }: { imageUrl: string }) {
  const meshRef = useRef<Mesh>(null)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    loader.load(
      imageUrl,
      (loadedTexture) => {
        setTexture(loadedTexture)
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error)
        // Load a placeholder texture or set a default color
        setTexture(null)
      },
    )
  }, [imageUrl])

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 3]} />
        <meshStandardMaterial
          map={texture}
          color={texture ? undefined : "#4B0082"} // Use a default color if texture fails to load
          transparent={true}
          opacity={1}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </Float>
  )
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  const fallbackImage = "/placeholder.svg"
  const [imageUrl, setImageUrl] = useState(image)

  useEffect(() => {
    const img = new Image()
    img.src = image
    img.onerror = () => {
      console.warn(`Failed to load image: ${image}. Using fallback.`)
      setImageUrl(fallbackImage)
    }
  }, [image])

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="glassmorphism p-6 relative min-h-[400px]">
      <div className="flex flex-col items-center mb-6">
        <div className="w-[300px] h-[300px] relative mb-6">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <ImageFrame imageUrl={imageUrl} />
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
        <div className="text-center">
          <motion.h3
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {role}
          </motion.p>
        </div>
      </div>
      <motion.p
        className="text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {bio}
      </motion.p>
    </motion.div>
  )
}

