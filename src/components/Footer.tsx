import React from 'react';
import { useShop } from '../context/ShopContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <footer style={{ margin: '40px var(--gutter-desktop) 20px' }}>
      <div
        style={{
          backgroundColor: 'var(--main-ink)',
          color: '#fff',
          borderRadius: 'var(--radius-footer)',
          padding: '60px 48px 32px',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px', marginBottom: '60px' }}>
          <div style={{ gridColumn: 'span 6' }}>
            <div
              onClick={() => navigateTo('/')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '16px', cursor: 'pointer' }}
            >
              <img
                src="/ccd.svg"
                alt="DASTKARI"
                style={{ height: '46px', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '18px', color: '#E4D3C2', marginTop: '4px', maxWidth: '440px', lineHeight: 1.55 }}>
              Hand-thrown riverbed clay, 16-step organic Ajrak block-prints, and translucent camel skin lighting. Objects crafted by generational Pakistani masters to quiet the home and age with dignity.
            </p>
          </div>

          <div style={{ gridColumn: 'span 3' }}>
            <span className="font-mono" style={{ color: 'rgba(228, 211, 194, 0.75)' }}>NAVIGATION</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', fontSize: '14px' }}>
              <button onClick={() => navigateTo('/')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>Home</button>
              <button onClick={() => navigateTo('/shop')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>All Handcrafts</button>
              <button onClick={() => navigateTo('/stories')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer', fontWeight: 600 }}>Artisan Stories</button>
              <button onClick={() => navigateTo('/shop?c=seating')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>Blue Pottery</button>
              <button onClick={() => navigateTo('/shop?c=lighting')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>Ajrak</button>
              <button onClick={() => navigateTo('/shop?c=tables')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>Camel Skin Lamp</button>
              <button onClick={() => navigateTo('/shop?c=textiles')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>Truck Art</button>
              <button onClick={() => navigateTo('/shop?c=ceramics')} style={{ background: 'none', border: 'none', color: '#E4D3C2', textAlign: 'left', cursor: 'pointer' }}>Rugs</button>
            </div>
          </div>

          <div style={{ gridColumn: 'span 3' }}>
            <span className="font-mono" style={{ color: 'rgba(228, 211, 194, 0.75)' }}>TERMS & ETHOS</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px', fontSize: '14px' }}>
              <span style={{ color: '#E4D3C2' }}>Fair Artisan Wages</span>
              <span style={{ color: '#E4D3C2' }}>100% Authentic Handcraft</span>
              <span style={{ color: '#E4D3C2' }}>30-Day Craft Guarantee</span>
              <span style={{ color: '#E4D3C2' }}>Nationwide Dispatch</span>
            </div>
          </div>
        </div>

        {/* Huge Real DASTKARI Vector SVG Wordmark */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            padding: '24px 0 4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/logo-cream.svg"
            alt="DASTKARI"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '260px',
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Bottom divider & copyright */}
        <div
          style={{
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(228, 211, 194, 0.25)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: 'rgba(228, 211, 194, 0.75)',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span>© 2026 DASTKARI. Handcrafted Pakistani heritage objects and slow living archive.</span>
          <span className="font-mono">Handcrafted in Pakistan</span>
        </div>
      </div>
    </footer>
  );
};
