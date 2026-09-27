import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, PRESENTATION_CONFIG } from '../data/presentationData';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'linear-gradient(180deg, rgba(14, 12, 19, 0.96) 0%, rgba(18, 16, 23, 0.94) 100%)'
          : 'linear-gradient(180deg, rgba(14, 12, 19, 0.85) 0%, rgba(18, 16, 23, 0.4) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(217, 179, 107, 0.22)' : '1px solid rgba(217, 179, 107, 0.1)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.8)' : 'none'
      }}
    >
      <div
        style={{
          width: '100%',
          padding: '0.85rem clamp(1.2rem, 3.5vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}
      >
        {/* Brand / Logo on far left */}
        <div
          onClick={() => scrollTo('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #b5403a, #832621)',
              border: '1.5px solid rgba(217, 179, 107, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(217, 179, 107, 0.3)'
            }}
          >
            {/* Hammer, Gear & Lotus Emblem */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f4e6c3" strokeWidth="2">
              <path d="M12 2L14 7H19L15 10L17 15L12 12L7 15L9 10L5 7H10L12 2Z" fill="#e6c98c" />
              <circle cx="12" cy="12" r="3" stroke="#b5403a" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <div
              className="display"
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                lineHeight: 1.2
              }}
            >
              <span className="text-gold-grad">{PRESENTATION_CONFIG.subjectCode}</span>
              <span style={{ color: '#f3ede0', margin: '0 0.35rem', opacity: 0.6 }}>×</span>
              <span style={{ color: '#f3ede0', fontWeight: 600, fontSize: '0.95rem' }}>LIÊN MINH GIAI CẤP</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links - Centered & stretched across available width */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            flex: 1,
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '0.35rem 0.8rem',
            borderRadius: '999px',
            border: '1px solid rgba(217, 179, 107, 0.15)'
          }}
          className="desktop-nav"
        >
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, rgba(217, 179, 107, 0.28), rgba(200, 151, 63, 0.18))' : 'transparent',
                  color: isActive ? '#f4e6c3' : '#b8b0a0',
                  border: isActive ? '1px solid rgba(217, 179, 107, 0.5)' : '1px solid transparent',
                  padding: '0.42rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 700 : 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = '#f3ede0';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = '#b8b0a0';
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-nav-toggle"
          style={{
            padding: '0.5rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#f4e6c3',
            border: '1px solid rgba(217, 179, 107, 0.2)'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(18, 16, 23, 0.98)',
            borderBottom: '1px solid rgba(217, 179, 107, 0.2)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                textAlign: 'left',
                padding: '0.65rem 1rem',
                borderRadius: '8px',
                background: activeSection === item.id ? 'rgba(217, 179, 107, 0.15)' : 'transparent',
                color: activeSection === item.id ? '#f4e6c3' : '#b8b0a0',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 1081px) {
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
