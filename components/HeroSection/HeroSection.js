import { useState, useRef, useEffect } from "react";
// import { ExpandableOriginNote } from "./ExpandableOriginNote";
import { EmergingFocusGraph } from "../EmergingFocusGraph";
import {EmergingFocusTimeline} from "./EmergingFocusTimeline";
export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  useEffect(() => {
    let animationFrameId;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.05;
      if (cardRef.current) {
        cardRef.current.style.transform = `translateY(${offset}px)`;
      }
      animationFrameId = requestAnimationFrame(handleScroll);
    };
    animationFrameId = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative py-24 sm:py-4 lg:py-24 pt-12px">
      <div className="fade-in mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-stretch px-4 sm:px-6 md:px-8">
        <div className="space-y-6 lg:space-y-8 sticky top-0 max-h-[600px] overflow-hidden min-h-[500px]">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-semibold leading-tight tracking-tight text-brand-text">
            Ideas come in fragments.<br />
            Relay makes them whole.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-brand-muted max-w-2xl leading-relaxed">
            Relay is your thought partner — quietly capturing your ideas, reminders, and half-finished genius in real time. No tabs. No formatting. Just instant recall when you need it most.
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl text-brand-muted max-w-2xl leading-relaxed font-bold">
            Relay is your secret Chief of Staff — hold the salary.
          </p>
        </div>

        <div className="hidden lg:flex justify-center items-start relative z-10 min-h-[500px] max-h-[600px] overflow-hidden pt-8">
      {/* <div
            ref={cardRef}
            className="relative bg-white shadow-2xl overflow-hidden rounded-2xl p-6 w-full max-w-md border border-brand-border transition-transform duration-200 will-change-transform"
          > */}
            {/* <EmergingFocusGraph /> */}
            <EmergingFocusTimeline />
            {/* </div> */}
            {/* <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-brand-accent opacity-10 pointer-events-none" /> */}
          {/* </div> */}
        </div>
      </div>

      <div className="fade-in mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
  {/* <ExpandableOriginNote /> */}
  <div className="mt-10 sm:mt-14 text-brand-muted max-w-full mx-auto space-y-4">
    <h3 className="text-2xl font-semibold text-brand-text">Why I'm building Relay</h3>
    <p className="text-lg max-w-full leading-relaxed italic text-brand-muted">
      Some of my best ideas didn't make it into meetings. Or into docs. 
      They happened in motion — mid-conversation, on the way somewhere, or in the middle of a sprint. 
      The ideas were sharp. The timing was terrible.
    </p>
    <p className="text-lg max-w-full leading-relaxed italic text-brand-muted mt-4">
      We're expected to be structured, available, always ready to act — but insight and inspiration don't work on a schedule. 
  They show up when they want, and don't care if you're deep in a spreadsheet or grabbing a drink with friends. 
  Relay exists to catch those moments — to hold the thought until you're ready to use it.
</p>
<p className="text-lg leading-relaxed italic text-brand-muted mt-4">
  I'm building it because being great at your job shouldn't mean constantly shifting into work mode. 
  Your best ideas deserve better perfect timing — and so do you.
</p>
<p className="text-base text-brand-muted mt-4 text-right italic mr-20">– Kiran</p>
</div>
      </div>

      <div className="fade-in mx-auto max-w-xl mt-6 sm:mt-8 px-4 sm:px-6 md:px-8">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
          >
            <input
              type="email"
              placeholder="you@busyhuman.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-accent"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-brand-accent text-white font-medium hover:bg-brand-accent/80 hover:scale-[1.02] transition-all duration-200"
            >
              Join the early list
            </button>
          </form>
        ) : (
          <p className="text-green-700 font-medium text-center pt-2">
            Thanks. We'll let you know when it's ready.
          </p>
        )}
      </div>

      {/* <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-32 bg-brand-highlight/30 blur-3xl rounded-full z-10" /> */}
    </section>
  );
}