import { PageHeader } from "@/components/page-header";
import { guides } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function GuidesPage() {
  return (
    <div>
      <PageHeader
        title="Developer Guides"
        description="A collection of guides and tutorials to help you master the MERN stack and other modern web technologies."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="font-headline">{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button variant="secondary" asChild>
                <a href={guide.link}>Read Guide <ArrowUpRight className="ml-2" /></a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
