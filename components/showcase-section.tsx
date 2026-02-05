import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { projects, companyInfo } from "../lib/data"

export function ShowcaseSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-24">
          {/* Label */}
          <div className="mb-6 lg:mb-0 lg:w-[120px] shrink-0">
            <span className="text-sm text-[#666666]">Showcase</span>
          </div>

          {/* Title and Description */}
          <div className="flex-1 max-w-2xl">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-[-0.01em] text-[#111111] leading-[1.1]">
              {companyInfo.showcaseTitle.split(",")[0]},
              <br />
              {companyInfo.showcaseTitle.split(",")[1]?.trim()}
            </h2>

            <p className="mt-6 text-[#666666] text-sm md:text-base leading-relaxed max-w-md">
              {companyInfo.showcaseDescription}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-6 lg:mt-0">
            <Button
              variant="outline"
              className="rounded-full px-6 py-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors bg-transparent"
            >
              Check the house
            </Button>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 md:mt-20 lg:mt-24 space-y-16 md:space-y-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col gap-8 md:gap-12 ${
                project.imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image */}
              <div className="lg:w-[55%]">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[45%] flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-[-0.01em] text-[#111111]">
                  {project.title}
                </h3>

                <p className="mt-4 text-[#666666] text-sm md:text-base leading-relaxed max-w-md">
                  {project.description}
                </p>

                {/* View project button */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
