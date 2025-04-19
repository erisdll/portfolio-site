import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="container px-4 md:px-6 h-full flex items-center">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="text-red">Hi, I'm Erika Mello</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Backend Developer with a passion for architecture and distributed systems
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/projects">
              <Button className="w-full bg-red hover:bg-background hover:text-red hover:border-red hover:border transition-all">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="w-full border-red text-red hover:bg-red/10">
                Get in Touch
              </Button>
            </Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full border-red text-red hover:bg-red/10">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Profile"
            width={600}
            height={600}
            className="aspect-square overflow-hidden rounded-full object-cover border border-red/30 w-[600px] h-[600px]"
          />
        </div>
      </div>
    </div>
  )
}
