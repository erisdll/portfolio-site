import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase"],
    },
    {
      name: "Tools",
      skills: ["Git/GitHub", "VS Code", "Figma", "Docker", "CI/CD", "Jest", "Webpack"],
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
    <section id="skills" className="w-full h-full flex items-center">
      <div className="container px-4 md:px-6">
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
            <Card key={category.name} className="bg-black border-crimson/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-crimson">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-crimson/50 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
