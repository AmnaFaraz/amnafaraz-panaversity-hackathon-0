"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setMounted(true); }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] transition-all" />
          <span className="font-mono font-bold text-lg tracking-tighter">
            PANAVERSITY <span className="text-primary">OS</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">DASHBOARD</Link>
            <Link href="/hackathons" className="hover:text-primary transition-colors">MODULES</Link>
            <Link href="/about" className="hover:text-primary transition-colors">KERNEL</Link>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-muted transition-colors border border-border/40"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4 h-4 text-accent" />
            ) : (
              <Moon className="w-4 h-4 text-secondary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
