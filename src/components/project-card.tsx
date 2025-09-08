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
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div style={{ perspective: "1000px" }}>
      <Card
        className="group h-full flex flex-col overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/20"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden transition-transform duration-500" style={{ transform: "translateZ(20px)" }}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            data-ai-hint={project.imageHint}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
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
          <Button asChild variant="ghost" className="w-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ArrowUpRight className="ml-2" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
