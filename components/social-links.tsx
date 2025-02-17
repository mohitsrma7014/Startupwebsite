"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "LinkedIn", icon: LinkedIn, url: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold mb-4">Connect with us</h2>
      <div className="flex space-x-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <link.icon size={24} />
            <span className="sr-only">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

