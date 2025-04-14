import { useEffect } from "react";

export function OriginModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-xl max-w-xl w-full p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-text transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="space-y-4 text-left text-brand-text">
          <h2 className="text-2xl font-serif font-semibold">
            Why We Built Relay
          </h2>
          <p className="text-sm text-brand-muted">
            This didn’t start as a startup idea. It started as frustration.
          </p>
          <p className="text-sm text-brand-muted">
            I was doing work that mattered — the kind that required thinking, not just reacting. But I kept getting knocked out of focus by Slack pings, fire drills, and prep emails 10 minutes before a client call.
          </p>
          <p className="text-sm text-brand-muted">
            Some of my best ideas never even made it to a doc. They got dropped in a voice note while walking my dog, or scribbled into a meeting chat. Good ideas. Sometimes great ones. Forgotten — not because I didn’t care, but because I didn’t have a system.
          </p>
          <p className="text-sm text-brand-muted font-semibold">
            So we built one.
          </p>
        </div>
      </div>
    </div>
  );
}