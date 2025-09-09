import { PageHeader } from "@/components/page-header";
import { Timeline } from "@/components/timeline";
import { experience } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto">
      <PageHeader
        title="Work Experience"
        description="A timeline of my professional journey as a developer, highlighting key roles, responsibilities, and accomplishments."
      />
      <Timeline items={experience} />
    </div>
  );
}
