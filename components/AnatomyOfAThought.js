import React from 'react';

export function AnatomyOfAThought() {
  return (
    <div className="max-w-5xl mx-auto py-24 font-sans">
      <div className="relative bg-gray-50/50 rounded-xl p-12 border border-brand-border/20">
        <div className="relative grid grid-cols-12 gap-6">
          {/* Left Column: User and Assistant Messages */}
          <div className="col-span-7 space-y-8">
            {/* User Message (left aligned) */}
            <div className="flex justify-start">
              <div className="relative pl-12 w-full">
                <div className="relative bg-white pt-8 px-6 pb-6 border border-brand-border shadow-sm text-left max-w-[80%] rounded-lg">
                  <span className="absolute left-6 top-3 text-[11px] font-medium uppercase tracking-wider text-brand-text/40 font-sans">User</span>
                  <p className="text-base text-brand-text">
                    What if I don't even remember I said it?
                  </p>
                </div>
              </div>
            </div>
            {/* Assistant Message (system box, right aligned) */}
            <div className="flex justify-end">
              <div className="relative pr-12 w-full">
                <div className="relative bg-white pt-8 px-6 pb-6 border border-brand-border shadow-sm text-left max-w-[80%] ml-auto rounded-lg">
                  <span className="absolute right-6 top-3 text-[11px] font-medium uppercase tracking-wider text-brand-text/40 font-sans">Relay</span>
                  <p className="text-base text-brand-text">
                    You dropped an idea for <span className="relative inline-flex flex-col group cursor-pointer"><span className="border-b-2 border-brand-accent/60 group-hover:border-brand-accent/80 transition-colors -mt-[3px]">async onboarding</span></span> right after your sync with Jess. Probably worth a polish before next week's investor call.
                  </p>
                  {/* Curved Connector Line */}
                  <svg 
                    className="absolute pointer-events-none top-[30%] right-[-120px] w-[120px] h-[140px] md:top-[30%] md:right-[-140px] md:w-[140px] md:h-[160px]"
                    viewBox="0 0 120 140"
                  >
                    <path 
                      d="M 0,0 C 30,0 80,40 125,-14" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4,4"
                      className="text-brand-accent/40"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Memory Source Block */}
          <div className="col-span-5 relative">
            <div className="bg-[#f9f9f9] px-5 py-4 border border-brand-border/60 shadow-sm absolute top-[35%] right-0 w-[90%] rounded-md">
              <div className="space-y-2">
                <p className="text-xs text-brand-text/80 flex items-baseline gap-2">
                  <span className="font-mono text-[11px] uppercase text-brand-text/50 w-14">Jan 8</span>
                  <span>📎 Voice memo – "Let's rethink async onboarding"</span>
                </p>
                <p className="text-xs text-brand-text/80 flex items-baseline gap-2">
                  <span className="font-mono text-[11px] uppercase text-brand-text/50 w-14">Jan 2</span>
                  <span>🗂 Slack notes – "launch timing," "product angle"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bold Tagline */}
        <div className="mt-24">
          <p className="text-xl font-bold text-brand-text text-center tracking-tight">NO TAGGING. NO BS.</p>
        </div>
      </div>
    </div>
  );
}

// to add:  It listens first. Then, when it counts, it makes you look like you meant to be that clear all along.