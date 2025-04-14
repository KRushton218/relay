import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScenarioNavigator = ({ currentIndex, total, onNext, onPrev }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-2">
      <div className="inline-flex items-center bg-gray-50 border border-brand-border rounded-full px-4 py-2 text-sm text-brand-muted shadow-sm">
        <button
          onClick={onPrev}
          disabled={total <= 1}
          aria-label="Previous Scenario"
          className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-default transition"
        >
          <ChevronLeft size={18} />
        </button>

        <span className="mx-3 text-sm font-semibold text-brand-muted">
          Scenario {currentIndex + 1} of {total}
        </span>

        <button
          onClick={onNext}
          disabled={total <= 1}
          aria-label="Next Scenario"
          className="p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-default transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ScenarioNavigator;