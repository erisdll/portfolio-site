import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-darkred">Erika Mello</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A passionate software developer building robust and scalable applications
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="w-full bg-darkred hover:bg-darkred/80">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="w-full border-darkred text-darkred hover:bg-darkred/10">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="aspect-square overflow-hidden rounded-full object-cover border border-darkred/30"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate software developer with a strong background in Java and web development. I love
                creating robust, scalable applications that solve real-world problems.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-darkred">My Journey</h3>
                <p className="text-muted-foreground">
                  I started my journey in tech when I was in college, where I discovered my passion for coding. Since
                  then, I've worked on various projects, from small applications to complex enterprise systems, always
                  striving to learn new technologies and improve my skills.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-darkred">My Approach</h3>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and creating robust, scalable systems. I'm always
                  looking for ways to optimize performance and make applications more reliable and secure.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-darkred">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor's Degree in Computer Science
                  <br />
                  University Name, 2018-2022
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-darkred">Experience</h3>
                <p className="text-muted-foreground">
                  <strong>Senior Developer</strong> - Company Name
                  <br />
                  2022 - Present
                  <br />
                  <br />
                  <strong>Junior Developer</strong> - Company Name
                  <br />
                  2020 - 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
            <Card className="bg-background/60 border-darkred/30">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-darkred" />
                      <span>your.email@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-darkred" />
                      <Link
                        href="https://linkedin.com/in/erika-mello"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-darkred transition-colors"
                      >
                        linkedin.com/in/erika-mello
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <Github className="h-5 w-5 text-darkred" />
                      <Link
                        href="https://github.com/erisdll"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-darkred transition-colors"
                      >
                        github.com/erisdll
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
