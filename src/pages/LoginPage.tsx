import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Lock, Mail, Eye, EyeOff } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { navigateTo } = useShop();
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ padding: '40px 0 80px', maxWidth: '1080px', margin: '0 auto' }}>
      <button
        onClick={() => navigateTo('/')}
        className="btn-pill btn-pill-outline"
        style={{ marginBottom: '24px' }}
      >
        <ArrowLeft size={16} /> Return to Store
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gap-desktop)', alignItems: 'stretch' }}>
        {/* Left Form Tile (Span 7) */}
        <div className="card-tile" style={{ gridColumn: 'span 7', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              <button
                onClick={() => setIsSignIn(true)}
                className={`btn-pill ${isSignIn ? 'btn-pill-ink' : 'btn-pill-cream'}`}
                style={{ height: '40px', padding: '0 20px', fontSize: '13px' }}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignIn(false)}
                className={`btn-pill ${!isSignIn ? 'btn-pill-ink' : 'btn-pill-cream'}`}
                style={{ height: '40px', padding: '0 20px', fontSize: '13px' }}
              >
                Create Account
              </button>
            </div>

            <h1 className="font-display" style={{ fontSize: '38px', fontWeight: 650, marginBottom: '8px' }}>
              {isSignIn ? 'Welcome back to DASTKARI' : 'Create your craft account'}
            </h1>
            <p style={{ color: 'var(--secondary-ink)', fontSize: '15px', marginBottom: '32px' }}>
              {isSignIn ? 'Manage your orders, save delivery addresses and speed up checkout.' : 'Join the slow living collective.'}
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert('Sign in simulated for Phase A.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="font-mono" style={{ display: 'block', marginBottom: '8px', color: 'var(--faint-ink)' }}>Email Address</label>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--canvas)', border: '1px solid var(--dividers)', borderRadius: '16px', padding: '0 16px', height: '48px' }}>
                  <Mail size={16} color="var(--secondary-ink)" style={{ marginRight: '10px' }} />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px', fontFamily: 'var(--font-body)', color: 'var(--main-ink)' }}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono" style={{ display: 'block', marginBottom: '8px', color: 'var(--faint-ink)' }}>Password</label>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--canvas)', border: '1px solid var(--dividers)', borderRadius: '16px', padding: '0 16px', height: '48px' }}>
                  <Lock size={16} color="var(--secondary-ink)" style={{ marginRight: '10px' }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '14px', fontFamily: 'var(--font-body)', color: 'var(--main-ink)' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary-ink)' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-pill btn-pill-ink" style={{ marginTop: '16px', height: '48px' }}>
                {isSignIn ? 'Sign In to Proceed' : 'Create Account'}
              </button>
            </form>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--dividers)', fontSize: '12px', color: 'var(--faint-ink)' }}>
            Checkout boundary reference: Verified sign-in screen per Section 8.
          </div>
        </div>

        {/* Right Mood Tile (Span 5) */}
        <div style={{ gridColumn: 'span 5', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[
            { img: '/images/chair.webp', bg: 'var(--sage)' },
            { img: '/images/lamp.webp', bg: 'var(--butter)' },
            { img: '/images/pendant.webp', bg: 'var(--sky)' },
            { img: '/images/throw.webp', bg: 'var(--blush)' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="card-tile"
              style={{
                backgroundColor: item.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '180px',
                padding: '20px',
              }}
            >
              <img src={item.img} alt="Product showcase" style={{ maxWidth: '80%', maxHeight: '130px', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
