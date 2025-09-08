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
       <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((post, index) => (
          <Card key={index} className="flex flex-col bg-card/80 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <CardTitle className="font-headline">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button variant="secondary" asChild>
                <a href={post.link}>Read Post <ArrowUpRight className="ml-2" /></a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
