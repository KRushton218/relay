import React from "react";
import { Check, X, AlertTriangle } from "lucide-react";

const ComparisonSection = () => {
  const rows = [
    {
      need: "Capture without context-switching",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "Only works when you stop to write" },
      aiAssistant: { icon: <Check className="text-green-500 w-4 h-4 inline" />, text: "If you remember to ask" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Captures mid-flow, no friction" },
    },
    {
      need: "Real memory of your work + life",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "Static pages you maintain" },
      aiAssistant: { icon: <AlertTriangle className="text-yellow-500 w-4 h-4 inline" />, text: "Shallow, prompt-based memory" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Deep continuity across moments" },
    },
    {
      need: "Automatic organization",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "You build + maintain the system" },
      aiAssistant: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "No true structure" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Fragments are stitched into meaning" },
    },
    {
      need: "Context when you need it",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "Buried in folders or tags" },
      aiAssistant: { icon: <AlertTriangle className="text-yellow-500 w-4 h-4 inline" />, text: "Only if you ask the right way" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Surfaces insight at the right moment" },
    },
    {
      need: "Works across formats (voice, notes, messages)",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "Text-focused" },
      aiAssistant: { icon: <AlertTriangle className="text-yellow-500 w-4 h-4 inline" />, text: "Often single-input only" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Seamless across voice, text, tools" },
    },
    {
      need: "Feels like a strategic partner",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "You're doing the work" },
      aiAssistant: { icon: <AlertTriangle className="text-yellow-500 w-4 h-4 inline" />, text: "Feels like a tool, not a teammate" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Like a Chief of Staff — but quiet" },
    },
    {
      need: "No ontologies, no tagging",
      workspace: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "Requires constant upkeep" },
      aiAssistant: { icon: <X className="text-red-500 w-4 h-4 inline" />, text: "Doesn’t help you organize" },
      relay: { icon: <Check className="text-green-600 w-4 h-4 inline" />, text: "Zero-maintenance memory that works" },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pt-12 rounded-xl ">
      <h2 className="text-3xl font-bold mb-6 text-center text-zinc-800">
        Why Relay is Different
      </h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-zinc-100 text-zinc-600 uppercase text-xs">
            <th className="text-left px-4 py-3 font-semibold">What You Need</th>
            <th className="text-center px-4 py-3 font-semibold">Workspace Notetools</th>
            <th className="text-center px-4 py-3 font-semibold">Generic AI Assistants</th>
            <th className="text-center px-4 py-3 font-semibold text-indigo-600 bg-indigo-50">Relay</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-zinc-200 hover:bg-zinc-50">
              <td className="text-left px-4 py-3 font-medium text-zinc-700">
                {row.need}
              </td>
              <td className="text-center px-4 py-3 text-zinc-600">
                {row.workspace.icon} <span className="ml-2">{row.workspace.text}</span>
              </td>
              <td className="text-center px-4 py-3 text-zinc-600">
                {row.aiAssistant.icon} <span className="ml-2">{row.aiAssistant.text}</span>
              </td>
              <td className="text-center px-4 py-3 font-medium text-zinc-800 bg-indigo-50">
                {row.relay.icon} <span className="ml-2">{row.relay.text}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-12 max-w-5xl mx-auto text-base text-zinc-700 leading-relaxed">
        <p className="mb-4">
          Most tools either expect you to build the system (folders, tags, links), or they give you a blank-slate assistant that forgets everything five minutes later.
        </p>
        <p className="mb-4">
          <strong>Relay is different.</strong> It doesn't just <em>store</em> information — it <strong>remembers</strong> in two dimensions:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Semantic memory</strong> means Relay understands what you said, what it meant, and why it matters — not just keywords.</li>
          <li><strong>Relational memory</strong> means it tracks how your ideas connect to people, projects, and priorities — even across tools and time.</li>
        </ul>
        <p className="mb-4">
          Most tools simulate one or the other. Relay is built with both. That’s what lets it bring the right thing back at the right time — without you digging, prompting, or even remembering what to look for.
        </p>
        <p className="text-2xl font-semibold font-serif text-zinc-800 bg-zinc-50 justify-left p-5 rounded-md mb-6 leading-snug">
          <span className="italic">No notebooks to organize. No graphs to maintain. No prompt engineering.</span> <span className="text-indigo-600">Just memory that works.</span>
        </p>
        <p className="font-medium">
          Because your best ideas don’t live in perfect documents — they live in motion. And that’s where Relay shows up.
        </p>
      </div>
    </div>
  );
};

export default ComparisonSection;