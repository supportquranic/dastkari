import React from 'react';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, ArrowRight, Heart, Leaf, Globe, Sparkles, MapPin, Phone, Mail } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div style={{ paddingTop: '24px', paddingBottom: '70px' }}>
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

      {/* Hero Header Section */}
      <section
        className="card-tile"
        style={{
          padding: 'clamp(36px, 5vw, 64px)',
          backgroundColor: 'var(--card)',
          marginBottom: '36px',
        }}
      >
        <div style={{ maxWidth: '840px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge-pill">ABOUT DASTKARI · SOCIAL ENTERPRISE</span>
            <span className="font-mono" style={{ color: 'var(--faint-ink)' }}>
              LAHORE · MULTAN · SINDH
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
            Crafting Heritage,<br />Empowering Artisans.
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              lineHeight: 1.6,
              color: 'var(--secondary-ink)',
              marginTop: '22px',
              maxWidth: '720px',
            }}
          >
            Dastkari began as a heartfelt response to the stories and struggles of rural craft artisans. We bridge traditional Pakistani generational craftsmanship with modern slow living, ensuring artisans receive the recognition, dignity, and fair wages they deserve.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '26px',
              padding: '10px 20px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(181, 91, 44, 0.1)',
              color: 'var(--main-ink)',
              fontWeight: 650,
              fontSize: '13.5px',
              letterSpacing: '0.01em',
            }}
          >
            <Sparkles size={16} color="var(--main-ink)" />
            <span>Made by hand! One piece at a time, so no two are ever alike!</span>
          </div>
        </div>
      </section>

      {/* Section 1: Our Story & Founder Sahar Atif */}
      <section style={{ marginBottom: '40px' }}>
        <div
          className="card-tile"
          style={{
            backgroundColor: 'var(--sand)',
            borderRadius: 'var(--radius-tile)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            minHeight: '480px',
          }}
        >
          {/* Left: Text Content */}
          <div
            style={{
              gridColumn: 'span 7',
              padding: 'clamp(32px, 4vw, 56px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span
              className="font-mono"
              style={{
                color: 'var(--faint-ink)',
                fontSize: '11px',
                fontWeight: 650,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              OUR STORY
            </span>

            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                fontWeight: 650,
                color: 'var(--main-ink)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                marginBottom: '18px',
              }}
            >
              Born from compassion, rooted in craft.
            </h2>

            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--secondary-ink)', marginBottom: '16px' }}>
              Dastkari began as a heartfelt response to the stories and struggles of rural craft artisans. Founded by fashion designer <strong style={{ color: 'var(--main-ink)' }}>Sahar Atif</strong>, the project draws from her years of experience working closely alongside these extraordinarily talented creators.
            </p>

            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--secondary-ink)', marginBottom: '24px' }}>
              While the journey was deeply inspiring, it also uncovered harsh realities of inequality, market exclusion, and economic disparity faced by rural families. Dastkari now stands as an enduring mission to empower artisans, protect generational livelihoods, and celebrate Pakistan's living cultural heritage on the global stage.
            </p>

            <div
              style={{
                borderLeft: '3px solid var(--main-ink)',
                paddingLeft: '16px',
                color: 'var(--main-ink)',
                fontStyle: 'italic',
                fontSize: '15px',
                lineHeight: 1.5,
              }}
            >
              “Every artisan holds centuries of oral knowledge. When we honour their craft with dignity and fair pay, our heritage flourishes.”
              <div style={{ marginTop: '8px', fontSize: '13px', fontWeight: 600, fontStyle: 'normal', color: 'var(--secondary-ink)' }}>
                — Sahar Atif, Founder & Creative Director
              </div>
            </div>
          </div>

          {/* Right: Sahar Atif Portrait */}
          <div
            style={{
              gridColumn: 'span 5',
              position: 'relative',
              minHeight: '420px',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/about/sahar-atif.jpg"
              alt="Sahar Atif - Founder of Dastkari"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 18%',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision Bento Grid */}
      <section style={{ marginBottom: '40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 'var(--gap-desktop)',
          }}
          className="about-bento-grid"
        >
          {/* Mission Card */}
          <div
            className="card-tile"
            style={{
              backgroundColor: 'var(--sage)',
              padding: 'clamp(28px, 3.2vw, 44px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(251, 250, 247, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <Heart size={22} color="var(--main-ink)" />
              </div>

              <span
                className="font-mono"
                style={{
                  color: 'var(--faint-ink)',
                  fontSize: '11px',
                  fontWeight: 650,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                OUR PURPOSE
              </span>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                  fontWeight: 650,
                  color: 'var(--main-ink)',
                  lineHeight: 1.1,
                  marginTop: '8px',
                  marginBottom: '16px',
                }}
              >
                Our Mission
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--secondary-ink)' }}>
                At Dastkari, our mission is to uplift and empower rural artisans by providing them with a platform that not only supports their craft but also celebrates their rich cultural heritage. We are committed to bridging the gap between traditional craftsmanship and modern markets, ensuring that these talented artisans receive the recognition, fair wages, and opportunities they deserve.
              </p>
            </div>

            <div
              style={{
                marginTop: '28px',
                height: '180px',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
              }}
            >
              <img
                src="/images/about/artisan-workshop.jpg"
                alt="Dastkari Artisan Workshop"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="card-tile"
            style={{
              backgroundColor: 'var(--sky)',
              padding: 'clamp(28px, 3.2vw, 44px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(251, 250, 247, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <Globe size={22} color="var(--main-ink)" />
              </div>

              <span
                className="font-mono"
                style={{
                  color: 'var(--faint-ink)',
                  fontSize: '11px',
                  fontWeight: 650,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                THE FUTURE
              </span>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                  fontWeight: 650,
                  color: 'var(--main-ink)',
                  lineHeight: 1.1,
                  marginTop: '8px',
                  marginBottom: '16px',
                }}
              >
                Our Vision
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--secondary-ink)' }}>
                Our vision is to create a future where rural artisans are seen and heard, where their skills are valued, and their crafts thrive in global markets. We envision a world where cultural heritage is preserved, celebrated, and integrated into contemporary design. Dastkari aspires to be a leader in social entrepreneurship, setting a benchmark for the ethical and sustainable growth of artisan-led businesses.
              </p>
            </div>

            <div
              style={{
                marginTop: '28px',
                height: '180px',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
              }}
            >
              <img
                src="/images/about/craft-heritage.jpg"
                alt="Dastkari Craft Heritage"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Sustainability & Social Enterprise (2 Split Banners) */}
      <section style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Sustainability Banner */}
          <div
            className="card-tile"
            style={{
              backgroundColor: 'var(--butter)',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                gridColumn: 'span 7',
                padding: 'clamp(32px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Leaf size={18} color="var(--main-ink)" />
                <span className="font-mono" style={{ color: 'var(--faint-ink)', fontSize: '11px', fontWeight: 650 }}>
                  RESPONSIBLE PRACTICES
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)',
                  fontWeight: 650,
                  color: 'var(--main-ink)',
                  lineHeight: 1.08,
                  marginBottom: '14px',
                }}
              >
                Sustainability
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.68, color: 'var(--secondary-ink)', margin: 0 }}>
                Sustainability lies at the heart of everything we do. Dastkari is dedicated to supporting eco-friendly practices by sourcing materials responsibly, reducing waste, and ensuring that every product we create has a minimal environmental impact. Our commitment extends to the artisans we work with, as we provide them with sustainable income opportunities and encourage the use of traditional, eco-conscious techniques.
              </p>
            </div>

            <div
              style={{
                gridColumn: 'span 5',
                minHeight: '280px',
                position: 'relative',
              }}
            >
              <img
                src="/images/about/sustainability.jpg"
                alt="Sustainable Artisan Practices"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Social Enterprise Banner */}
          <div
            className="card-tile"
            style={{
              backgroundColor: 'var(--blush)',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                gridColumn: 'span 5',
                minHeight: '280px',
                position: 'relative',
                order: 1,
              }}
              className="about-swap-image"
            >
              <img
                src="/images/about/social-enterprise.jpg"
                alt="Social Enterprise Community Impact"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div
              style={{
                gridColumn: 'span 7',
                padding: 'clamp(32px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                order: 2,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Sparkles size={18} color="var(--main-ink)" />
                <span className="font-mono" style={{ color: 'var(--faint-ink)', fontSize: '11px', fontWeight: 650 }}>
                  IMPACT BEYOND COMMERCE
                </span>
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)',
                  fontWeight: 650,
                  color: 'var(--main-ink)',
                  lineHeight: 1.08,
                  marginBottom: '14px',
                }}
              >
                Social Enterprise
              </h3>

              <p style={{ fontSize: '15px', lineHeight: 1.68, color: 'var(--secondary-ink)', margin: 0 }}>
                We are a social enterprise with a deep-rooted commitment to driving positive change. Our work goes beyond creating beautiful, handcrafted products. We aim to create lasting impact within rural communities. By providing artisans with fair wages, skills training, and market access, we contribute to their economic independence and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Studio Location & Direct Connect */}
      <section>
        <div
          className="card-tile"
          style={{
            backgroundColor: 'var(--main-ink)',
            color: '#E4D3C2',
            padding: 'clamp(36px, 5vw, 60px)',
            borderRadius: 'var(--radius-tile)',
            boxShadow: '0 20px 40px -15px rgba(181, 91, 44, 0.3)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px', alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7' }}>
              <span className="font-mono" style={{ color: 'rgba(228, 211, 194, 0.7)', fontSize: '11px', letterSpacing: '0.1em' }}>
                VISIT & CONNECT
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
                  fontWeight: 650,
                  color: '#FAF6F0',
                  marginTop: '10px',
                  marginBottom: '16px',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                }}
              >
                Experience the craft firsthand.
              </h2>
              <p style={{ color: 'rgba(228, 211, 194, 0.88)', fontSize: '15px', lineHeight: 1.6, maxWidth: '540px' }}>
                We invite you to connect with us, explore our curated collections, and join our movement to celebrate living craft traditions.
              </p>

              <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigateTo('/shop')}
                  className="btn-pill"
                  style={{
                    backgroundColor: '#E4D3C2',
                    color: 'var(--main-ink)',
                    fontWeight: 600,
                    height: '46px',
                    padding: '0 22px',
                    border: 'none',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <span>Explore the Collection</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => navigateTo('/stories')}
                  className="btn-pill"
                  style={{
                    backgroundColor: 'rgba(228, 211, 194, 0.15)',
                    color: '#E4D3C2',
                    fontWeight: 600,
                    height: '46px',
                    padding: '0 20px',
                    border: '1px solid rgba(228, 211, 194, 0.3)',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <span>Meet Our Heroes</span>
                </button>
              </div>
            </div>

            {/* Right: Studio Contact Chips */}
            <div
              style={{
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '28px',
                borderRadius: '20px',
                border: '1px solid rgba(228, 211, 194, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '3px' }}><MapPin size={18} color="#FAF6F0" /></div>
                <div>
                  <div className="font-mono" style={{ fontSize: '10px', color: 'rgba(228, 211, 194, 0.65)' }}>STUDIO ADDRESS</div>
                  <div style={{ fontSize: '14px', fontWeight: 550, color: '#FAF6F0', marginTop: '2px' }}>
                    57, E-1, Gulberg-III, Lahore, Pakistan
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '3px' }}><Phone size={18} color="#FAF6F0" /></div>
                <div>
                  <div className="font-mono" style={{ fontSize: '10px', color: 'rgba(228, 211, 194, 0.65)' }}>PHONE & WHATSAPP</div>
                  <div style={{ fontSize: '14px', fontWeight: 550, color: '#FAF6F0', marginTop: '2px' }}>
                    0301-8449993
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '3px' }}><Mail size={18} color="#FAF6F0" /></div>
                <div>
                  <div className="font-mono" style={{ fontSize: '10px', color: 'rgba(228, 211, 194, 0.65)' }}>DIRECT EMAIL</div>
                  <div style={{ fontSize: '14px', fontWeight: 550, color: '#FAF6F0', marginTop: '2px' }}>
                    dastkaribysaharatif@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .about-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .card-tile {
            grid-template-columns: 1fr !important;
          }
          .card-tile > div {
            grid-column: span 1 !important;
          }
          .about-swap-image {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  );
};
