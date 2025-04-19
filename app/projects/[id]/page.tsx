import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projects = [
    {
      id: "1",
      title: "Enterprise Resource Planning System",
      description:
        "A comprehensive ERP system built with Java Spring Boot and React, designed to streamline business operations.",
      longDescription: `
        This Enterprise Resource Planning (ERP) system was developed to help businesses manage their day-to-day activities more efficiently. The system integrates various business processes into a single, cohesive platform.
        
        Key features include:
        - Human Resources Management
        - Inventory and Supply Chain Management
        - Financial Management and Accounting
        - Customer Relationship Management
        - Business Intelligence and Reporting
        
        The backend was built with Java Spring Boot, providing a robust and scalable foundation. The frontend was developed using React, offering a modern and intuitive user interface. PostgreSQL was used for data storage, and the entire system was deployed on AWS for reliability and scalability.
      `,
      imageUrl: "/placeholder.svg?height=600&width=1200",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
      challenges: [
        "Integrating multiple business processes into a cohesive system",
        "Ensuring data consistency across different modules",
        "Optimizing performance for large datasets",
        "Implementing robust security measures to protect sensitive business data",
      ],
      solutions: [
        "Adopted a microservices architecture for better modularity",
        "Implemented database transactions and consistency checks",
        "Used caching and query optimization techniques",
        "Implemented role-based access control and encryption",
      ],
      githubUrl: "https://github.com/erisdll",
      liveUrl: "https://example.com",
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description:
        "A scalable e-commerce platform with microservices architecture, supporting high-volume transactions and real-time inventory management.",
      longDescription: `
        This e-commerce platform was designed to handle high-volume transactions and provide a seamless shopping experience for users. The platform features a microservices architecture, allowing for independent scaling of different components.
        
        Key features include:
        - Product catalog with advanced search and filtering
        - Shopping cart and checkout process
        - Payment processing integration
        - Order management and tracking
        - Real-time inventory management
        - Customer reviews and ratings
        
        The backend was built with Java Spring Cloud for microservices orchestration, with Next.js powering the frontend for optimal performance and SEO. MongoDB was used for flexible data storage, and Docker was employed for containerization and easy deployment.
      `,
      imageUrl: "/placeholder.svg?height=600&width=1200",
      technologies: ["Java", "Spring Cloud", "Next.js", "MongoDB", "Docker"],
      challenges: [
        "Ensuring system reliability during high-traffic periods",
        "Maintaining data consistency across microservices",
        "Optimizing the checkout process for conversion",
        "Implementing secure payment processing",
      ],
      solutions: [
        "Implemented auto-scaling and load balancing",
        "Used event-driven architecture with message queues",
        "Streamlined UI/UX with A/B testing",
        "Integrated with secure payment gateways and implemented PCI compliance",
      ],
      githubUrl: "https://github.com/erisdll",
      liveUrl: "https://example.com",
    },
    {
      id: "3",
      title: "Data Analytics Dashboard",
      description:
        "An interactive dashboard for visualizing and analyzing large datasets, with customizable reports and real-time updates.",
      longDescription: `
        This data analytics dashboard provides businesses with powerful tools to visualize and analyze their data. The dashboard offers real-time updates and customizable reports to help users make data-driven decisions.
        
        Key features include:
        - Interactive data visualizations
        - Customizable dashboards and reports
        - Real-time data processing
        - Data export and sharing capabilities
        - Role-based access control
        - Automated alerts and notifications
        
        The frontend was built with TypeScript and React for a responsive and type-safe user interface. NestJS powers the backend API, with various AWS services handling data storage and processing. D3.js was used for creating rich, interactive visualizations.
      `,
      imageUrl: "/placeholder.svg?height=600&width=1200",
      technologies: ["TypeScript", "React", "NestJS", "AWS", "D3.js"],
      challenges: [
        "Processing and visualizing large datasets efficiently",
        "Ensuring real-time updates without performance degradation",
        "Creating intuitive and customizable user interfaces",
        "Implementing complex data analysis algorithms",
      ],
      solutions: [
        "Used data aggregation and streaming techniques",
        "Implemented WebSockets for real-time communication",
        "Developed a modular UI component system",
        "Leveraged existing data analysis libraries and optimized algorithms",
      ],
      githubUrl: "https://github.com/erisdll",
      liveUrl: "https://example.com",
    },
  ]

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return <div className="container py-12">Project not found</div>
  }

  return (
    <div className="container py-12 md:py-24">
      <Link href="/projects" className="inline-flex items-center mb-8 text-darkred hover:text-darkred/80">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-darkred/20 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-1">
        <div className="aspect-video relative overflow-hidden rounded-lg border border-darkred/30">
          <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <Card className="border-darkred/30 bg-secondary/30">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-darkred">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              {project.longDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-darkred/30 bg-secondary/30">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-darkred">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-darkred mr-2">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-darkred/30 bg-secondary/30">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-darkred">Solutions</h2>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-darkred mr-2">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-darkred hover:bg-darkred/80">
              <Github className="mr-2 h-5 w-5" />
              View Code
            </Button>
          </Link>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-secondary hover:bg-secondary/80">
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
