export function MetaTag({ label }) {
    if (!label) return null;
  
    return (
      <span className="text-xs px-2 py-1 rounded-full bg-muted-foreground/10 text-muted-foreground font-medium">
        {label}
      </span>
    );
  }