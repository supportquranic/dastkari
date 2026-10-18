import React from 'react';
import { useShop } from '../context/ShopContext';
import { OurHeroesSection } from '../components/OurHeroesSection';
import { ArtisanStoriesSection } from '../components/ArtisanStoriesSection';
import { ArrowLeft, Sparkles, MapPin, HeartHandshake } from 'lucide-react';

export const StoriesPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '60px' }}>
      {/* Top Navigation Breadcrumb */}
      <div style={{ marginBottom: '28px' }}>
        <button
          onClick={() => navigateTo('/')}
          className="btn-pill btn-pill-outline"
          style={{ height: '40px', padding: '0 18px', fontSize: '13px' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Stories Page Hero Header */}
      <section
        className="card-tile"
        style={{
          padding: 'clamp(36px, 5vw, 64px)',
          backgroundColor: 'var(--card)',
          border: '1px solid var(--dividers)',
          marginBottom: '48px',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge-pill">LIVING HERITAGE ARCHIVE</span>
            <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>
              DIRECT FROM INDEPENDENT WORKSHOPS
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              color: 'var(--main-ink)',
              letterSpacing: '-0.035em',
            }}
          >
            Generations shaped by hand, riverbed & fire.
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.35vw, 19px)',
              lineHeight: 1.6,
              color: 'var(--secondary-ink)',
              marginTop: '22px',
              maxWidth: '680px',
            }}
          >
            Every object at Dastkari is born in historic Pakistani family studios. From foot-spun terracotta wheels in Multan to 16-step organic river resist-dyeing in Matiari, we document and celebrate the living hands carrying our craft forward.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid var(--dividers)',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HeartHandshake size={18} color="var(--main-ink)" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--main-ink)' }}>
                100% Fair Artisan Direct Wages
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} color="var(--main-ink)" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--main-ink)' }}>
                Multan · Matiari · Karachi · Rawalpindi
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="var(--main-ink)" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--main-ink)' }}>
                Ancient Indigenous Techniques
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Our Heroes Section */}
      <OurHeroesSection />

      {/* 2. Detailed 4 Split Artisan Stories Section */}
      <ArtisanStoriesSection />
    </div>
  );
};
