import React, { useEffect, useRef, useState } from 'react';
import { Truck, Moon, ShieldCheck, Leaf } from 'lucide-react';

export const PromiseCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [val3, setVal3] = useState(0);
  const [val4, setVal4] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || hasAnimated) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setHasAnimated(true);

        // Animate 48h
        let c1 = 0;
        const t1 = setInterval(() => {
          c1 += 2;
          if (c1 >= 48) {
            setVal1(48);
            clearInterval(t1);
          } else setVal1(c1);
        }, 25);

        // Animate 30 nights
        let c2 = 0;
        const t2 = setInterval(() => {
          c2 += 1;
          if (c2 >= 30) {
            setVal2(30);
            clearInterval(t2);
          } else setVal2(c2);
        }, 30);

        // Animate 10 years
        let c3 = 0;
        const t3 = setInterval(() => {
          c3 += 1;
          if (c3 >= 10) {
            setVal3(10);
            clearInterval(t3);
          } else setVal3(c3);
        }, 50);

        // Animate 100%
        let c4 = 0;
        const t4 = setInterval(() => {
          c4 += 5;
          if (c4 >= 100) {
            setVal4(100);
            clearInterval(t4);
          } else setVal4(c4);
        }, 20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const cards = [
    {
      tint: 'var(--sky)',
      icon: <Truck size={18} color="var(--main-ink)" />,
      val: hasAnimated ? val1 : 48,
      unit: 'h',
      title: 'Dispatch',
      desc: 'In stock pieces leave the workshop within two days.',
    },
    {
      tint: 'var(--blush)',
      icon: <Moon size={18} color="var(--main-ink)" />,
      val: hasAnimated ? val2 : 30,
      unit: 'nights',
      title: 'Home trial',
      desc: "Live with it for a month. Free returns if it isn't right.",
    },
    {
      tint: 'var(--butter)',
      icon: <ShieldCheck size={18} color="var(--main-ink)" />,
      val: hasAnimated ? val3 : 10,
      unit: 'years',
      title: 'Frame warranty',
      desc: 'Every frame and joint, for a decade.',
    },
    {
      tint: 'var(--sage)',
      icon: <Leaf size={18} color="var(--main-ink)" />,
      val: hasAnimated ? val4 : 100,
      unit: '%',
      title: 'Carbon-neutral',
      desc: 'Delivery emissions offset, packaging plastic-free.',
    },
  ];

  return (
    <section ref={containerRef} style={{ margin: '80px 0 100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '36px' }}>
        <span
          className="font-mono"
          style={{
            color: 'var(--faint-ink)',
            letterSpacing: '0.08em',
            fontSize: '11px',
            fontWeight: 600,
          }}
        >
          THE PROMISE
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
          Buy once, keep for good
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
            className="card-tile"
            style={{
              backgroundColor: c.tint,
              padding: 'clamp(28px, 2.5vw, 36px)',
              borderRadius: 'var(--radius-tile)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            {/* Small icon container at top left */}
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                backgroundColor: 'rgba(251, 250, 247, 0.9)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(28, 27, 24, 0.06)',
                border: '1px solid rgba(226, 221, 210, 0.6)',
              }}
            >
              {c.icon}
            </div>

            {/* Value, Label and Description */}
            <div style={{ marginTop: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: 'clamp(38px, 4.2vw, 54px)',
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    color: 'var(--main-ink)',
                  }}
                >
                  {c.val}
                </span>
                <span
                  style={{
                    fontSize: c.unit === '%' ? '24px' : '18px',
                    fontWeight: 600,
                    color: 'var(--main-ink)',
                  }}
                >
                  {c.unit}
                </span>
              </div>

              <div
                style={{
                  fontSize: '15px',
                  fontWeight: 650,
                  color: 'var(--main-ink)',
                  marginTop: '12px',
                }}
              >
                {c.title}
              </div>

              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: 'var(--secondary-ink)',
                  marginTop: '6px',
                }}
              >
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .promise-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: var(--gap-mobile) !important;
          }
        }
        @media (max-width: 520px) {
          .promise-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
