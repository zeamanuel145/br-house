"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { AboutSection } from "../components/about-section"
import { ShowcaseSection } from "../components/showcase-section"
import { RoomGallery } from "../components/room-gallery"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.4,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const, // fixed with as const
    },
  },
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="relative min-h-screen bg-[#f8f8f6] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="relative z-10 w-full lg:w-[45%] flex flex-col justify-start px-8 md:px-12 lg:px-16 pt-8 md:pt-12 lg:pt-16 pb-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-0"
          >
            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-normal tracking-[-0.01em] text-[#111111] leading-[1.05]"
            >
              <span className="block">DISCOVER THE SPACE</span>
              <span className="block">YOU BELONG TO</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-8 md:mt-10 text-[#666666] text-sm leading-relaxed max-w-[300px]"
            >
              A new land for a new beginning. Designed for those who seek
              harmony between space, style, and substance.
            </motion.p>

            {/* Search Bar */}
            <motion.div variants={itemVariants} className="mt-6 md:mt-8 max-w-[240px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 pl-4 pr-10 bg-transparent border-b border-[#cccccc] focus:border-[#111111] outline-none transition-colors text-[#111111] text-sm placeholder:text-[#999999]"
                />
                <button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-1"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 text-[#666666]" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full lg:w-[55%] min-h-[50vh] lg:min-h-screen">
          <Image
            src="/images/house-5.png"
            alt="Modern multi-story residential building with balconies"
            fill
            className="object-cover object-center lg:object-left-top"
            priority
          />
        </div>
      </div>
      <AboutSection />
      <RoomGallery />
      <ShowcaseSection />
    </main>
  )
}