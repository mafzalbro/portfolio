import { PageHeader } from "@/components/page-header";
import { blogs } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="My Blog"
        description="Thoughts and articles on web development, freelance life, and the latest technologies in the industry."
      />
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post, index) => (
          <Card key={index} className="flex flex-col bg-card border-border/60 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild>
                <a href={post.link}>Read Post <ArrowUpRight className="ml-2" /></a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
