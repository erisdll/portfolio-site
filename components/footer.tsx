import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Erika Mello. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/erisdll" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-darkred">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/erika-mello" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:text-darkred">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:your.email@example.com">
            <Button variant="ghost" size="icon" className="hover:text-darkred">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}
