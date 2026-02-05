"use client"

import React from "react"

import { Mail, Phone, MapPin, MessageCircle  } from "lucide-react"
import { companyInfo } from "../lib/data"


export function ContactSection() {

  return (
    <section className="bg-[#f8f8f6] py-20 md:py-28">
      <div className="px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-sm text-[#666666] tracking-wide">Contact</span>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-[-0.01em] text-[#111111] leading-[1.1] mt-4">
              LET&apos;S START A
              <br />
              CONVERSATION
            </h2>
          </div>
         
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */} 
          <div className="space-y-8 ">
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

            {/* WhatsApp */}
                <div className="flex items-start gap-4">  
              <div className="w-12 h-12 rounded-full border border-[#e0e0e0] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <p className="text-sm text-[#666666] mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111111] text-lg hover:underline underline-offset-4"
                >
                  {companyInfo.whatsapp}
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
            </div>
            <div>
            
          </div>
          </div>
        
      </div>
    </section>
  )
}
