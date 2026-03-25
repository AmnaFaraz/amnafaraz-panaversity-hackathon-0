import { Code2, Globe, Briefcase, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/50 backdrop-blur-sm py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-mono font-bold text-lg tracking-tighter">
              PANAVERSITY <span className="text-primary">ARCHITECT</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm mb-6 font-mono leading-relaxed">
            Building the foundation for GIAIC Panaversity AI Agent ecosystem. 
            All hackathons built with zero-hallucination discipline.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/hassaanfisky" className="p-2 border border-border/40 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary">
              <Code2 className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 border border-border/40 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-accent">
              <Briefcase className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 border border-border/40 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-secondary">
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-muted-foreground">Resources</h4>
          <ul className="space-y-3 font-mono text-[11px]">
            <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">MCP Skills</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-muted-foreground">System</h4>
          <ul className="space-y-3 font-mono text-[11px]">
            <li><a href="#" className="hover:text-secondary transition-colors">Kernel v2.0</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Agent Framework</a></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Auth Terminal</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-12 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4 italic opacity-40 text-[10px] font-mono uppercase tracking-[0.2em]">
        <span>© 2026 PANAVERSITY // AGENT ARCHITECT</span>
        <span>Build ID: 0xFF-772_Fisky</span>
      </div>
    </footer>
  );
}
