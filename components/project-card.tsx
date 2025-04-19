import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        </Link>
        <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
          <Button size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
