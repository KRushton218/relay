// import React, { useState, useCallback } from 'react';

// const relayMomentCategories = [
//   {
//     name: "Context You Can Act On",
//     subline: "Relay connects the dots across tools so you can do something with them.",
//     moments: [
//       {
//         id: 1,
//         title: "Cluster Recovery",
//         initiatedBy: "Relay",
//         trigger: "Relay notices related fragments scattered over time and across modes.",
//         userInput: null,
//         relayLine:
//           "You dropped pieces of this across a voice note, a calendar reminder, and a doc stub. I've stitched them into a working cluster. Want to take a look?",
//         artifact: "Working cluster of related thoughts",
//         whyItMatters:
//           "Assumes you're thinking, not forgetting. Surfaces insights without requiring you to hunt for them.",
//         suggestedDraft: null,
//       },
//       {
//         id: 2,
//         title: "Language Sharpening (Best-Self Recall)",
//         initiatedBy: "Relay",
//         trigger: "Relay detects you're reworking a previously expressed concept.",
//         userInput: null,
//         relayLine:
//           "I think you're circling the same idea you were sketching two weeks ago: 'Trust builds when the roadmap makes sense.' Sound familiar?",
//         artifact: "Past phrasing with better alignment to current intent",
//         whyItMatters:
//           "You don't have to rewrite your best thinking from scratch. Relay helps you sound like your smartest self — consistently.",
//         suggestedDraft: null,
//       },
//       {
//         id: 3,
//         title: "Remind Me What I Said About...",
//         initiatedBy: "User",
//         trigger: "User vaguely recalls a topic and wants to revisit their phrasing.",
//         userInput: "Remind me what I said about alignment debt?",
//         relayLine:
//           "You brought it up twice this month — once in a 1:1 note and again during the sprint planning doc. I've grouped both for you — want a quick read?",
//         artifact: "Grouped previous mentions for quick reference",
//         whyItMatters:
//           "Gives you effortless recall and makes you feel like you've got a memory that actually works.",
//         suggestedDraft: null,
//       },
//     ],
//   },
//   {
//     name: "Prepared Before You Ask",
//     subline: "Relay sees what's ahead and helps you show up ready.",
//     moments: [
//       {
//         id: 4,
//         title: "Upcoming Meeting Itinerary",
//         initiatedBy: "Relay",
//         trigger: "A calendar event is coming up. Your notes are scattered across tools.",
//         userInput: null,
//         relayLine:
//           "Dani's QBR is tomorrow. You mentioned her roadmap, product alignment, and churn risks in separate notes. I pulled them into a prep itinerary — want to take a look?",
//         artifact: "Prep itinerary combining relevant context",
//         whyItMatters:
//           "You walk into the meeting already aligned, not catching up. Relay connects past signals to the moment that needs them.",
//         suggestedDraft: null,
//       },
//       {
//         id: 5,
//         title: "Messaging Catalyst",
//         initiatedBy: "Relay",
//         trigger:
//           "Relay detects friction signals across meetings, notes, and side chats.",
//         userInput: null,
//         relayLine:
//           "You've flagged this in reviews, notes, and side chats: – Users are landing, but not acting – First steps aren't clear – Follow-through is low. Want to send a note to the pod to align around it?",
//         artifact: "Suggested internal message to align the team",
//         whyItMatters:
//           "Helps you rally the team without rehashing every conversation. Turns scattered feedback into a crisp, timely leadership moment.",
//         suggestedDraft:
//           "We're seeing interest — but not clarity. A lot of users are arriving, but too many are bouncing before they get value. Let's anchor this week on answering one question: How do we make the first action feel obvious?",
//       },
//     ],
//   },
//   {
//     name: "From Swirl to Ship",
//     subline: "Relay turns your fragments into drafts, summaries, and output.",
//     moments: [
//       {
//         id: 6,
//         title: "Draft Builder (From Swirl to Shape)",
//         initiatedBy: "User",
//         trigger: "User asks for help compiling related notes into a draft.",
//         userInput: "Can you help me pull together something from all my onboarding notes?",
//         relayLine:
//           "You've collected 9 links, 4 notes, and a quote about onboarding friction. Want a rough draft? I've got a few ways this could come together.",
//         artifact: "Draft document proposal based on existing notes",
//         whyItMatters:
//           "Relay helps you turn raw info into structured output. No staring at a blank page. Just forward momentum.",
//         suggestedDraft: null,
//       },
//       {
//         id: 7,
//         title: "What's the State of X?",
//         initiatedBy: "User",
//         trigger: "User asks for a summary of scattered mentions.",
//         userInput: "Where do things stand with onboarding friction?",
//         relayLine:
//           "You've mentioned it in 3 different places over the past two weeks — a doc comment, a voice note, and a design review. Want a quick summary or something shareable?",
//         artifact: "Summary of topic mentions and key signals",
//         whyItMatters:
//           "Relay connects signals across tools so you don't have to go digging. You stay informed — and in motion.",
//         suggestedDraft: null,
//       },
//     ],
//   },
// ];

