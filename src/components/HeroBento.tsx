import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/catalog';
import { ArrowRight, Plus, Truck } from 'lucide-react';

export const HeroBento: React.FC = () => {
  const { navigateTo, addToCart } = useShop();
  const chairProduct = PRODUCTS.find(p => p.id === 'anaar-kali-vase' || p.aliasIds?.includes('suroor-e-parinda-angoor-bagh')) || PRODUCTS[0];
  const pendantProduct = PRODUCTS.find(p => p.id === 'chamak-dhamak' || p.aliasIds?.includes('chamak-truck-pendant')) || PRODUCTS[3];

  return (
    <section
      className="hero-bento-section"
      style={{
        marginTop: '24px',
        marginBottom: '28px',
      }}
    >
      {/* 12-column × 6-row Bento Grid sized to fit exactly in one screen view */}
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          gap: '14px',
          height: 'calc(100svh - 122px)',
          maxHeight: '615px',
          minHeight: '470px',
          boxSizing: 'border-box',
        }}
      >
        {/* =================================================================
            1. Main Message Tile (7 cols × 4 rows)
            ================================================================= */}
        <div
          className="card-tile hero-tile-main"
          style={{
            gridColumn: 'span 7',
            gridRow: 'span 4',
            padding: 'clamp(20px, 2.4vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'var(--card)',
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          {/* Top season pill */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-pill">Collection 2026</span>
              <span className="font-mono" style={{ color: 'var(--faint-ink)', fontSize: '11px' }}>Handcrafted in Pakistan</span>
            </div>

            {/* Oversized Two-Line Heading */}
            <h1
              className="font-display hero-main-heading"
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.6rem)',
                fontWeight: 650,
                lineHeight: 0.98,
                letterSpacing: '-0.038em',
                marginTop: '12px',
                marginBottom: 0,
                color: 'var(--main-ink)',
              }}
            >
              Handmade things,<br />crafted to matter.
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(13px, 1.05vw, 15px)',
                lineHeight: 1.48,
                color: 'var(--secondary-ink)',
                marginTop: '12px',
                marginBottom: 0,
                maxWidth: '520px',
              }}
            >
              Riverbed clay, Ajrak hand block-prints and camel skin lighting. Dastkari curates slow Pakistani heritage objects directly from generational master artisans.
            </p>
          </div>

          {/* Action buttons (Testimonials completely removed) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '14px' }}>
            <button
              onClick={() => navigateTo('/shop')}
              className="btn-pill btn-pill-ink"
              style={{ height: '44px', padding: '0 22px', fontSize: '13.5px' }}
            >
              <span>Explore the collection</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => navigateTo(`/product/${chairProduct.id}`)}
              className="btn-pill btn-pill-cream"
              style={{ height: '44px', padding: '0 20px', fontSize: '13.5px' }}
            >
              Featured Piece
            </button>
          </div>
        </div>

        {/* =================================================================
            2. Hero Featured Tile (5 cols × 6 rows - Full Height)
            ================================================================= */}
        <div
          className="card-tile hero-tile-chair"
          style={{
            gridColumn: 'span 5',
            gridRow: 'span 6',
            backgroundColor: 'var(--sage)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px',
            minHeight: 0,
          }}
        >
          {/* Header row: Product Title at Left, Circular Material Badge at Right */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 10 }}>
            <div>
              <span className="font-mono" style={{ color: 'var(--faint-ink)', fontSize: '11px' }}>BESTSELLER</span>
              <h2 className="font-display" style={{ fontSize: '22px', fontWeight: 650, marginTop: '2px', lineHeight: 1.15 }}>
                {chairProduct.name}
              </h2>
            </div>

            {/* Rotating Circular Material Badge */}
            <div
              style={{
                position: 'relative',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(251, 250, 247, 0.9)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-tile)',
                flexShrink: 0,
              }}
            >
              {/* Rotating SVG circular text */}
              <svg
                viewBox="0 0 100 100"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  animation: 'rotateBadge 18s linear infinite',
                }}
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text fontSize="9.2" fontWeight="600" fill="var(--main-ink)" letterSpacing="0.14em">
                  <textPath href="#circlePath">
                    SOLID RIVERBED CLAY • MULTAN •
                  </textPath>
                </text>
              </svg>
              {/* Center icon */}
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--main-ink)',
                }}
              />
            </div>
          </div>

          {/* Floating Cutout & Soft Floor Shadow */}
          <div
            style={{
              position: 'absolute',
              inset: '14% 6% 14% 6%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          >
            {/* Separate Blurred Elliptical Floor Shadow */}
            <div
              style={{
                position: 'absolute',
                bottom: '8%',
                width: '64%',
                height: '22px',
                background: 'radial-gradient(ellipse at center, rgba(28,27,24,0.38) 0%, rgba(28,27,24,0) 72%)',
                filter: 'blur(8px)',
                borderRadius: '50%',
              }}
            />

            {/* Vertically floating vase image */}
            <img
              src={chairProduct.image}
              alt={chairProduct.name}
              style={{
                width: '88%',
                maxHeight: '340px',
                objectFit: 'contain',
                zIndex: 2,
                animation: 'chairFloat 5s ease-in-out infinite',
              }}
            />
          </div>

          {/* Bottom Inset Cream Action Pill Bar */}
          <div
            style={{
              zIndex: 10,
              backgroundColor: 'rgba(251, 250, 247, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 8px 6px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(28,27,24,0.1)',
              border: '1px solid rgba(226, 221, 210, 0.7)',
            }}
          >
            <div>
              <span className="font-mono" style={{ color: 'var(--faint-ink)', fontSize: '9px' }}>PRICE</span>
              <div style={{ fontSize: '16px', fontWeight: 650, color: 'var(--main-ink)' }}>Rs. {chairProduct.price.toLocaleString()}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => navigateTo(`/product/${chairProduct.id}`)}
                className="btn-pill btn-pill-outline"
                style={{ height: '36px', padding: '0 14px', fontSize: '12.5px' }}
              >
                View piece
              </button>
              <button
                onClick={() => addToCart(chairProduct)}
                className="btn-pill btn-pill-ink"
                style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
                title="Add to bag"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================================
            3. Truck Art Pendant Tile (4 cols × 2 rows)
            ================================================================= */}
        <div
          className="card-tile hero-tile-lighting"
          onClick={() => navigateTo(`/product/${pendantProduct.id}`)}
          style={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: '#465F8E',
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            minHeight: 0,
          }}
        >
          {/* Typography */}
          <div style={{ zIndex: 5, maxWidth: '62%', position: 'relative' }}>
            <span
              className="font-mono"
              style={{
                color: '#FFE04A',
                textTransform: 'uppercase',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                display: 'block',
              }}
            >
              TRUCK ART
            </span>
            <h3
              className="font-display"
              style={{
                fontSize: '18px',
                fontWeight: 700,
                marginTop: '4px',
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              {pendantProduct.name}
            </h3>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 700,
                marginTop: '4px',
                color: '#FFE04A',
              }}
            >
              Rs. {pendantProduct.price.toLocaleString()}
            </div>
          </div>

          <div style={{ zIndex: 5, position: 'relative' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 650,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#FFFFFF',
              }}
            >
              Explore Truck Art <ArrowRight size={13} color="#FFE04A" />
            </span>
          </div>

          {/* Swinging Pendant hanging from beyond the top edge */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-5px',
              width: '52%',
              height: '125%',
              transformOrigin: '50% 0px',
              animation: 'pendantSwing 5.5s ease-in-out infinite',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            <img
              src={pendantProduct.image}
              alt={pendantProduct.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'top center',
                filter: 'drop-shadow(0 12px 18px rgba(28,27,24,0.18))',
              }}
            />
          </div>
        </div>

        {/* =================================================================
            4. Delivery Tile (3 cols × 2 rows)
            ================================================================= */}
        <div
          className="card-tile hero-tile-delivery"
          style={{
            gridColumn: 'span 3',
            gridRow: 'span 2',
            backgroundColor: 'var(--card)',
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 0,
          }}
        >
          <div>
            <span className="font-mono" style={{ color: 'var(--faint-ink)', letterSpacing: '0.08em', fontSize: '10px', fontWeight: 600 }}>DELIVERY</span>
            <div style={{ marginTop: '4px' }}>
              <h3 className="font-display" style={{ fontSize: '23px', fontWeight: 700, color: 'var(--main-ink)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Free over Rs. 5,000
              </h3>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--secondary-ink)', marginTop: '6px', lineHeight: 1.35 }}>
              Dispatched in 48h nationwide. 30-day craft guarantee.
            </p>
          </div>

          {/* Animated Route & Circular Cobalt Delivery Truck */}
          <div style={{ position: 'relative', height: '34px', width: '100%', display: 'flex', alignItems: 'center' }}>
            {/* Dashed route line */}
            <svg width="100%" height="2" style={{ overflow: 'visible' }}>
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="var(--dividers)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Cobalt circular truck moving along route */}
            <div
              style={{
                position: 'absolute',
                top: '0px',
                left: '12px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(47, 71, 208, 0.35)',
                animation: 'truckTranslate 4.5s ease-in-out infinite',
              }}
            >
              <Truck size={15} color="#ffffff" strokeWidth={2.2} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

