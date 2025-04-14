import React, { useState } from 'react';
import DemoTabs from './DemoTabs';
import WhyItMattersPanel from './WhyItMattersPanel';
import RelayInteractionCard from './RelayInteractionCard';
import ScenarioNavigator from './ScenarioNavigator';
import { scenarios, tabs } from './relayScenarios';

const RelayDemoContainer = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id); // e.g. 'context'
  const filteredScenarios = scenarios.filter((s) => s.tabId === activeTab);
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const currentScenario = filteredScenarios[scenarioIndex];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setScenarioIndex(0);
  };

  const handleNext = () => {
    setScenarioIndex((prev) =>
      (prev + 1) % filteredScenarios.length
    );
  };

  const handlePrev = () => {
    setScenarioIndex((prev) =>
      (prev - 1 + filteredScenarios.length) % filteredScenarios.length
    );
  };

  return (
    <section className="relative py-16 px-6 sm:px-6 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-text mb-2">See Relay in Action</h2>
        <p className="text-brand-muted max-w-xl mx-auto text-base">
          Real moments, real context, pulled from across your tools.
        </p>
      </div>
  
      {/* Main demo grid: Tabs + Scenario */}
      <div className="grid grid-cols-[35%_65%] gap-10 max-w-[1140px] mx-auto">
        <div className="flex flex-col gap-6">
          <DemoTabs
            tabs={tabs}
            activeTabId={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
        <div className="flex flex-col gap-6">
          <RelayInteractionCard scenario={currentScenario} currentIndex={scenarioIndex} total={filteredScenarios.length} onNext={handleNext} onPrev={handlePrev}/>
          {/* <ScenarioNavigator
            currentIndex={scenarioIndex}
            total={filteredScenarios.length}
            onNext={handleNext}
            onPrev={handlePrev}
          /> */}
        </div>
      </div>
  
      {/* Why It Matters: Now a big 3-column footer section */}
      <div className="max-w-[1140px] mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WhyItMattersPanel tabId={activeTab} scenarioId={currentScenario?.id} section="why" />
          <WhyItMattersPanel tabId={activeTab} scenarioId={currentScenario?.id} section="payoff" />
          <WhyItMattersPanel tabId={activeTab} scenarioId={currentScenario?.id} section="ideal" />
        </div>
      </div>
    </section>
  );
};

export default RelayDemoContainer;