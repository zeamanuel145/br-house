"use client"

import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { rooms, companyInfo } from "../lib/data"

export function RoomGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const controls = useAnimationControls()
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedRooms = [...rooms, ...rooms]

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: [0, -50 * rooms.length * 20],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 150,
            ease: "linear",
          },
        },
      })
    } else {
      controls.stop()
    }
  }, [isPaused, controls])

  const handleHover = (id: string | null) => {
    setHoveredId(id)
    setIsPaused(id !== null)
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8f8f6] overflow-hidden">
      <div className="px-8 md:px-12 lg:px-16 mb-10">
        <span className="text-sm text-[#666666] tracking-wide">Gallery</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#111111] mt-4 leading-[1.1]">
          {companyInfo.galleryTitle.split(" ").slice(0, 2).join(" ")}
          <br />
          {companyInfo.galleryTitle.split(" ").slice(2).join(" ")}
        </h2>
        <p className="mt-6 text-[#666666] text-sm md:text-base max-w-md leading-relaxed">
          {companyInfo.galleryDescription}
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-5"
          animate={controls}
          style={{ width: "fit-content" }}
        >
          {duplicatedRooms.map((room, index) => (
            <motion.div
              key={`${room.id}-${index}`}
              className="relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px] cursor-pointer"
              onMouseEnter={() => handleHover(room.id)}
              onMouseLeave={() => handleHover(null)}
              animate={{
                scale: hoveredId === room.id ? 1.05 : 1,
                zIndex: hoveredId === room.id ? 10 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href={`/rooms/${room.id}`} className="block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === room.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Info Panel */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredId === room.id ? 1 : 0,
                      y: hoveredId === room.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                      {room.category}
                    </span>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {room.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-3">
                      {room.description}
                    </p>
                    <div className="flex items-center justify-between">
                    
                      <span className="text-sm text-white font-medium flex items-center gap-1">
                        View Details
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
