import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <div className="snap-start h-screen">
        <HeroSection />
      </div>
      <div className="snap-start h-screen">
        <AboutSection />
      </div>
      <div className="snap-start h-screen">
        <SkillsSection />
      </div>
      <div className="snap-start h-screen">
        <ContactSection />
      </div>
    </div>
  )
}
