import { PageHeader } from "@/components/page-header";
import { blogs } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

export default function BlogPage() {
  return (
    <div>
      <PageHeader
        title="My Blog"
        description="Thoughts and articles on web development, freelance life, and the latest technologies in the industry."
      />
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <Card key={post.slug} className="flex flex-col bg-card border-border/60 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="size-4" />
                    <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                </div>
              <CardTitle className="font-headline text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild>
                <Link href={`/blog/${post.slug}`}>Read Post <ArrowUpRight className="ml-2" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
