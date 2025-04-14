import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AnatomyOfAThought } from "../components/AnatomyOfAThought";
import ComparisonSection from "../components/ComparisonSection";
import { EdgeSection } from "../components/EdgeSection";
import { FinalCTA } from "../components/FinalCTA";
// import { RelayCarousel } from "../components/RelayMomentShowcase";
import { IconMorph } from "../components/IconMorph";
import RelayDemoContainer from "../components/RelayDemo/RelayDemoContainer";
import { SectionSeparator } from "../components/SectionSeparator";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Function to check if the device is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.innerHeight < 768); // 768px is a common breakpoint for mobile
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Email submitted:", email);
    setSubmitted(true);
  };

  // Mobile version of the site
  if (isMobile) {
    return (
        // <div className="flex flex-col justify-center items-center h-screen w-screen text-brand-text">
          
        //   <p className="text-lg font-medium mt-6 text-center px-6">
        //     Relay is designed to be introduced on a bigger canvas.<br />
        //     But don't worry — it's coming to your pocket soon.
        //   </p>
        // </div>
      <Layout>
        <div className="flex flex-col min-h-screen">
          {/* Relay logo in top left */}
          <div className="p-6">
            <h1 className="text-5xl font-serif font-semibold text-brand-text">Relay</h1>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Relay's true home will be on your phone.
            </h2>
            <p className="text-lg mb-6">We just want to take a little extra room to introduce it.</p>
            {/* <div className="w-16 h-16 mb-6"> */}
            <IconMorph />
            {/* </div> */}
            
            {/* Email submission form */}
            <div className="w-full max-w-md mt-8">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-3"
                >
                  <p className="text-sm text-brand-muted">We'll only send this one email -- nothing else.</p>
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
                    className="w-full px-6 py-3 rounded-md bg-brand-accent text-white font-medium hover:bg-brand-accent/80 hover:scale-[1.02] transition-all duration-200"
                  >
                    I'll pick this up on desktop
                  </button>
                </form>
              ) : (
                <p className="text-green-700 font-medium text-center pt-2">
                  We've sent you a link — so when you're back at your desk, your thoughts can follow. 
                </p>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Desktop version of the site
  return (
    <Layout>
  {/* Ambient glow - moved to top and increased z-index */}
  <div className="pointer-events-none fixed -top-32 -right-32 w-[600px] h-[600px] z-20 bg-brand-accent opacity-20 blur-[120px] rounded-full" />

  {/* HERO */}
  <section className="px-4 sm:px-6 md:px-8 pt-20 pb-24 bg-white">
    <HeroSection />
  </section>
  <SectionSeparator fromClass="bg-white" toClass="bg-zinc-50" />

  {/* EDGE */}
  <section className="px-4 sm:px-6 md:px-8 py-24 bg-zinc-50 border-zinc-200">
    <EdgeSection />
  </section>
  <SectionSeparator fromClass="bg-zinc-50" toClass="bg-white" />

  {/* DEMO */}
  <section className="px-4 sm:px-6 md:px-8 py-24 bg-white border-zinc-200">
    <RelayDemoContainer />
  </section>
  <SectionSeparator fromClass="bg-white" toClass="bg-zinc-50" />

  {/* COMPARISON */}
  <section className="px-4 sm:px-6 md:px-8 py-24 bg-zinc-50 border-zinc-200">
    <ComparisonSection />
  </section>
  <SectionSeparator fromClass="bg-zinc-50" toClass="bg-white" />

  {/* FINAL CTA */}
  <section className="px-4 sm:px-6 md:px-8 py-24 bg-white border-zinc-200">
    <FinalCTA />
  </section>
</Layout>
  );
}