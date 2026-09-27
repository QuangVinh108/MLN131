import React from 'react';
import { PRESENTATION_CONFIG } from '../data/presentationData';
import { Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isLight } = useTheme();

  return (
    <footer
      style={{
        borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)',
        background: isLight ? '#f8fafc' : 'linear-gradient(180deg, #121017 0%, #0a090e 100%)',
        padding: '4.5rem 1.5rem 3.5rem 1.5rem',
        color: isLight ? '#475569' : '#b8b0a0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Core Quote */}
        <div
          style={{
            maxWidth: '780px',
            marginBottom: '3rem',
            padding: '2rem',
            borderRadius: '16px',
            background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.02)',
            border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
            boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : 'none'
          }}
        >
          <Quote size={32} color={isLight ? '#ca8a04' : '#d9b36b'} style={{ margin: '0 auto 1rem auto', opacity: 0.85 }} />
          <blockquote
            className="display"
            style={{
              fontSize: '1.25rem',
              color: isLight ? '#0f172a' : '#f4e6c3',
              fontStyle: 'italic',
              lineHeight: 1.65,
              marginBottom: '1rem',
              fontWeight: 700
            }}
          >
            "Đoàn kết, đoàn kết, đại đoàn kết.
            <br />
            Thành công, thành công, đại thành công!"
          </blockquote>
          <div className="eyebrow" style={{ color: isLight ? '#b91c1c' : '#b5403a' }}>
            CHỦ TỊCH HỒ CHÍ MINH
          </div>
        </div>

        {/* Emblem & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#b5403a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              border: '1px solid #d9b36b',
              fontWeight: 700
            }}
          >
            ★
          </div>
          <span className="display text-gold-grad" style={{ fontSize: '1.2rem', fontWeight: 700 }}>
            {PRESENTATION_CONFIG.subjectName} ({PRESENTATION_CONFIG.subjectCode})
          </span>
        </div>

        <p style={{ fontSize: '0.9rem', color: isLight ? '#334155' : '#ded6c5', maxWidth: '640px', lineHeight: 1.6, marginBottom: '2rem' }}>
          {PRESENTATION_CONFIG.chapterTitle}
        </p>

        <div className="gold-line" style={{ maxWidth: '600px', marginBottom: '2rem' }} />

        <div style={{ fontSize: '0.82rem', color: isLight ? '#64748b' : '#7a7368', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>© {PRESENTATION_CONFIG.presentationDate} · {PRESENTATION_CONFIG.groupName}. Được xây dựng cho buổi thuyết trình tương tác.</span>
        </div>
      </div>
    </footer>
  );
};
