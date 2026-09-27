import React, { useState, useEffect } from 'react';
import { PRESENTATION_SLIDES, Slide, PRESENTATION_CONFIG } from '../data/presentationData';
import { X, ChevronLeft, ChevronRight, FileText, Grid, Maximize, Minimize, User, Clock, Quote, CheckCircle2 } from 'lucide-react';

interface PresentationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlideIndex?: number;
}

export const PresentationModeModal: React.FC<PresentationModeModalProps> = ({
  isOpen,
  onClose,
  initialSlideIndex = 0
}) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(initialSlideIndex);
  const [showNotes, setShowNotes] = useState<boolean>(true);
  const [showOverview, setShowOverview] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slide: Slide = PRESENTATION_SLIDES[currentSlideIdx];

  const nextSlide = () => {
    if (currentSlideIdx < totalSlides - 1) {
      setCurrentSlideIdx(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx(prev => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        if (showOverview) {
          setShowOverview(false);
        } else {
          onClose();
        }
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(prev => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
        setShowOverview(prev => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlideIdx, showOverview]);

  if (!isOpen) return null;

  const progressPercent = ((currentSlideIdx + 1) / totalSlides) * 100;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: '#0c0b10',
        display: 'flex',
        flexDirection: 'column',
        color: '#f3ede0',
        overflow: 'hidden'
      }}
    >
      {/* Top Header Control Bar */}
      <header
        style={{
          height: '56px',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(18, 16, 23, 0.95)',
          borderBottom: '1px solid rgba(217, 179, 107, 0.2)',
          zIndex: 10
        }}
      >
        {/* Brand & Subject */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span
            style={{
              background: '#b5403a',
              color: '#ffffff',
              padding: '0.15rem 0.55rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.05em'
            }}
          >
            {PRESENTATION_CONFIG.subjectCode}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#b8b0a0', fontWeight: 500 }}>
            {PRESENTATION_CONFIG.chapter} · {slide.sectionTitle}
          </span>
        </div>

        {/* Slide Counter */}
        <div
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#e6c98c',
            background: 'rgba(217, 179, 107, 0.1)',
            padding: '0.2rem 0.8rem',
            borderRadius: '999px',
            border: '1px solid rgba(217, 179, 107, 0.25)'
          }}
        >
          SLIDE {currentSlideIdx + 1} / {totalSlides}
        </div>

        {/* Header Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={() => setShowNotes(!showNotes)}
            style={{
              padding: '0.4rem 0.75rem',
              borderRadius: '6px',
              background: showNotes ? 'rgba(217, 179, 107, 0.25)' : 'rgba(255, 255, 255, 0.05)',
              color: showNotes ? '#f4e6c3' : '#b8b0a0',
              border: showNotes ? '1px solid #d9b36b' : '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer'
            }}
            title="Bật/Tắt Lời thoại thuyết trình (Phím N)"
          >
            <FileText size={15} />
            <span>Lời thoại (N)</span>
          </button>

          <button
            onClick={() => setShowOverview(!showOverview)}
            style={{
              padding: '0.4rem 0.75rem',
              borderRadius: '6px',
              background: showOverview ? 'rgba(217, 179, 107, 0.25)' : 'rgba(255, 255, 255, 0.05)',
              color: showOverview ? '#f4e6c3' : '#b8b0a0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              cursor: 'pointer'
            }}
            title="Lưới Slide tổng quan (Phím O)"
          >
            <Grid size={15} />
            <span>Lưới Slide (O)</span>
          </button>

          <button
            onClick={toggleFullscreen}
            style={{
              padding: '0.4rem',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#b8b0a0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer'
            }}
            title="Toàn màn hình (Phím F)"
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>

          <button
            onClick={onClose}
            style={{
              padding: '0.4rem 0.6rem',
              borderRadius: '6px',
              background: 'rgba(181, 64, 58, 0.2)',
              color: '#ff9a8d',
              border: '1px solid rgba(181, 64, 58, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.78rem',
              fontWeight: 600
            }}
            title="Thoát trình chiếu (Esc)"
          >
            <X size={16} />
            <span>Thoát</span>
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div style={{ height: '3px', background: 'rgba(255, 255, 255, 0.08)', width: '100%' }}>
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            background: 'linear-gradient(90deg, #b5403a, #d9b36b)',
            transition: 'width 0.3s ease'
          }}
        />
      </div>

      {/* Stage Body */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Main Slide Canvas */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.5rem 4rem',
            overflowY: 'auto',
            position: 'relative'
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlideIdx === 0}
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: currentSlideIdx === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(217, 179, 107, 0.15)',
              border: '1px solid rgba(217, 179, 107, 0.3)',
              color: currentSlideIdx === 0 ? '#444' : '#f4e6c3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlideIdx === 0 ? 'default' : 'pointer',
              zIndex: 5
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlideIdx === totalSlides - 1}
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: currentSlideIdx === totalSlides - 1 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(217, 179, 107, 0.15)',
              border: '1px solid rgba(217, 179, 107, 0.3)',
              color: currentSlideIdx === totalSlides - 1 ? '#444' : '#f4e6c3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: currentSlideIdx === totalSlides - 1 ? 'default' : 'pointer',
              zIndex: 5
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Content Box */}
          <div
            style={{
              maxWidth: '920px',
              width: '100%',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            {/* Section Tag & Speaker Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1.2rem',
                flexWrap: 'wrap'
              }}
            >
              <span
                className="eyebrow"
                style={{
                  fontSize: '0.78rem',
                  color: '#d9b36b',
                  letterSpacing: '0.2em'
                }}
              >
                {slide.sectionTitle.toUpperCase()}
              </span>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontSize: '0.8rem',
                  color: '#b8b0a0'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={14} color="#d9b36b" />
                  <strong style={{ color: '#f4e6c3' }}>{slide.speaker}</strong> ({slide.speakerRole})
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={14} />
                  <span>{slide.duration}</span>
                </span>
              </div>
            </div>

            {/* Slide Title */}
            <h2
              className="display"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                color: '#fbf5e6',
                lineHeight: 1.2,
                marginBottom: '0.8rem'
              }}
            >
              {slide.title}
            </h2>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.15rem',
                color: '#e6c98c',
                marginBottom: '2rem',
                lineHeight: 1.5
              }}
            >
              {slide.subtitle}
            </p>

            {/* Key Points Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              {slide.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '1.2rem 1.6rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(217, 179, 107, 0.18)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem'
                  }}
                >
                  <CheckCircle2 size={20} color="#d9b36b" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                  <div style={{ fontSize: '1.02rem', color: '#ded6c5', lineHeight: 1.6 }}>
                    {point}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote if exists */}
            {slide.quote && (
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 18, 27, 0.9), rgba(30, 26, 38, 0.7))',
                  padding: '1.2rem 1.8rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(217, 179, 107, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <Quote size={28} color="#d9b36b" style={{ flexShrink: 0, opacity: 0.8 }} />
                <div>
                  <div style={{ fontSize: '0.98rem', fontStyle: 'italic', color: '#f4e6c3', lineHeight: 1.6 }}>
                    "{slide.quote.text}"
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#d9b36b', marginTop: '0.2rem', fontWeight: 600 }}>
                    — {slide.quote.author}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Speaker Notes Drawer (Right Sidebar or Bottom) */}
        {showNotes && (
          <aside
            style={{
              width: '380px',
              background: '#14121a',
              borderLeft: '1px solid rgba(217, 179, 107, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 20
            }}
          >
            <div
              style={{
                padding: '1rem 1.2rem',
                borderBottom: '1px solid rgba(217, 179, 107, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(217, 179, 107, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={18} color="#d9b36b" />
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f4e6c3' }}>
                  Lời Thoại Thuyết Trình
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#b8b0a0' }}>Phím N để ẩn</span>
            </div>

            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
              <div
                style={{
                  background: 'rgba(181, 64, 58, 0.15)',
                  padding: '0.6rem 0.9rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(181, 64, 58, 0.3)',
                  marginBottom: '1.2rem',
                  fontSize: '0.82rem',
                  color: '#ff9a8d',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <User size={16} />
                <span>Người nói: <strong>{slide.speaker}</strong> ({slide.duration})</span>
              </div>

              <div
                style={{
                  fontSize: '0.96rem',
                  color: '#f3ede0',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line'
                }}
              >
                {slide.script}
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Slide Overview Grid Modal */}
      {showOverview && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 100,
            background: 'rgba(12, 11, 16, 0.96)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h3 className="display" style={{ fontSize: '1.6rem', color: '#fbf5e6' }}>
              Danh Sách Toàn Bộ 12 Slide
            </h3>
            <button
              onClick={() => setShowOverview(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}
            >
              Đóng (Esc)
            </button>
          </div>

          <div
            style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.2rem',
              overflowY: 'auto'
            }}
          >
            {PRESENTATION_SLIDES.map((s, idx) => {
              const isCur = idx === currentSlideIdx;
              return (
                <div
                  key={s.id}
                  onClick={() => {
                    setCurrentSlideIdx(idx);
                    setShowOverview(false);
                  }}
                  style={{
                    background: isCur ? 'rgba(217, 179, 107, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: isCur ? '2px solid #d9b36b' : '1px solid rgba(217, 179, 107, 0.2)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '140px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#d9b36b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                      Slide {idx + 1} · {s.sectionTitle}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fbf5e6', lineHeight: 1.3 }}>
                      {s.title}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#b8b0a0', marginTop: '0.8rem' }}>
                    {s.speaker}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
