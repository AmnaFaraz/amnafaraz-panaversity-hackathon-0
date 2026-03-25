import { hackathons, type Hackathon } from "@/lib/hackathons";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, Info } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";

export async function generateStaticParams() {
  return hackathons.map((h: Hackathon) => ({
    id: h.id.toString(),
  }));
}

export default function HackathonDetail({ params }: { params: { id: string } }) {
  const hackathon = hackathons.find((h: Hackathon) => h.id === parseInt(params.id));

  if (!hackathon) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 min-h-screen">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 font-mono text-xs font-bold tracking-[0.2em] group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        BACK_TO_DASHBOARD
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <StatusBadge status={hackathon.status} />
              <span className="px-3 py-0.5 rounded-full border border-border/60 text-[10px] font-mono text-muted-foreground tracking-widest bg-muted uppercase">
                {hackathon.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter leading-none uppercase">
              {hackathon.title}
            </h1>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-2xl bg-muted/20 border-l-2 border-primary/40 pl-6 py-4">
              {hackathon.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase">Core Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hackathon.tech.map((t: string) => (
                <div key={t} className="p-4 rounded-lg border border-border/40 bg-card/60 backdrop-blur-sm flex flex-col gap-2">
                  <div className="p-1.5 rounded-md bg-muted border border-border/20 w-fit">
                    <Cpu className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-tighter">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-8 rounded-xl border border-primary/20 bg-primary/5 space-y-8 sticky top-32">
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Reward Points</div>
              <div className="text-3xl font-black font-mono text-primary drop-shadow-[0_0_10px_rgba(0,255,0,0.4)]">
                {hackathon.points}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-primary/10">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-background/60 border border-border/40">
                <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-[10px] font-mono text-muted-foreground leading-relaxed uppercase tracking-tighter">
                  This module was developed following strict senior-grade engineering principles.
                </p>
              </div>

              <Link
                href={hackathon.url}
                target="_blank"
                className={`w-full py-4 text-center text-xs font-bold font-mono tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                  hackathon.status === "coming-soon"
                  ? "bg-muted text-muted-foreground cursor-not-allowed border border-border/40"
                  : "bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_#00FF00]"
                }`}
              >
                INITIALIZE PROJECT <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
