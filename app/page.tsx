import Hero from "@/components/Hero";
import HackathonCard from "@/components/HackathonCard";
import { hackathons, type Hackathon } from "@/lib/hackathons";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Main Grid Section */}
      <section id="modules" className="max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-l-4 border-primary pl-8">
          <div>
            <div className="flex items-center gap-3 text-primary text-xs font-bold tracking-[0.4em] mb-3 uppercase">
              <Terminal className="w-4 h-4" />
              Main Core // Hackathons
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-mono tracking-tighter">
              ACTIVE <span className="text-primary italic">MODULES</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg font-mono text-xs leading-relaxed">
              Explore the evolution of autonomous agents tracking through development, robotics, 
              textbooks, and advanced cloud-native architectures.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <div className="text-[10px] font-bold font-mono text-muted-foreground tracking-widest uppercase">System Progress</div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-3 h-3 rounded-sm border ${i === 1 ? 'bg-primary border-primary' : 'bg-muted border-border'}`} />
              ))}
            </div>
            <span className="text-[10px] font-mono text-primary font-bold">MODE: DEVELOPMENT_V2</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((h: Hackathon) => (
            <HackathonCard key={h.id} data={h} />
          ))}
        </div>
      </section>

      {/* Tech Stack Overlay / Static Info Band */}
      <section className="bg-muted/30 border-y border-border/40 py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 opacity-60">
          <div className="flex items-center gap-8 grayscale hover:grayscale-0 transition-all cursor-default">
            <span className="font-mono text-sm font-black tracking-tighter">NEXT.JS 15</span>
            <span className="font-mono text-sm font-black tracking-tighter">SUPABASE</span>
            <span className="font-mono text-sm font-black tracking-tighter">GROQ</span>
            <span className="font-mono text-sm font-black tracking-tighter">KUBERNETES</span>
            <span className="font-mono text-sm font-black tracking-tighter">DAPR</span>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="font-mono text-[10px] font-bold tracking-[0.5em] mb-1">DATA LAYER</span>
            <span className="font-mono text-[9px] text-muted-foreground">latency: 42ms // uptime: 99.99%</span>
          </div>
        </div>
      </section>
    </div>
  );
}
