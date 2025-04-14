import React from 'react';

const DemoTabs = ({ tabs, activeTabId, onTabChange }) => {
  return (
    <div className="flex flex-col mb-6">
      {tabs.map((tab, idx) => {
        const isActive = tab.id === activeTabId;
        const isLast = idx === tabs.length - 1;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative text-left text-base px-4 py-3 transition-colors
              ${isActive
                // 🔧 Updated active tab styling:
                ? 'bg-brand-highlight font-semibold text-brand-accent shadow-sm border-l-4 border-brand-accent rounded-md'
                // 🔧 Removed border from inactive tabs to prevent visual noise
                : 'text-brand-text hover:bg-gray-100 hover:shadow-sm'}
              ${!isLast
                // 🔧 Divider line softened to gray-100 for elegance
                ? 'after:content-[""] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-gray-100'
                : ''}
            `}
          >
            {tab.icon && (
              <span className="mr-2 text-brand-accent">
                <tab.icon size={16} />
              </span>
            )}
            <div className="flex flex-col">
              <span className={`text-base ${isActive ? 'font-semibold text-brand-accent' : 'text-brand-text'}`}>
                {tab.label}
              </span>
              {tab.description && (
                <span className="text-sm text-gray-500 leading-snug mt-1">
                  {tab.description}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default DemoTabs;