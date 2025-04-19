import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, User } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <User className="h-5 w-5 text-darkred" />
          <span>Erika Mello</span>
        </Link>
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
          <Link href="/#contact" className="text-sm font-medium hover:text-darkred transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/erisdll" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-darkred">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/erika-mello" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-darkred">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="/#contact">
            <Button className="bg-darkred hover:bg-darkred/80">Contact Me</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
