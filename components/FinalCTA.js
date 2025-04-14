import React, { useState } from "react";

export function FinalCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 px-6 mt-12 rounded-xl">
      <div className="max-w-2xl mx-auto text-center">
        <p className="uppercase text-sm tracking-wider text-indigo-500 font-semibold mb-3">
          Early Access
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4">
          You already think fast.<br className="hidden sm:inline" />
          Now your memory does too.
        </h2>
        <p className="text-zinc-600 text-base mb-10">
          Relay remembers what matters — even when you’re juggling 17 things and forgetting lunch.
        </p>

        <h3 className="text-xl font-semibold mb-4">Ready to try Relay?</h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="you@brainupgrade.io"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-72 px-5 py-3 rounded-md border border-zinc-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => {
              if (email) {
                console.log("Submitted email:", email);
              } else {
                console.log("Empty email submitted");
              }
            }}
            className="px-6 py-3 w-full sm:w-auto text-base rounded-md font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Join the Early List
          </button>
        </div>

        <p className="text-xs text-zinc-500 mt-4">
          No spam. No AI sales reps. Just the invite, when it's ready.
        </p>
      </div>
    </section>
  );
}