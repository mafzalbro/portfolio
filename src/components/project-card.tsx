import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden bg-secondary/30 border-border transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          data-ai-hint={project.imageHint}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all"></div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={`/projects/${project.slug}`} rel="noopener noreferrer">
            View Project <ArrowUpRight className="ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
