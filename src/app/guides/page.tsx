import { PageHeader } from "@/components/page-header";
import { guides } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function GuidesPage() {
  return (
    <div>
      <PageHeader
        title="Developer Guides"
        description="A collection of guides and tutorials to help you master the MERN stack and other modern web technologies."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <Card key={guide.slug} className="flex flex-col bg-card/60 glassmorphism border-border/60 transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                <Link href={`/guides/${guide.slug}`} className="hover:text-primary transition-colors">
                    {guide.title}
                </Link>
                </CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link href={`/guides/${guide.slug}`}>Read Guide <ArrowUpRight className="ml-2" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
