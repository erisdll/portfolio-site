import { SkillsSection } from "@/components/skills-section"

export function SkillsTechSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Technologies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-12">
          <SkillsSection />
        </div>
      </div>
    </section>
  )
}
