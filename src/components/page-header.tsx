export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-10 md:mb-14 text-center">
      <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-primary">
        {title}
      </h1>
      {description && <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
