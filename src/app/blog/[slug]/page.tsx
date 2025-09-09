import { blogs } from "@/lib/data";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((p) => p.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <PageHeader title={blog.title} />
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto bg-card p-6 sm:p-8 rounded-lg border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Calendar className="size-4" />
          <time dateTime={blog.date}>{format(new Date(blog.date), "MMMM d, yyyy")}</time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
