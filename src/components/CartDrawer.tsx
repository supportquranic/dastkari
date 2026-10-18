import React, { useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShoppingBag, Trash2 } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    subtotal,
    freeShippingThreshold,
    remainingForFreeShipping,
    navigateTo,
  } = useShop();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  const shippingRatio = Math.min(1, subtotal / freeShippingThreshold);

  return (
    <>
      {/* Dark Scrim */}
      <div
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(28, 27, 24, 0.3)',
          backdropFilter: 'blur(4px)',
          zIndex: 90,
          opacity: isCartOpen ? 1 : 0,
          pointerEvents: isCartOpen ? 'auto' : 'none',
          transition: 'opacity 300ms var(--ease-shared)',
        }}
      />

      {/* Floating Drawer Panel */}
      <aside
        style={{
          position: 'fixed',
          top: '8px',
          right: '8px',
          bottom: '8px',
          width: 'min(440px, calc(100vw - 16px))',
          backgroundColor: 'var(--card)',
          borderRadius: 'var(--radius-drawer)',
          boxShadow: 'var(--shadow-elevated)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          transform: isCartOpen ? 'translateX(0)' : 'translateX(108%)',
          transition: 'transform 450ms var(--ease-shared)',
          overflow: 'hidden',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--dividers)',
          }}
        >
          <div>
            <h2 className="font-display" style={{ fontSize: '24px', fontWeight: 650 }}>
              Your Bag
            </h2>
            <div className="font-mono" style={{ color: 'var(--faint-ink)', marginTop: '2px' }}>
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close bag"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid var(--dividers)',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 300ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(90deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cart.length > 0 && (
          <div style={{ padding: '16px 28px', backgroundColor: 'var(--canvas)', borderBottom: '1px solid var(--dividers)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px' }}>
              {remainingForFreeShipping > 0 ? (
                <span>Add <strong>Rs. {remainingForFreeShipping.toLocaleString()}</strong> more for free nationwide delivery</span>
              ) : (
                <span style={{ color: 'var(--success)', fontWeight: 600 }}>Unlocked: Free nationwide delivery</span>
              )}
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--dividers)', borderRadius: '3px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${shippingRatio * 100}%`,
                  backgroundColor: 'var(--main-ink)',
                  transition: 'width 400ms var(--ease-shared)',
                }}
              />
            </div>
          </div>
        )}

        {/* Items List / Empty State */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--canvas)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <ShoppingBag size={28} color="var(--secondary-ink)" />
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', marginBottom: '6px' }}>Your bag is empty</h3>
              <p style={{ color: 'var(--secondary-ink)', fontSize: '14px', maxWidth: '240px' }}>
                Explore calm objects made with solid oak and hand-thrown clay.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cart.map(item => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--canvas)',
                    borderRadius: 'var(--radius-row)',
                    padding: '14px',
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '12px',
                      backgroundColor: `var(--${item.product.tint})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <img src={item.product.image} alt={item.product.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--main-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.product.name}
                    </div>
                    {item.finish && (
                      <div className="font-mono" style={{ fontSize: '11px', color: 'var(--faint-ink)', marginTop: '2px' }}>
                        {item.finish.name}
                      </div>
                    )}
                    <div style={{ fontSize: '13px', fontWeight: 600, marginTop: '6px' }}>
                      Rs. {item.product.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity Stepper & Removal */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--faint-ink)' }}
                      title="Remove"
                    >
                      <Trash2 size={15} />
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--dividers)', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--card)', height: '28px', padding: '0 4px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{ border: 'none', background: 'transparent', width: '22px', cursor: 'pointer', fontSize: '14px' }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '12px', fontWeight: 600, width: '18px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{ border: 'none', background: 'transparent', width: '22px', cursor: 'pointer', fontSize: '14px' }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Subtotal & Checkout */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '24px 28px',
              borderTop: '1px solid var(--dividers)',
              backgroundColor: 'var(--card)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
              <span style={{ fontSize: '15px', color: 'var(--secondary-ink)' }}>Subtotal</span>
              <span style={{ fontSize: '24px', fontWeight: 650 }}>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                navigateTo('/login?next=%2Fcheckout');
              }}
              className="btn-pill btn-pill-ink"
              style={{ width: '100%', height: '52px', fontSize: '15px' }}
            >
              Checkout · Rs. {subtotal.toLocaleString()}
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
