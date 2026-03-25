"use client";

import { ArrowRight, Cpu, Zap, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden hero-gradient pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating UI Elements (Visual Only) */}
      <div className="absolute top-1/4 left-10 hidden xl:flex flex-col items-start gap-2 p-3 rounded-lg border border-border/40 bg-card/40 backdrop-blur-sm animate-pulse">
        <div className="flex items-center gap-2 mb-1">
          <Activity className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-mono text-primary uppercase">Kernel Status</span>
        </div>
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div className="w-[85%] h-full bg-primary" />
        </div>
        <span className="text-[8px] font-mono text-muted-foreground">Uptime: 168.0h</span>
      </div>

      <div className="space-y-6 relative z-10 py-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] animate-fade-in uppercase">
          <Zap className="w-3 h-3 fill-primary" />
          Autonomous Agent Architect
        </div>

        <h1 className="text-5xl md:text-8xl font-black font-mono tracking-tighter leading-[0.9]">
          HASSAAN<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            FISKY
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-muted-foreground text-sm md:text-base font-mono leading-relaxed px-10">
          Building Digital FTEs — 168 hours/week. Zero fatigue. 
          Architecting the future of reusable intelligence and autonomous systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 bg-primary text-black font-bold tracking-widest text-xs flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              ACCESS MODULES <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <div className="flex items-center gap-3 px-6 py-3 border border-border/40 bg-card/40 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-mono tracking-[0.1em]">Total Points: <span className="text-white font-bold">1,000 / 5,000</span></span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-[8px] font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-6 bg-muted-foreground" />
      </div>
    </section>
  );
}
