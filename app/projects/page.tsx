// app/projects/page.tsx

import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Explore my project portfolio. These reflect real-world challenges I have faced and solved.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.technologies}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  )
}
