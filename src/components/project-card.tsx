import Image from "next/image";
import Link from "next/link";
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
    <Card className="group h-full flex flex-col overflow-hidden bg-card/60 glassmorphism border-border/60 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2">
      <Link href={`/projects/${project.slug}`} className="relative block overflow-hidden aspect-video">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          data-ai-hint={project.imageHint}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-xl">
          <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">{project.title}</Link>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug}`}>
            View Details <ArrowUpRight className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
