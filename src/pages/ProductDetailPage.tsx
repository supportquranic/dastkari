import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/catalog';
import { Star, ArrowLeft, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import type { Finish } from '../types';

interface ProductDetailPageProps {
  productId: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const { navigateTo, addToCart } = useShop();
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  const [selectedFinish, setSelectedFinish] = useState<Finish>(product.finishes[0]);
  const [activeTab, setActiveTab] = useState<'details' | 'dimensions' | 'care'>('details');
  const [viewMode, setViewMode] = useState<'product' | 'room'>('product');
  const [quantity, setQuantity] = useState(1);

  const categoryNameMap: Record<string, string> = {
    seating: 'Blue Pottery',
    lighting: 'Ajrak',
    tables: 'Camel Skin Lamp',
    textiles: 'Truck Art',
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2);

  return (
    <div style={{ padding: '32px 0 60px' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', color: 'var(--secondary-ink)' }}>
        <button onClick={() => navigateTo('/shop')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ArrowLeft size={14} /> Shop
        </button>
        <span>/</span>
        <span className="font-mono" style={{ textTransform: 'uppercase', fontSize: '11px' }}>
          {categoryNameMap[product.category] || product.category}
        </span>
        <span>/</span>
        <span style={{ color: 'var(--main-ink)', fontWeight: 500 }}>{product.name}</span>
      </div>

      {/* Main Grid: 7 cols visual, 5 cols info */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-desktop)', alignItems: 'start' }}>
        
        {/* Visual Panel (Span 7) */}
        <div
          className={`card-tile bg-${product.tint}`}
          style={{
            gridColumn: 'span 7',
            minHeight: '640px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {viewMode === 'room' && product.scene ? (
            <img
              src={product.scene}
              alt={`${product.name} in room`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '40px' }}>
              <div
                style={{
                  position: 'absolute',
                  bottom: '14%',
                  width: '60%',
                  height: '32px',
                  background: 'radial-gradient(ellipse at center, rgba(28,27,24,0.45) 0%, rgba(28,27,24,0) 70%)',
                  filter: 'blur(10px)',
                  borderRadius: '50%',
                }}
              />
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '75%', maxHeight: '480px', objectFit: 'contain', zIndex: 2 }}
              />
            </div>
          )}

          {/* Room / Product Mode Toggle if scene exists */}
          {product.scene && (
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                zIndex: 10,
                background: 'rgba(251, 250, 247, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '4px',
                borderRadius: 'var(--radius-pill)',
                display: 'flex',
                gap: '4px',
                boxShadow: 'var(--shadow-tile)',
              }}
            >
              <button
                onClick={() => setViewMode('product')}
                className="btn-pill"
                style={{
                  height: '34px',
                  padding: '0 16px',
                  fontSize: '12px',
                  background: viewMode === 'product' ? 'var(--main-ink)' : 'transparent',
                  color: viewMode === 'product' ? '#E4D3C2' : 'var(--main-ink)',
                }}
              >
                Product
              </button>
              <button
                onClick={() => setViewMode('room')}
                className="btn-pill"
                style={{
                  height: '34px',
                  padding: '0 16px',
                  fontSize: '12px',
                  background: viewMode === 'room' ? 'var(--main-ink)' : 'transparent',
                  color: viewMode === 'room' ? '#E4D3C2' : 'var(--main-ink)',
                }}
              >
                In the room
              </button>
            </div>
          )}
        </div>

        {/* Info Panel (Span 5) */}
        <div
          className="card-tile"
          style={{
            gridColumn: 'span 5',
            padding: '40px',
            background: 'var(--card)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>{product.category}</span>
            {product.badge && <span className="badge-pill">{product.badge}</span>}
          </div>

          <h1 className="font-display" style={{ fontSize: '38px', fontWeight: 650, lineHeight: 1.05 }}>
            {product.name}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingBottom: '20px', borderBottom: '1px solid var(--dividers)' }}>
            <span style={{ fontSize: '28px', fontWeight: 600 }}>Rs. {product.price.toLocaleString()}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--secondary-ink)' }}>
              <span className="star-rating"><Star size={15} fill="#d4a017" stroke="#d4a017" /></span>
              <span style={{ fontWeight: 600 }}>{product.rating}</span>
              <span>({product.reviews} reviews)</span>
            </div>
          </div>

          <p style={{ color: 'var(--secondary-ink)', marginTop: '20px', fontSize: '15px', lineHeight: 1.6 }}>
            {product.blurb}
          </p>

          {/* Finish Selector */}
          <div style={{ marginTop: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>Finish</span>
              <span style={{ fontSize: '13px', color: 'var(--secondary-ink)' }}>{selectedFinish.name}</span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {product.finishes.map(f => {
                const isSelected = selectedFinish.name === f.name;
                return (
                  <button
                    key={f.name}
                    onClick={() => setSelectedFinish(f)}
                    title={f.name}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: f.color,
                      border: isSelected ? '2.5px solid var(--main-ink)' : '2px solid var(--dividers)',
                      outline: isSelected ? '2px solid #E4D3C2' : 'none',
                      outlineOffset: '-4px',
                      cursor: 'pointer',
                      transition: 'all 200ms ease',
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Quantity & Add to Bag */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--dividers)', borderRadius: 'var(--radius-pill)', background: 'var(--canvas)', height: '48px', padding: '0 8px' }}>
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                style={{ width: '32px', height: '32px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '18px' }}
              >
                -
              </button>
              <span style={{ width: '30px', textAlign: 'center', fontWeight: 600, fontSize: '15px' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                style={{ width: '32px', height: '32px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '18px' }}
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product, selectedFinish, quantity)}
              className="btn-pill btn-pill-ink"
              style={{ flex: 1 }}
            >
              Add to Bag · Rs. {(product.price * quantity).toLocaleString()}
            </button>
          </div>

          {/* Service Chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--dividers)' }}>
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--secondary-ink)' }}>
              <Truck size={16} style={{ margin: '0 auto 4px', display: 'block', color: 'var(--main-ink)' }} />
              Ships in 48h
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--secondary-ink)' }}>
              <RefreshCw size={16} style={{ margin: '0 auto 4px', display: 'block', color: 'var(--main-ink)' }} />
              30-night trial
            </div>
            <div style={{ textAlign: 'center', fontSize: '12px', color: 'var(--secondary-ink)' }}>
              <ShieldCheck size={16} style={{ margin: '0 auto 4px', display: 'block', color: 'var(--main-ink)' }} />
              10-yr warranty
            </div>
          </div>

          {/* Tabs: Details, Dimensions, Care */}
          <div style={{ marginTop: '32px', borderTop: '1px solid var(--dividers)' }}>
            <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid var(--dividers)' }}>
              {(['details', 'dimensions', 'care'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '12px 0',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    color: activeTab === tab ? 'var(--main-ink)' : 'var(--faint-ink)',
                    borderBottom: activeTab === tab ? '2px solid var(--main-ink)' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div style={{ padding: '16px 0', fontSize: '14px', color: 'var(--secondary-ink)', minHeight: '90px' }}>
              {activeTab === 'details' && (
                <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {product.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
              {activeTab === 'dimensions' && (
                <p>{product.dimensions}</p>
              )}
              {activeTab === 'care' && (
                <p>{product.care}</p>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div style={{ marginTop: '60px' }}>
          <h2 className="font-display" style={{ fontSize: '28px', marginBottom: '24px' }}>
            Pairs with {product.name}
          </h2>
          <div className="product-grid">
            {relatedProducts.map(rel => (
              <div
                key={rel.id}
                className="product-card"
                onClick={() => navigateTo(`/product/${rel.id}`)}
              >
                <div className={`product-panel-wrap bg-${rel.tint}`}>
                  <div className="product-floor-shadow" />
                  <img src={rel.image} alt={rel.name} className="product-cutout-img" />
                </div>
                <div style={{ paddingTop: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 600 }}>{rel.name}</span>
                    <span style={{ fontWeight: 600 }}>Rs. {rel.price.toLocaleString()}</span>
                  </div>
                  <span className="font-mono" style={{ color: 'var(--faint-ink)', textTransform: 'uppercase', fontSize: '11px' }}>
                    {categoryNameMap[rel.category] || rel.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
