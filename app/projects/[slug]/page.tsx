import { ProjectDetail } from "@/components/project-detail"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const projects = [
  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    fullDescription: `This e-commerce platform was built to provide a seamless shopping experience for users. 
    
    Key features include:
    - Responsive product catalog with filtering and search
    - User authentication and profile management
    - Shopping cart with persistent storage
    - Secure checkout process with Stripe integration
    - Order history and tracking
    - Admin dashboard for product and order management`,
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    imageUrl: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, set deadlines, and track progress.",
    fullDescription: `This task management application was designed to boost productivity and help users stay organized.
    
    Key features include:
    - Intuitive task creation and management
    - Project organization and categorization
    - Due date tracking with reminders
    - Progress visualization with charts
    - Team collaboration features
    - Cross-device synchronization`,
    tags: ["React", "Firebase", "Material UI"],
    imageUrl: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and professional experience.",
    fullDescription: `This portfolio website was created to showcase my work and skills in an elegant and interactive way.
    
    Key features include:
    - Modern, responsive design
    - Interactive project showcases
    - Skill visualization
    - Contact form with validation
    - Performance optimized for all devices
    - Accessibility considerations`,
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
