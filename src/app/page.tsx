import { ArrowRight, Code, Server, Blend } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { technologies } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      icon: <Code className="size-8 text-primary" />,
      title: "Frontend Development",
      description: "Crafting responsive and dynamic user interfaces with modern frameworks like React and Next.js.",
    },
    {
      icon: <Server className="size-8 text-primary" />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications, APIs, and database solutions with Node.js and Express.",
    },
    {
      icon: <Blend className="size-8 text-primary" />,
      title: "Full Stack Solutions",
      description: "Delivering end-to-end web applications by combining frontend and backend expertise for a seamless user experience.",
    },
  ];

  return (
    <div className="space-y-24">
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-primary font-medium">
            MERN Stack Developer
          </p>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter">
            Muhammad Afzal
          </h1>
          <p className="max-w-2xl text-lg text-foreground/80">
            A passionate full-stack developer with 2 years of experience, specializing in building modern, interactive, and efficient web applications with the MERN stack and Next.js.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="/projects">
                View Projects <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/experience">
                My Experience
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://picsum.photos/400/400"
            alt="Muhammad Afzal"
            width={400}
            height={400}
            data-ai-hint="man portrait"
            className="rounded-full object-cover shadow-lg border-4 border-primary/20"
          />
        </div>
      </section>

      <section>
        <h2 className="font-headline text-4xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center bg-secondary/30 border-secondary transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
              <CardHeader>
                {service.icon}
                <CardTitle className="font-headline text-2xl mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-4xl font-bold text-center mb-12">Technologies & Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-base px-4 py-2 rounded-md border-2 border-secondary hover:bg-secondary/80 transition-colors cursor-default shadow-sm">{tech}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
