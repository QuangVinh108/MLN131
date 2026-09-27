import React, { useState } from 'react';
import { PRESENTATION_SLIDES, PRESENTATION_CONFIG } from '../data/presentationData';
import { X, Copy, Check, FileText, User, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SpeakerScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerScriptModal: React.FC<SpeakerScriptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const { isLight } = useTheme();

  if (!isOpen) return null;

  const handleCopyAll = () => {
    const fullText = PRESENTATION_SLIDES.map(
      s => `--- SLIDE ${s.slideNumber}: ${s.title.toUpperCase()} ---
Người nói: ${s.speaker} (${s.speakerRole}) · Thời lượng: ${s.duration}
[LỜI THOẠI]:
${s.script}
`
    ).join('\n\n');

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '90vh',
          background: isLight ? '#ffffff' : '#14121a',
          borderRadius: '16px',
          border: isLight ? '1.5px solid rgba(217, 179, 107, 0.35)' : '1.5px solid rgba(217, 179, 107, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isLight ? '0 20px 50px rgba(0, 0, 0, 0.2)' : '0 25px 80px rgba(0, 0, 0, 0.95)',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.2rem 1.8rem',
            borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isLight
              ? 'linear-gradient(180deg, rgba(217, 179, 107, 0.15) 0%, #ffffff 100%)'
              : 'linear-gradient(180deg, rgba(217, 179, 107, 0.1) 0%, rgba(20, 18, 27, 0.9) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <FileText size={22} color={isLight ? '#ca8a04' : '#d9b36b'} />
            <div>
              <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6' }}>
                Toàn Văn Kịch Bản Lời Thoại Thuyết Trình
              </h3>
              <div style={{ fontSize: '0.76rem', color: isLight ? '#64748b' : '#b8b0a0' }}>
                Học phần {PRESENTATION_CONFIG.subjectCode} · Phân chia theo 12 Slide chi tiết
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={handleCopyAll}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '8px',
                background: isLight ? 'rgba(217, 179, 107, 0.25)' : 'rgba(217, 179, 107, 0.15)',
                color: isLight ? '#854d0e' : '#f4e6c3',
                border: isLight ? '1px solid #ca8a04' : '1px solid rgba(217, 179, 107, 0.3)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
              <span>{copied ? 'Đã sao chép!' : 'Sao chép toàn bộ'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                padding: '0.45rem',
                borderRadius: '8px',
                background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
                color: isLight ? '#475569' : '#b8b0a0',
                border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div style={{ flex: 1, padding: '1.8rem', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {PRESENTATION_SLIDES.map(s => (
              <div
                key={s.id}
                style={{
                  background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  padding: '1.4rem 1.6rem',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.16)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        background: '#d9b36b',
                        color: '#121017',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      SLIDE {s.slideNumber}
                    </span>
                    <strong style={{ color: isLight ? '#0f172a' : '#fbf5e6', fontSize: '1rem' }}>{s.title}</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: isLight ? '#64748b' : '#b8b0a0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: isLight ? '#b45309' : '#e6c98c', fontWeight: 600 }}>
                      <User size={13} /> {s.speaker}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={13} /> {s.duration}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '0.94rem',
                    color: isLight ? '#1e293b' : '#ded6c5',
                    lineHeight: 1.75,
                    background: isLight ? '#ffffff' : 'rgba(18, 16, 23, 0.75)',
                    padding: '1.2rem',
                    borderRadius: '8px',
                    border: isLight ? '1px solid #e2e8f0' : undefined,
                    borderLeft: '3px solid #d9b36b',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {s.script}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
