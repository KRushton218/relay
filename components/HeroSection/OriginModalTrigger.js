export function OriginModalTrigger({ onClick }) {
    return (
      <div className="text-center mt-6">
        <button
          onClick={onClick}
          className="text-sm text-brand-muted underline hover:text-brand-accent transition-colors"
        >
          Why we built Relay
        </button>
      </div>
    );
  }