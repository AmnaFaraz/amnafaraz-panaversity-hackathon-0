import { Hackathon } from "@/lib/hackathons";
import StatusBadge from "./StatusBadge";
import Link from "next/link";
import { ExternalLink, Layers, Trophy } from "lucide-react";

export default function HackathonCard({ data }: { data: Hackathon }) {
  const isComingSoon = data.status === "coming-soon";

  return (
    <div className="group relative bg-card border border-border/40 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,0,0.1)]">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 rounded-lg bg-muted border border-border/40">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <StatusBadge status={data.status} />
        </div>

        <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
          <span className="text-muted-foreground mr-2 opacity-50">#0{data.id}</span>
          {data.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {data.description}
        </p>

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {data.tech.map((t) => (
              <span key={t} className="px-2 py-1 rounded-md bg-muted border border-border/60 text-[9px] font-mono text-muted-foreground uppercase tracking-tighter">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/20">
            <div className="flex items-center gap-2 text-xs font-mono">
              <Trophy className="w-3.5 h-3.5 text-accent" />
              <span className="text-accent">{data.points}</span>
            </div>

            <Link
              href={data.url}
              target={isComingSoon ? undefined : "_blank"}
              className={`flex items-center gap-2 text-xs font-bold font-mono tracking-widest ${
                isComingSoon 
                ? "text-muted-foreground cursor-not-allowed grayscale" 
                : "text-primary hover:drop-shadow-[0_0_5px_#00FF00]"
              }`}
            >
              RUN MODULE
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
