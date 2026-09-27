import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/presentationData';
import { Trophy, HelpCircle, CheckCircle, XCircle, RotateCcw, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const QuizArenaSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const question: QuizQuestion = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (score >= 6) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <section
      id="quiz"
      style={{
        padding: '5.5rem 1.5rem',
        maxWidth: '1040px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div
          className="eyebrow"
          style={{
            fontSize: '0.8rem',
            color: '#b5403a',
            marginBottom: '0.5rem'
          }}
        >
          MINIGAME TƯƠNG TÁC HỘI TRƯỜNG
        </div>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.25
          }}
        >
          Đấu Trường Trắc Nghiệm <span className="text-gold-grad">MLN131</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: '#b8b0a0',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Củng cố kiến thức trọng tâm với 8 câu hỏi bám sát ngân hàng đề thi và phản biện giảng đường.
        </p>
      </div>

      {/* Main Quiz Card */}
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.8rem, 4vw, 3rem)',
          border: '1.5px solid rgba(217, 179, 107, 0.35)',
          boxShadow: '0 25px 80px -30px rgba(0,0,0,0.95), 0 0 45px -15px rgba(217, 179, 107, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {!showResult ? (
          <div>
            {/* Top Status Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.8rem',
                borderBottom: '1px solid rgba(217, 179, 107, 0.15)',
                paddingBottom: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #d9b36b, #b88628)',
                    color: '#121017',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px'
                  }}
                >
                  CÂU {currentIdx + 1} / {QUIZ_QUESTIONS.length}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#e6c98c', fontWeight: 700, fontSize: '0.95rem' }}>
                <Trophy size={18} color="#d9b36b" />
                <span>Điểm: {score}</span>
              </div>
            </div>

            {/* Question Text */}
            <h3
              className="display"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)',
                fontWeight: 700,
                color: '#fbf5e6',
                lineHeight: 1.45,
                marginBottom: '2rem'
              }}
            >
              {question.question}
            </h3>

            {/* Options List */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '2rem'
              }}
            >
              {question.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctAnswer;

                let borderStyle = '1px solid rgba(217, 179, 107, 0.2)';
                let bgStyle = 'rgba(255, 255, 255, 0.02)';
                let textColor = '#ded6c5';

                if (isAnswered) {
                  if (isCorrect) {
                    borderStyle = '2px solid #34d399';
                    bgStyle = 'rgba(52, 211, 153, 0.15)';
                    textColor = '#ffffff';
                  } else if (isSelected && !isCorrect) {
                    borderStyle = '2px solid #b5403a';
                    bgStyle = 'rgba(181, 64, 58, 0.2)';
                    textColor = '#ff9a8d';
                  }
                } else if (isSelected) {
                  borderStyle = '2px solid #d9b36b';
                  bgStyle = 'rgba(217, 179, 107, 0.15)';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    style={{
                      padding: '1.1rem 1.4rem',
                      borderRadius: '12px',
                      textAlign: 'left',
                      border: borderStyle,
                      background: bgStyle,
                      color: textColor,
                      fontSize: '0.96rem',
                      fontWeight: isSelected || (isAnswered && isCorrect) ? 600 : 400,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: isAnswered ? 'default' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{opt}</span>
                    {isAnswered && isCorrect && <CheckCircle size={20} color="#34d399" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle size={20} color="#b5403a" />}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box when Answered */}
            {isAnswered && (
              <div
                style={{
                  background: 'rgba(18, 16, 23, 0.95)',
                  borderRadius: '12px',
                  padding: '1.4rem 1.6rem',
                  border: '1px solid rgba(217, 179, 107, 0.3)',
                  marginBottom: '2rem',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <BookOpen size={18} color="#d9b36b" />
                  <span className="eyebrow" style={{ color: '#d9b36b' }}>
                    GIẢI THÍCH KHOA HỌC & TRÍCH DẪN
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', color: '#ded6c5', lineHeight: 1.6 }}>
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleNext}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem 1.8rem',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #d9b36b, #c8973f)',
                    color: '#121017',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 20px rgba(217, 179, 107, 0.35)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Result Summary Screen */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                background: score >= 6 ? 'linear-gradient(135deg, #d9b36b, #c8973f)' : 'rgba(255, 255, 255, 0.1)',
                color: score >= 6 ? '#121017' : '#e6c98c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                boxShadow: score >= 6 ? '0 0 40px rgba(217, 179, 107, 0.6)' : 'none'
              }}
            >
              <Trophy size={42} />
            </div>

            <h3 className="display" style={{ fontSize: '2rem', fontWeight: 800, color: '#fbf5e6', marginBottom: '0.5rem' }}>
              {score >= 7 ? 'Xuất Sắc! Điểm Tuyệt Đối' : score >= 5 ? 'Làm Tốt Lắm!' : 'Cố Lên Nhé! Hãy Ôn Lại'}
            </h3>

            <p style={{ fontSize: '1.2rem', color: '#ded6c5', marginBottom: '1.5rem' }}>
              Bạn đã trả lời đúng <strong style={{ color: '#d9b36b', fontSize: '1.5rem' }}>{score}</strong> / {QUIZ_QUESTIONS.length} câu hỏi.
            </p>

            <p style={{ maxWidth: '540px', margin: '0 auto 2.5rem auto', color: '#b8b0a0', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {score >= 6
                ? 'Bạn đã nắm rất vững kiến thức về Cơ cấu xã hội - giai cấp và 3 nội dung Liên minh!'
                : 'Hãy xem lại các nội dung trên trang này để củng cố kiến thức nhé!'}
            </p>

            <button
              onClick={handleRestart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.85rem 2rem',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #d9b36b, #c8973f)',
                color: '#121017',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={18} />
              <span>Làm lại từ đầu</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
