import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import projects from "@/data/projects.json"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <div className="container py-12">Project not found</div>
  }

  return (
    <div className="container py-12 md:py-24">
      <Link href="/projects" className="inline-flex items-center mb-8 text-darkred hover:text-darkred/80">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-darkred/20 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        <div className="aspect-video relative overflow-hidden rounded-lg border border-darkred/30">
          <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <Card className="border-darkred/30 bg-secondary/30">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-darkred">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              {project.longDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-darkred/30 bg-secondary/30">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-darkred">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-darkred mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-darkred/30 bg-secondary/30">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-darkred">Solutions</h2>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-darkred mr-2">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-darkred hover:bg-darkred/80">
              <Github className="mr-2 h-5 w-5" />
              View Code
            </Button>
          </Link>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-secondary hover:bg-secondary/80">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}