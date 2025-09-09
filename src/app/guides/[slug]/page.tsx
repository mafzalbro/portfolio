import { guides } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

function GuideSidebar({ content }: { content: { title: string; content: string }[] }) {
  return (
    <aside className="sticky top-24 h-[calc(100vh-12rem)]">
        <p className="font-headline text-lg font-semibold mb-4 text-primary">On this page</p>
        <ScrollArea className="h-full pr-4">
            <nav>
                <ul className="space-y-3">
                {content.map((section) => (
                    <li key={section.title}>
                    <Link
                        href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {section.title}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </ScrollArea>
    </aside>
  );
}


export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = guides.find((p) => p.slug === params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <div>
        <PageHeader title={guide.title} description={guide.description} />
        <div className="grid lg:grid-cols-[260px_1fr] gap-12 max-w-7xl mx-auto">
            <GuideSidebar content={guide.content} />
            <main>
                <div className="space-y-8">
                    {guide.content.map((section) => (
                    <Card 
                        key={section.title} 
                        id={section.title.toLowerCase().replace(/\s+/g, "-")}
                        className="scroll-mt-24 bg-card/60 glassmorphism border-border/60"
                    >
                        <CardContent className="p-8">
                            <h2 className="font-headline text-3xl font-bold mb-4 text-primary">{section.title}</h2>
                            <article className="prose dark:prose-invert max-w-none prose-p:text-foreground/80">
                                <p>{section.content}</p>
                            </article>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </main>
        </div>
    </div>
  );
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}
