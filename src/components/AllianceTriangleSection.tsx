import React, { useState } from 'react';
import { ALLIANCE_PILLARS, AlliancePillar } from '../data/presentationData';
import {
  DollarSign,
  ShieldAlert,
  Sparkles,
  CheckCircle,
  Target,
  Layers,
  Lightbulb,
  Quote
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AllianceTriangleSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('kinh-te');
  const { isLight } = useTheme();

  const activePillar = ALLIANCE_PILLARS.find(p => p.id === activePillarId) || ALLIANCE_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'kinh-te': return <DollarSign size={22} />;
      case 'chinh-tri': return <ShieldAlert size={22} />;
      case 'van-hoa-xa-hoi': return <Sparkles size={22} />;
      default: return <DollarSign size={22} />;
    }
  };

  return (
    <section
      id="tam-giac"
      style={{
        padding: '5.5rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.25,
            color: isLight ? '#0f172a' : '#fbf5e6'
          }}
        >
          3 Nội Dung Cốt Lõi Của <span className="text-gold-grad">Khối Liên Minh</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: isLight ? '#475569' : '#b8b0a0',
            maxWidth: '820px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Kinh tế là cơ sở quyết định nhất; Chính trị là nhân tố định hướng lãnh đạo;
          Văn hóa - Xã hội là mục tiêu tối thượng và chất lượng cuộc sống của nhân dân.
        </p>
      </div>

      {/* 3 Pillar Selector Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2.5rem'
        }}
      >
        {ALLIANCE_PILLARS.map(pillar => {
          const isActive = pillar.id === activePillarId;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className="glass"
              style={{
                padding: '1.4rem 1.5rem',
                borderRadius: '16px',
                textAlign: 'left',
                border: isActive
                  ? `2px solid ${pillar.color}`
                  : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)'),
                background: isActive
                  ? (isLight ? '#ffffff' : `linear-gradient(135deg, ${pillar.color}22, rgba(20, 18, 27, 0.95))`)
                  : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.02)'),
                boxShadow: isActive
                  ? (isLight ? `0 6px 20px ${pillar.color}25` : `0 12px 35px -10px ${pillar.color}45`)
                  : (isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'),
                transform: isActive ? 'translateY(-3px)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: isActive ? pillar.color : (isLight ? `${pillar.color}15` : 'rgba(255, 255, 255, 0.05)'),
                    color: isActive ? '#ffffff' : pillar.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800
                  }}
                >
                  {getPillarIcon(pillar.id)}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: pillar.color,
                    background: `${pillar.color}15`,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '999px',
                    border: `1px solid ${pillar.color}35`
                  }}
                >
                  {pillar.badge}
                </span>
              </div>
              <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6', marginBottom: '0.35rem' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: isLight ? '#475569' : '#b8b0a0', lineHeight: 1.5, margin: 0 }}>
                {pillar.nature}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Full Detail Display */}
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.8rem, 4vw, 3rem)',
          border: isLight ? `1.5px solid ${activePillar.color}45` : `1.5px solid ${activePillar.color}60`,
          background: isLight ? '#ffffff' : undefined,
          boxShadow: isLight
            ? `0 10px 30px -5px rgba(0,0,0,0.06), 0 0 25px -10px ${activePillar.color}25`
            : `0 25px 70px -25px rgba(0,0,0,0.95), 0 0 50px -20px ${activePillar.color}40`,
          position: 'relative'
        }}
      >
        {/* Summary Banner from docx */}
        {activePillar.summary && (
          <div
            style={{
              padding: '1.2rem 1.6rem',
              borderRadius: '14px',
              background: isLight ? `${activePillar.color}12` : `${activePillar.color}16`,
              borderLeft: `5px solid ${activePillar.color}`,
              border: isLight ? '1px solid #cbd5e1' : `1px solid ${activePillar.color}35`,
              borderLeftWidth: '5px',
              borderLeftColor: activePillar.color,
              marginBottom: '2.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem'
            }}
          >
            <Quote size={22} color={activePillar.color} style={{ flexShrink: 0 }} />
            <p
              style={{
                margin: 0,
                fontSize: '1.02rem',
                fontWeight: 600,
                color: isLight ? '#0f172a' : '#fbf5e6',
                lineHeight: 1.6
              }}
            >
              {activePillar.summary}
            </p>
          </div>
        )}

        {/* 2-Column Grid: Goals vs Main Contents */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.2rem'
          }}
        >
          {/* Cột 1: Mục tiêu */}
          <div
            className="glass"
            style={{
              padding: '1.8rem 1.6rem',
              borderRadius: '16px',
              borderTop: `4px solid ${activePillar.color}`,
              background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
              border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)',
              borderTopColor: activePillar.color,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `${activePillar.color}20`,
                  color: activePillar.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Target size={20} />
              </div>
              <h4
                className="display"
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  color: isLight ? '#0f172a' : '#fbf5e6',
                  margin: 0
                }}
              >
                Mục tiêu của liên minh
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {activePillar.goals.map((goal, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.93rem',
                    lineHeight: 1.6,
                    color: isLight ? '#334155' : '#ded6c5'
                  }}
                >
                  <CheckCircle size={18} color={activePillar.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 2: Nội dung chủ yếu */}
          <div
            className="glass"
            style={{
              padding: '1.8rem 1.6rem',
              borderRadius: '16px',
              borderTop: `4px solid ${activePillar.color}`,
              background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
              border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)',
              borderTopColor: activePillar.color,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: `${activePillar.color}20`,
                  color: activePillar.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Layers size={20} />
              </div>
              <h4
                className="display"
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  color: isLight ? '#0f172a' : '#fbf5e6',
                  margin: 0
                }}
              >
                Nội dung chủ yếu
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {activePillar.mainContents.map((content, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    fontSize: '0.93rem',
                    lineHeight: 1.55,
                    color: isLight ? '#334155' : '#ded6c5'
                  }}
                >
                  <CheckCircle size={18} color={activePillar.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Takeaway Callout */}
        <div
          style={{
            padding: '1.4rem 1.6rem',
            borderRadius: '14px',
            background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.03)',
            border: isLight ? '1px solid #cbd5e1' : `1px solid ${activePillar.color}35`,
            marginBottom: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <Lightbulb size={20} color={activePillar.color} />
            <strong
              style={{
                fontSize: '1rem',
                color: activePillar.color,
                fontWeight: 700
              }}
            >
              {activePillar.keyTakeaway.title}
            </strong>
          </div>
          <p
            style={{
              fontSize: '0.94rem',
              lineHeight: 1.65,
              color: isLight ? '#1e293b' : '#ded6c5',
              margin: activePillar.keyTakeaway.tags ? '0 0 1rem 0' : 0
            }}
          >
            {activePillar.keyTakeaway.content}
          </p>
          {activePillar.keyTakeaway.tags && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {activePillar.keyTakeaway.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    background: `${activePillar.color}20`,
                    color: activePillar.color,
                    border: `1px solid ${activePillar.color}45`
                  }}
                >
                  ★ {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Documentary Photographs from Document */}
        {activePillar.images && activePillar.images.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: activePillar.images.length > 1 ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
              maxWidth: activePillar.images.length > 1 ? '920px' : '580px',
              margin: '0 auto',
              gap: '1.2rem',
              width: '100%'
            }}
          >
            {activePillar.images.map((img, idx) => (
              <div
                key={idx}
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: isLight ? '1px solid #cbd5e1' : `1px solid ${activePillar.color}40`,
                  background: isLight ? '#f8fafc' : 'rgba(0,0,0,0.3)',
                  boxShadow: isLight ? '0 4px 15px rgba(0,0,0,0.06)' : '0 10px 25px rgba(0,0,0,0.4)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    height: '310px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: isLight ? '#0f172a' : '#08070b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {/* Ambient blur background */}
                  <img
                    src={img.url}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      width: 'calc(100% + 40px)',
                      height: 'calc(100% + 40px)',
                      objectFit: 'cover',
                      filter: 'blur(16px) brightness(0.35)',
                      opacity: 0.7,
                      pointerEvents: 'none'
                    }}
                  />
                  {/* Main sharp image preserving full content */}
                  <img
                    src={img.url}
                    alt={img.caption}
                    style={{
                      position: 'relative',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      zIndex: 1,
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      zIndex: 2
                    }}
                  >
                    📷 HÌNH ẢNH MINH HỌA TÀI LIỆU
                  </div>
                </div>
                {img.caption && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.82rem',
                      color: isLight ? '#475569' : '#ded6c5',
                      fontStyle: 'italic',
                      borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.08)',
                      background: isLight ? '#f1f5f9' : 'rgba(18, 16, 23, 0.8)',
                      lineHeight: 1.5
                    }}
                  >
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
