import HeroSection from "@/components/hero-section/hero-section"
import AboutSection from "@/components/about-section/about-section"
import TechStackSection from "@/components/skills-section/skills-tech-section"
import ContactSection from "@/components/contact-section/contact-section"
import ProjectsSection from "@/components/projects-section/projects-section"

export default function Home() {
  return (
    <main role="main" className="flex min-h-screen flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  )
}
