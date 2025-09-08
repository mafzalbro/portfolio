export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8 md:mb-12">
      <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
        {title}
      </h1>
      {description && <p className="mt-3 max-w-3xl text-lg text-muted-foreground">{description}</p>}
    </div>
  );
}
