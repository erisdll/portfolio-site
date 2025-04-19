import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      description:
        "A comprehensive ERP system built with Java Spring Boot and React, designed to streamline business operations.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A scalable e-commerce platform with microservices architecture, supporting high-volume transactions and real-time inventory management.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["Java", "Spring Cloud", "Next.js", "MongoDB", "Docker"],
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description:
        "An interactive dashboard for visualizing and analyzing large datasets, with customizable reports and real-time updates.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      technologies: ["TypeScript", "React", "NestJS", "AWS", "D3.js"],
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden border-darkred/30 bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video relative overflow-hidden">
                <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-darkred/20 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full bg-darkred hover:bg-darkred/80">
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
