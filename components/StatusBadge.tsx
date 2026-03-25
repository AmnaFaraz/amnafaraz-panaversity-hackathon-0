export default function StatusBadge({ status }: { status: "live" | "coming-soon" | "wip" }) {
  const config = {
    live: {
      text: "LIVE",
      classes: "bg-primary/10 text-primary border-primary/20",
      dot: "bg-primary animate-pulse",
    },
    wip: {
      text: "IN PROGRESS",
      classes: "bg-secondary/10 text-secondary border-secondary/20",
      dot: "bg-secondary",
    },
    "coming-soon": {
      text: "COMING SOON",
      classes: "bg-muted text-muted-foreground border-border/40",
      dot: "bg-muted-foreground/40",
    },
  };

  const current = config[status];

  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${current.classes}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`}></span>
      {current.text}
    </div>
  );
}
