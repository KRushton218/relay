import React from 'react';
import {
  FileText,
  Calendar,
  MessageCircle,
  Mic,
  Mail,
  BookOpen,
  FileCode2,
  File,
  Slack,
} from 'lucide-react';

const sourceToIcon = {
  'Slack': Slack,
  'Notion': BookOpen,
  'Calendar': Calendar,
  'Email': Mail,
  'Otter.ai': Mic,
  'Read.ai': Mic,
  'meeting': Mic,
  'Relay Chat': MessageCircle,
  'Google Docs': FileText,
  'User Conversation': Mic,
  'transcript': FileCode2,
};

const OutputPreviewCard = ({ title, snippet, sources = [] }) => {
  return (
    <div className="bg-white border border-brand-border rounded-xl px-5 py-4 mt-4 shadow-sm animate-softReveal">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg font-semibold text-brand-accent leading-snug tracking-tight">
          {title}
        </h4>

        <div className="flex gap-2 items-center">
          {sources.map((src, i) => {
            const Icon = sourceToIcon[src] || File;

            return (
              <span
                key={i}
                className="relative group bg-white border border-gray-300 text-brand-text p-[6px] rounded-md hover:bg-brand-accent/10 transition cursor-default shadow-sm"
              >
                <Icon size={16} className="mt-px" />
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transform group-hover:translate-y-[-4px] transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
                  {src}
                </div>
              </span>
            );
          })}
        </div>
      </div>

      <ul className="text-[15px] text-brand-text leading-relaxed space-y-1.5 whitespace-pre-line list-disc list-inside pl-1">
        {snippet.split('\n').map((item, index) => (
          <li key={index}>{item.replace(/^\s*[-•]\s*/, '')}</li>
        ))}
      </ul>
    </div>
  );
};

export default OutputPreviewCard;