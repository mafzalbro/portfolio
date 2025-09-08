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
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Muhammad Afzal
          </span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
          MERN Stack Developer
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg">
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
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold text-center mb-8">My Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm transform-style-3d transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-transparent hover:border-primary/30">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground flex-grow">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-bold text-center mb-8">Technologies & Skills</h2>
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-2 hover:bg-primary/80 hover:text-primary-foreground transition-colors cursor-default">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
