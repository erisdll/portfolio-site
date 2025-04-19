import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="text-darkred">Erika Mello</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A passionate software developer building robust and scalable applications
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects">
                <Button className="w-full bg-darkred hover:bg-darkred/80">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="w-full border-darkred text-darkred hover:bg-darkred/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/erikamello.jpg?height=600&width=600"
              alt="Profile"
              width={600}
              height={600}
              className="aspect-square overflow-hidden rounded-full object-cover border border-darkred/30"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
