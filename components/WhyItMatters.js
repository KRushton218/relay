import React from "react";

export function WhyItMatters({ text }) {
  if (!text) return null;

  return (
    <div className="mt-6 pt-4 border-t border-muted">
      <h4 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
        Why It Matters
      </h4>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
