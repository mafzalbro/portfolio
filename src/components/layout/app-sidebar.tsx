"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { navigationLinks, socialLinks } from "@/lib/data";
import { Button } from "../ui/button";

function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 px-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="font-headline text-2xl font-bold">A</span>
      </div>
      <span className="font-headline text-xl font-bold text-foreground">
        Afzal.MERN
      </span>
    </Link>
  );
}

function NavMenu() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navigationLinks.map((link) => (
        <SidebarMenuItem key={link.name}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href}
            tooltip={link.name}
            className="text-base"
            size="lg"
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.name}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

function Socials() {
  return (
    <div className="flex flex-col gap-2">
      <div className="group-data-[collapsible=icon]:hidden px-2 text-sm font-medium text-sidebar-foreground/70">
        Connect
      </div>
      <div className="flex items-center justify-around group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:gap-2">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              <link.icon className="size-5" />
            </a>
          </Button>
        ))}
      </div>
      <Button asChild className="mt-2 h-9">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          Follow
        </a>
      </Button>
    </div>
  );
}


export default function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMenu />
      </SidebarContent>
      <SidebarFooter>
        <Socials />
      </SidebarFooter>
    </Sidebar>
  );
}
