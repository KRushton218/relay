import { Lightbulb, Wrench, Ship } from 'lucide-react';

export const whyItMattersContent = {
  signal: {
    clusterRecovery: {
      bullets: [
        'Relay connects fragmented thoughts across tools.',
        'Gathers ideas you didn’t realize you scattered.',
      ],
      stats: [
        'Save 15+ min per planning cycle',
        'Reduce missed context handoffs',
      ],
      personas: ['Product Managers', 'Team Leads', 'Forgetful Overachievers'],
    },
  },
  sync: {
    draftBuilder: {
      bullets: ['Placeholder bullet 1', 'Placeholder bullet 2'],
      stats: ['Placeholder stat 1', 'Placeholder stat 2'],
      personas: ['Role A', 'Role B'],
    },
    onboardingThread: {
      bullets: [
        'Captures slow-building concerns across tools and people.',
        'Synthesizes discussion before it becomes fire-drill.',
      ],
      stats: [
        'Reduces repeated meeting cycles around the same issue',
        'Surfaces themes across notes, meetings, and Slack',
      ],
      personas: [
        'PMs tracking emergent user pain',
        'Cross-functional ICs managing alignment in chaos',
      ],
    },
  },
  send: {
    meetingItinerary: {
      bullets: ['Another placeholder bullet', 'Second swirl insight'],
      stats: ['Time savings: ???', 'Something about reduced chaos'],
      personas: ['Chaos Managers', 'People who email themselves'],
    },
    calendarPrep: {
      bullets: [
        'Relay turns scattered updates into pre-meeting clarity.',
        'Surfaces what matters — not just what’s on the calendar.',
      ],
      stats: [
        'Reduces last-minute prep time by 70%',
        'Improves meeting confidence and executive alignment',
      ],
      personas: [
        'Busy team leads with too many calendars',
        'Anyone tired of getting caught unprepared',
      ],
    },
  },
};

export const tabs = [
  {
    id: 'signal',
    label: 'Signal',
    description: 'We notice patterns across your tools — before you even ask.',
    icon: Lightbulb,
  },
  {
    id: 'sync',
    label: 'Sync',
    description: 'We connect scattered pieces into something coherent.',
    icon: Wrench,
  },
  {
    id: 'send',
    label: 'Send',
    description: 'We help you share updates that move things forward.',
    icon: Ship,
  },
];

export const scenarios = [
    {
      id: 'clusterRecovery',
      tabId: 'signal',
      userMessage: 'Did I already plan the Q3 kickoff?',
      relayMessage:
        'You left fragments of this in a **doc**, a **calendar**, and a **voice memo**.\n\nI pulled them into a working draft agenda — want to take a look?',
      cta: { label: 'Preview', action: 'preview' },
      output: {
        title: 'Q3 Kickoff Agenda',
        snippet:
          '- Introductions\n- Goals for Q3\n- Key Milestones\n- Action Items',
        sources: ['Google Doc', 'Calendar', 'User Conversation'],
      },
    },
    {
      id: 'draftBuilder',
      tabId: 'sync',
      userMessage: 'Is anything ready for the leadership update?',
      relayMessage:
        'You started a few notes in **Notion**, mentioned it in **Slack**, and tagged a **calendar** event.\n\nI combined them into a polished outline.',
      cta: { label: 'Open Outline', action: 'preview' },
      output: {
        title: 'Leadership Update Draft',
        snippet:
          '- Wins this quarter\n- Open risks\n- Decision points\n- Next steps',
        sources: ['Google Doc', 'Slack', 'Calendar'],
      },
    },
    {
      id: 'meetingItinerary',
      tabId: 'send',
      userMessage: 'Where did we land on that vendor decision?',
      relayMessage:
        'You and Sam debated this across **email**, **Slack**, and a **meeting transcript**.\n\nI summarized the options and suggested next steps.',
      cta: { label: 'View Summary', action: 'preview' },
      output: {
        title: 'Vendor Decision Summary',
        snippet:
          '- Vendor A: Faster\n- Vendor B: Cheaper\n- Current: Known risk\n- Recommendation: Trial A',
        sources: ['Email', 'Slack', 'Meeting Transcript'],
      },
    },
    {
      id: 'calendarPrep',
      tabId: 'send',
      userMessage: 'Wait — do I have that investor review today?',
      relayMessage:
        "You've got that **tomorrow at 2pm**.\n\nYou've been focusing on **NRR growth**, **customer sentiment**, and **churn friction** recently.\n\nI pulled together a prep doc — want to check it now?",
      cta: { label: 'Preview Outline', action: 'preview' },
      output: {
        title: 'Investor Review: Prep Outline',
        snippet:
          '- NRR up 11% QoQ\n- Sentiment: onboarding + pricing\n- Last meeting action items\n- Updated trial funnel projections',
        sources: ['Slack', 'Notion', 'Calendar'],
      },
    },
    {
      id: 'onboardingThread',
      tabId: 'sync',
      userMessage: 'Has the team even aligned on the new onboarding flow?',
      relayMessage:
        'You’ve brought this up in a few spots — **team notes**, **side chats**, and your last **1:1**.\n\n**Otter.ai** picked up friction points in two meetings this week.\n\nI pulled together a rough draft of what’s surfaced so far.',
      cta: { label: 'Preview Outline', action: 'preview' },
      output: {
        title: 'Onboarding Friction Draft',
        snippet:
          '- First-action unclear for new users\n- Repeated delays in activation handoff\n- Suggested actions: guided tour, simplified sign-up',
        sources: ['Otter.ai', 'Slack', 'Notion'],
      },
    },
  ];