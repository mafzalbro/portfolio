import { ArrowRight, Code, Server, Blend } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { technologies } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-12">
      <section className="bg-card border border-border rounded-xl p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom mask-image-radial-fade"></div>
        <div className="relative">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary">
            Muhammad Afzal
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground">
            MERN Stack Developer
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A passionate full-stack developer with 2 years of experience, specializing in building modern, interactive, and efficient web applications with the MERN stack and Next.js.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/projects">
                View Projects <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/experience">
                My Experience
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold text-center mb-8">My Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm transform-style-3d transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold text-center mb-8">Technologies & Skills</h2>
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/20 transition-colors cursor-default">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
