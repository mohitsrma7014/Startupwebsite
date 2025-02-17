import "./globals.css"
import { Inter } from "next/font/google"
import Layout from "@/components/layout"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NexaInnovate - Innovate. Automate. Elevate.",
  description:
    "NexaInnovate is a tech and design startup providing services in web development, AI/ML solutions, industrial automation, CAD modeling, content creation, and education.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}



import './globals.css'