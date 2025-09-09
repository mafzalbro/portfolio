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
    <div className="space-y-32">
      <section className="grid md:grid-cols-2 gap-16 items-center pt-16">
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl text-primary font-medium tracking-wide">
            MERN Stack Developer
          </p>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter">
            Muhammad Afzal
          </h1>
          <p className="max-w-xl text-lg text-foreground/80">
            A passionate full-stack developer with 2 years of experience, specializing in building modern, interactive, and efficient web applications with the MERN stack and Next.js.
          </p>
          <div className="flex gap-4 pt-4">
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
        <div className="relative flex items-center justify-center">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-full opacity-30 blur-2xl"></div>
            <Image
                src="https://picsum.photos/400/400"
                alt="Muhammad Afzal"
                width={400}
                height={400}
                data-ai-hint="man portrait"
                className="relative rounded-full object-cover shadow-2xl border-4 border-white/10"
            />
        </div>
      </section>

      <section>
        <h2 className="font-headline text-5xl font-bold text-center mb-16">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center bg-card/60 glassmorphism border-border/60 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2">
              <CardHeader className="p-8">
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-8 pb-8">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-5xl font-bold text-center mb-16">Technologies & Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-base px-5 py-3 rounded-lg border-2 border-transparent hover:border-primary/50 transition-colors cursor-default shadow-sm text-foreground/80">{tech}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
