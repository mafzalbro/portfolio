"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm md:justify-end">
      <SidebarTrigger className="md:hidden" />
      <div className="flex items-center gap-3">
        <Button variant="outline" asChild>
          <a href="/cv.pdf" download>
            <Download />
            <span className="hidden sm:inline-block">Download CV</span>
          </a>
        </Button>
        <Button asChild>
          <a href="mailto:mafzalmern@nitsel.com">
            <Mail />
            <span className="hidden sm:inline-block">Contact Me</span>
          </a>
        </Button>
      </div>
    </header>
  );
}
