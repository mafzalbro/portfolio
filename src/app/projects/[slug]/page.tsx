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
      <PageHeader title={project.title} description={project.description} />

      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-lg mb-8 shadow-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={1200}
            height={675}
            data-ai-hint={project.imageHint}
            className="w-full object-cover"
          />
        </div>

        <div className="bg-card p-6 sm:p-8 rounded-lg border">
          <h3 className="font-headline text-2xl font-bold mb-4">Project Details</h3>
          <p className="text-muted-foreground mb-6">
            {project.longDescription}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
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
