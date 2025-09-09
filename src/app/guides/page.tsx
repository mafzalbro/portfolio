import { PageHeader } from "@/components/page-header";
import { guides } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function GuidesPage() {
  return (
    <div className="container mx-auto">
      <PageHeader
        title="Developer Guides"
        description="A collection of guides and tutorials to help you master the MERN stack and other modern web technologies."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <Card key={guide.slug} className="flex flex-col bg-secondary/30 border-border transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild>
                <a href={`/guides/${guide.slug}`}>Read Guide <ArrowUpRight className="ml-2" /></a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
