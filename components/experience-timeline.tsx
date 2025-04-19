import { CalendarDays, Building2 } from "lucide-react"

export function ExperienceTimeline() {
  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading the development of scalable microservices architecture using Java Spring and AWS. Implemented event-driven systems that improved throughput by 40%.",
      technologies: ["Java", "Spring Boot", "AWS", "Kafka", "Kubernetes"],
    },
    {
      title: "Backend Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Developed and maintained RESTful APIs for e-commerce platforms. Implemented caching strategies that reduced response times by 60%.",
      technologies: ["Java", "Node.js", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Tech",
      period: "2018 - 2020",
      description:
        "Worked on full-stack development for web applications. Contributed to the migration from monolith to microservices architecture.",
      technologies: ["JavaScript", "React", "Express", "MongoDB"],
    },
    {
      title: "Software Engineering Intern",
      company: "Tech Innovations",
      period: "2017 - 2018",
      description:
        "Assisted in developing internal tools and automating testing processes. Reduced manual testing time by 30%.",
      technologies: ["Java", "Python", "Selenium", "Jenkins"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My journey through the tech industry and the roles that have shaped my expertise.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <div className="relative border-l border-red/30 pl-6 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-red flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>
                <div className="mb-2 flex items-center">
                  <h3 className="text-xl font-bold text-red">{exp.title}</h3>
                </div>
                <div className="mb-4 flex flex-wrap gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <Building2 className="mr-1 h-4 w-4 text-red" />
                    {exp.company}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4 text-red" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm rounded-md border border-red/30 transition-colors hover:text-red hover:border-red"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
