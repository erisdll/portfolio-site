import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  slug: string
  title: string
  description: string
  fullDescription: string
  tags: string[]
  imageUrl: string
  gallery: string[]
  githubUrl: string
  liveUrl: string
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-[2fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-crimson/50 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>{project.description}</p>
                <div className="whitespace-pre-line">{project.fullDescription}</div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="bg-black border-crimson/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-crimson">Project Links</h3>
                  <div className="grid gap-4">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-crimson text-crimson hover:bg-crimson/10">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </Link>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-crimson hover:bg-crimson/90">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
