import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((p) => p.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <PageHeader title={blog.title} />
      <Card className="max-w-4xl mx-auto bg-card/60 glassmorphism p-8 sm:p-10 rounded-lg border border-border/60">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Calendar className="size-4" />
          <time dateTime={blog.date}>{format(new Date(blog.date), "MMMM d, yyyy")}</time>
        </div>
        <article 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      </Card>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
