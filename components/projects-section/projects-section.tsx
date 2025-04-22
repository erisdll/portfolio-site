"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/projects-section/project-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 relative">
      <div className="relative mb-8 px-4 md:px-8 max-w-8xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-bold sm:text-5xl text-center">
            <span className="text-darkred">{">"}</span>projects <span className="text-darkred">{"--"}</span>latest
          </h2>
          <p className="max-w-[900px] text-center text-muted-foreground">
            Here are the latest projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center items-center mx-auto max-w-8xl">
        <div className="relative z-10 flex gap-6 px-4 py-4 overflow-x-auto justify-start max-w-full scroll-smooth scrollbar-hide items-stretch">
          {projects.slice(0, 5).map((project) => (
            <div
              key={project.id}
              className="snap-center w-[320px] sm:w-[380px] md:w-[450px] lg:w-[300px] flex justify-center"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.technologies}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                detailsUrl={`/projects/${project.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center mx-auto max-w-8xl mt-12">
        <Link href="/projects">
          <button className="px-6 py-2 bg-darkred/80 text-white rounded-md hover:bg-darkred transition hover:scale-105 duration-200">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}