// /**
//  * RelayMomentCard Component
//  *
//  * This component displays a single Relay moment with its title, type,
//  * trigger description, relay message, optional suggested draft, and design insights.
//  *
//  * Props:
//  * - momentData: Object containing the following keys:
//  *   - id: unique identifier for the moment.
//  *   - title: The title/name of the moment.
//  *   - type: A string indicating if the moment is "Relay-Initiated" or "User-Initiated".
//  *   - trigger: A brief description of the trigger that activates this moment.
//  *   - relayLine: The main message that Relay displays.
//  *   - suggestedDraft (optional): Suggested draft text for moments that offer a starting point.
//  *   - designInsight (optional): Additional descriptive text explaining why this moment works.
//  */
// const RelayMomentCard = ({ momentData }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md border border-brand-border animate-softReveal mb-6">
//       {/* Header: Title and Type Badge */}
//       <div className="flex items-center justify-between mb-3">
//         <h3 className="text-xl font-semibold text-brand-text">{momentData.title}</h3>
//         {/* Badge indicating if the moment was initiated by Relay or the user */}
//         <span
//           className={`px-3 py-1 text-sm rounded-full font-medium ${
//             momentData.type === "Relay-Initiated"
//               ? "bg-blue-100 text-blue-600"
//               : "bg-green-100 text-green-600"
//           }`}
//         >
//           {momentData.type}
//         </span>
//       </div>
      
//       {/* Display the trigger that initiated the moment */}
//       <p className="mb-3 text-brand-muted">
//         <strong>Trigger: </strong>{momentData.trigger}
//       </p>
      
//       {/* Relay's message or response */}
//       <p className="mb-3 text-brand-text">
//         <strong>Relay Line: </strong>{momentData.relayLine}
//       </p>
      
//       {/* Optionally display the suggested draft if provided */}
//       {momentData.suggestedDraft && (
//         <p className="mb-3 text-brand-text">
//           <strong>Suggested Draft: </strong>{momentData.suggestedDraft}
//         </p>
//       )}
//     </div>
//   );
// };

