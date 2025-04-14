export function ChiefOfStaffSection() {
    return (
      <section className="py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-text">
              Relay Works Like a Chief of Staff
            </h2>
            <ul className="list-disc list-inside text-base text-brand-muted space-y-2">
              <li>Monitors your work across tools</li>
              <li>Connects ideas over time</li>
              <li>Surfaces what you should care about</li>
              <li>Prepares you before you know you need it</li>
            </ul>
          </div>
          <div className="bg-brand-highlight h-64 rounded-xl flex items-center justify-center text-brand-muted text-sm">
            [ UI Preview Placeholder ]
          </div>
        </div>
      </section>
    );
  }