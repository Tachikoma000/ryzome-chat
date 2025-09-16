'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9AE064] focus:ring-offset-2 ${
        theme === 'dark' 
          ? 'bg-gray-700 focus:ring-offset-black' 
          : 'bg-gray-300 focus:ring-offset-white'
      }`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-gray-700 m-0.5" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500 m-0.5" />
        )}
      </span>
    </button>
  );
}
