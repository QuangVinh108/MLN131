import React, { useState } from 'react';
import { ALLIANCE_PILLARS, AlliancePillar } from '../data/presentationData';
import { DollarSign, ShieldAlert, Sparkles, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';
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
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
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
                  {pillar.id === 'kinh-te' ? 'QUYẾT ĐỊNH NHẤT' : pillar.id === 'chinh-tri' ? 'ĐỊNH HƯỚNG' : 'MỤC TIÊU'}
                </span>
              </div>
              <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6', marginBottom: '0.35rem' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: isLight ? '#475569' : '#b8b0a0', lineHeight: 1.5 }}>
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
        {/* Top summary badge */}
        <div
          style={{
            background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
            padding: '1.2rem 1.6rem',
            borderRadius: '12px',
            border: isLight ? '1px solid #e2e8f0' : undefined,
            borderLeft: `4px solid ${activePillar.color}`,
            marginBottom: '2.5rem'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: activePillar.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>
            LUẬN ĐIỂM CHỦ ĐẠO
          </div>
          <div style={{ fontSize: '1.05rem', color: isLight ? '#1e293b' : '#f4e6c3', lineHeight: 1.6 }}>
            {activePillar.summary}
          </div>
        </div>

        {/* 4 Core Focus Areas Grid */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h4
            className="display"
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              color: isLight ? '#0f172a' : '#fbf5e6',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <Lightbulb size={22} color={activePillar.color} />
            <span>Nội Dung Trọng Tâm & Nhiệm Vụ Cụ Thể (Giáo trình 2021)</span>
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.2rem'
            }}
          >
            {activePillar.coreContents.map((content, idx) => (
              <div
                key={idx}
                style={{
                  background: isLight ? '#f8fafc' : 'rgba(18, 16, 23, 0.8)',
                  padding: '1.4rem',
                  borderRadius: '12px',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.16)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: activePillar.color,
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {idx + 1}
                  </span>
                  <h5 style={{ fontSize: '0.98rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3' }}>
                    {content.heading}
                  </h5>
                </div>
                <p style={{ fontSize: '0.88rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.6, paddingLeft: '2rem' }}>
                  {content.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Case Studies / Examples */}
        <div
          style={{
            background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.02)',
            padding: '1.5rem 1.8rem',
            borderRadius: '12px',
            border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '2rem'
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: isLight ? '#b45309' : '#e6c98c', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem' }}>
            MINH CHỨNG THỰC TIỄN TẠI VIỆT NAM
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {activePillar.practicalExamples.map((ex, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: isLight ? '#1e293b' : '#ded6c5' }}>
                <CheckCircle size={18} color={activePillar.color} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{ex}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
