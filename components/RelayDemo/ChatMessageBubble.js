import React from 'react';
import { Bot, User } from 'lucide-react';
import { marked } from 'marked';

const ChatMessageBubble = ({ sender, markdown }) => {
  const isUser = sender === 'user';
  const Icon = isUser ? User : Bot;

  const bubbleClasses = isUser
    ? 'bg-[#eaf5ff] text-brand-text self-end'
    : 'bg-[#f5f5ff] text-brand-text self-start border border-brand-border';

  // Simple markdown to HTML — no extra sanitization
  const html = marked.parse(markdown || '');

  return (
    <div
      className={`flex items-end gap-2 mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 text-brand-muted mt-1">
          <Icon size={16} />
        </div>
      )}

      <div
        className={`
          rounded-xl px-5 py-3.5 max-w-[75%] shadow-sm
          text-[15px] leading-relaxed ${bubbleClasses}
        `}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {isUser && (
        <div className="flex-shrink-0 text-brand-muted mt-1">
          <Icon size={16} />
        </div>
      )}
    </div>
  );
};

export default ChatMessageBubble;