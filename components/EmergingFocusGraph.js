import React from 'react';

const clusters = [
  {
    label: 'Inbox Feedback', baseX: 200, baseY: 120, color: '#DDD6FE', layout: 'cloud-messy', children: 4
  },
  {
    label: 'Customer Friction', baseX: 260, baseY: 440, color: '#FCA5A5', layout: 'swarm', children: 6
  },
  {
    label: 'Team Signals', baseX: 460, baseY: 440, color: '#FCD34D', layout: 'spiral', children: 5
  },
  {
    label: 'Self Insight', baseX: 180, baseY: 360, color: '#A7F3D0', layout: 'scatter', children: 3
  },
  {
    label: 'External Patterns', baseX: 460, baseY: 120, color: '#F9A8D4', layout: 'orbit', children: 3
  },
];

export function EmergingFocusGraph() {
  const center = { x: 300, y: 300 };
  const rootRadius = 48;
  const firstGenRadius = 36;
  const childRadius = 12;

  return (
    <div className="bg-white shadow-xl rounded-3xl border border-brand-border p-8 w-full max-w-2xl font-sans">
      <h4 className="text-sm font-medium text-brand-text uppercase tracking-wide mb-4">
        Emerging Focus: Onboarding Rework
      </h4>
      <p className="text-sm text-brand-muted mb-6">
        Relay surfaced related signals from your activity, notes, and references.
      </p>

      <div className="w-full h-[600px]">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          {/* Connectors behind everything */}
          {clusters.map((group, groupIndex) => {
            const angleToCluster = Math.atan2(group.baseY - center.y, group.baseX - center.x);
            const lineStartX = center.x + rootRadius * Math.cos(angleToCluster);
            const lineStartY = center.y + rootRadius * Math.sin(angleToCluster);

            return (
              <line
                key={`line-${groupIndex}`}
                x1={lineStartX}
                y1={lineStartY}
                x2={group.baseX}
                y2={group.baseY}
                stroke="#E5E7EB"
                strokeWidth={group.label === 'Self Insight' ? 2.8 : 1.5}
              />
            );
          })}

          {/* Second gen: child nodes go first */}
          {clusters.map((group, groupIndex) => (
            <g key={`cluster-bubbles-${groupIndex}`}>
              {Array.from({ length: group.children }).map((_, i) => {
                let childX = group.baseX;
                let childY = group.baseY;
                const spread = 72;

                switch (group.layout) {
                  case 'swarm': {
                    const angle = i * 0.8;
                    childX += spread * Math.cos(angle);
                    childY += spread * Math.sin(angle);
                    break;
                  }
                  case 'spiral': {
                    const angle = i * 0.6;
                    const dist = 40 + i * 10;
                    childX += dist * Math.cos(angle);
                    childY += dist * Math.sin(angle);
                    break;
                  }
                  case 'scatter': {
                    const angle = i * 1.6;
                    const radius = 50 + i * 10;
                    childX += radius * Math.cos(angle);
                    childY += radius * Math.sin(angle);
                    break;
                  }
                  case 'cloud': {
                    const angle = (i / group.children) * Math.PI * 2;
                    childX += 40 + 30 * Math.cos(angle + i);
                    childY += 30 + 30 * Math.sin(angle - i);
                    break;
                  }
                  case 'cloud-messy': {
                    const angle = Math.random() * 2 * Math.PI;
                    const distance = 40 + Math.random() * 30;
                    childX += distance * Math.cos(angle);
                    childY += distance * Math.sin(angle);
                    break;
                  }
                  case 'orbit': {
                    const angle = (i / group.children) * 2 * Math.PI;
                    childX += 50 * Math.cos(angle);
                    childY += 50 * Math.sin(angle);
                    break;
                  }
                  default:
                    childX += (i + 1) * 30;
                }

                return (
                  <g key={`bubble-${groupIndex}-${i}`}>
                    <line
                      x1={group.baseX}
                      y1={group.baseY}
                      x2={childX}
                      y2={childY}
                      stroke="#E5E7EB"
                      strokeWidth={1}
                    />
                    <circle
                      cx={childX}
                      cy={childY}
                      r={childRadius}
                      fill={group.color}
                      opacity="0.7"
                    />
                  </g>
                );
              })}
            </g>
          ))}

          {/* Root node label */}
          <text
            x={center.x}
            y={center.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-[18px] fill-brand-text font-serif font-semibold"
          >
            Onboarding Rework
          </text>

          {/* First gen cluster nodes (after bubbles and lines) */}
          {clusters.map((group, groupIndex) => (
            <g key={`cluster-labels-${groupIndex}`}>
              <circle cx={group.baseX} cy={group.baseY} r={firstGenRadius} fill={group.color} opacity="0.9" />
              <text
                x={group.baseX}
                y={group.baseY + 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[10px] fill-gray-800 font-semibold"
              >
                {group.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
