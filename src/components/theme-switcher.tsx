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
  const [primaryColor, setPrimaryColor] = React.useState({ h: 217, s: 91, l: 60 });
  const [colorPickerValue, setColorPickerValue] = React.useState("#4f86f7");

  React.useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    if (!root) return;

    const { h, s, l } = primaryColor;
    
    root.style.setProperty('--primary', `${h} ${s}% ${l}%`);
    root.style.setProperty('--primary-foreground', `${h} ${s}% ${l > 50 ? 10 : 90}%`);
    root.style.setProperty('--chart-1', `${h} ${s}% ${l}%`);
    root.style.setProperty('--sidebar-primary', `${h} ${s}% ${l}%`);
    root.style.setProperty('--sidebar-primary-foreground', `${h} ${s}% ${l > 50 ? 10 : 90}%`);
    root.style.setProperty('--ring', `${h} ${s}% ${l}%`);
    root.style.setProperty('--sidebar-ring', `${h} ${s}% ${l}%`);

    const isDark = theme?.includes('dark');
    if(isDark) {
      root.style.setProperty('--secondary', `hsl(${h}, 30%, 17.5%)`);
      root.style.setProperty('--secondary-foreground', `hsl(${h}, 5%, 98%)`);
      root.style.setProperty('--accent', `hsl(${h}, 30%, 17.5%)`);
      root.style.setProperty('--accent-foreground', `hsl(${h}, 5%, 98%)`);
      root.style.setProperty('--sidebar-accent', `hsl(${h}, ${s}%, ${l}%, 0.2)`);
      root.style.setProperty('--sidebar-accent-foreground', `hsl(${h}, ${s}%, ${l}%)`);
    } else {
      root.style.setProperty('--secondary', `hsl(${h}, 40%, 96.1%)`);
      root.style.setProperty('--secondary-foreground', `hsl(${h}, 30%, 11.2%)`);
      root.style.setProperty('--accent', `hsl(${h}, 40%, 96.1%)`);
      root.style.setProperty('--accent-foreground', `hsl(${h}, 30%, 11.2%)`);
      root.style.setProperty('--sidebar-accent', `hsl(${h}, ${s}%, ${l}%, 0.1)`);
      root.style.setProperty('--sidebar-accent-foreground', `hsl(${h}, ${s}%, ${l}%)`);
    }

    setColorPickerValue(hslToHex(h, s, l));
  }, [primaryColor, theme]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hex = event.target.value;
    setColorPickerValue(hex);
    const [h, s, l] = hexToHsl(hex);
    setPrimaryColor({ h, s, l });
  }
  
  const isDarkMode = theme?.includes("dark");

  const toggleTheme = () => {
    if (isDarkMode) {
        setTheme("theme-pastel-light");
    } else {
        setTheme("theme-pastel-dark");
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
