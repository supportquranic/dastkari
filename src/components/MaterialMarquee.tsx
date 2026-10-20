import React from 'react';

export const MaterialMarquee: React.FC = () => {
  const items = [
    { text: 'Multan Blue Pottery', color: '#1E56A0' },
    { text: 'Pure Sindhi Indigo Ajrak', color: '#9B2323' },
    { text: 'Hand-Painted Camel Skin Lamps', color: '#C97214' },
    { text: 'Raw Folk Truck Art', color: '#168A40' },
    { text: 'Generations of Living Heritage', color: '#7E305C' },
    { text: '48-Hour Nationwide Dispatch', color: '#274FB8' },
    { text: 'Direct Artisan Livelihood', color: '#B85025' },
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
        {[...items, ...items, ...items].map((item, idx) => (
          <React.Fragment key={idx}>
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                fontWeight: 650,
                color: item.color,
                letterSpacing: '-0.03em',
                transition: 'opacity 0.2s ease',
              }}
            >
              {item.text}
            </span>
            <div
              style={{
                width: '9px',
                height: '9px',
                borderRadius: '50%',
                backgroundColor: item.color,
                opacity: 0.65,
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
