'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Check, Moon, Palette, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { useIsClient } from '@/hooks/use-is-client';

function extractHsl(hslString: string) {
  const regex = /hsl\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%\)/;
  const match = hslString.match(regex);
  if (match) {
    return {
      h: parseFloat(match[1]),
      s: parseFloat(match[2]),
      l: parseFloat(match[3]),
    };
  }
  return { h: 0, s: 0, l: 0 };
}

const themes = [
  { name: 'zinc', label: 'Zinc', color: 'hsl(240 5.9% 10%)' },
  { name: 'rose', label: 'Rose', color: 'hsl(346.8 77.2% 49.8%)' },
  { name: 'blue', label: 'Blue', color: 'hsl(221.2 83.2% 53.3%)' },
  { name: 'green', label: 'Green', color: 'hsl(142.1 76.2% 36.3%)' },
  { name: 'orange', label: 'Orange', color: 'hsl(24.6 95% 53.1%)' },
];

export function ThemeSwitcher() {
  const isClient = useIsClient();
  const { theme, setTheme } = useTheme();
  const [primaryColor, setPrimaryColor] = React.useState('blue');

  React.useEffect(() => {
    if (isClient) {
      const savedColor = localStorage.getItem('primary-color') || 'blue';
      const color = themes.find((t) => t.name === savedColor)?.color || themes.find(t => t.name === 'blue')!.color;
      const { h, s, l } = extractHsl(color);
      document.documentElement.style.setProperty('--primary', `${h} ${s}% ${l}%`);
      setPrimaryColor(savedColor);
    }
  }, [isClient]);

  const handleThemeChange = (newTheme: string) => {
    const themeData = themes.find((t) => t.name === newTheme);
    if (themeData) {
      const { h, s, l } = extractHsl(themeData.color);
      document.documentElement.style.setProperty('--primary', `${h} ${s}% ${l}%`);
      localStorage.setItem('primary-color', newTheme);
      setPrimaryColor(newTheme);
    }
  };

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    const {h, s, l} = hexToHsl(hex);
    document.documentElement.style.setProperty('--primary', `${h} ${s}% ${l}%`);
    setPrimaryColor('custom');
    localStorage.setItem('primary-color-custom', hex);
    localStorage.setItem('primary-color', 'custom');
  };

  if (!isClient) {
    return null;
  }
  
  const customColor = localStorage.getItem('primary-color-custom') || '#2563eb';

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette />
          <span className="sr-only">Theme switcher</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Customize</h4>
            <p className="text-sm text-muted-foreground">
              Pick a theme and color for your app.
            </p>
          </div>
          <div className="grid gap-2">
            <Label>Theme</Label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={theme === 'light' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                <Sun className="mr-2 h-4 w-4" />
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                <Moon className="mr-2 h-4 w-4" />
                Dark
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Color</Label>
            <div className="flex flex-wrap gap-2">
              {themes.map((t) => (
                <Button
                  key={t.name}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'h-8 w-8 rounded-full border-2',
                    primaryColor === t.name ? 'border-primary' : 'border-transparent'
                  )}
                  style={{ backgroundColor: t.color }}
                  onClick={() => handleThemeChange(t.name)}
                >
                  <Check
                    className={cn(
                      'h-4 w-4',
                      primaryColor === t.name ? 'text-white' : 'text-transparent'
                    )}
                  />
                </Button>
              ))}
              <div
                className={cn('h-8 w-8 rounded-full border-2 flex items-center justify-center', primaryColor === 'custom' ? 'border-primary' : 'border-transparent')}
                
              >
                <input
                  type="color"
                  value={customColor}
                  onChange={handleColorPickerChange}
                  className="h-6 w-6 cursor-pointer appearance-none rounded-full border-none bg-transparent p-0 focus:outline-none focus:ring-0"
                  title="Choose a custom color"
                />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// Utility to convert HEX to HSL
function hexToHsl(hex: string) {
  // Remove hash if it exists
  hex = hex.replace(/^#/, '');

  // Convert hex to RGB
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
