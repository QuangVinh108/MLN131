import React from 'react';
import { HelpCircle, Sparkles, Users, ShieldCheck, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onScrollToQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToQuiz }) => {
  const { isLight } = useTheme();

  const scrollToOverview = () => {
    const overviewEl = document.getElementById('tong-quan');
    overviewEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7.5rem 1.5rem 4rem 1.5rem',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Lighting Gradients */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '420px',
          background: isLight
            ? 'radial-gradient(ellipse, rgba(217, 179, 107, 0.22) 0%, rgba(181, 64, 58, 0.08) 50%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(217, 179, 107, 0.16) 0%, rgba(181, 64, 58, 0.08) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Decorative Traditional Circular Motif */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '680px',
          height: '680px',
          border: isLight ? '1px solid rgba(180, 83, 9, 0.12)' : '1px solid rgba(217, 179, 107, 0.08)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '540px',
          height: '540px',
          border: isLight ? '1px dashed rgba(180, 83, 9, 0.15)' : '1px dashed rgba(217, 179, 107, 0.06)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Container */}
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Eyebrow Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.2rem',
            borderRadius: '999px',
            background: isLight
              ? 'rgba(217, 179, 107, 0.18)'
              : 'linear-gradient(135deg, rgba(217, 179, 107, 0.12), rgba(200, 151, 63, 0.06))',
            border: isLight ? '1px solid rgba(180, 83, 9, 0.35)' : '1px solid rgba(217, 179, 107, 0.3)',
            marginBottom: '2rem',
            boxShadow: isLight ? '0 2px 10px rgba(180, 83, 9, 0.08)' : '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#b5403a',
              boxShadow: '0 0 10px #b5403a',
              display: 'inline-block'
            }}
          />
          <span
            className="eyebrow"
            style={{
              fontSize: '0.78rem',
              color: isLight ? '#92400e' : '#e6c98c',
              letterSpacing: '0.22em'
            }}
          >
            HỌC PHẦN MLN131 · CHỦ NGHĨA XÃ HỘI KHOA HỌC · KỲ FALL2026
          </span>
        </div>

        {/* Master Heading */}
        <h1
          className="display"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: '2.5rem',
            letterSpacing: '-0.01em',
            textShadow: isLight ? 'none' : '0 2px 25px rgba(0, 0, 0, 0.7)'
          }}
        >
          <span className="text-gold-grad">Cơ Cấu Xã Hội - Giai Cấp</span>
          <br />
          <span style={{ color: isLight ? '#0f172a' : '#f3ede0', fontWeight: 600, fontSize: '0.9em' }}>
            & Liên Minh Giai Cấp, Tầng Lớp
          </span>
        </h1>

        {/* Call to Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.2rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* CTA 1 - Quiz Arena */}
          <button
            onClick={onScrollToQuiz}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.95rem 2.2rem',
              borderRadius: '999px',
              fontSize: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #deb65d 0%, #c8973f 50%, #b8860b 100%)',
              color: '#121017',
              boxShadow: isLight ? '0 6px 20px rgba(180, 83, 9, 0.35)' : '0 8px 30px rgba(217, 179, 107, 0.45)',
              border: 'none',
              transform: 'translateY(0)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(217, 179, 107, 0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = isLight ? '0 6px 20px rgba(180, 83, 9, 0.35)' : '0 8px 30px rgba(217, 179, 107, 0.45)';
            }}
          >
            <HelpCircle size={18} color="#121017" />
            <span>Đấu trường Trắc nghiệm</span>
          </button>

          {/* CTA 2 - Explore Content */}
          <button
            onClick={scrollToOverview}
            className="glass"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.95rem 2rem',
              borderRadius: '999px',
              fontSize: '0.98rem',
              fontWeight: 600,
              color: isLight ? '#0f172a' : '#f4e6c3',
              border: isLight ? '1px solid rgba(180, 83, 9, 0.35)' : '1px solid rgba(217, 179, 107, 0.35)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = isLight ? '#b45309' : 'rgba(217, 179, 107, 0.7)';
              e.currentTarget.style.background = isLight ? 'rgba(180, 83, 9, 0.08)' : 'rgba(217, 179, 107, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = isLight ? 'rgba(180, 83, 9, 0.35)' : 'rgba(217, 179, 107, 0.35)';
              e.currentTarget.style.background = isLight ? 'rgba(255, 255, 255, 0.9)' : 'transparent';
            }}
          >
            <BookOpen size={18} color={isLight ? '#b45309' : '#e6c98c'} />
            <span>Nội dung chi tiết</span>
          </button>
        </div>

        {/* Highlight Grid / Key Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            maxWidth: '940px',
            margin: '0 auto'
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: '1.25rem 1.5rem',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                padding: '0.65rem',
                borderRadius: '10px',
                background: isLight ? 'rgba(181, 64, 58, 0.12)' : 'rgba(181, 64, 58, 0.2)',
                border: isLight ? '1px solid rgba(181, 64, 58, 0.3)' : '1px solid rgba(181, 64, 58, 0.35)',
                color: isLight ? '#b5403a' : '#ff9a8d'
              }}
            >
              <Users size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#b8b0a0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Cơ Cấu Giai Tầng
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', margin: '0.2rem 0' }}>
                5 Giai Tầng Cốt Lõi
              </div>
              <div style={{ fontSize: '0.82rem', color: isLight ? '#475569' : '#b8b0a0' }}>
                Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ & Trẻ
              </div>
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '1.25rem 1.5rem',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                padding: '0.65rem',
                borderRadius: '10px',
                background: isLight ? 'rgba(180, 83, 9, 0.12)' : 'rgba(217, 179, 107, 0.2)',
                border: isLight ? '1px solid rgba(180, 83, 9, 0.3)' : '1px solid rgba(217, 179, 107, 0.35)',
                color: isLight ? '#b45309' : '#e6c98c'
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#b8b0a0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Khối Đại Đoàn Kết
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', margin: '0.2rem 0' }}>
                3 Trụ Cột Nội Dung
              </div>
              <div style={{ fontSize: '0.82rem', color: isLight ? '#475569' : '#b8b0a0' }}>
                Kinh tế (Quyết định) · Chính trị · Văn hóa - Xã hội
              </div>
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: '1.25rem 1.5rem',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                padding: '0.65rem',
                borderRadius: '10px',
                background: isLight ? 'rgba(5, 150, 105, 0.12)' : 'rgba(52, 211, 153, 0.2)',
                border: isLight ? '1px solid rgba(5, 150, 105, 0.3)' : '1px solid rgba(52, 211, 153, 0.35)',
                color: isLight ? '#059669' : '#34d399'
              }}
            >
              <Sparkles size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: isLight ? '#64748b' : '#b8b0a0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Thực tiễn sinh động
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', margin: '0.2rem 0' }}>
                Mô Hình "Liên Kết 4 Nhà"
              </div>
              <div style={{ fontSize: '0.82rem', color: isLight ? '#475569' : '#b8b0a0' }}>
                Nhà nước · Nhà khoa học · Doanh nghiệp · Nhà nông
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
