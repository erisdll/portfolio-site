import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="w-full h-full flex items-center">
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
          <Card className="bg-black border-crimson/30">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold text-crimson">Contact Information</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-crimson" />
                    <span>erika@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-crimson" />
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-crimson"
                    >
                      linkedin.com/in/erikamello
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-crimson" />
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-crimson"
                    >
                      github.com/erikamello
                    </Link>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="text-lg font-semibold text-crimson">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
