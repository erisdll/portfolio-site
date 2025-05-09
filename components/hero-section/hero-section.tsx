import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background"
      aria-label="Hero section with introduction and call to action"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] xl:gap-16 items-center">
          {/* Texto de apresentação */}
          <header className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                Hi, I'm <span className="text-darkred">Erika Mello</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-prose">
                Software Developer
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="/Resume.pdf"
                download="ErikaMello_CV.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-darkred hover:bg-darkred hover:text-white hover:scale-105 transition-transform duration-200"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </a>

              <Link href="#projects" passHref>
                <Button className="w-full sm:w-auto bg-darkred/80 text-white hover:bg-darkred hover:scale-105 transition-transform duration-200">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </header>

          {/* Imagem de perfil */}
          <div className="flex justify-center">
            <figure
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] 
              rounded-full overflow-hidden border-4 border-darkred/30 shadow-lg"
            >
              <Image
                src="/erikaMello.jpeg"
                alt="Portrait of Erika Mello"
                fill
                priority
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
