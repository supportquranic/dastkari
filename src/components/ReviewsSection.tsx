import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      stars: 5,
      quote:
        '“It’s become the chair everyone fights over. The bouclé is dense and soft, and it still looks new after a year with a dog.”',
      author: 'Ines Duarte',
      meta: 'Lisbon · Bolle Lounge Chair',
      avatar: '/images/avatar-1.jpg',
      initialTransform: 'translateX(60px) scale(0.88)',
    },
    {
      stars: 5,
      quote:
        '“The light it gives is so warm. We turned the ceiling lights off in November and haven’t switched them back on.”',
      author: 'Jonas Holm',
      meta: 'Oslo · Linne Table Lamp',
      avatar: '/images/avatar-2.jpg',
      initialTransform: 'scale(0.84)',
    },
    {
      stars: 5,
      quote:
        '“Heavy in the best way. Arrived in two days wrapped in paper, no plastic anywhere. That small thing sold me.”',
      author: 'Aiko Nakamura',
      meta: 'Copenhagen · Vagn Wool Throw',
      avatar: '/images/avatar-3.jpg',
      initialTransform: 'translateX(-60px) scale(0.88)',
    },
  ];

  return (
    <section ref={sectionRef} style={{ margin: '80px 0 100px' }}>
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
          REVIEWS
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
          Lived in, loved back
        </h2>
      </div>

      {/* 3 Review Cards Grid with Center-Grow and Spread Animation */}
      <div
        className="reviews-cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 'var(--gap-desktop)',
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="card-tile"
            style={{
              backgroundColor: 'var(--card)',
              padding: 'clamp(28px, 2.5vw, 36px)',
              borderRadius: 'var(--radius-tile)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              boxShadow: 'var(--shadow-tile)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0) scale(1)' : r.initialTransform,
              transition: `opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 120}ms, transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 120}ms, box-shadow 300ms ease`,
            }}
          >
            <div>
              {/* 5 Filled Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                {[...Array(r.stars)].map((_, idx) => (
                  <Star key={idx} size={15} fill="var(--main-ink)" stroke="var(--main-ink)" />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: 'var(--main-ink)',
                  margin: 0,
                  fontWeight: 450,
                }}
              >
                {r.quote}
              </p>
            </div>

            {/* Author Block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(226, 221, 210, 0.6)',
              }}
            >
              <img
                src={r.avatar}
                alt={r.author}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid var(--dividers)',
                }}
              />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 650, color: 'var(--main-ink)' }}>
                  {r.author}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--faint-ink)', marginTop: '2px' }}>
                  {r.meta}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .reviews-cards-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 16px !important;
            padding-bottom: 12px !important;
          }
          .reviews-cards-grid > div {
            min-width: 300px !important;
            scroll-snap-align: start !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
