"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export default function TouchscreenSoftwarePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const horizontalInstallations = [
    {
      name: "Metropolitan University",
      image: "/installations/installation-horizontal (1).jpg",
    },
    {
      name: "Heritage Museum",
      image: "/installations/installation-horizontal (2).jpg",
    },
    {
      name: "Community Arts Center",
      image: "/installations/installation-horizontal (3).jpg",
    },
  ]

  const verticalInstallations = [
    {
      name: "State Athletic Hall",
      image: "/installations/installation-vertical (1).jpg",
    },
    {
      name: "Academic Library",
      image: "/installations/installation-vertical (2).jpg",
    },
    {
      name: "Cultural Heritage Center",
      image: "/installations/installation-vertical (1).jpeg",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1
              className={`text-4xl lg:text-6xl font-bold leading-tight text-balance transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Interactive Digital Wall of Fame & Touchscreen Software
            </h1>
            <p
              className={`text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto text-pretty transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Preserve your legacy with engaging touchscreen technology. Create interactive displays that honor
              achievements, celebrate history, and tell compelling stories that captivate every visitor.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Link href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=webtoucharchive&month=2025-12" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                >
                  Schedule a Demo
                </Button>
              </Link>
              <Link href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=webtoucharchive&month=2025-12" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-7 text-lg bg-transparent transition-all duration-300 hover:scale-105"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="container mx-auto px-4 mt-16">
          <div
            className={`relative h-[400px] lg:h-[600px] max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Image
              src="/Touchstone Kiosk.jpg"
              alt="Interactive Digital Wall of Fame Display"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Touchscreen Hall of Fame */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
                Touchscreen Hall of Fame
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Bring your Hall of Fame to life with interactive touchscreen displays that showcase inductee profiles,
                achievements, photos, and videos. Engage visitors with dynamic content that tells the complete story of
                excellence and achievement.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Interactive inductee profiles with rich media",
                  "High-resolution photos and video galleries",
                  "Detailed achievement timelines and statistics",
                  "Search and filter capabilities",
                  "Custom branding and design options",
                  "Easy content management system",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-xl group">
              <Image
                src="/Touchscreen Floor Standing Kiosk.jpg"
                alt="Interactive Hall of Fame Display"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 2 - Legacy Celebration */}
      <AnimatedSection className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="relative h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-xl order-2 lg:order-1 group">
              <Image
                src="/TDS Install - Brown Football.jpeg"
                alt="Legacy Celebration Display"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
                Legacy Celebration
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Preserve and celebrate your athletic, academic, or organizational history with Touchstone. Create an
                immersive digital experience that honors your heritage and inspires future generations.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Enhanced visitor engagement and interaction",
                  "Compelling storytelling through multimedia",
                  "Fully customizable design and layout",
                  "Preserve institutional memory digitally",
                  "Scalable for organizations of any size",
                  "Cloud-based for easy updates",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 3 - Complete Solution */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
                Complete Solution
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Touchstone provides an end-to-end solution for your digital recognition needs. From software and
                hardware to installation and ongoing support, we handle everything so you can focus on honoring your
                community.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Intuitive touchscreen software platform",
                  "Compatible with all major hardware brands",
                  "Professional installation and setup services",
                  "Comprehensive training and documentation",
                  "Dedicated ongoing technical support",
                  "Regular software updates and improvements",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] lg:h-[550px] rounded-xl overflow-hidden shadow-xl group">
              <Image
                src="/Wall-mounted_Touchscreen.jpg"
                alt="Complete Software Solution"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Showcase / Installations Section */}
      <AnimatedSection className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">Featured Installations</h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                See how institutions across the country are using Touchstone to create engaging digital experiences
              </p>
            </div>

            {/* Horizontal Images Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {horizontalInstallations.map((installation, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in-up hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="relative h-[280px] overflow-hidden group">
                    <Image
                      src={installation.image || "/placeholder.svg"}
                      alt={installation.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical Images Row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {verticalInstallations.map((installation, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-300 opacity-0 animate-fade-in-up hover:-translate-y-2"
                  style={{ animationDelay: `${(idx + 3) * 100}ms`, animationFillMode: "forwards" }}
                >
                  <div className="relative h-[380px] overflow-hidden group">
                    <Image
                      src={installation.image || "/placeholder.svg"}
                      alt={installation.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-balance">
              Ready to Transform Your Recognition Display?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed text-pretty">
              Schedule a demo today and discover how Touchstone can help you create an engaging, interactive experience
              that honors your legacy and inspires your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=webtoucharchive&month=2025-12" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                >
                  Schedule Your Demo
                </Button>
              </Link>
              <Link href="https://calendly.com/touchstone-ds/custom-guided-tour?utm_source=webtoucharchive&month=2025-12" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-7 text-lg bg-transparent transition-all duration-300 hover:scale-105"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-20 lg:py-28 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </section>
  )
}
