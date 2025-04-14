import React, { useState, useCallback } from "react";
// Uncomment the following if Embla Carousel is installed:
// import useEmblaCarousel from "embla-carousel-react";

const sampleConversations = [
  {
    id: 1,
    title: "Past Idea Recall",
    userMessage: "I had a thought about async onboarding...",
    relayMessage: "Relay reminds you: polish that idea before the investor call.",
  },
  {
    id: 2,
    title: "Missed Follow-Through",
    userMessage: "I forgot to follow up after the meeting...",
    relayMessage: "Relay alerts you: A follow-up is pending for your meeting with Alex.",
  },
  {
    id: 3,
    title: "Thread Resurrector",
    userMessage: "Remember the discussion on the design thread?",
    relayMessage: "Relay reconnects the dots from past messages to the current context.",
  },
  {
    id: 4,
    title: "Contextual Repetition",
    userMessage: "This idea keeps popping up in multiple chats!",
    relayMessage: "Relay aggregates recurring thoughts for clarity.",
  },
];

export function ConversationCarousel() {
  // Uncomment if using Embla Carousel:
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 10 });

  // State to track the current slide index in our manual implementation
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sampleConversations.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? sampleConversations.length - 1 : prev - 1
    );
  }, []);

  return (
    <section className="max-w-5xl mx-auto relative">
      {/* Section Heading */}
      <h2 className="text-3xl font-medium mb-6 text-center">
        Conversations in Context
      </h2>
      
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        /* UI: This container is now more contained in width for a focused look */
      >
        {sampleConversations.map((conv, index) => (
          <div
            key={conv.id}
            className={`transition-all duration-500 ease-in-out 
              ${index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0"}`}
            /* UI: Removed hover effect from the card content for a clean experience */
          >
            <div className="p-8 border rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-semibold mb-2">{conv.title}</h3>
              <div className="mb-4">
                <p className="text-sm text-brand-muted">
                  <strong>User: </strong>{conv.userMessage}
                </p>
                <p className="text-sm text-brand-text">
                  <strong>Relay: </strong>{conv.relayMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows Positioned at Mid Height on the Sides */}
      <button 
        onClick={prevSlide} 
        aria-label="Previous Slide"
        className="absolute left-[-1rem] top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:scale-105 transition-transform"
        /* UI: Increased arrow size and added slight scale effect on hover;
           repositioned to avoid overlapping the content box */
      >
        &larr;
      </button>
      <button 
        onClick={nextSlide} 
        aria-label="Next Slide"
        className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:scale-105 transition-transform"
        /* UI: Increased arrow size and added slight scale effect on hover;
           repositioned to avoid overlapping the content box */
      >
        &rarr;
      </button>

      {/* Slide Indicators (Bubbles) */}
      <div className="flex justify-center mt-4 space-x-2">
        {sampleConversations.map((_, index) => (
          <div 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "bg-brand-accent" : "bg-brand-border"}`}
            /* UI: The indicators remain minimal without additional hover effects */
          />
        ))}
      </div>
    </section>
  );
}