export function SkillsSection() {
  const skillCategories = [
    {
      name: "Languages & Frameworks",
      skills: [
        "Java (11, 17, 21)",
        "Spring",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "NestJS",
        "Python",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS S3", "AWS DynamoDB", "AWS SQS", "AWS RDS", "Docker", "CI/CD", "Bash", "Linux"],
    },
    {
      name: "Tools & Platforms",
      skills: ["IntelliJ", "DataGrip", "VS Code", "Git", "Bitbucket", "Maven", "Postman", "Lucidchart", "Vite"],
    },
    {
      name: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork",
        "Time Management",
        "Adaptability",
        "Attention to Detail",
        "Project Management",
      ],
    },
  ]

  return (
    <div className="space-y-8">
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
  )
}
