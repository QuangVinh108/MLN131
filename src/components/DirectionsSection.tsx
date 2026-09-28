import React, { useState } from 'react';
import { DIRECTIONS_DATA, DirectionItem } from '../data/presentationData';
import {
  Factory,
  Users,
  HeartHandshake,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Hammer,
  Wheat,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Award
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const DirectionsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('phuong-huong-1');
  const { isLight } = useTheme();

  const activeDirection = DIRECTIONS_DATA.find(d => d.id === activeId) || DIRECTIONS_DATA[0];

  const renderIcon = (name: string, size = 22, color = 'currentColor') => {
    switch (name) {
      case 'Factory': return <Factory size={size} color={color} />;
      case 'Users': return <Users size={size} color={color} />;
      case 'HeartHandshake': return <HeartHandshake size={size} color={color} />;
      case 'Layers': return <Layers size={size} color={color} />;
      case 'ShieldCheck': return <ShieldCheck size={size} color={color} />;
      case 'Hammer': return <Hammer size={size} color={color} />;
      case 'Wheat': return <Wheat size={size} color={color} />;
      case 'GraduationCap': return <GraduationCap size={size} color={color} />;
      case 'Briefcase': return <Briefcase size={size} color={color} />;
      case 'Sparkles': return <Sparkles size={size} color={color} />;
      case 'TrendingUp': return <TrendingUp size={size} color={color} />;
      default: return <BookOpen size={size} color={color} />;
    }
  };

  return (
    <section
      id="phuong-huong"
      style={{
        padding: '5.5rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div
          className="eyebrow"
          style={{
            color: isLight ? '#b91c1c' : '#d9b36b',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '999px',
            background: isLight ? 'rgba(185, 28, 28, 0.08)' : 'rgba(217, 179, 107, 0.1)',
            border: isLight ? '1px solid rgba(185, 28, 28, 0.2)' : '1px solid rgba(217, 179, 107, 0.25)',
            marginBottom: '1rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em'
          }}
        >
          <BookOpen size={15} />
          <span>PHƯƠNG HƯỚNG XÂY DỰNG CƠ CẤU GIAI CẤP & TĂNG CƯỜNG LIÊN MINH</span>
        </div>

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
          5 Phương Hướng <span className="text-gold-grad">Cơ Bản & Trọng Tâm</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: isLight ? '#475569' : '#b8b0a0',
            maxWidth: '860px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Xây dựng cơ cấu xã hội - giai cấp và tăng cường liên minh giai cấp, tầng lớp
          trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.
        </p>
      </div>

      {/* 5 Direction Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}
      >
        {DIRECTIONS_DATA.map(direction => {
          const isSelected = direction.id === activeId;
          return (
            <button
              key={direction.id}
              onClick={() => setActiveId(direction.id)}
              className="glass"
              style={{
                padding: '1.1rem 1.2rem',
                borderRadius: '14px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
                border: isSelected
                  ? `2px solid ${direction.color}`
                  : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.16)'),
                background: isSelected
                  ? (isLight ? '#ffffff' : `linear-gradient(135deg, ${direction.color}25, rgba(18, 16, 23, 0.95))`)
                  : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.02)'),
                boxShadow: isSelected
                  ? (isLight ? `0 4px 18px ${direction.color}30` : `0 10px 30px -10px ${direction.color}50`)
                  : (isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'),
                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isSelected
                    ? direction.color
                    : (isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'),
                  color: isSelected ? '#ffffff' : (isLight ? direction.color : '#ded6c5'),
                  flexShrink: 0
                }}
              >
                {renderIcon(direction.iconName, 20, isSelected ? '#ffffff' : direction.color)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: direction.color
                    }}
                  >
                    Phương hướng {direction.number}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    color: isSelected
                      ? (isLight ? '#0f172a' : '#fbf5e6')
                      : (isLight ? '#334155' : '#ded6c5')
                  }}
                >
                  {direction.shortTitle}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Direction Detail Card */}
      <div
        className="glass-card"
        style={{
          padding: '2.5rem',
          borderRadius: '20px',
          border: isLight ? '1px solid #cbd5e1' : `1px solid ${activeDirection.color}40`,
          boxShadow: isLight
            ? '0 10px 30px rgba(0, 0, 0, 0.06)'
            : '0 20px 50px rgba(0, 0, 0, 0.5)',
          background: isLight ? '#ffffff' : 'rgba(18, 16, 23, 0.95)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${activeDirection.color}, #d9b36b)`
          }}
        />

        {/* Card Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.8rem',
            paddingBottom: '1.4rem',
            borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.16)'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <span
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: `${activeDirection.color}20`,
                  color: activeDirection.color,
                  border: `1px solid ${activeDirection.color}50`
                }}
              >
                {activeDirection.badge}
              </span>
            </div>
            <h3
              className="display"
              style={{
                fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
                fontWeight: 700,
                color: isLight ? '#0f172a' : '#fbf5e6',
                lineHeight: 1.3
              }}
            >
              Phương hướng {activeDirection.number}: {activeDirection.title}
            </h3>
          </div>
        </div>

        {/* Core Content Box */}
        <div
          style={{
            padding: '1.4rem 1.6rem',
            borderRadius: '14px',
            background: isLight ? 'rgba(217, 179, 107, 0.1)' : 'rgba(217, 179, 107, 0.08)',
            borderLeft: `4px solid ${activeDirection.color}`,
            marginBottom: '2rem',
            fontSize: '1.02rem',
            lineHeight: 1.65,
            color: isLight ? '#1e293b' : '#f4e6c3'
          }}
        >
          <strong style={{ color: activeDirection.color }}>Nội dung trọng tâm: </strong>
          {activeDirection.coreContent}
        </div>

        {/* Key Measures */}
        <div style={{ marginBottom: '2.2rem' }}>
          <h4
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: isLight ? '#0f172a' : '#fbf5e6',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <CheckCircle2 size={19} color={activeDirection.color} />
            <span>Nhiệm vụ & Biện pháp triển khai thực hiện:</span>
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem'
            }}
          >
            {activeDirection.keyMeasures.map((measure, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.1rem 1.3rem',
                  borderRadius: '12px',
                  background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.12)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  color: isLight ? '#334155' : '#ded6c5'
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: `${activeDirection.color}25`,
                    color: activeDirection.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    flexShrink: 0,
                    marginTop: '0.1rem'
                  }}
                >
                  {idx + 1}
                </div>
                <span>{measure}</span>
              </div>
            ))}
          </div>
        </div>

        {/* If Direction 2: Display Specific Group Policies (Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ, Thanh niên) */}
        {activeDirection.groupPolicies && (
          <div
            style={{
              marginBottom: '2.2rem',
              padding: '1.6rem',
              borderRadius: '16px',
              background: isLight ? '#f1f5f9' : 'rgba(0, 0, 0, 0.25)',
              border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <Users size={20} color={activeDirection.color} />
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: isLight ? '#0f172a' : '#fbf5e6',
                  margin: 0
                }}
              >
                Hệ Thống Chính Sách Xã Hội Cụ Thể Cho Từng Giai Cấp & Tầng Lớp
              </h4>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.1rem'
              }}
            >
              {activeDirection.groupPolicies.map((gp, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.2rem',
                    borderRadius: '12px',
                    background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
                    boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.03)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isLight ? 'rgba(181, 64, 58, 0.1)' : 'rgba(217, 179, 107, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isLight ? '#b91c1c' : '#d9b36b'
                      }}
                    >
                      {renderIcon(gp.icon, 18, isLight ? '#b91c1c' : '#d9b36b')}
                    </div>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: isLight ? '#0f172a' : '#f4e6c3'
                      }}
                    >
                      {gp.group}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      color: isLight ? '#475569' : '#b8b0a0',
                      margin: 0
                    }}
                  >
                    {gp.policy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Significance */}
        <div
          style={{
            padding: '1.1rem 1.4rem',
            borderRadius: '12px',
            background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
            border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.92rem',
            color: isLight ? '#334155' : '#ded6c5',
            marginBottom: '1.5rem'
          }}
        >
          <Award size={20} color={activeDirection.color} style={{ flexShrink: 0 }} />
          <span>
            <strong style={{ color: isLight ? '#0f172a' : '#fbf5e6' }}>Ý nghĩa chiến lược: </strong>
            {activeDirection.significance}
          </span>
        </div>

        {/* Documentary Photograph for Direction */}
        {activeDirection.imageUrl && (
          <div
            style={{
              maxWidth: '580px',
              margin: '0 auto 2rem auto',
              width: '100%',
              borderRadius: '14px',
              overflow: 'hidden',
              border: isLight ? '1px solid #cbd5e1' : `1px solid ${activeDirection.color}40`,
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
                src={activeDirection.imageUrl}
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
                src={activeDirection.imageUrl}
                alt={activeDirection.imageCaption || activeDirection.title}
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
                📷 HÌNH ẢNH MINH CHỨNG PHƯƠNG HƯỚNG {activeDirection.number}
              </div>
            </div>
            {activeDirection.imageCaption && (
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
                {activeDirection.imageCaption}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