// /**
//  * RelayMomentShowcase Component
//  *
//  * This component serves as the container for the entire Relay Moment Showcase.
//  * It iterates over an array of moment objects and renders a RelayMomentCard for each.
//  */
// export function RelayMomentShowcase() {
//     // Define an array containing all Relay moments
//     const relayMoments = [
//       {
//         id: 1,
//         title: "Cluster Recovery",
//         type: "Relay-Initiated",
//         trigger: "Relay notices related fragments scattered over time and across modes.",
//         relayLine:
//           "You dropped pieces of this across a voice note, a calendar reminder, and a doc stub. I've stitched them into a working cluster. Want to take a look?",
//       },
//       {
//         id: 2,
//         title: "Language Sharpening (Best-Self Recall)",
//         type: "Relay-Initiated",
//         trigger: "Relay detects you're reworking a previously expressed concept.",
//         relayLine:
//           "I think you're circling the same idea you were sketching two weeks ago: 'Trust builds when the roadmap makes sense.' Sound familiar?",
//       },
//       {
//         id: 3,
//         title: "Remind me what I said about...",
//         type: "User-Initiated",
//         trigger: "User recalls a topic and wants to revisit their phrasing.",
//         relayLine:
//           "You brought it up twice this month — once in a 1:1 note and again during the sprint planning doc. I've grouped both for you — want a quick read?",
//       },
//       {
//         id: 4,
//         title: "Upcoming Meeting Itinerary",
//         type: "Relay-Initiated",
//         trigger: "An event is near and associated notes are scattered.",
//         relayLine:
//           "Dani's QBR is tomorrow. You mentioned her roadmap, product alignment, and churn risks in separate notes. I pulled them into a prep itinerary — want to take a look?",
//       },
//       {
//         id: 5,
//         title: "Messaging Catalyst",
//         type: "Relay-Initiated",
//         trigger: "Multiple signals point to friction or confusion in feedback.",
//         relayLine:
//           "You've flagged this in reviews, notes, and side chats: – Users are landing, but not acting – First steps aren't clear – Follow-through is low. Want to send a note to the pod to align around it?",
//         suggestedDraft:
//           "We're seeing interest — but not clarity. A lot of users are arriving, but too many are bouncing before they get value. Let's anchor this week on answering one question: How do we make the first action feel obvious?",
//       },
//       {
//         id: 6,
//         title: "Draft Builder (From Swirl to Shape)",
//         type: "User-Initiated",
//         trigger: "User asks for help compiling related notes into a draft.",
//         relayLine:
//           "You've collected 9 links, 4 notes, and a quote about onboarding friction. Want a rough draft? I've got a few ways this could come together.",
//       },
//       {
//         id: 7,
//         title: "What's the State of X?",
//         type: "User-Initiated",
//         trigger: "User asks for a summary of scattered mentions.",
//         relayLine:
//           "You've mentioned it in 3 different places over the past two weeks — a doc comment, a voice note, and a design review. Want a quick summary or something shareable?",
//       },
//     ];
  
//     // State to track the currently displayed index in the carousel.
//     const [currentIndex, setCurrentIndex] = useState(0);
  
//     // Navigate to the next slide (wrapping to the beginning if needed)
//     const nextSlide = useCallback(() => {
//       setCurrentIndex((prev) => (prev + 1) % relayMoments.length);
//     }, [relayMoments.length]);
  
//     // Navigate to the previous slide (wrapping to the end if needed)
//     const prevSlide = useCallback(() => {
//       setCurrentIndex((prev) => (prev === 0 ? relayMoments.length - 1 : prev - 1));
//     }, [relayMoments.length]);
  
//     return (
//       <section className="max-w-5xl mx-auto relative">
//         {/* Section Heading */}
//         <h2 className="text-3xl font-bold mb-8 text-center text-brand-text">
//           See Relay in Action
//         </h2>
//         <p className="text-lg text-center text-brand-muted mb-8">Relay's Ready to Go — In Every Moment That Matters.
//         </p>
//         {/* Carousel container */}
//         <div className="relative overflow-hidden">
//           {relayMoments.map((moment, index) => (
//             <div
//               key={moment.id}
//               className={`transition-all duration-500 ease-in-out ${
//                 index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0"
//               }`}
//             >
//               {/* Render the RelayMomentCard with the moment's data */}
//               <RelayMomentCard momentData={moment} />
//             </div>
//           ))}
//         </div>
  
//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           aria-label="Previous Slide"
//           className="absolute left-[-1rem] top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:scale-105 transition-transform"
//         >
//           &larr;
//         </button>
//         <button
//           onClick={nextSlide}
//           aria-label="Next Slide"
//           className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 p-3 rounded-full hover:scale-105 transition-transform"
//         >
//           &rarr;
//         </button>
  
