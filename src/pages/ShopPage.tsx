import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS, CATEGORIES } from '../data/catalog';
import { Star, Plus, ArrowLeft, Search } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { navigateTo, addToCart, currentPath } = useShop();
  const urlParams = new URL(currentPath, window.location.origin).searchParams;
  const [selectedCategory, setSelectedCategory] = useState<string>(urlParams.get('c') || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  React.useEffect(() => {
    const cat = new URL(currentPath, window.location.origin).searchParams.get('c');
    setSelectedCategory(cat || 'all');
  }, [currentPath]);

  const categoryNameMap: Record<string, string> = {
    seating: 'Blue Pottery',
    lighting: 'Ajrak',
    tables: 'Camel Skin Lamp',
    textiles: 'Truck Art',
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'all'
      ? true
      : p.category === selectedCategory;
    const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.blurb.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div style={{ padding: '40px 0' }}>
      <button
        onClick={() => navigateTo('/')}
        className="btn-pill btn-pill-outline"
        style={{ marginBottom: '24px' }}
      >
        <ArrowLeft size={16} /> Back to Foundation Overview
      </button>

      {/* Header Panel */}
      <div className="card-tile" style={{ padding: '36px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="font-mono" style={{ color: 'var(--faint-ink)' }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'object' : 'objects'}
            </div>
            <h1 className="font-display" style={{ fontSize: '54px', fontWeight: 650, marginTop: '8px' }}>
              {selectedCategory === 'all' ? 'Shop All' : categoryNameMap[selectedCategory] || 'Collection'}
            </h1>
          </div>

          {/* Search Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--canvas)', padding: '10px 18px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--dividers)' }}>
            <Search size={16} color="var(--secondary-ink)" />
            <input
              type="text"
              placeholder="Search calm objects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--main-ink)',
                width: '180px',
              }}
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '28px' }}>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`btn-pill ${selectedCategory === 'all' ? 'btn-pill-ink' : 'btn-pill-cream'}`}
            style={{ height: '40px', padding: '0 18px' }}
          >
            All ({PRODUCTS.length})
          </button>
          {CATEGORIES.map(cat => {
            const count = PRODUCTS.filter(p => p.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn-pill ${isSelected ? 'btn-pill-ink' : 'btn-pill-cream'}`}
                style={{ height: '40px', padding: '0 18px' }}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="card-tile" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h3 className="font-display" style={{ fontSize: '24px', marginBottom: '8px' }}>No calm objects found</h3>
          <p style={{ color: 'var(--secondary-ink)', fontSize: '15px' }}>Try searching with a different keyword or resetting filters.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => {
            return (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigateTo(`/product/${product.id}`)}
              >
                <div
                  className={`product-panel-wrap bg-${product.tint}`}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div className="product-floor-shadow" style={{ zIndex: 2 }} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-cutout-img"
                    loading="lazy"
                    style={{ position: 'relative', zIndex: 3 }}
                  />
                  <button
                    className="product-add-btn"
                    title={`Add ${product.name} to bag`}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    style={{ zIndex: 4 }}
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
            );
          })}
        </div>
      )}
    </div>
  );
};
