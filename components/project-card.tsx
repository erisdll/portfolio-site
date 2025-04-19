import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-200 hover:border-crimson/50 bg-black border-crimson/30">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-crimson">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-crimson/50 text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
