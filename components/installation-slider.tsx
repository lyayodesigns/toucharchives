"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const installations = [
  {
    name: "Dartmouth College",
    image: "/interactive-touchscreen-display-showing-historical.jpg",
  },
  {
    name: "Emory University",
    image: "/modern-touchscreen-display-wall-mounted-showing-di.jpg",
  },
  {
    name: "Fairborn High School",
    image: "/digital-display-showing-legacy-and-achievements.jpg",
  },
  {
    name: "Harding Academy",
    image: "/digital-archive-management-system-on-laptop.jpg",
  },
  {
    name: "Heritage Museum",
    image: "/interactive-touchscreen-display-showing-historical.jpg",
  },
  {
    name: "State University",
    image: "/modern-touchscreen-display-wall-mounted-showing-di.jpg",
  },
]

export function InstallationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (installations.length - itemsPerView + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + (installations.length - itemsPerView + 1)) % (installations.length - itemsPerView + 1),
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">1,000+ Installations - 50 States</h2>
          <p className="text-gray-600 text-lg">
            Browse through our most recent halls of fame installations across various educational institutions
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-900 shadow-lg"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-900 shadow-lg"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {installations.map((installation, idx) => (
                <div key={idx} className="flex-shrink-0" style={{ width: `calc(${100 / itemsPerView}% - 1rem)` }}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
                    <Image
                      src={installation.image || "/placeholder.svg"}
                      alt={installation.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold">{installation.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: installations.length - itemsPerView + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-blue-900" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
