import React from "react";
import { MessageBubble } from "./MessageBubble";

export function ConversationWindow({ moment }) {
  const { userInput, relayLine, suggestedDraft, initiatedBy } = moment;

  return (
    <div className="bg-muted p-4 rounded-xl space-y-4 min-h-[280px]">
      {/* Optional user input */}
      {userInput && (
        <MessageBubble type="user" content={userInput} />
      )}

      {/* Relay line */}
      <MessageBubble
        type="relay"
        content={relayLine}
        superscriptCount={moment.connectionCount || null}
      />

      {/* Suggested draft (if applicable) */}
      {suggestedDraft && (
        <MessageBubble
          type="relay"
          content={suggestedDraft}
          isArtifact={true}
        />
      )}
    </div>
  );
}
