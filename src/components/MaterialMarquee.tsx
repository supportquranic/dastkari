import React from 'react';

export const MaterialMarquee: React.FC = () => {
  const items = [
    'Multan Blue Pottery',
    'Pure Sindhi Indigo Ajrak',
    'Hand-Painted Camel Skin Lamps',
    'Raw Folk Truck Art',
    'Handwoven Tribal Kilim Rugs',
    '48-Hour Nationwide Dispatch',
    'Direct Artisan Livelihood',
  ];

  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '36px 0',
        whiteSpace: 'nowrap',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          animation: 'marqueeScroll 26s linear infinite',
          minWidth: '100%',
        }}
      >
        {[...items, ...items, ...items].map((text, idx) => (
          <React.Fragment key={idx}>
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                fontWeight: 650,
                color: 'var(--main-ink)',
                letterSpacing: '-0.03em',
              }}
            >
              {text}
            </span>
            <div
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                flexShrink: 0,
              }}
            />
          </React.Fragment>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};
