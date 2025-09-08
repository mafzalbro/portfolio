"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { projects as allProjects, technologies } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("all");

  const projectTypes = ["all", ...Array.from(new Set(allProjects.map((p) => p.type)))];

  const filteredProjects = allProjects
    .filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((project) =>
      selectedTech === "all" ? true : project.technologies.includes(selectedTech)
    );

  return (
    <div>
      <PageHeader
        title="My Projects"
        description="A collection of my work, from full-stack applications to freelance projects. Use the filters to explore projects by technology or type."
      />

      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search projects..."
          className="flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select value={selectedTech} onValueChange={setSelectedTech}>
          <SelectTrigger className="sm:w-[200px]">
            <SelectValue placeholder="Filter by technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Technologies</SelectItem>
            {technologies.map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-medium">No projects found.</p>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
