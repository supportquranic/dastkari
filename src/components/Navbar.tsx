import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { cartCount, setIsCartOpen, navigateTo, currentPath } = useShop();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Blue Pottery', path: '/shop?c=seating' },
    { label: 'Ajrak', path: '/shop?c=lighting' },
    { label: 'Camel Skin Lamp', path: '/shop?c=tables' },
    { label: 'Truck Art', path: '/shop?c=textiles' },
    { label: 'Heroes', path: '/stories' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: '16px',
        zIndex: 50,
        margin: '0 var(--gutter-desktop)',
        transition: 'all 300ms var(--ease-shared)',
      }}
    >
      <div
        style={{
          height: '64px',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: scrolled ? 'rgba(228, 211, 194, 0.96)' : 'rgba(228, 211, 194, 0.84)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(181, 91, 44, 0.25)',
          boxShadow: scrolled ? '0 12px 32px -12px rgba(181, 91, 44, 0.25)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 12px 0 20px',
          transition: 'background-color 300ms var(--ease-shared), box-shadow 300ms var(--ease-shared)',
        }}
      >
        {/* Left: Brand Logo & Wordmark */}
        <div
          onClick={() => navigateTo('/')}
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        >
          <img
            src="/logo.svg"
            alt="Dastkari"
            style={{ height: '38px', width: 'auto', display: 'block' }}
          />
        </div>

        {/* Middle: Desktop Categories Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {navLinks.map(link => {
            const isActive = currentPath === link.path || (link.path === '/stories' && currentPath.startsWith('/stories'));
            return (
              <button
                key={link.label}
                onClick={() => navigateTo(link.path)}
                style={{
                  background: isActive ? 'var(--main-ink)' : 'transparent',
                  color: isActive ? '#E4D3C2' : 'var(--main-ink)',
                  border: 'none',
                  borderRadius: 'var(--radius-pill)',
                  padding: '7px 12px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Account & Bag Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => navigateTo('/login')}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid var(--dividers)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--main-ink)',
            }}
            title="Account"
          >
            <User size={18} />
          </button>

          <button
            id="navbar-bag-btn"
            onClick={() => setIsCartOpen(true)}
            style={{
              height: '48px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--main-ink)',
              color: '#E4D3C2',
              border: 'none',
              padding: '0 8px 0 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            <ShoppingBag size={17} />
            <span>Bag</span>
            <div
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#E4D3C2',
                color: 'var(--main-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              {cartCount}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
