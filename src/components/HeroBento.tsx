import React from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/catalog';
import { ArrowRight, Star, Plus, Truck } from 'lucide-react';

export const HeroBento: React.FC = () => {
  const { navigateTo, addToCart } = useShop();
  const chairProduct = PRODUCTS.find(p => p.id === 'suroor-e-parinda-angoor-bagh') || PRODUCTS[0];
  const pendantProduct = PRODUCTS.find(p => p.id === 'chamak-truck-pendant') || PRODUCTS[3];



  return (
    <section
      style={{
        marginTop: '16px',
        marginBottom: '40px',
      }}
    >
      {/* 12-column × 6-row Bento Grid */}
      <div
        className="hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(6, minmax(115px, 1fr))',
          gap: 'var(--gap-desktop)',
          minHeight: '720px',
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
            padding: 'clamp(24px, 3.2vw, 42px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'var(--card)',
            minHeight: '480px',
          }}
        >
          {/* Top season pill */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-pill">Collection 2026</span>
              <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>Handcrafted in Pakistan</span>
            </div>

            {/* Oversized Two-Line Heading */}
            <h1
              className="font-display hero-main-heading"
              style={{
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                fontWeight: 650,
                lineHeight: 0.98,
                letterSpacing: '-0.038em',
                marginTop: '16px',
                color: 'var(--main-ink)',
              }}
            >
              Calm objects<br />for slow homes.
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.15vw, 16px)',
                lineHeight: 1.5,
                color: 'var(--secondary-ink)',
                marginTop: '14px',
                maxWidth: '520px',
              }}
            >
              Riverbed clay, Ajrak hand block-prints and camel skin lighting. Dastkari curates slow Pakistani heritage objects directly from generational master artisans.
            </p>
          </div>

          {/* Bottom actions & social proof */}
          <div style={{ marginTop: '20px' }}>
            {/* Action buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
              <button
                onClick={() => navigateTo('/shop')}
                className="btn-pill btn-pill-ink"
                style={{ height: '48px', padding: '0 24px', fontSize: '14px' }}
              >
                <span>Explore the collection</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigateTo(`/product/${chairProduct.id}`)}
                className="btn-pill btn-pill-cream"
                style={{ height: '48px', padding: '0 22px', fontSize: '14px' }}
              >
                Featured Piece
              </button>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--dividers)' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/images/avatar-1.jpg"
                  alt="Customer"
                  style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid var(--card)', objectFit: 'cover' }}
                />
                <img
                  src="/images/avatar-2.jpg"
                  alt="Customer"
                  style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid var(--card)', marginLeft: '-8px', objectFit: 'cover' }}
                />
                <img
                  src="/images/avatar-3.jpg"
                  alt="Customer"
                  style={{ width: '34px', height: '34px', borderRadius: '50%', border: '2px solid var(--card)', marginLeft: '-8px', objectFit: 'cover' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#d4a017" stroke="#d4a017" />
                    ))}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '13px', marginLeft: '4px' }}>4.9 / 5</span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--faint-ink)', marginTop: '2px' }}>
                  From over 1,200 slow homes worldwide
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================
            2. Hero Chair Tile (5 cols × 6 rows)
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
            padding: '32px',
          }}
        >
          {/* Header row: Product Title at Left, Circular Material Badge at Right */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 10 }}>
            <div>
              <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>BESTSELLER</span>
              <h2 className="font-display" style={{ fontSize: '26px', fontWeight: 650, marginTop: '4px' }}>
                {chairProduct.name}
              </h2>
            </div>

            {/* Rotating Circular Material Badge */}
            <div
              style={{
                position: 'relative',
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                backgroundColor: 'rgba(251, 250, 247, 0.9)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-tile)',
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
                    SOLID FSC® OAK • BOUCLÉ •
                  </textPath>
                </text>
              </svg>
              {/* Center icon */}
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--main-ink)',
                }}
              />
            </div>
          </div>

          {/* Floating Chair Cutout & Soft Floor Shadow */}
          <div
            style={{
              position: 'absolute',
              inset: '16% 6% 14% 6%',
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
                bottom: '12%',
                width: '68%',
                height: '28px',
                background: 'radial-gradient(ellipse at center, rgba(28,27,24,0.42) 0%, rgba(28,27,24,0) 72%)',
                filter: 'blur(10px)',
                borderRadius: '50%',
              }}
            />

            {/* Vertically floating chair image */}
            <img
              src={chairProduct.image}
              alt={chairProduct.name}
              style={{
                width: '92%',
                maxHeight: '440px',
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
              padding: '8px 10px 8px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(28,27,24,0.1)',
              border: '1px solid rgba(226, 221, 210, 0.7)',
            }}
          >
            <div>
              <span className="font-mono" style={{ color: 'var(--faint-ink)', fontSize: '10px' }}>PRICE</span>
              <div style={{ fontSize: '18px', fontWeight: 650, color: 'var(--main-ink)' }}>Rs. {chairProduct.price.toLocaleString()}</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => navigateTo(`/product/${chairProduct.id}`)}
                className="btn-pill btn-pill-outline"
                style={{ height: '38px', padding: '0 16px', fontSize: '13px' }}
              >
                View piece
              </button>
              <button
                onClick={() => addToCart(chairProduct)}
                className="btn-pill btn-pill-ink"
                style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%' }}
                title="Add to bag"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================================
            3. Lighting Tile (4 cols × 2 rows)
            ================================================================= */}
        <div
          className="card-tile hero-tile-lighting"
          onClick={() => navigateTo(`/product/${pendantProduct.id}`)}
          style={{
            gridColumn: 'span 4',
            gridRow: 'span 2',
            backgroundColor: '#465F8E',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '3.5px solid #FFC81A',
            boxShadow: '0 0 0 1.5px #E0A000, 0 10px 26px rgba(224, 160, 0, 0.16)',
          }}
        >
          {/* Softened Pattern Overlay with Low Saturation */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/patterns/pattern-blue.svg)',
              backgroundSize: '150px auto',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
              opacity: 0.32,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Clean Typography - No Shape - Pure High-Contrast White & Gold */}
          <div style={{ zIndex: 5, maxWidth: '60%', position: 'relative' }}>
            <span
              className="font-mono"
              style={{
                color: '#FFE04A',
                textTransform: 'uppercase',
                fontSize: '11px',
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
                fontSize: '22px',
                fontWeight: 700,
                marginTop: '6px',
                color: '#FFFFFF',
                lineHeight: 1.15,
              }}
            >
              {pendantProduct.name}
            </h3>
            <div
              style={{
                fontSize: '17px',
                fontWeight: 700,
                marginTop: '8px',
                color: '#FFE04A',
              }}
            >
              Rs. {pendantProduct.price.toLocaleString()}
            </div>
          </div>

          <div style={{ zIndex: 5, position: 'relative' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 650,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#FFFFFF',
              }}
            >
              Explore Truck Art <ArrowRight size={14} color="#FFE04A" />
            </span>
          </div>

          {/* Swinging Pendant hanging from beyond the top edge */}
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-5px',
              width: '54%',
              height: '130%',
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
                filter: 'drop-shadow(0 14px 22px rgba(28,27,24,0.18))',
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
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div>
            <span className="font-mono" style={{ color: 'var(--faint-ink)', letterSpacing: '0.08em', fontSize: '11px', fontWeight: 600 }}>DELIVERY</span>
            <div style={{ marginTop: '8px' }}>
              <h3 className="font-display" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--main-ink)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                Free over Rs. 5,000
              </h3>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--secondary-ink)', marginTop: '8px', lineHeight: 1.4 }}>
              Dispatched in 48h nationwide. 30-day craft guarantee.
            </p>
          </div>

          {/* Animated Route & Circular Cobalt Delivery Truck */}
          <div style={{ position: 'relative', height: '40px', width: '100%', display: 'flex', alignItems: 'center' }}>
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
                top: '2px',
                left: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(47, 71, 208, 0.35)',
                animation: 'truckTranslate 4.5s ease-in-out infinite',
              }}
            >
              <Truck size={17} color="#ffffff" strokeWidth={2.2} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