//         {/* Slide Indicators */}
//         <div className="flex justify-center mt-4 space-x-2">
//           {relayMoments.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
//                 index === currentIndex ? "bg-brand-accent" : "bg-brand-border"
//               }`}
//             />
//           ))}
//         </div>
//       </section>
//     );
//   }


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
import { MetaTag } from "./MetaTag";
import { ConversationWindow } from "./ConversationWindow";
import { WhyItMatters } from "./WhyItMatters";


export function RelayCarousel() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeMomentIndex, setActiveMomentIndex] = useState(0);
  const categories = [
    {
      name: "Context You Can Act On",
      subline: "Relay connects the dots across tools so you can do something with them.",
      moments: [
        {
          id: 1,
          title: "Cluster Recovery",
          initiatedBy: "Relay",
          trigger: "Relay notices related fragments scattered over time and across modes.",
          userInput: null,
          relayLine:
            "You dropped pieces of this across a voice note, a calendar reminder, and a doc stub. I've stitched them into a working cluster. Want to take a look?",
          artifact: "Working cluster of related thoughts",
          whyItMatters:
            "Assumes you're thinking, not forgetting. Surfaces insights without requiring you to hunt for them.",
          suggestedDraft: null,
        },
        {
          id: 2,
          title: "Language Sharpening (Best-Self Recall)",
          initiatedBy: "Relay",
          trigger: "Relay detects you're reworking a previously expressed concept.",
          userInput: null,
          relayLine:
            "I think you're circling the same idea you were sketching two weeks ago: 'Trust builds when the roadmap makes sense.' Sound familiar?",
          artifact: "Past phrasing with better alignment to current intent",
          whyItMatters:
            "You don't have to rewrite your best thinking from scratch. Relay helps you sound like your smartest self — consistently.",
          suggestedDraft: null,
        },
        {
          id: 3,
          title: "Remind Me What I Said About...",
          initiatedBy: "User",
          trigger: "User vaguely recalls a topic and wants to revisit their phrasing.",
          userInput: "Remind me what I said about alignment debt?",
          relayLine:
            "You brought it up twice this month — once in a 1:1 note and again during the sprint planning doc. I've grouped both for you — want a quick read?",
          artifact: "Grouped previous mentions for quick reference",
          whyItMatters:
            "Gives you effortless recall and makes you feel like you've got a memory that actually works.",
          suggestedDraft: null,
        },
      ],
    },
    {
      name: "Prepared Before You Ask",
      subline: "Relay sees what's ahead and helps you show up ready.",
      moments: [
        {
          id: 4,
          title: "Upcoming Meeting Itinerary",
          initiatedBy: "Relay",
          trigger: "A calendar event is coming up. Your notes are scattered across tools.",
          userInput: null,
          relayLine:
            "Dani's QBR is tomorrow. You mentioned her roadmap, product alignment, and churn risks in separate notes. I pulled them into a prep itinerary — want to take a look?",
          artifact: "Prep itinerary combining relevant context",
          whyItMatters:
            "You walk into the meeting already aligned, not catching up. Relay connects past signals to the moment that needs them.",
          suggestedDraft: null,
        },
        {
          id: 5,
          title: "Messaging Catalyst",
          initiatedBy: "Relay",
          trigger:
            "Relay detects friction signals across meetings, notes, and side chats.",
          userInput: null,
          relayLine:
            "You've flagged this in reviews, notes, and side chats: – Users are landing, but not acting – First steps aren't clear – Follow-through is low. Want to send a note to the pod to align around it?",
          artifact: "Suggested internal message to align the team",
          whyItMatters:
            "Helps you rally the team without rehashing every conversation. Turns scattered feedback into a crisp, timely leadership moment.",
          suggestedDraft:
            "We're seeing interest — but not clarity. A lot of users are arriving, but too many are bouncing before they get value. Let's anchor this week on answering one question: How do we make the first action feel obvious?",
        },
      ],
    },
    {
      name: "From Swirl to Ship",
      subline: "Relay turns your fragments into drafts, summaries, and output.",
      moments: [
        {
          id: 6,
          title: "Draft Builder (From Swirl to Shape)",
          initiatedBy: "User",
          trigger: "User asks for help compiling related notes into a draft.",
          userInput: "Can you help me pull together something from all my onboarding notes?",
          relayLine:
            "You've collected 9 links, 4 notes, and a quote about onboarding friction. Want a rough draft? I've got a few ways this could come together.",
          artifact: "Draft document proposal based on existing notes",
          whyItMatters:
            "Relay helps you turn raw info into structured output. No staring at a blank page. Just forward momentum.",
          suggestedDraft: null,
        },
        {
          id: 7,
          title: "What's the State of X?",
          initiatedBy: "User",
          trigger: "User asks for a summary of scattered mentions.",
          userInput: "Where do things stand with onboarding friction?",
          relayLine:
            "You've mentioned it in 3 different places over the past two weeks — a doc comment, a voice note, and a design review. Want a quick summary or something shareable?",
          artifact: "Summary of topic mentions and key signals",
          whyItMatters:
            "Relay connects signals across tools so you don't have to go digging. You stay informed — and in motion.",
          suggestedDraft: null,
        },
      ],
    },
  ];
  const category = categories[activeCategoryIndex];
  const moment = category.moments[activeMomentIndex];

  const next = () => {
    if (activeMomentIndex < category.moments.length - 1) {
      setActiveMomentIndex((prev) => prev + 1);
    } else if (activeCategoryIndex < categories.length - 1) {
      setActiveCategoryIndex((prev) => prev + 1);
      setActiveMomentIndex(0);
    }
  };

  const prev = () => {
    if (activeMomentIndex > 0) {
      setActiveMomentIndex((prev) => prev - 1);
    } else if (activeCategoryIndex > 0) {
      const newCatIndex = activeCategoryIndex - 1;
      setActiveCategoryIndex(newCatIndex);
      setActiveMomentIndex(categories[newCatIndex].moments.length - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6 max-w-6xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-brand-text">
          See Relay in Action
        </h2>
        <p className="text-lg text-center text-brand-muted mb-8">Relay's Ready to Go — In Every Moment That Matters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 max-w-6xl mx-auto">
  {categories.map((cat, index) => {
    const isActive = index === activeCategoryIndex;
    return (
      <button
        key={cat.name}
        onClick={() => {
          setActiveCategoryIndex(index);
          setActiveMomentIndex(0);
        }}
        className={`text-left p-4 rounded-xl shadow-sm border transition-all duration-200 ${
          isActive
            ? "bg-brand-accent text-white border-brand-accent shadow-md"
            : "bg-white text-gray-800 border-gray-200 hover:bg-gray-50"
        }`}
      >
        <h4 className="text-md font-semibold mb-1">{cat.name}</h4>
        <p className="text-sm opacity-80">{cat.subline}</p>
      </button>
    );
  })}
</div>
        {/* <h2 className="text-xl font-semibold text-muted-foreground">
          {category.name}
        </h2> */}
        {/* <p className="text-base text-gray-500 mt-1">{category.subline}</p> */}
      </div>

      <div className="flex items-center gap-4">
        <button onClick={prev} className="p-2 hover:bg-accent rounded">
          <ChevronLeft />
        </button>

        <div className="flex-1 border rounded-xl shadow p-6 bg-white min-h-[420px] flex flex-col justify-center items-center">            
          
          <div className="mb-4">
          <MetaTag label={moment.trigger || moment.initiatedBy} />
          </div>
          <ConversationWindow moment={moment} />
          <WhyItMatters text={moment.whyItMatters} />
        </div>

        <button onClick={next} className="p-2 hover:bg-accent rounded">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
