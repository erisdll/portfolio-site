export function SkillsSection() {
  const skillCategories = [
    {
      name: "Backend",
      skills: [
        "Java (11, 17, 21)",
        "Spring",
        "Maven",
        "Node.js",
        "NestJS",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS (S3, DynamoDB, SQS, RDS)", "Docker", "Kubernetes", "Linux", "Bash", "CI/CD"],
    },
    {
      name: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"],
    },
    {
      name: "Tools & Others",
      skills: [
        "Git/GitHub",
        "Bitbucket",
        "IntelliJ",
        "DataGrip",
        "VS Code",
        "Postman",
        "Lucidchart",
        "Python Scripting",
      ],
    },
  ]

  return (
    <div className="container px-4 md:px-6 h-full flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Technologies</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            These are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-red">{category.name}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-lg px-3 py-1.5 rounded-md border border-red/30 transition-colors hover:text-red hover:border-red"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
