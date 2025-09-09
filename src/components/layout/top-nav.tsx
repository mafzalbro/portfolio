"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/data";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import React from "react";

function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <span className="font-headline text-2xl font-bold">A</span>
      </div>
      <span className="font-headline text-xl font-bold text-foreground hidden sm:block">
        Afzal.MERN
      </span>
    </Link>
  );
}

function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-2">
      {navigationLinks.map((link) => (
        <Button
          key={link.name}
          asChild
          variant={pathname === link.href ? "secondary" : "ghost"}
          className={cn(
            "transition-colors duration-300",
            pathname === link.href && "text-primary"
          )}
        >
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
    </nav>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetTrigger />
      <SheetContent side="left">
        <div className="flex flex-col gap-4 p-4">
        <AppLogo />
          <nav className="flex flex-col gap-2 mt-8">
            {navigationLinks.map((link) => (
              <Button
                key={link.name}
                asChild
                variant={pathname === link.href ? "secondary" : "ghost"}
                className={cn(
                  "justify-start transition-colors duration-300",
                  pathname === link.href && "text-primary"
                )}
                onClick={() => setOpen(false)}
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}


export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <AppLogo />
          <NavMenu />
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
