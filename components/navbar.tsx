"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="h-6 w-1 bg-orange-500" />
            <span className="text-lg font-semibold text-gray-900">Touchscreen Software by Touchstone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </Link>
            <Link
              href="/touchscreen-software"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Touchscreen Software
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Blog
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Book A Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/touchscreen-software"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              >
                Touchscreen Software
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
              >
                Blog
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Book A Demo</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
