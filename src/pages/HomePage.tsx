import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/catalog';
import { HeroBento } from '../components/HeroBento';
import { MaterialMarquee } from '../components/MaterialMarquee';
import { CategoryBento } from '../components/CategoryBento';
import { StoryShowcase } from '../components/StoryShowcase';
import { PromiseCards } from '../components/PromiseCards';
import { ReviewsSection } from '../components/ReviewsSection';
import { Star, Plus, ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo, addToCart } = useShop();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Handcrafts', id: 'all' },
    { label: 'Blue Pottery', id: 'seating' },
    { label: 'Ajrak', id: 'lighting' },
    { label: 'Camel Skin Lamp', id: 'tables' },
    { label: 'Truck Art', id: 'textiles' },
  ];

  const categoryNameMap: Record<string, string> = {
    seating: 'Blue Pottery',
    lighting: 'Ajrak',
    tables: 'Camel Skin Lamp',
    textiles: 'Truck Art',
  };

  const displayedProducts = selectedFilter === 'all'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter(p => p.category === selectedFilter);

  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* 4.1 Live Hero Bento */}
      <HeroBento />

      {/* 4.2 Material Marquee Strip */}
      <MaterialMarquee />

      {/* 4.3 Category Bento Section ("Find your corner") */}
      <CategoryBento />

      {/* 4.4 Favourites Section */}
      <section style={{ margin: '48px 0 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
          <div>
            <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>CURATED FAVOURITES</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 650, marginTop: '6px' }}>
              Objects that anchor a room
            </h2>
          </div>

          {/* Segmented Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '6px',
              backgroundColor: 'var(--card)',
              padding: '4px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--dividers)',
              overflowX: 'auto',
              maxWidth: '100%',
            }}
          >
            {filterOptions.map(opt => {
              const isSelected = selectedFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFilter(opt.id)}
                  style={{
                    border: 'none',
                    borderRadius: 'var(--radius-pill)',
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: 500,
                    backgroundColor: isSelected ? 'var(--main-ink)' : 'transparent',
                    color: isSelected ? '#E4D3C2' : 'var(--secondary-ink)',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards 4-column Grid */}
        <div className="product-grid">
          {displayedProducts.map(product => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigateTo(`/product/${product.id}`)}
            >
              <div className={`product-panel-wrap bg-${product.tint}`}>
                <div className="product-floor-shadow" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-cutout-img"
                  loading="lazy"
                />
                <button
                  className="product-add-btn"
                  title={`Add ${product.name} to bag`}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  <Plus size={22} strokeWidth={2.2} />
                </button>
              </div>

              <div style={{ paddingTop: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="font-mono" style={{ color: 'var(--faint-ink)', textTransform: 'uppercase', fontSize: '11px' }}>
                    {categoryNameMap[product.category] || product.category}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: '17px' }}>Rs. {product.price.toLocaleString()}</span>
                </div>
                <div style={{ fontSize: '17px', fontWeight: 600, marginTop: '2px', color: 'var(--main-ink)' }}>
                  {product.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontSize: '13px', color: 'var(--secondary-ink)' }}>
                  <span className="star-rating"><Star size={13} fill="#d4a017" stroke="#d4a017" /></span>
                  <span style={{ fontWeight: 600 }}>{product.rating}</span>
                  <span>({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.5 Story & Room Showcase */}
      <StoryShowcase />

      {/* 4.6 Promise Cards ("Buy once, keep for good") */}
      <PromiseCards />

      {/* 4.7 Reviews Section ("Lived in, loved back") */}
      <ReviewsSection />

      {/* 4.8 Artisan Stories Teaser linking to /stories */}
      <section style={{ margin: '64px 0 32px' }}>
        <div
          onClick={() => navigateTo('/stories')}
          className="card-tile"
          style={{
            padding: 'clamp(32px, 4vw, 56px)',
            backgroundColor: 'var(--card)',
            border: '1px solid var(--dividers)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            cursor: 'pointer',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>BEHIND THE CRAFT</span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 650,
                marginTop: '8px',
                color: 'var(--main-ink)',
                letterSpacing: '-0.03em',
              }}
            >
              Meet the Masters Behind Pakistan's Living Heritage
            </h2>
            <p style={{ color: 'var(--secondary-ink)', marginTop: '12px', fontSize: '15px', lineHeight: 1.6 }}>
              From foot-spun terracotta wheels in Multan to 16-step organic river resist-dyeing in Matiari. Read the generational stories of our craft elders.
            </p>
          </div>

          <button className="btn-pill btn-pill-ink" style={{ height: '50px', padding: '0 26px', fontSize: '14px' }}>
            <span>Explore Artisan Stories</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </div>
  );
};
