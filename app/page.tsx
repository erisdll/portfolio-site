import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsTechSection } from "@/components/skills-tech-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsTechSection />
      <ContactSection />
    </div>
  )
}
