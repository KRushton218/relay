export function ThinkingAndChiefSection() {
    return (
      <section className="pt-12 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 space-y-16">
        <p className="text-sm text-brand-muted text-center mt-6">
  Because your best ideas don’t happen on schedule.
</p>
          {/* === Cloud thinking setup === */}
          <div className="text-center space-y-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
  <p className="text-lg text-brand-muted">
    Most tools assume you know what you're trying to say before you say it. That ideas arrive in order, tagged, labeled, and ready for formatting.
  </p>

  <p className="text-lg text-brand-muted">
    But real thinking doesn't work that way.
    Ideas show up in fragments — inside jokes from a meeting thread, a half-mumbled voice note, a stray line in a doc you never finished. You don’t always know what matters in the moment. People do that work intuitively — we recognize patterns, revisit context, connect meaning over time.
  </p>

  <p className="text-lg text-brand-muted">
    Relay is built on that same principle: that thought is something to catch and care for — not force into structure too early. It listens first. Then, when it counts, it makes you look like you meant to be that clear all along.
  </p>
</div>
          </div>
  
          {/* === Chief of Staff payoff === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-brand-text">
                Relay Works Like a Chief of Staff
              </h2>
              <ul className="list-disc list-inside text-base text-brand-muted space-y-2">
                <li>Tracks your ideas across apps, meetings, and voice notes</li>
                <li>Connects patterns over time — even the ones you forgot</li>
                <li>Surfaces what matters before it slips away</li>
                <li>Prepares you for what’s next, without you having to ask</li>
              </ul>
              <p className="text-base text-brand-muted">
                It’s like having a second brain.  
                One that doesn’t forget the sharp thing you said in passing — or the context that made it matter.
              </p>
            </div>
  
            {/* 📐 Overall Structure & Composition:

Split-screen or gradient-transition visual with two contrasting zones:

1. LEFT SIDE (or TOP HALF): “Unsorted Fragments”

Represents a chaotic dump of half-finished thoughts:
	•	Sticky notes with partial ideas:
	•	“async something?”
	•	“should ping Alex re launch… maybe”
	•	“voice memo: clean onboarding = $”
	•	Small visual cues for source (non-branded, but clear): icons for Slack, voice memos, Google Docs, etc.
	•	Jumbled layout — content is slightly overlapped, skewed, some cut off
	•	Colors: muted, soft, lightly desaturated
	•	Impression: “This is the stuff you forgot about.”

2. RIGHT SIDE (or BOTTOM HALF): “Organized Recall”

Represents Relay’s organized, enhanced output:
	•	One clean, centered content card labeled:
Async Onboarding Narrative
Compiled from 3 sources · Ready to share
	•	Thin lines or threads coming in from 2–3 of the jumbled notes
	•	Optional tag beneath:
Originally noted Jan 4 — refined automatically
	•	Overall tone: calm, minimal, elevated — think a Notion doc and a thought bubble had a baby

⸻

🖋 Supporting Copy (can float beside or beneath image):

That idea you forgot about? Relay didn’t.
And now it’s ready for your investor update.

Tone: dry confidence, like Relay knew you were brilliant all along — even when you didn’t.

⸻

💅 Styling / Brand Fit:
	•	Soft glow or subtle motion around the “clean” thread card (optional)
	•	Background can be off-white or soft brand gradient (e.g., bg-brand-highlight/10)
	•	Use Tailwind spacing rhythm if building in dev now (gap-6, rounded-xl, etc.)
	•	Should feel editorial, not SaaS demo

⸻

❌ Do Not Include:
	•	Literal UI screenshots (Carousel and Anatomy handle this)
	•	Emoji soup or cartoonish icons
	•	Overwhelming detail — this is ambient storytelling, not a full product tour */}
            <div className="bg-brand-highlight/30 h-64 rounded-xl flex items-center justify-center text-brand-muted text-sm">
              [ UI Preview Placeholder — diagram or blurred mockup showing ideas linking across apps ]
            </div>
          </div>
        </div>
      </section>
    );
  }