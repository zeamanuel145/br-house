"use client"

import React from "react"

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { companyInfo } from "../lib/data"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-[#f8f8f6] py-20 md:py-28">
      <div className="px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-sm text-[#666666] tracking-wide">Contact</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-[-0.01em] text-[#111111] leading-[1.1] mt-4">
              LET'S START A
              <br />
              CONVERSATION
            </h2>
          </div>
          <p className="mt-6 lg:mt-0 text-[#666666] text-sm md:text-base leading-relaxed max-w-md">
            Ready to find your perfect space? Reach out to our team and
            let us help you discover the home you've been looking for.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-1">Email us</p>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-[#111111] text-lg hover:underline underline-offset-4"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-1">Call us</p>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-[#111111] text-lg hover:underline underline-offset-4"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-1">Visit us</p>
                <p className="text-[#111111] text-lg">
                  {companyInfo.address}
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="pt-6 border-t border-[#e0e0e0]">
              <p className="text-sm text-[#666666] mb-3">Office Hours</p>
              <div className="space-y-1">
                <p className="text-[#111111]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-[#111111]">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-[#666666]">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl">
            <h3 className="font-serif text-2xl text-[#111111] mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-[#666666] mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#f8f8f6] border-none rounded-lg text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#111111]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#666666] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#f8f8f6] border-none rounded-lg text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#111111]"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#666666] mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#f8f8f6] border-none rounded-lg text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#111111] resize-none"
                  placeholder="Tell us about your dream home..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#111111] text-white hover:bg-[#333333] rounded-full py-6 text-sm font-medium"
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
