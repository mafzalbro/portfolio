export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-12 md:mb-16 text-center space-y-4 pt-8">
      <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
        {title}
      </h1>
      {description && <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
