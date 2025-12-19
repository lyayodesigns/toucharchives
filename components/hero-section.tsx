"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className={`flex items-center gap-2 transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="h-8 w-1 bg-accent" />
              <span className="text-xl font-semibold">Touch Archive</span>
            </div>
            <h1
              className={`text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              Digital Hall of Fame & Interactive Recognition Display
            </h1>
            <p
              className={`text-lg lg:text-xl text-white/90 text-pretty transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Transform your hall of fame, awards, and achievements into an engaging digital touchscreen experience. Our
              interactive recognition platform honors your community's legacy with modern technology that captivates
              visitors and preserves your institution's most valuable members.
            </p>
            <div
              className={`transition-all duration-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
              >
                Get a Free Demo
              </Button>
            </div>
          </div>
          <div
            className={`relative h-[400px] lg:h-[600px] w-full transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Image
              src="/modern-touchscreen-display-wall-mounted-showing-di.jpg"
              alt="Digital Hall of Fame Touchscreen Display"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
