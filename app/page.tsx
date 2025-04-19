"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth">
      <section className="h-screen snap-start flex items-center" id="home">
        <HeroSection />
      </section>
      <section className="min-h-screen snap-start py-20 bg-muted/10" id="about">
        <AboutSection />
      </section>
      <section className="min-h-screen snap-start py-20" id="skills">
        <SkillsSection />
      </section>
      <section className="min-h-screen snap-start py-20 bg-muted/10" id="contact">
        <ContactSection />
      </section>
    </div>
  )
}
