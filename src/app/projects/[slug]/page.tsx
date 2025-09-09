import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <PageHeader title={project.title} />

      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-lg mb-12 shadow-2xl border border-border/50 aspect-video">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            data-ai-hint={project.imageHint}
            className="object-cover"
          />
        </div>

        <div className="bg-card/60 glassmorphism p-8 sm:p-10 rounded-lg border border-border/60">
          <h3 className="font-headline text-3xl font-bold mb-4">Project Details</h3>
          <p className="text-lg text-muted-foreground mb-8">
            {project.longDescription}
          </p>

          <div className="mb-8">
            <h4 className="font-semibold text-lg mb-4">Technologies Used</h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          <Button asChild size="lg">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Live Project <ArrowUpRight className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
