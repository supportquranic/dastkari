import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export const ArtisanStoriesSection: React.FC = () => {
  const { navigateTo } = useShop();

  const stories = [
    {
      id: 'blue-pottery',
      artisanName: 'Ustad Allah Ditta',
      artisanRole: 'Master Ceramist · 42 Years at the Wheel',
      location: 'MULTAN, PUNJAB',
      title: 'Generations shaped by cobalt & clay.',
      story:
        'In the historic alleyways of Multan, Ustad Allah Ditta turns local riverbed clay on foot-spun wooden wheels, hand-painting turquoise and Persian cobalt floral motifs that have remained unbroken for four centuries.',
      quote: '“The clay listens to your fingers. If you hurry, it loses its soul.”',
      image: '/images/artisan-pottery.png',
      linkText: 'Explore Blue Pottery',
      linkPath: '/shop?c=seating',
      accent: '#2B579A',
    },
    {
      id: 'ajrak-printing',
      artisanName: 'Haji Mohammad Ismail',
      artisanRole: 'Master Block Printer · 38 Years of Heritage',
      location: 'MATIARI, SINDH',
      title: 'Dyed in river waters, stamped by hand.',
      story:
        'Preserving the sacred 16-step organic resist-dyeing tradition of Sindhi Ajrak. Hand-carved wooden blocks (pore), pure natural indigo, and sun-baked river clays give these geometric heirloom textiles their living spirit.',
      quote: '“True Ajrak breathes with the climate and deepens with time.”',
      image: '/images/artisan-ajrak.jpg',
      linkText: 'Explore Ajrak Textiles',
      linkPath: '/shop?c=lighting',
      accent: '#9A2B2B',
    },
    {
      id: 'camel-skin-lamp',
      artisanName: 'Abdul Rehman & Sons',
      artisanRole: 'Master Naqashi Artisan · 29 Years',
      location: 'MULTAN, PUNJAB',
      title: 'Sculpting light from sun-dried parchment.',
      story:
        'Abdul Rehman cleans and sculpts natural desert leather until it turns parchment-thin and translucent. Hand-painted with rich organic lacquer naqashi motifs, each lamp casts an amber, meditative warmth into the modern home.',
      quote: '“When the bulb glows inside, the parchment comes alive like stained glass.”',
      image: '/images/artisan-camellamp.jpg',
      linkText: 'Discover Camel Skin Lamps',
      linkPath: '/shop?c=tables',
      accent: '#C47B2B',
    },
    {
      id: 'truck-art',
      artisanName: 'Ustad Haider Ali',
      artisanRole: 'Master Folk Painter & Calligrapher',
      location: 'KARACHI, SINDH',
      title: 'Poetry in motion, brilliant in hue.',
      story:
        'Transforming everyday objects and slow-living decor into vibrant kaleidoscope canvases with intricate floral patterns, reflective chamakpatti, and poetic calligraphy celebrating the boundless spirit of folk imagination.',
      quote: '“Color is the language of celebration and devotion.”',
      image: '/images/artisan-truckart.jpg',
      linkText: 'Explore Truck Art Objects',
      linkPath: '/shop?c=textiles',
      accent: '#2EA043',
    },
  ];

  return (
    <section id="stories" style={{ margin: '96px 0 110px' }}>
      {/* Editorial Section Header */}
      <div style={{ marginBottom: '44px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span
            className="font-mono"
            style={{
              color: 'var(--faint-ink)',
              letterSpacing: '0.12em',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            THE LIVING ARCHIVE · ARTISAN STORIES
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: 650,
              lineHeight: 1.0,
              letterSpacing: '-0.035em',
              color: 'var(--main-ink)',
              marginTop: '12px',
            }}
          >
            Stories from the workshop
          </h2>
        </div>
        <p style={{ maxWidth: '420px', color: 'var(--secondary-ink)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
          Behind every piece is a master artisan carrying centuries of oral tradition, muscle memory, and ancestral technique.
        </p>
      </div>

      {/* 4 Split Story Cards Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        {stories.map((story) => (
          <div
            key={story.id}
            className="artisan-split-card"
            style={{
              backgroundColor: 'var(--main-ink)',
              borderRadius: '28px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              boxShadow: '0 20px 40px -15px rgba(181, 91, 44, 0.25)',
              minHeight: '440px',
            }}
          >
            {/* Left Content Panel (Span 6) */}
            <div
              style={{
                gridColumn: 'span 6',
                padding: 'clamp(36px, 4.5vw, 60px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span
                    className="font-mono"
                    style={{
                      color: 'rgba(255, 255, 255, 0.55)',
                      letterSpacing: '0.12em',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {story.location}
                  </span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>·</span>
                  <span
                    className="font-mono"
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}
                  >
                    {story.artisanName}
                  </span>
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.9rem, 3vw, 2.9rem)',
                    fontWeight: 650,
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    color: '#E4D3C2',
                    marginTop: '0px',
                    marginBottom: '16px',
                  }}
                >
                  {story.title}
                </h3>

                <p
                  style={{
                    color: 'rgba(228, 211, 194, 0.88)',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    margin: 0,
                    maxWidth: '490px',
                  }}
                >
                  {story.story}
                </p>

                {/* Artisan Quote */}
                <div
                  style={{
                    marginTop: '20px',
                    paddingLeft: '14px',
                    borderLeft: '2px solid rgba(228, 211, 194, 0.4)',
                    color: '#E4D3C2',
                    fontSize: '14px',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {story.quote}
                </div>
              </div>

              {/* Action / Newsletter Pill Bar (matching reference mockup) */}
              <div
                style={{
                  marginTop: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <button
                  onClick={() => navigateTo(story.linkPath)}
                  className="btn-pill"
                  style={{
                    height: '46px',
                    padding: '0 22px',
                    fontSize: '13px',
                    fontWeight: 600,
                    backgroundColor: '#E4D3C2',
                    color: 'var(--main-ink)',
                    border: 'none',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d2beac';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E4D3C2';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{story.linkText}</span>
                  <ArrowRight size={14} />
                </button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(228, 211, 194, 0.12)',
                    borderRadius: '100px',
                    padding: '4px 14px',
                    border: '1px solid rgba(228, 211, 194, 0.2)',
                  }}
                >
                  <span className="font-mono" style={{ fontSize: '11px', color: 'rgba(228, 211, 194, 0.85)' }}>
                    {story.artisanRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Photograph Panel (Span 6) */}
            <div
              style={{
                gridColumn: 'span 6',
                position: 'relative',
                minHeight: '380px',
                overflow: 'hidden',
              }}
            >
              <img
                src={story.image}
                alt={`${story.artisanName} - ${story.title}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="artisan-card-img"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .artisan-split-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .artisan-split-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 50px -15px rgba(28, 27, 24, 0.35) !important;
        }
        .artisan-split-card:hover .artisan-card-img {
          transform: scale(1.05);
        }
        @media (max-width: 960px) {
          .artisan-split-card {
            grid-template-columns: 1fr !important;
          }
          .artisan-split-card > div:first-child {
            grid-column: span 1 !important;
          }
          .artisan-split-card > div:last-child {
            grid-column: span 1 !important;
            min-height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};
