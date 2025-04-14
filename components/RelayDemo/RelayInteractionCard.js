import React, { useState, useEffect } from 'react';
import ChatMessageBubble from './ChatMessageBubble';
import OutputPreviewCard from './OutputPreviewCard';
import { Bot, Mic } from 'lucide-react';
import ScenarioNavigator from './ScenarioNavigator';

const RelayInteractionCard = ({ scenario, currentIndex, total, onNext, onPrev }) => {
  const [showPreview, setShowPreview] = useState(false);
  if (!scenario) return null;

  const { userMessage, relayMessage, cta, output } = scenario;

  useEffect(() => {
    setShowPreview(false);
  }, [scenario?.id]);

  const handleCTA = () => {
    if (cta?.action === 'preview') {
      setShowPreview(true);
    }
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md transition-all duration-300 ease-in-out animate-softReveal">
      {/* Header */}
      <div className="flex items-center gap-2 text-sm font-semibold text-brand-muted mb-4">
        <Bot size={16} className="text-brand-muted" />
        Relay Assistant
        <span className="w-2 h-2 bg-green-500 rounded-full inline-block ml-1" />
        <span className="text-xs text-gray-400 font-normal">Online</span>
      </div>

      {/* Chat Body */}
      <div className="flex flex-col gap-3 mb-6">
        <ChatMessageBubble sender="user" markdown={userMessage} />

        <ChatMessageBubble sender="relay" markdown={relayMessage} />

        {/* View Preview Button */}
        {cta && !showPreview && (
          <div className="-mt-3 ml-[48px]">
            <button
      onClick={handleCTA}
      className="bg-brand-accent text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-brand-accent/90 transition"
    >
      {cta.label}
    </button>
  </div>
)}

        {/* Output Preview */}
        {output && showPreview && (
          <div className="ml-[48px]">
            <OutputPreviewCard {...output} />
          </div>
        )}

        {/* Mock Input Bar */}
        <div className="mt-6 ml-[48px] flex items-center gap-3 bg-white border border-brand-border rounded-xl px-4 py-3 shadow-sm opacity-70 cursor-not-allowed">
            <Mic size={16} className="text-gray-400"/>
        <span className="text-sm text-gray-500 italic">Talk to Relay</span>
  </div>
      </div>
      {total > 1 && (
  <div>
    {/* {console.log({ total, currentIndex, scenario })} */}
    <ScenarioNavigator
      currentIndex={currentIndex}
      total={total}
      onNext={onNext}
      onPrev={onPrev}
    />
  </div>
)}
    </div>
    
  );
};

export default RelayInteractionCard;