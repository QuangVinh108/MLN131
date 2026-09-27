import React, { useState } from 'react';
import { CLASS_PILLARS, ClassPillar } from '../data/presentationData';
import { Hammer, Wheat, GraduationCap, Briefcase, Sparkles, TrendingUp, AlertTriangle, Quote, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ClassPillarsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('cong-nhan');
  const { isLight } = useTheme();

  const selectedPillar = CLASS_PILLARS.find(p => p.id === selectedId) || CLASS_PILLARS[0];

  const renderIcon = (name: string, size = 22, color = 'currentColor') => {
    switch (name) {
      case 'Hammer': return <Hammer size={size} color={color} />;
      case 'Wheat': return <Wheat size={size} color={color} />;
      case 'GraduationCap': return <GraduationCap size={size} color={color} />;
      case 'Briefcase': return <Briefcase size={size} color={color} />;
      case 'Sparkles': return <Sparkles size={size} color={color} />;
      default: return <Hammer size={size} color={color} />;
    }
  };

  return (
    <section
      id="giai-tang"
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
          5 Trụ Cột <span className="text-gold-grad">Giai Cấp & Tầng Lớp</span> Xã Hội
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
          Khám phá chi tiết vị thế lịch sử, số liệu thực tiễn và xu hướng biến đổi của từng giai cấp, tầng lớp
          trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư và hội nhập quốc tế.
        </p>
      </div>

      {/* 5 Pillar Navigation Buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}
      >
        {CLASS_PILLARS.map(pillar => {
          const isSelected = pillar.id === selectedId;
          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedId(pillar.id)}
              className="glass"
              style={{
                padding: '1.1rem 1.2rem',
                borderRadius: '14px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                border: isSelected
                  ? `2px solid ${pillar.accentColor}`
                  : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.16)'),
                background: isSelected
                  ? (isLight ? '#ffffff' : `linear-gradient(135deg, ${pillar.accentColor}25, rgba(18, 16, 23, 0.95))`)
                  : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.02)'),
                boxShadow: isSelected
                  ? (isLight ? `0 4px 18px ${pillar.accentColor}30` : `0 10px 30px -10px ${pillar.accentColor}50`)
                  : (isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'),
                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: isSelected
                    ? pillar.accentColor
                    : (isLight ? `${pillar.accentColor}18` : 'rgba(255, 255, 255, 0.05)'),
                  color: isSelected ? '#ffffff' : pillar.accentColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {renderIcon(pillar.iconName, 20, isSelected ? '#ffffff' : pillar.accentColor)}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: pillar.accentColor,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {pillar.badge}
                </div>
                <div
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    color: isSelected
                      ? (isLight ? '#0f172a' : '#fbf5e6')
                      : (isLight ? '#334155' : '#d8d0c0'),
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden'
                  }}
                >
                  {pillar.shortName}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Detailed Card */}
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          border: isLight ? `1.5px solid ${selectedPillar.accentColor}40` : `1.5px solid ${selectedPillar.accentColor}55`,
          background: isLight ? '#ffffff' : undefined,
          boxShadow: isLight
            ? `0 10px 30px -5px rgba(0,0,0,0.06), 0 0 25px -10px ${selectedPillar.accentColor}25`
            : `0 20px 60px -20px rgba(0,0,0,0.9), 0 0 40px -15px ${selectedPillar.accentColor}35`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Top Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, transparent, ${selectedPillar.accentColor}, transparent)`
          }}
        />

        {/* Card Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2rem',
            borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
            paddingBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: isLight ? `${selectedPillar.accentColor}18` : `linear-gradient(135deg, ${selectedPillar.accentColor}40, rgba(18, 16, 23, 0.8))`,
                border: `2px solid ${selectedPillar.accentColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isLight ? `0 4px 15px ${selectedPillar.accentColor}25` : `0 0 25px ${selectedPillar.accentColor}40`
              }}
            >
              {renderIcon(selectedPillar.iconName, 32, selectedPillar.accentColor)}
            </div>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: selectedPillar.accentColor,
                  background: `${selectedPillar.accentColor}18`,
                  padding: '0.2rem 0.65rem',
                  borderRadius: '999px',
                  marginBottom: '0.4rem',
                  border: `1px solid ${selectedPillar.accentColor}40`
                }}
              >
                {selectedPillar.badge}
              </div>
              <h3 className="display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: isLight ? '#0f172a' : '#fbf5e6' }}>
                {selectedPillar.name}
              </h3>
            </div>
          </div>

          <div
            style={{
              maxWidth: '480px',
              fontSize: '0.92rem',
              color: isLight ? '#334155' : '#ded6c5',
              lineHeight: 1.6,
              background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
              padding: '0.85rem 1.2rem',
              borderRadius: '10px',
              border: isLight ? '1px solid #e2e8f0' : undefined,
              borderLeft: `3px solid ${selectedPillar.accentColor}`
            }}
          >
            <strong>Vị trí, vai trò:</strong> {selectedPillar.position}
          </div>
        </div>

        {/* Statistical Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {selectedPillar.statistics.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background: isLight ? '#f8fafc' : 'rgba(18, 16, 23, 0.75)',
                padding: '1.2rem',
                borderRadius: '12px',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.16)'
              }}
            >
              <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#b8b0a0', marginBottom: '0.3rem' }}>
                {stat.label}
              </div>
              <div
                className="display"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: selectedPillar.accentColor,
                  lineHeight: 1.1,
                  marginBottom: '0.35rem'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.78rem', color: isLight ? '#334155' : '#ded6c5', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <TrendingUp size={13} color={selectedPillar.accentColor} />
                <span>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Three Columns: Characteristics, Trends 4.0, Challenges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Column 1: Characteristics */}
          <div
            style={{
              background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.07)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: isLight ? '#b45309' : '#e6c98c' }}>
              <CheckCircle2 size={18} color="#d9b36b" />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3' }}>Đặc Điểm Cơ Bản</h4>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedPillar.characteristics.map((char, i) => (
                <li key={i} style={{ fontSize: '0.88rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.55, display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: selectedPillar.accentColor }}>•</span>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Trends in 4.0 */}
          <div
            style={{
              background: isLight ? 'rgba(217, 179, 107, 0.08)' : 'rgba(217, 179, 107, 0.04)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: isLight ? '1px solid rgba(217, 179, 107, 0.35)' : '1px solid rgba(217, 179, 107, 0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: isLight ? '#b45309' : '#d9b36b' }}>
              <TrendingUp size={18} color="#d9b36b" />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3' }}>Xu Hướng Biến Đổi 4.0</h4>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedPillar.trends.map((tr, i) => (
                <li key={i} style={{ fontSize: '0.88rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.55, display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: selectedPillar.accentColor }}>•</span>
                  <span>{tr}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Challenges */}
          <div
            style={{
              background: isLight ? 'rgba(239, 68, 68, 0.06)' : 'rgba(181, 64, 58, 0.05)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: isLight ? '1px solid rgba(239, 68, 68, 0.25)' : '1px solid rgba(181, 64, 58, 0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: isLight ? '#dc2626' : '#ff9a8d' }}>
              <AlertTriangle size={18} color="#ff9a8d" />
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3' }}>Thách Thức Hiện Nay</h4>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedPillar.challenges.map((ch, i) => (
                <li key={i} style={{ fontSize: '0.88rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.55, display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: '#ff9a8d' }}>•</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Famous Quote */}
        <div
          style={{
            background: isLight ? '#f1f5f9' : 'linear-gradient(135deg, rgba(20, 18, 27, 0.9), rgba(30, 26, 38, 0.7))',
            padding: '1.2rem 1.8rem',
            borderRadius: '12px',
            border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          <Quote size={28} color={selectedPillar.accentColor} style={{ flexShrink: 0, opacity: 0.8 }} />
          <div style={{ fontSize: '0.94rem', fontStyle: 'italic', color: isLight ? '#1e293b' : '#f4e6c3', lineHeight: 1.6 }}>
            "{selectedPillar.quote}"
          </div>
        </div>


      </div>
    </section>
  );
};
