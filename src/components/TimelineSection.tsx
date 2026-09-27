import React, { useState } from 'react';
import { TIMELINE_DATA, TimelineMilestone } from '../data/presentationData';
import { Calendar, ChevronRight, CheckCircle2, Bookmark } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TimelineSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(4); // Default to Đại hội XIII
  const { isLight } = useTheme();

  const milestone = TIMELINE_DATA[selectedIdx];

  return (
    <section
      id="dong-thoi-gian"
      style={{
        padding: '5.5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div
          className="eyebrow"
          style={{
            fontSize: '0.8rem',
            color: isLight ? '#b45309' : '#d9b36b',
            marginBottom: '0.5rem'
          }}
        >
          TIẾN TRÌNH LỊCH SỬ ĐỔI MỚI (1986 - NAY)
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
          Sự Phát Triển Nhận Thức Của <span className="text-gold-grad">Đảng Cộng Sản Việt Nam</span>
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
          Khái quát hành trình hoàn thiện lý luận về cơ cấu xã hội - giai cấp và liên minh giai cấp
          qua các kỳ Đại hội đại biểu toàn quốc của Đảng từ 1986 đến Đại hội XIII năm 2021.
        </p>
      </div>

      {/* Horizontal Milestone Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          marginBottom: '3rem',
          overflowX: 'auto',
          padding: '1rem 0.5rem'
        }}
      >
        {/* Background Connecting Line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            right: '5%',
            height: '2px',
            background: 'linear-gradient(90deg, #b5403a, #d9b36b)',
            zIndex: 0,
            transform: 'translateY(-50%)'
          }}
        />

        {TIMELINE_DATA.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              style={{
                position: 'relative',
                zIndex: 1,
                background: isSelected
                  ? 'linear-gradient(135deg, #d9b36b, #b88628)'
                  : (isLight ? '#ffffff' : '#1a1722'),
                color: isSelected ? '#121017' : (isLight ? '#334155' : '#ded6c5'),
                border: isSelected
                  ? (isLight ? '2px solid #ca8a04' : '2px solid #ffffff')
                  : (isLight ? '1.5px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.4)'),
                borderRadius: '999px',
                padding: '0.6rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                boxShadow: isSelected
                  ? (isLight ? '0 4px 18px rgba(202, 138, 4, 0.35)' : '0 0 25px rgba(217, 179, 107, 0.5)')
                  : (isLight ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'),
                transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.25s ease',
                flexShrink: 0
              }}
            >
              <Calendar size={14} color={isSelected ? '#121017' : (isLight ? '#b45309' : '#d9b36b')} />
              <span>{item.congress}</span>
              <span style={{ fontSize: '0.75rem', opacity: isSelected ? 0.9 : 0.7 }}>({item.year})</span>
            </button>
          );
        })}
      </div>

      {/* Selected Milestone Detail Card */}
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.8rem, 4vw, 3rem)',
          border: isLight ? '1.5px solid rgba(217, 179, 107, 0.35)' : '1.5px solid rgba(217, 179, 107, 0.4)',
          background: isLight ? '#ffffff' : undefined,
          boxShadow: isLight
            ? '0 10px 30px -5px rgba(0,0,0,0.06), 0 0 25px -10px rgba(217, 179, 107, 0.2)'
            : '0 25px 70px -25px rgba(0,0,0,0.95), 0 0 50px -20px rgba(217, 179, 107, 0.25)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
            <Bookmark size={20} color="#b5403a" />
            <span className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b' }}>
              VĂN KIỆN ĐẢNG · NĂM {milestone.year}
            </span>
          </div>
          <h3 className="display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: isLight ? '#0f172a' : '#fbf5e6', marginBottom: '0.8rem' }}>
            {milestone.congress}: {milestone.title}
          </h3>
          <p style={{ fontSize: '1rem', color: isLight ? '#b45309' : '#e6c98c', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic', fontWeight: isLight ? 500 : 400 }}>
            "{milestone.significance}"
          </p>
        </div>

        <div
          style={{
            background: isLight ? '#f8fafc' : 'rgba(18, 16, 23, 0.85)',
            padding: '1.8rem',
            borderRadius: '14px',
            border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)'
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            ĐIỂM ĐỘT PHÁ LÝ LUẬN & CHÍNH SÁCH
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {milestone.highlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.94rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.6 }}>
                <CheckCircle2 size={20} color={isLight ? '#059669' : '#34d399'} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
