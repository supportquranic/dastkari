import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowRight } from 'lucide-react';

export const CategoryBento: React.FC = () => {
  const { navigateTo } = useShop();

  interface CategoryItem {
    id: string;
    name: string;
    count: string;
    tint: string;
    image: string;
    gridArea: string;
    isLarge: boolean;
    imageWidth: string;
    imageBottom: string;
    imageRight: string;
    pattern?: string;
    patternOpacity?: number;
    patternSize?: string;
    patternMode?: 'tile' | 'cover';
  }

  const categories: CategoryItem[] = [
    {
      id: 'seating',
      name: 'Blue Pottery',
      count: '4 pieces',
      tint: 'var(--sage)',
      image: '/images/chair.webp',
      gridArea: 'seating',
      isLarge: true,
      imageWidth: '76%',
      imageBottom: '-10px',
      imageRight: '-10px',
    },
    {
      id: 'lighting',
      name: 'Ajrak',
      count: '4 pieces',
      tint: 'var(--butter)',
      image: '/images/ajrak1.webp',
      gridArea: 'lighting',
      isLarge: false,
      imageWidth: '55%',
      imageBottom: '10px',
      imageRight: '20px',
    },
    {
      id: 'tables',
      name: 'Camel Skin Lamp',
      count: '2 pieces',
      tint: 'var(--sand)',
      image: '/images/lamp1.webp',
      gridArea: 'tables',
      isLarge: false,
      imageWidth: '58%',
      imageBottom: '10px',
      imageRight: '15px',
    },
    {
      id: 'textiles',
      name: 'Truck Art',
      count: '4 pieces',
      tint: 'var(--blush)',
      image: '/images/cushion.webp',
      gridArea: 'textiles',
      isLarge: false,
      imageWidth: '36%',
      imageBottom: '16px',
      imageRight: '36px',
    },
  ];

  return (
    <section style={{ margin: '60px 0 80px' }}>
      {/* Section Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '28px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: 650,
            lineHeight: 0.95,
            letterSpacing: '-0.035em',
            color: 'var(--main-ink)',
            margin: 0,
          }}
        >
          Find your corner
        </h2>

        <button
          onClick={() => navigateTo('/shop')}
          className="btn-pill btn-pill-cream"
          style={{
            height: '46px',
            padding: '0 20px',
            fontSize: '14px',
            gap: '10px',
          }}
        >
          <span>All products</span>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'var(--main-ink)',
              color: '#E4D3C2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ArrowRight size={13} />
          </div>
        </button>
      </div>

      {/* 4-column × 2-row Bento Grid */}
      <div className="category-bento-grid">
        {categories.map(cat => {
          const isTruckArt = cat.id === 'textiles';
          return (
            <div
              key={cat.id}
              onClick={() => navigateTo(`/shop?c=${cat.id}`)}
              className={`card-tile category-tile ${cat.isLarge ? 'category-tile-large' : 'category-tile-small'}`}
              style={{
                backgroundColor: cat.tint,
                gridArea: cat.gridArea,
                position: 'relative',
                overflow: 'hidden',
                border: isTruckArt ? '3.5px solid #FFC81A' : undefined,
                boxShadow: isTruckArt ? '0 0 0 1.5px #E0A000, 0 10px 26px rgba(224, 160, 0, 0.16)' : undefined,
              }}
            >
              {/* Header: Title/Count on Left, Arrow Circle on Right */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 10, position: 'relative' }}>
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: cat.isLarge ? 'clamp(28px, 3.2vw, 42px)' : '24px',
                      fontWeight: 700,
                      color: 'var(--main-ink)',
                      lineHeight: 1.05,
                    }}
                  >
                    {cat.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'var(--secondary-ink)',
                      marginTop: '4px',
                      fontWeight: 600,
                    }}
                  >
                    {cat.count}
                  </div>
                </div>

                {/* Circular Action Arrow */}
                <div className="category-arrow-circle">
                  <span className="arrow-icon">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </div>

              {/* Cutout Image with Inset and Hover Animation - ON TOP of pattern */}
              <div className="category-cutout-wrap" style={{ zIndex: 5 }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="category-cutout-img"
                  style={{
                    width: cat.imageWidth,
                    maxHeight: '80%',
                    bottom: cat.imageBottom,
                    right: cat.imageRight,
                    zIndex: 5,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
