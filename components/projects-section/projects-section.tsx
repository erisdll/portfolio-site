import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/projects-section/project-card"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 relative">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-4xl font-bold sm:text-5xl">
          <span className="text-darkred">{">"}</span>projects
        </h2>
        <p className="max-w-[800px] mx-auto text-muted-foreground">
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10"
          aria-hidden="true"
        />

        {/* Scrollable container */}
        <div className="flex gap-6 overflow-x-auto px-4 py-4 justify-start snap-x snap-mandatory scroll-smooth">
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-center shrink-0 w-[320px] sm:w-[380px] md:w-[450px] lg:w-[500px]"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
