import React from 'react';
import { Hand, Paintbrush, Flower2, HeartHandshake } from 'lucide-react';

export const PromiseCards: React.FC = () => {
  const cards = [
    {
      tint: 'var(--sky)',
      icon: <Hand size={20} color="var(--main-ink)" strokeWidth={1.8} />,
      label: 'MADE BY HAND',
      desc: 'One piece at a time, so no two are ever alike.',
    },
    {
      tint: 'var(--blush)',
      icon: <Paintbrush size={20} color="var(--main-ink)" strokeWidth={1.8} />,
      label: 'ARTISAN-LED',
      desc: 'Made by skilled artisans whose knowledge is passed down through generations.',
    },
    {
      tint: 'var(--butter)',
      icon: <Flower2 size={20} color="var(--main-ink)" strokeWidth={1.8} />,
      label: 'CRAFT PRESERVATION',
      desc: 'Helping keep Ajrak, Kashi Kari, hand weaving, pottery, and other living traditions alive.',
    },
    {
      tint: 'var(--sage)',
      icon: <HeartHandshake size={20} color="var(--main-ink)" strokeWidth={1.8} />,
      label: 'FAIR TRADE',
      desc: 'Supporting fair pay, sustainable livelihoods, and dignified opportunities for artisans.',
    },
  ];

  return (
    <section style={{ margin: '80px 0 100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <span
          className="font-mono"
          style={{
            color: 'var(--faint-ink)',
            letterSpacing: '0.08em',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          THE DASTKARI PROMISE
        </span>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: 650,
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: 'var(--main-ink)',
            marginTop: '10px',
          }}
        >
          Made by hand, made to matter
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 'var(--gap-desktop)',
        }}
        className="promise-cards-grid"
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className="card-tile promise-card"
            style={{
              backgroundColor: c.tint,
              padding: 'clamp(28px, 2.4vw, 36px)',
              borderRadius: 'var(--radius-tile)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '270px',
              transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 300ms ease',
              cursor: 'default',
            }}
          >
            {/* White icon container at top left */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                backgroundColor: 'rgba(251, 250, 247, 0.92)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(28, 27, 24, 0.05)',
                border: '1px solid rgba(226, 221, 210, 0.65)',
              }}
            >
              {c.icon}
            </div>

            {/* Label and Description */}
            <div style={{ marginTop: '44px' }}>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(20px, 1.8vw, 24px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  color: 'var(--main-ink)',
                  margin: 0,
                }}
              >
                {c.label}
              </h3>

              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.55,
                  color: 'var(--secondary-ink)',
                  marginTop: '10px',
                  marginBottom: 0,
                }}
              >
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .promise-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(28, 27, 24, 0.08);
        }
        @media (max-width: 960px) {
          .promise-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: var(--gap-mobile) !important;
          }
        }
        @media (max-width: 600px) {
          .promise-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
