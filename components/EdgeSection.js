import {
  BriefcaseIcon,
  CalendarIcon,
  NetworkIcon,
  MessageSquareIcon,
} from "lucide-react";

export function EdgeSection() {
  const entourageRoles = [
    {
      icon: BriefcaseIcon,
      label: "Chief of Staff",
    },
    {
      icon: CalendarIcon,
      label: "Executive Assistant",
    },
    {
      icon: NetworkIcon,
      label: "Strategy Lead",
    },
    {
      icon: MessageSquareIcon,
      label: "Comms Director",
    },
  ];

  const relayRoles = [
    {
      emoji: "🧭",
      title: "Stays with the thread",
      feature:
        "When your flow breaks, Relay doesn’t. It remembers where you were — and brings you back in without missing a beat.",
    },
    {
      emoji: "📅",
      title: "Surfaces what’s next",
      feature:
        "Context shows up right when you need it — not two days early, not five minutes late.",
    },
    {
      emoji: "🧠",
      title: "Adds the frame",
      feature:
        "Relay puts all your ideas in the right frame — and helps you sound like you planned it all along.",
    },
    {
      emoji: "🎤",
      title: "Sharpens the message",
      feature:
        "Turns rambling thoughts into clean summaries, outlines, and shareable clarity — like magic, but built in.",
    },
  ];

  return (
    <section className="bg-brand.bg py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto text-center animate-softReveal">

        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-serif mb-6">
          What CEOs have that you don’t…
        </h2>
        <p className="text-lg md:text-xl text-brand.muted mb-12 max-w-4xl mx-auto">
        They’re not superhuman — they’re just surrounded. Most high-performers you admire have a crew backing them up. These are the people turning chaos into clarity — making one person feel like a god.
        </p>

        {/* Top Grid: CEO Roles (no cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
  {entourageRoles.map(({ icon: Icon, label }) => (
    <div key={label} className="flex flex-col items-center space-y-3">
      <div className="w-24 h-24 rounded-full bg-brand.border flex items-center justify-center text-brand.muted">
        <Icon className="w-12 h-12" />
      </div>
      <p className="text-lg font-semibold text-brand.text">{label}</p>
    </div>
  ))}
</div>

        {/* Bottom Grid: Relay Roles (cards) */}
        <hr className="my-12 border-t border-brand.border" />
        <h2 className="text-3xl md:text-5xl font-serif mb-6">
        <span className="italic">...Until now. </span> Relay:
        </h2>
        {/* <p className="text-lg md:text-xl text-brand.muted mb-12 max-w-2xl mx-auto">
          Relay gives you the same strategic support — without the staff. Just one tool built to think with you.
        </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left z-10 relative">
          {relayRoles.map(({ emoji, title, feature }) => (
            <div
              key={title}
              className="bg-brand.highlight border border-brand.border shadow-sm rounded-2xl p-6 space-y-2"
            >
              <div className="text-2xl text-center">{emoji}</div>
              <p className="text-lg font-semibold text-brand.text">{title}</p>
              <p className="text-sm text-brand.text text-justify">{feature}</p>
            </div>
          ))}
        </div>

        {/* Footer aside */}
        <div className="mt-16 border-t border-brand.border pt-6">
          <p className="text-base text-brand.muted italic">
            You don’t need their titles. Just their edge. Relay brings it — without the PTO, or the salaries.
          </p>
        </div>
      </div>
    </section>
  );
}