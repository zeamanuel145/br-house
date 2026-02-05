import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { getRoomById } from "../../../lib/data"

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const room = getRoomById(id)

  if (!room) {
    return (
      <div className="min-h-screen bg-[#f8f8f6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-[#111111] mb-4">Room not found</h1>
          <Link href="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#f8f8f6]">
      {/* Back Button */}
      <div className="px-8 md:px-12 lg:px-16 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#111111] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
      </div>

      <div className="px-8 md:px-12 lg:px-16 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src={room.image || "/placeholder.svg"}
              alt={room.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#666666] bg-[#e8e8e6] rounded-full w-fit mb-6">
              {room.category}
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-[#111111] leading-[1.1] mb-6">
              {room.title}
            </h1>

            <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-8">
              {room.fullDescription}
            </p>

            <div className="flex items-center gap-4 mb-10">
              <span className="text-sm text-[#999999]">Area</span>
              
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-sm font-medium text-[#111111] mb-4 uppercase tracking-wide">
                Features
              </h3>
              <div className="flex flex-wrap gap-3">
                {room.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 text-sm text-[#555555] border border-[#d0d0d0] rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
           
          </div>
        </div>
      </div>
    </main>
  )
}
