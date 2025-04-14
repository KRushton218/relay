import { useState } from "react";

export function ExpandableOriginNote() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-2 w-full">
<button
  onClick={() => setIsOpen(!isOpen)}
  className="group relative inline-flex items-center text-left gap-2 text-sm font-medium text-brand-text hover:text-brand-accent transition-colors underline underline-offset-4 decoration-dashed hover:decoration-solid mb-4"
>
  <span className="block">
    Our story (it's quick)
  </span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

<div
  className={`transition-all duration-500 ease-in-out overflow-hidden ${
    isOpen ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
  }`}
>
  <div className="mt-4 text-sm text-brand-muted max-w-full leading-relaxed space-y-4 transition-opacity duration-300 delay-100">
    <div className="border-l-2 border-brand-accent pl-4">
      <p className="text-xs uppercase leading-relaxed tracking-wider text-brand mb-2">Here's why I'm building Relay</p>
      Some of my best thinking didn’t happen in meetings. Or in docs. Or while staring at my calendar. It happened while I was living — half-formed notes at midnight, a mental thread pulled while out with friends, something sparked during a scroll I wasn’t supposed to be on.

The chaos of modern work doesn’t make space for that. It rewards urgency over insight. It assumes you’re always on, always available, and perfectly structured.

But I don’t think being good at your job should require building your entire life around it. And I don’t think great ideas only happen inside Notion at 10am.
    </div>
  </div>
</div>
    </div>
  );
}