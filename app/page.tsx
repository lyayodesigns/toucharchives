"use client"

import type React from "react"

import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { InstallationGallery } from "@/components/installation-gallery"
import { InstallationSlider } from "@/components/installation-slider"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div
              className={`flex items-center justify-center gap-2 mb-4 transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-8 w-1 bg-orange-500" />
              <span className="text-xl font-semibold">Touch Archive</span>
            </div>
            <h1
              className={`text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Digital Touchscreen Archive & Recognition Display
            </h1>
            <p
              className={`text-lg lg:text-xl text-blue-100 text-pretty max-w-3xl mx-auto transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Transform your historical archives and achievements into an interactive digital experience. Preserve your
              legacy with modern touchscreen technology that engages visitors and honors your community's most valuable
              members.
            </p>
            <div
              className={`transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
              >
                Get a Free Demo
              </Button>
            </div>
            <div
              className={`relative h-[400px] lg:h-[500px] w-full mt-12 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <Image
                src="/modern-touchscreen-display-wall-mounted-showing-di.jpg"
                alt="Touch Archive Display"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">The Easiest Touchscreen Solution</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Choose the perfect setup for your space</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Wall Mounted", icon: "🖼️" },
              { title: "Enclosure", icon: "📺" },
              { title: "Floor Kiosk", icon: "🏛️" },
              { title: "Custom", icon: "⚙️" },
              { title: "All You Need", icon: "✨" },
            ].map((solution, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full min-h-[180px]">
                  <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">{solution.icon}</div>
                  <h3 className="font-semibold text-lg">{solution.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 1 */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Interactive Digital Archive Display</h2>
              <p className="text-lg text-gray-600">
                Our touchscreen interactive archive software brings your historical collections and achievements to the
                modern era. Perfect for museums, libraries, universities, and organizations looking to showcase their
                legacy.
              </p>
              <ul className="space-y-4">
                {[
                  "Archive Collections",
                  "Historical Records",
                  "Achievement Showcases",
                  "Notable Members",
                  "Custom Layouts",
                  "Unlimited Categories",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg group">
              <Image
                src="/interactive-touchscreen-display-showing-historical.jpg"
                alt="Interactive Archive Display"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 2 - Reversed */}
      <AnimatedSection className="bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] order-2 lg:order-1 overflow-hidden rounded-lg group">
              <Image
                src="/digital-display-showing-legacy-and-achievements.jpg"
                alt="Legacy Display"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Showcase Your Legacy & Achievements</h2>
              <p className="text-lg text-gray-600">
                An interactive display through Touch Archive can be used for any type of recognition and preservation.
                This cloud-based system can be the home for all your historical content, achievements, and community
                milestones.
              </p>
              <ul className="space-y-4">
                {[
                  "Historical Archives",
                  "Community Achievements",
                  "Notable Members",
                  "Cultural Heritage",
                  "Custom Collections",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Feature Section 3 */}
      <AnimatedSection>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">All-in-One Digital Recognition Solution</h2>
              <p className="text-lg text-gray-600">
                Now that there are no limits on how many people you can honor in your facility, why not honor everyone?
                Touch Archive makes it easy to recognize an unlimited number of individuals and preserve countless
                historical records.
              </p>
              <ul className="space-y-4">
                {[
                  "Unlimited Data Entries",
                  "Easy Import from Spreadsheets",
                  "Safely Stored on Cloud Servers",
                  "Daily Automated Backups",
                  "Advanced Sorting & Filtering",
                  "Cross-Linked Content",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg group">
              <Image
                src="/digital-archive-management-system-on-laptop.jpg"
                alt="Digital Archive Solution"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Installation Gallery */}
      <InstallationGallery />

      {/* Testimonials Section */}
      <AnimatedSection className="bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What Users Are Saying About Touch Archive
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Touch Archive has transformed how we display our historical collections. Visitors are more engaged than ever before.",
                author: "Sarah Johnson",
                affiliation: "Museum Director, Heritage Museum",
              },
              {
                quote:
                  "The ease of updating our archive display is incredible. We can add new content in minutes without any technical expertise.",
                author: "Michael Chen",
                affiliation: "IT Director, State University",
              },
              {
                quote:
                  "Our community members love being able to explore our rich history on their own devices. The responsive design is perfect.",
                author: "Emily Rodriguez",
                affiliation: "Community Center Manager",
              },
            ].map((testimonial, idx) => (
              <Card
                key={idx}
                className="bg-white opacity-0 animate-fade-in-up hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "forwards" }}
              >
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.affiliation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">CONNECT WITH US TODAY</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Digital content is becoming more and more a part of how we preserve and share our history. Don't limit
              yourself with static displays that are expensive and difficult to update. Let Touch Archive build an
              interactive experience for you to engage and honor your community's most valuable members and
              achievements.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Installation Slider */}
      <InstallationSlider />
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
      className={`py-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </section>
  )
}
