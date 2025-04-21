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

      <div className="relative flex justify-center items-center">
        <div className="relative z-10 flex gap-6 px-4 py-4 mx-auto overflow-x-auto justify-start max-w-8xl scroll-smooth scrollbar-hide" >
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
                detailsUrl={`/projects/${project.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}