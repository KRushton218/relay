import React from "react";

export function WhyItWorks() {
  const reasons = [
    "Effortlessly capture fleeting ideas",
    "Seamless context for clear insights",
    "Timely, unobtrusive reminders",
    "Privacy-focused from the start",
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 bg-brand-highlight/10 py-12 rounded-lg mt-12">
      <h2 className="text-3xl font-medium mb-6 text-center">
        Why It Works
      </h2>
      <ul className="list-disc marker:text-brand-accent space-y-2 pl-8 text-lg leading-relaxed">
        {reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </section>
  );
}