import React from 'react';
import { whyItMattersContent } from './relayScenarios';

const sectionTitles = {
  why: 'Why It Matters',
  payoff: 'Real-World Payoff',
  ideal: 'Ideal For'
};

const WhyItMattersPanel = ({ tabId, scenarioId, section }) => {
  const content = whyItMattersContent[tabId]?.[scenarioId];
    if (!content) return null;

  const dataMap = {
    why: content.bullets,
    payoff: content.stats,
    ideal: content.personas
  };

  const data = dataMap[section];
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-brand-accent mb-3">
        {sectionTitles[section]}
      </h3>
      <ul className="list-disc list-inside text-sm text-brand-text space-y-2">
        {data.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyItMattersPanel;
