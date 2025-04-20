export function TechStackSection() {
  const skillCategories = [
    {
      name: "Backend",
      skills: ["Java (11, 17, 21)", "Maven", "Spring Boot", "Quarkus", "Docker", "Postman", "Golang", "Node.js", "Express", "NestJS", ],
    },
    {
      name: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "TypeScript","Tailwind CSS", "React", "Vue", "Vite", "Next.js"],
    },
    {
      name: "DevOps & Tools",
      skills: [
        "Docker",
        "CI/CD",
        "Bash",
        "Linux",
        "IntelliJ",
        "DataGrip",
        "VS Code",
        "Git",
        "Bitbucket",
        "Maven",
        "Postman",
        "Lucidchart",
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Attention to Detail",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-5xl">
          <span className="text-darkred">{">"}</span>skills
        </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12 space-y-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-2xl font-bold text-darkred">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
