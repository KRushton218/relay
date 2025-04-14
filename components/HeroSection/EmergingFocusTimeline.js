import { useEffect, useRef, useState } from 'react';

export function EmergingFocusTimeline() {
// EXTENDED CHAOS ADDED BELOW
const events = [
    // Monday
    { id: 1, label: 'Relay capture', content: 'Remember to follow up with Jordan (PM from Alloy?)', source: 'Quick note', date: 'Monday 9:03 AM', icon: '📝' },
    { id: 2, label: 'Voice memo', content: 'Ask about 401k matching in the next all-hands?', source: 'Voice memo', date: 'Monday 9:47 AM', icon: '🎤' },
    { id: 3, label: 'Time suck', content: 'Can we schedule a 90-min retro to reflect on the 15-min retro?', source: 'Calendar invite', date: 'Monday 2:45 PM', icon: '📅' },
    { id: 4, label: 'Internal monologue', content: 'I don’t think we’ve ever defined what success *looks* like for activation.', source: 'Lunch walk note', date: 'Monday 1:45 PM', icon: '🚶' },
    { id: 5, label: 'Draft Slack', content: 'not sure if this is the right thread but...', source: 'Unsent message', date: 'Monday 2:05 PM', icon: '💬' },
    { id: 6, label: 'Meeting capture', content: 'Let’s revisit the intro screen later?', source: 'Call notes', date: 'Monday 2:47 PM', icon: '📝' },
    { id: 7, label: 'Meeting fragment', content: '“This isn’t a blocker... but it’s bothering me.”', source: 'Sprint planning', date: 'Monday 3:17 PM', icon: '🧠' },
    { id: 8, label: 'Meeting note', content: '“We can punt this to Q3?”', source: 'Strategy session', date: 'Monday 3:22 PM', icon: '📅' },
    { id: 9, label: 'Open loop', content: '“Can someone own this?”', source: 'Slack silence', date: 'Monday 4:20 PM', icon: '🔕' },
    { id: 10, label: 'Unclear brief', content: '“What are we actually trying to solve here?”', source: 'Onboarding thread', date: 'Monday 5:02 PM', icon: '🧾' },
    { id: 51, label: 'Coffee thought', content: 'Am I building a flow or writing a novel?', source: 'Morning note', date: 'Monday 10:17 AM', icon: '☕' },
    { id: 52, label: 'UI grumble', content: '“We should delete this button.” “Why?” “I hate it.”', source: 'Design huddle', date: 'Monday 1:30 PM', icon: '🧨' },
    { id: 53, label: 'Metrics panic', content: 'Bounce rate doubled on onboarding screen two', source: 'Analytics dashboard', date: 'Monday 11:23 AM', icon: '📊' },
  
    // Tuesday (slow)
    { id: 11, label: 'Corporate ritual', content: '“Anyone want to try a gratitude Slack thread?”', source: 'HR pilot program', date: 'Tuesday 8:04 AM', icon: '🧘' },
    { id: 12, label: 'Awkward memory', content: 'Remember when we called it the “dashboard revolution”?', source: 'Old Slack thread', date: 'Tuesday 10:30 AM', icon: '💬' },
    { id: 13, label: 'Roadmap update', content: 'Need clearer intent at the top', source: 'Strategy sync', date: 'Tuesday 10:05 AM', icon: '🗂️' },
    { id: 14, label: 'Voice memo', content: 'What’s the actual story I’m trying to tell this quarter?', source: 'Self-captured note', date: 'Tuesday 11:22 AM', icon: '🧠' },
    { id: 15, label: 'Benefits brain ping', content: 'Add follow-up with legal about benefit enrollment window', source: 'Meeting follow-up', date: 'Tuesday 4:37 PM', icon: '📅' },
    { id: 54, label: 'Red flag', content: 'No one knows who owns the onboarding flow anymore', source: 'Post-mortem note', date: 'Tuesday 3:12 PM', icon: '🚩' },
  
    // Wednesday (HARD DAY)
    { id: 21, label: 'Voice memo', content: 'Could we build a “just landed” flow for new users?', source: 'Quick capture', date: 'Wednesday 8:17 AM', icon: '💡' },
    { id: 22, label: 'Design feedback', content: 'Can we drop the welcome animation?', source: 'Figma comment', date: 'Wednesday 9:00 AM', icon: '🎨' },
    { id: 23, label: 'Side project', content: 'Are we still doing the dashboard refresh or...?', source: 'Slack message', date: 'Wednesday 9:52 AM', icon: '📊' },
    { id: 24, label: 'Strategy doc', content: 'We’re assuming too much here', source: 'Product copy draft', date: 'Wednesday 10:32 AM', icon: '📧' },
    { id: 25, label: 'Side project note', content: 'Revisit chart color logic? Feels like a visual war crime', source: 'Design notes', date: 'Wednesday 12:12 PM', icon: '🎨' },
    { id: 26, label: 'Call note', content: 'We’re losing them on mobile', source: 'User call', date: 'Wednesday 1:10 PM', icon: '📞' },
    { id: 27, label: 'Side project panic', content: 'We promised the new dashboard by Q2. It’s still a Google Sheet.', source: 'Planning doc', date: 'Wednesday 4:12 PM', icon: '📉' },
    { id: 28, label: 'Random quote', content: '“It’s working... just not for users.”', source: 'Dev sync', date: 'Wednesday 4:48 PM', icon: '🤖' },
    { id: 29, label: 'Late night thought', content: 'Did I ever send that onboarding email draft?', source: 'Brain ping', date: 'Wednesday 10:18 PM', icon: '🌙' },
    { id: 30, label: 'Unlabeled voice', content: '“I know this is a tangent but—”', source: 'Voice memo', date: 'Wednesday 10:42 PM', icon: '🎤' },
    { id: 55, label: 'Popup thread', content: '“User says the popup blocks everything.”', source: 'Support log', date: 'Wednesday 2:55 PM', icon: '🧱' },
    { id: 56, label: 'UI joke', content: '“We’re legally obligated to have a spinner here.”', source: 'Dev chat', date: 'Wednesday 11:50 AM', icon: '🌀' },
    { id: 57, label: 'Thread necromancy', content: 'Revived a Figma thread from 6 weeks ago. Chaos ensued.', source: 'Figma', date: 'Wednesday 3:20 PM', icon: '🧟' },
  
    // Thursday
    { id: 31, label: 'Slack', content: 'Is this still the current flow?', source: 'Team channel', date: 'Thursday 10:10 AM', icon: '💬' },
    { id: 32, label: 'Performance review', content: 'Does “shows initiative” count if they only Slack after 9pm?', source: 'Peer review draft', date: 'Thursday 1:15 PM', icon: '📝' },
    { id: 33, label: 'Performance review', content: 'Need to write something neutral for Taylor.', source: 'Self note', date: 'Thursday 3:37 PM', icon: '📋' },
    { id: 34, label: 'Performance feedback', content: 'Should I mention the time she deleted the roadmap?', source: 'Drafted and deleted', date: 'Thursday 3:51 PM', icon: '🫠' },
    { id: 35, label: 'Side project drift', content: 'We added AI to the dashboard and now no one knows how it works', source: 'Engineer comment', date: 'Thursday 5:22 PM', icon: '🧠' },
    { id: 36, label: 'Figma comment', content: 'Does this screen actually need to exist?', source: 'Design review', date: 'Thursday 5:40 PM', icon: '🎨' },
    { id: 37, label: 'Slack debate', content: 'Should onboarding feel more like a product or a person?', source: 'Philosophy corner', date: 'Thursday 6:10 PM', icon: '🧩' },
    { id: 38, label: 'Feedback noise', content: '“This is fine.”', source: 'Team channel', date: 'Thursday 6:45 PM', icon: '😐' },
    { id: 39, label: 'Visual mess', content: '“This UI hurts my feelings”', source: 'Design slack', date: 'Thursday 7:12 PM', icon: '🎨' },
    { id: 40, label: 'Voice thought', content: 'What if this isn’t about onboarding at all?', source: 'Voice note', date: 'Thursday 9:30 PM', icon: '🎤' },
  
    // Friday (light)
    { id: 41, label: 'Article snippet', content: 'Ramp cut friction & saw 21% activation boost', source: 'Newsletter highlight', date: 'Friday 8:05 AM', icon: '📚' },
    { id: 42, label: 'Random draft', content: 'I think I’m avoiding writing that onboarding brief', source: 'Morning journal', date: 'Friday 9:01 AM', icon: '🧠' },
    { id: 43, label: 'Slack thread', content: 'Could we use onboarding to trigger PQLs?', source: '#strategy', date: 'Friday 10:47 AM', icon: '💬' },
    { id: 44, label: 'Performance summary', content: '“Strong communicator”', source: 'Performance doc', date: 'Friday 2:00 PM', icon: '📑' },
    { id: 45, label: 'Design sketch', content: 'This should feel faster', source: 'Mockup feedback', date: 'Friday 1:16 PM', icon: '🎨' },
    { id: 46, label: 'Insight note', content: 'People don’t want onboarding. They want progress.', source: 'End-of-week summary', date: 'Friday 3:30 PM', icon: '📓' },
    { id: 47, label: 'Inbox ghost', content: 'Is that FSA deadline today?', source: 'Unknown source', date: 'Friday evening', icon: '⏰' },
    { id: 48, label: 'Calendar chaos', content: 'Someone just created a recurring meeting called "Reflect + Refocus" at 6 PM Fridays.', source: 'Outlook', date: 'Friday 4:44 PM', icon: '📆' },
    { id: 49, label: 'Mental tab', content: 'Did we ever follow up with the revops person from Monday?', source: 'Sticky note', date: 'Friday 5:30 PM', icon: '📌' },
    { id: 50, label: 'Last message', content: '“We’ll circle back Monday”', source: 'Slack', date: 'Friday 6:03 PM', icon: '📪' },
    { id: 58, label: 'Snarky wrap', content: '“Anyway. Good sprint.”', source: 'End of retro', date: 'Friday 6:30 PM', icon: '🍷' },
    { id: 59, label: 'Reflection drift', content: '“What *was* this week?”', source: 'Slack DM', date: 'Friday 6:47 PM', icon: '🫥' },
    { id: 60, label: 'Low power mode', content: 'Literally forgot what this doc was for', source: 'Unnamed Google Doc', date: 'Friday 7:01 PM', icon: '🔋' }
  ];
  

  const scrollRef = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTop = 0;
    const totalScroll = el.scrollHeight - el.clientHeight;
    const startDelay = 100;
    const scrollIncrement = 2;
    const intervalTime = 32;

    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (el.scrollTop < totalScroll) {
          el.scrollTop += scrollIncrement;
        } else {
          clearInterval(intervalId);
          setHasRevealed(true);
        }
      }, intervalTime);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="text-sm font-semibold text-brand-text uppercase tracking-wide mb-2">
      Your team works across apps, threads, and formats.
      </div>
      <div className="text-base text-gray-600 mb-4">
      You keep things moving — even when everything moves at once.
      </div>

      <div className="relative max-h-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex flex-col space-y-6 border-l-2 border-gray-200 pl-6 max-h-[400px] overflow-y-scroll pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
{events.map((event) => (
            <div key={event.id} className="timeline-item relative opacity-100 pl-8">
              <div className="absolute left-0 top-1.5 w-6 text-center text-xl">{event.icon}</div>
              <div className="text-sm text-gray-500 ml-2">{event.date}</div>
              <div className="text-base font-medium text-gray-800 ml-2">{event.content}</div>
              <div className="text-sm text-gray-400 ml-2">{event.source}</div>
            </div>
          ))
}
        </div>
      </div>

      {/* Reserved space + fade in up animation */}
      
    </div>
  );
}