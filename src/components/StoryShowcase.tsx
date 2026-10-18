import React, { useEffect, useRef, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowUpRight } from 'lucide-react';

export const StoryShowcase: React.FC = () => {
  const { navigateTo } = useShop();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.4);

  // Counters state
  const [workshops, setWorkshops] = useState(0);
  const [oak, setOak] = useState(0);
  const [warranty, setWarranty] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from when element enters to when it passes midpoint
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.2;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      setScrollProgress(progress);

      // Trigger counter animation once in view
      if (rect.top < windowHeight * 0.75 && !animated) {
        setAnimated(true);
        animateCounters();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animated]);

  const animateCounters = () => {
    // Animate to 12
    let w = 0;
    const wTimer = setInterval(() => {
      w += 1;
      if (w >= 12) {
        setWorkshops(12);
        clearInterval(wTimer);
      } else setWorkshops(w);
    }, 50);

    // Animate to 100
    let o = 0;
    const oTimer = setInterval(() => {
      o += 5;
      if (o >= 100) {
        setOak(100);
        clearInterval(oTimer);
      } else setOak(o);
    }, 25);

    // Animate to 10
    let y = 0;
    const yTimer = setInterval(() => {
      y += 1;
      if (y >= 10) {
        setWarranty(10);
        clearInterval(yTimer);
      } else setWarranty(y);
    }, 60);
  };

  const text =
    'Every piece is made to be lived with. Sat on, spilled on, moved house twice and handed down. We build for the long version of home.';
  const words = text.split(' ');

  return (
    <section
      ref={sectionRef}
      style={{
        margin: '80px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 'var(--gap-desktop)',
        alignItems: 'stretch',
      }}
    >
      {/* Left Editorial Tile (Span 6) */}
      <div
        className="card-tile"
        style={{
          gridColumn: 'span 6',
          backgroundColor: 'var(--card)',
          padding: 'clamp(36px, 5vw, 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '520px',
        }}
      >
        {/* Large paragraph with progressive reveal from pale to dark ink */}
        <p
          className="font-display"
          style={{
            fontSize: 'clamp(2.1rem, 3.6vw, 3.4rem)',
            fontWeight: 650,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            margin: 0,
            wordBreak: 'break-word',
          }}
        >
          {words.map((word, i) => {
            const wordThreshold = i / words.length;
            const isRevealed = scrollProgress >= wordThreshold;
            return (
              <span
                key={i}
                style={{
                  color: isRevealed ? 'var(--main-ink)' : 'rgba(28, 27, 24, 0.22)',
                  transition: 'color 300ms ease',
                  display: 'inline-block',
                  marginRight: '0.24em',
                }}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Counters below thin divider */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            paddingTop: '36px',
            marginTop: '44px',
            borderTop: '1px solid var(--dividers)',
          }}
        >
          <div>
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1,
                color: 'var(--main-ink)',
                letterSpacing: '-0.02em',
              }}
            >
              {animated ? workshops : 12}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--secondary-ink)',
                marginTop: '6px',
                fontWeight: 500,
              }}
            >
              workshops
            </div>
          </div>

          <div>
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1,
                color: 'var(--main-ink)',
                letterSpacing: '-0.02em',
              }}
            >
              {animated ? oak : 100}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--secondary-ink)',
                marginTop: '6px',
                fontWeight: 500,
              }}
            >
              % FSC® oak
            </div>
          </div>

          <div>
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1,
                color: 'var(--main-ink)',
                letterSpacing: '-0.02em',
              }}
            >
              {animated ? warranty : 10}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--secondary-ink)',
                marginTop: '6px',
                fontWeight: 500,
              }}
            >
              year warranty
            </div>
          </div>
        </div>
      </div>

      {/* Right Room Photograph Tile (Span 6) */}
      <div
        className="card-tile"
        style={{
          gridColumn: 'span 6',
          minHeight: '520px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--radius-tile)',
        }}
      >
        <img
          src="/images/interior.jpg"
          alt="Room showcase"
          style={{
            width: '100%',
            height: '120%',
            objectFit: 'cover',
            position: 'absolute',
            top: '-10%',
            left: 0,
            transition: 'transform 800ms var(--ease-shared)',
          }}
        />

        {/* Lower Left Product Callout Pill */}
        <div
          onClick={() => navigateTo('/product/suroor-e-parinda-angoor-bagh')}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            backgroundColor: 'rgba(251, 250, 247, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: 'var(--radius-pill)',
            padding: '8px 18px 8px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-tile)',
            border: '1px solid rgba(226, 221, 210, 0.8)',
            transition: 'transform 300ms var(--ease-shared), box-shadow 300ms var(--ease-shared)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'var(--shadow-tile)';
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'var(--sage)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src="/images/chair.webp"
              alt="Suroor e Parinda - Angoor Bagh"
              style={{ width: '85%', height: '85%', objectFit: 'contain' }}
            />
          </div>

          <div>
            <div style={{ fontSize: '14px', fontWeight: 650, color: 'var(--main-ink)' }}>
              Suroor e Parinda
            </div>
            <div style={{ fontSize: '12px', color: 'var(--secondary-ink)' }}>
              Rs. 8,500 · In the room
            </div>
          </div>

          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: 'var(--main-ink)',
              color: '#E4D3C2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '4px',
            }}
          >
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};
