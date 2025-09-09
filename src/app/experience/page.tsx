import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { experience } from "@/lib/data";
import { Card } from "@/components/ui/card";

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="Work Experience"
        description="A timeline of my professional journey as a developer, highlighting key roles, responsibilities, and accomplishments."
      />
      <Card className="max-w-4xl mx-auto p-8 bg-card/60 glassmorphism border-border/60">
        <Timeline items={experience} />
      </Card>
    </div>
  );
}
