import React from "react";
import { Bot, User } from 'lucide-react'

export function MessageBubble({
  type, // 'relay' or 'user'
  content,
  isArtifact = false,
  superscriptCount = null,
}) {
  const isUser = type === "user";

  return (
    <div
      className={`flex items-start gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-xs border-brand-accent border-2">
          <Bot className="h-7 w-7 text-brand-accent"/>
        </div>
      )}

      <div
        className={`max-w-[55%] rounded-xl px-4 py-2 text-sm whitespace-pre-line shadow-sm ${
          isUser
            ? "bg-brand-accent text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        } ${isArtifact ? "border-l-4 border-brand-accent" : ""}`}
      >
        {content}
        {superscriptCount && !isUser && (
          <sup className="ml-1 text-xs text-muted-foreground align-super">
            🔗[{superscriptCount}]
          </sup>
        )}
      </div>

      {/* Avatar for user */}
      {isUser && (
        <div className="w-9 h-9 bg-brand-accent rounded-full flex items-center justify-center text-xs">
          <User className="h-7 w-7 text-white"/>
        </div>
      )}
    </div>
  );
}
