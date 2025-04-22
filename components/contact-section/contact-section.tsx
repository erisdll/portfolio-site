"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Notification } from "@/components/ui/notification";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setNotification({ message: "Message sent! Thanks for reaching out. I'll get back to you soon.", type: "success" });

      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-darkred">{">"}</span>contact
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          {/* Contact Information Card */}
          <Card className="bg-background/60 border-darkred/30">
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Contact Info</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-darkred" />
                    <span>erika.melloramos@gmail.com</span>
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
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-darkred" />
                    <span>+55 11 995 179 321</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="text-lg font-semibold">Current Location</h4>
                  <p className="text-muted-foreground">Santa Maria, Brazil</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form Card */}
          <Card className="bg-background/60 border-darkred/30">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="border-darkred/30 focus-visible:ring-darkred"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="border-darkred/30 focus-visible:ring-darkred"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                    className="border-darkred/30 focus-visible:ring-darkred"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    className="min-h-[120px] border-darkred/30 focus-visible:ring-darkred"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-darkred hover:bg-darkred/80" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}