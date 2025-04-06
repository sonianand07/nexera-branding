"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-purple-700">NexEra</span>
            <span className="text-xl font-medium">Branding</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Home
          </Link>
          <Link href="/services/logo-branding" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Logo & Branding
          </Link>
          <Link href="/services/ad-creative" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Ad Creative
          </Link>
          <Link href="/services/social-media" className="text-sm font-medium hover:text-purple-700 transition-colors">
            Social Media
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-700 transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/request">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-b">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services/logo-branding"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Logo & Branding
            </Link>
            <Link
              href="/services/ad-creative"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ad Creative
            </Link>
            <Link
              href="/services/social-media"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Social Media
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-purple-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/request" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

