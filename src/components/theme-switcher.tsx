"use client"

import * as React from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg"
        >
          <Palette className="h-6 w-6" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-sm mx-auto">
        <DrawerHeader>
          <DrawerTitle>Choose a Theme</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => setTheme("light")}>
            <Sun className="mr-2 h-5 w-5" />
            Light
          </Button>
          <Button variant="outline" onClick={() => setTheme("dark")}>
            <Moon className="mr-2 h-5 w-5" />
            Dark
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
