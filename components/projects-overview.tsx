import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

export function ProjectsOverview() {
  const projects = [
    {
      slug: "e-commerce-platform",
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and payment processing.",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      slug: "task-management-app",
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set deadlines, and track progress.",
      tags: ["React", "Firebase", "Material UI"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      slug: "portfolio-website",
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, projects, and professional experience.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on. Each one represents a unique challenge and learning
              experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block">
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
