"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, User, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/100 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center text-lg font-bold ">
          <User className="h-5 w-5 text-darkred mr-2" />
          <span>ErikaMello</span><span className="text-darkred">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-darkred transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-darkred transition-colors">
            About
          </Link>
          <Link href="/#skills" className="text-sm font-medium hover:text-darkred transition-colors">
            Skills
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-darkred transition-colors">
            Projects
          </Link>
        </nav>

        {/* Social Links and Contact Button */} 
        <div className="flex items-center gap-2 md:gap-4">
          {/* Social Links */}
            <Link href="https://github.com/erisdll" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-white hover:scale-105 transition-transform duration-200">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            </Link>

            <Link href="https://linkedin.com/in/erika-mello" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-white hover:scale-105 transition-transform duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            </Link>

          {/* Contact Button (Desktop Only) */}
          <div className="hidden md:flex">
            <Link href="/#contact">
              <Button className="w-full sm:w-auto bg-darkred/80 text-white hover:bg-darkred hover:scale-105 transition-transform duration-200">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden border border-darkred ml-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/40 py-4">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-darkred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-darkred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#skills"
              className="text-sm font-medium hover:text-darkred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-darkred transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
