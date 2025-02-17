"use client"

import type React from "react"
import Navbar from "./navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent text-foreground">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  )
}

