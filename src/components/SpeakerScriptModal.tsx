import React, { useState } from 'react';
import { PRESENTATION_SLIDES, PRESENTATION_CONFIG } from '../data/presentationData';
import { X, Copy, Check, Printer, FileText, User, Clock } from 'lucide-react';

interface SpeakerScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerScriptModal: React.FC<SpeakerScriptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

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
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)',
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
          background: '#14121a',
          borderRadius: '16px',
          border: '1.5px solid rgba(217, 179, 107, 0.35)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 80px rgba(0, 0, 0, 0.95)',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '1.2rem 1.8rem',
            borderBottom: '1px solid rgba(217, 179, 107, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, rgba(217, 179, 107, 0.1) 0%, rgba(20, 18, 27, 0.9) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <FileText size={22} color="#d9b36b" />
            <div>
              <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fbf5e6' }}>
                Toàn Văn Kịch Bản Lời Thoại Thuyết Trình
              </h3>
              <div style={{ fontSize: '0.76rem', color: '#b8b0a0' }}>
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
                background: 'rgba(217, 179, 107, 0.15)',
                color: '#f4e6c3',
                border: '1px solid rgba(217, 179, 107, 0.3)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={15} color="#34d399" /> : <Copy size={15} />}
              <span>{copied ? 'Đã sao chép!' : 'Sao chép toàn bộ'}</span>
            </button>

            <button
              onClick={onClose}
              style={{
                padding: '0.45rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#b8b0a0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
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
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  padding: '1.4rem 1.6rem',
                  border: '1px solid rgba(217, 179, 107, 0.16)'
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
                    <strong style={{ color: '#fbf5e6', fontSize: '1rem' }}>{s.title}</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.78rem', color: '#b8b0a0' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#e6c98c' }}>
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
                    color: '#ded6c5',
                    lineHeight: 1.75,
                    background: 'rgba(18, 16, 23, 0.75)',
                    padding: '1.2rem',
                    borderRadius: '8px',
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
