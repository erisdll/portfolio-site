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
  detailsUrl: string

}

export function ProjectCard({ title, description, tags, imageUrl, githubUrl, detailsUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border border-darkred/30 bg-secondary/30 shadow-lg transition-transform hover:scale-105">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-100"
        />
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="hover:bg-darkred/30">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex-grow" />
      </CardContent>

      <CardFooter className="flex justify-between p-4 pt-0">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="hover:bg-darkred">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        </Link>
        <Link href={detailsUrl}>
          <Button size="sm" className="bg-darkred/80 hover:bg-darkred">
            <ExternalLink className="mr-2 h-4 w-4" />
            Details
          </Button>
        </Link>
      </CardFooter>

    </Card>
  )
}
