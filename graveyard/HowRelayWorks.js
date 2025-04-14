import React from "react";

export function HowRelayWorks() {
  const points = [
    { id: 1, title: "Capture on your terms", icon: "📝" },
    { id: 2, title: "Context makes it stick", icon: "🔗" },
    { id: 3, title: "Surfaces when it matters", icon: "⏰" },
    { id: 4, title: "Private by default", icon: "🔒" },
  ];

  return (
    <section className="max-w-4xl mx-auto text-center px-4 bg-brand-highlight/10 py-12 rounded-lg mt-12">
      <h2 className="text-3xl font-medium mb-6">How Relay Works</h2>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        /* UI: Each block now has a stronger, consistent border and sits on a subtle background that reinforces order */
      >
        {points.map((point) => (
          <div key={point.id} className="p-6 border-2 border-brand-border rounded-lg">
            <div className="text-4xl mb-2 flex justify-center">
              {point.icon}
            </div>
            <h3 className="text-xl ">{point.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}