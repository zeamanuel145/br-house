import { Globe } from "lucide-react"
import { stats, companyInfo } from "../lib/data"

export function AboutSection() {
  return (
    <section className="bg-[#f8f8f6] py-20 md:py-28 lg:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:gap-24">
          {/* Label */}
          <div className="mb-6 lg:mb-0 lg:w-[120px] shrink-0">
            <span className="text-sm text-[#666666]">About</span>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-[-0.01em] text-[#111111] leading-[1.1]">
              {companyInfo.aboutTitle.split(" ").slice(0, 3).join(" ")}
              <br />
              {companyInfo.aboutTitle.split(" ").slice(3).join(" ")}
            </h2>

            <p className="mt-8 text-[#666666] text-sm md:text-base leading-relaxed max-w-xl">
              {companyInfo.aboutDescription}
            </p>

            {/* Explore more button */}
            <button
              type="button"
              className="mt-8 flex items-center gap-2 text-[#111111] text-sm font-medium group"
            >
              <span className="w-8 h-8 rounded-full border border-[#cccccc] flex items-center justify-center group-hover:border-[#111111] transition-colors">
                <Globe className="w-4 h-4" />
              </span>
              <span>Explore more</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="aspect-square rounded-full border border-[#e0e0e0] flex flex-col items-center justify-center p-6 text-center"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#111111]">
                  {stat.value}
                </span>
                <p className="mt-3 text-xs md:text-sm text-[#666666] leading-relaxed max-w-[140px]">
                  <span className="text-[#111111]">{stat.label}</span> {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
