export function VisualPlaceholder({ label = "[ Insert Graphic ]" }) {
    return (
      <div className="w-full h-80 bg-brand-border rounded-xl flex items-center justify-center text-brand-muted text-sm">
        {label}
      </div>
    );
  }