import React from 'react';
import { Award, MapPin } from 'lucide-react';

export const OurHeroesSection: React.FC = () => {
  const heroes = [
    {
      name: 'Ustad Allah Ditta',
      craft: 'Blue Pottery Master',
      location: 'Multan, Pakistan',
      experience: '42 years experience',
      tint: 'var(--sage)',
      image: '/images/artisan-pottery.jpg',
      quote: 'Every swirl of cobalt glaze carries stories taught to me by my grandfather on the foot-spun wheel.',
    },
    {
      name: 'Haji Mohammad Ismail',
      craft: 'Ajrak Block-Print Elder',
      location: 'Matiari, Sindh',
      experience: '38 years experience',
      tint: 'var(--butter)',
      image: '/images/artisan-ajrak.jpg',
      quote: 'True Ajrak drinks the sun and the river Indus 16 times before its indigo and madder red are born.',
    },
    {
      name: 'Abdul Rehman',
      craft: 'Camel Skin Lamp Shaper',
      location: 'Multan, Pakistan',
      experience: '29 years experience',
      tint: 'var(--sand)',
      image: '/images/artisan-camellamp.jpg',
      quote: 'We clean and sculpt the leather so thin that when dusk falls, it glows like amber in the dark.',
    },
    {
      name: 'Ustad Haider Ali',
      craft: 'Truck Art Visionary',
      location: 'Karachi, Pakistan',
      experience: '35 years experience',
      tint: 'var(--blush)',
      image: '/images/artisan-truckart.jpg',
      quote: 'Our brush strokes celebrate life in full vivid color — every motif is a prayer for safe travel.',
    },
  ];

  return (
    <section style={{ margin: '80px 0 100px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '36px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <span
            className="font-mono"
            style={{
              color: 'var(--faint-ink)',
              letterSpacing: '0.08em',
              fontSize: '11px',
              fontWeight: 600,
            }}
          >
            OUR HEROES
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
            The hands behind the heritage
          </h2>
        </div>

        <p
          style={{
            color: 'var(--secondary-ink)',
            fontSize: '15px',
            maxWidth: '420px',
            lineHeight: 1.5,
          }}
        >
          Behind every piece is a master artisan preserving centuries of unbroken cultural craft.
        </p>
      </div>

      {/* 4 Cards Grid with Image Placeholders */}
      <div
        className="heroes-cards-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 'var(--gap-desktop)',
        }}
      >
        {heroes.map((hero, i) => (
          <div
            key={i}
            className="card-tile hero-card-item"
            style={{
              backgroundColor: hero.tint,
              padding: '24px',
              borderRadius: 'var(--radius-tile)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-tile)',
              minHeight: '440px',
              transition: 'transform 300ms var(--ease-shared), box-shadow 300ms var(--ease-shared)',
            }}
          >
            {/* Image Portrait Box */}
            <div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3.4',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 6px 20px rgba(181, 91, 44, 0.14)',
                }}
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 400ms ease',
                  }}
                />
              </div>

              {/* Craft Badge & Origin */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '18px',
                  fontSize: '12px',
                }}
              >
                <span className="badge-pill" style={{ padding: '3px 10px', fontSize: '10px' }}>
                  {hero.craft}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--secondary-ink)' }}>
                  <MapPin size={12} />
                  <span>{hero.location}</span>
                </div>
              </div>

              {/* Artisan Name */}
              <h3
                className="font-display"
                style={{
                  fontSize: '22px',
                  fontWeight: 650,
                  color: 'var(--main-ink)',
                  marginTop: '12px',
                  lineHeight: 1.1,
                }}
              >
                {hero.name}
              </h3>

              {/* Quote */}
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: 'var(--secondary-ink)',
                  marginTop: '10px',
                  fontStyle: 'italic',
                }}
              >
                “{hero.quote}”
              </p>
            </div>

            {/* Bottom experience tag */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '18px',
                paddingTop: '14px',
                borderTop: '1px solid rgba(28, 27, 24, 0.1)',
                fontSize: '12px',
                color: 'var(--main-ink)',
                fontWeight: 600,
              }}
            >
              <Award size={14} color="var(--main-ink)" />
              <span>{hero.experience}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hero-card-item:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-elevated) !important;
        }
        @media (max-width: 1024px) {
          .heroes-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: var(--gap-mobile) !important;
          }
        }
        @media (max-width: 540px) {
          .heroes-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
