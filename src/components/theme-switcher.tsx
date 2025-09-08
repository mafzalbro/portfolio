"use client"

import * as React from "react"
import { Palette, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"

function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex: string): [number, number, number] {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [primaryColor, setPrimaryColor] = React.useState("217.2 91.2% 59.8%");
  const [colorPickerValue, setColorPickerValue] = React.useState("#3b82f6");

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', primaryColor);
    const [h, s, l] = primaryColor.split(" ").map(parseFloat);
    setColorPickerValue(hslToHex(h, s, l));
  }, [primaryColor]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hex = event.target.value;
    setColorPickerValue(hex);
    const [h, s, l] = hexToHsl(hex);
    setPrimaryColor(`${h} ${s}% ${l}%`);
  }
  
  const isDarkMode = theme?.includes("dark");

  const toggleTheme = () => {
    if (isDarkMode) {
        setTheme("theme-blue-light");
    } else {
        setTheme("theme-blue-dark");
    }
  }

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
          <DrawerTitle>Customize Theme</DrawerTitle>
        </DrawerHeader>
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode" className="flex items-center gap-2">
              {isDarkMode ? <Moon/> : <Sun/>}
              <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </Label>
            <Switch
              id="dark-mode"
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="theme-color">Primary Color</Label>
            <div className="flex items-center gap-2">
                <Input type="color" id="theme-color" value={colorPickerValue} onChange={handleColorChange} className="w-14 h-9 p-1"/>
                <span className="text-sm text-muted-foreground">{colorPickerValue}</span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
