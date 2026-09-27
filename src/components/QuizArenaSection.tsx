import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/presentationData';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, ArrowLeft, Send, Check, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../context/ThemeContext';

const QUESTIONS: QuizQuestion[] = QUIZ_QUESTIONS.slice(0, 5);

export const QuizArenaSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(QUESTIONS.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const { isLight } = useTheme();

  const question: QuizQuestion = QUESTIONS[currentIdx];
  const answeredCount = userAnswers.filter(ans => ans !== null).length;

  const unansweredIndices = userAnswers
    .map((ans, idx) => (ans === null ? idx + 1 : null))
    .filter((val): val is number => val !== null);

  const handleSelectOption = (idx: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => {
      const next = [...prev];
      next[currentIdx] = idx;
      return next;
    });

    // Clear validation error if all questions are now filled or as user answers
    if (validationError) {
      setValidationError(null);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Check if user has answered all 5 questions
    if (unansweredIndices.length > 0) {
      setValidationError(
        `Bạn chưa chọn đủ 5 câu hỏi! Còn thiếu: Câu ${unansweredIndices.join(', ')}. Vui lòng hoàn thành để nộp bài.`
      );
      return;
    }

    setValidationError(null);
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 75,
      origin: { y: 0.6 }
    });
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setUserAnswers(new Array(QUESTIONS.length).fill(null));
    setIsSubmitted(false);
    setValidationError(null);
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
            lineHeight: 1.25,
            color: isLight ? '#0f172a' : '#fbf5e6'
          }}
        >
          Đấu Trường Trắc Nghiệm <span className="text-gold-grad">MLN131</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: isLight ? '#475569' : '#b8b0a0',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Củng cố kiến thức trọng tâm với 5 câu hỏi bám sát ngân hàng đề thi và phản biện giảng đường.
        </p>
      </div>

      {/* Main Quiz Card */}
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.8rem, 4vw, 3rem)',
          border: isLight ? '1.5px solid rgba(217, 179, 107, 0.35)' : '1.5px solid rgba(217, 179, 107, 0.35)',
          background: isLight ? '#ffffff' : undefined,
          boxShadow: isLight
            ? '0 10px 30px -5px rgba(0,0,0,0.06), 0 0 25px -10px rgba(217, 179, 107, 0.2)'
            : '0 25px 80px -30px rgba(0,0,0,0.95), 0 0 45px -15px rgba(217, 179, 107, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {!isSubmitted ? (
          <div>
            {/* Top Status Bar: Question indicator & Quick Jump Palette */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.8rem',
                borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
                paddingBottom: '1.2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #d9b36b, #b88628)',
                    color: '#121017',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '999px',
                    letterSpacing: '0.04em'
                  }}
                >
                  CÂU {currentIdx + 1} / {QUESTIONS.length}
                </span>
                <span style={{ fontSize: '0.86rem', color: isLight ? '#64748b' : '#b8b0a0' }}>
                  Đã chọn: <strong style={{ color: answeredCount === QUESTIONS.length ? '#10b981' : (isLight ? '#b45309' : '#d9b36b') }}>{answeredCount}</strong>/{QUESTIONS.length}
                </span>
              </div>

              {/* Question Quick Jump Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {QUESTIONS.map((_, i) => {
                  const isCurrent = i === currentIdx;
                  const hasAnswered = userAnswers[i] !== null;
                  const isMissingAlert = validationError !== null && !hasAnswered;

                  let btnBorder = isLight ? '1.5px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.12)';
                  let btnBg = isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)';
                  let btnColor = isLight ? '#64748b' : '#7a7368';
                  let btnShadow = 'none';

                  if (isCurrent) {
                    btnBorder = isLight ? '2px solid #ca8a04' : '2px solid #d9b36b';
                    btnBg = 'linear-gradient(135deg, #d9b36b, #b88628)';
                    btnColor = '#121017';
                    btnShadow = isLight ? '0 2px 10px rgba(202, 138, 4, 0.35)' : '0 0 15px rgba(217, 179, 107, 0.5)';
                  } else if (isMissingAlert) {
                    btnBorder = '2px solid #ef4444';
                    btnBg = isLight ? 'rgba(239, 68, 68, 0.15)' : 'rgba(239, 68, 68, 0.2)';
                    btnColor = isLight ? '#b91c1c' : '#ff9a8d';
                    btnShadow = '0 0 10px rgba(239, 68, 68, 0.3)';
                  } else if (hasAnswered) {
                    btnBorder = isLight ? '1.5px solid #ca8a04' : '1.5px solid rgba(217, 179, 107, 0.5)';
                    btnBg = isLight ? 'rgba(254, 240, 138, 0.35)' : 'rgba(217, 179, 107, 0.18)';
                    btnColor = isLight ? '#854d0e' : '#f4e6c3';
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrentIdx(i);
                        if (validationError) setValidationError(null);
                      }}
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: btnBorder,
                        background: btnBg,
                        color: btnColor,
                        boxShadow: btnShadow
                      }}
                      title={`Chuyển đến Câu ${i + 1}`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Text */}
            <h3
              className="display"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)',
                fontWeight: 700,
                color: isLight ? '#0f172a' : '#fbf5e6',
                lineHeight: 1.45,
                marginBottom: '2rem'
              }}
            >
              {question.question}
            </h3>

            {/* Options List with re-selectable choices */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                marginBottom: '2rem'
              }}
            >
              {question.options.map((opt, idx) => {
                const isSelected = userAnswers[currentIdx] === idx;

                const borderStyle = isSelected
                  ? (isLight ? '2px solid #ca8a04' : '2px solid #d9b36b')
                  : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)');
                const bgStyle = isSelected
                  ? (isLight ? 'rgba(254, 240, 138, 0.25)' : 'rgba(217, 179, 107, 0.15)')
                  : (isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)');
                const textColor = isSelected
                  ? (isLight ? '#854d0e' : '#ffffff')
                  : (isLight ? '#1e293b' : '#ded6c5');

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    style={{
                      padding: '1.15rem 1.4rem',
                      borderRadius: '12px',
                      textAlign: 'left',
                      border: borderStyle,
                      background: bgStyle,
                      color: textColor,
                      fontSize: '0.98rem',
                      fontWeight: isSelected ? 700 : 400,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected
                        ? (isLight ? '0 2px 10px rgba(202, 138, 4, 0.15)' : '0 4px 15px rgba(217, 179, 107, 0.18)')
                        : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: isSelected
                            ? (isLight ? '2px solid #ca8a04' : '2px solid #d9b36b')
                            : (isLight ? '1.5px solid #94a3b8' : '1.5px solid rgba(217, 179, 107, 0.4)'),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isSelected ? (isLight ? '#ca8a04' : '#d9b36b') : 'transparent',
                          flexShrink: 0
                        }}
                      >
                        {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: isLight ? '#ffffff' : '#121017' }} />}
                      </div>
                      <span>{opt}</span>
                    </div>

                    {isSelected && (
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: isLight ? '#854d0e' : '#d9b36b',
                          background: isLight ? 'rgba(217, 179, 107, 0.2)' : 'rgba(217, 179, 107, 0.12)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '999px',
                          border: isLight ? '1px solid rgba(202, 138, 4, 0.35)' : '1px solid rgba(217, 179, 107, 0.3)'
                        }}
                      >
                        Đã chọn
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Validation Warning Alert when attempting to submit with incomplete answers */}
            {validationError && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  background: isLight ? 'rgba(239, 68, 68, 0.08)' : 'rgba(239, 68, 68, 0.12)',
                  border: isLight ? '1.5px solid #ef4444' : '1.5px solid rgba(239, 68, 68, 0.5)',
                  borderRadius: '12px',
                  padding: '1rem 1.4rem',
                  marginBottom: '1.5rem',
                  color: isLight ? '#b91c1c' : '#fca5a5',
                  fontSize: '0.92rem',
                  boxShadow: '0 4px 20px rgba(239, 68, 68, 0.15)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <AlertTriangle size={22} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.5, fontWeight: 500 }}>{validationError}</span>
                </div>

                {unansweredIndices.length > 0 && (
                  <button
                    onClick={() => {
                      setCurrentIdx(unansweredIndices[0] - 1);
                      setValidationError(null);
                    }}
                    style={{
                      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                      border: 'none',
                      color: '#ffffff',
                      borderRadius: '999px',
                      padding: '0.45rem 1rem',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 10px rgba(239, 68, 68, 0.35)'
                    }}
                  >
                    Làm Câu {unansweredIndices[0]}
                  </button>
                )}
              </div>
            )}

            {/* Bottom Controls: Prev, Next, Submit */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
                paddingTop: '1.5rem'
              }}
            >
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                disabled={currentIdx === 0}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.4rem',
                  borderRadius: '999px',
                  background: currentIdx === 0
                    ? (isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.02)')
                    : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.06)'),
                  color: currentIdx === 0
                    ? (isLight ? '#94a3b8' : '#635d55')
                    : (isLight ? '#334155' : '#ded6c5'),
                  border: currentIdx === 0
                    ? (isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.05)')
                    : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.25)'),
                  cursor: currentIdx === 0 ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <ArrowLeft size={18} />
                <span>Câu trước</span>
              </button>

              {/* Next / Submit Button */}
              {currentIdx < QUESTIONS.length - 1 ? (
                <button
                  onClick={handleNext}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.6rem',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #d9b36b, #c8973f)',
                    color: '#121017',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    boxShadow: '0 4px 15px rgba(217, 179, 107, 0.35)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Câu tiếp theo</span>
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 2rem',
                    borderRadius: '999px',
                    background: answeredCount === QUESTIONS.length
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #eab308, #ca8a04)',
                    color: answeredCount === QUESTIONS.length ? '#ffffff' : '#1a1402',
                    fontWeight: 800,
                    fontSize: '0.96rem',
                    boxShadow: answeredCount === QUESTIONS.length
                      ? '0 6px 20px rgba(16, 185, 129, 0.4)'
                      : '0 4px 15px rgba(234, 179, 8, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Send size={18} />
                  <span>Hoàn thành & Nộp bài</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Result & Comprehensive Review Screen (NO Score Display) */
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div
                style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto',
                  boxShadow: '0 0 35px rgba(16, 185, 129, 0.45)'
                }}
              >
                <Check size={40} strokeWidth={3} />
              </div>

              <h3 className="display" style={{ fontSize: '2rem', fontWeight: 800, color: isLight ? '#0f172a' : '#fbf5e6', marginBottom: '0.6rem' }}>
                Đã Hoàn Thành 5 Câu Hỏi Ôn Tập!
              </h3>

              <p style={{ maxWidth: '640px', margin: '0 auto', color: isLight ? '#475569' : '#ded6c5', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Xem lại toàn bộ kết quả lựa chọn của bạn và phần giải thích khoa học chi tiết cho từng câu dưới đây:
              </p>
            </div>

            {/* Questions Review List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginBottom: '2.5rem' }}>
              {QUESTIONS.map((q, qIdx) => {
                const userChoice = userAnswers[qIdx];
                const isCorrect = userChoice === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    style={{
                      background: isLight ? '#f8fafc' : 'rgba(18, 16, 23, 0.85)',
                      borderRadius: '14px',
                      padding: '1.6rem 1.8rem',
                      border: isCorrect
                        ? (isLight ? '1.5px solid #10b981' : '1px solid rgba(52, 211, 153, 0.35)')
                        : (isLight ? '1.5px solid #ef4444' : '1px solid rgba(217, 179, 107, 0.25)')
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: isLight ? '#854d0e' : '#d9b36b',
                          background: isLight ? 'rgba(217, 179, 107, 0.2)' : 'rgba(217, 179, 107, 0.12)',
                          padding: '0.2rem 0.7rem',
                          borderRadius: '999px'
                        }}
                      >
                        CÂU {qIdx + 1}
                      </span>

                      {userChoice !== null ? (
                        isCorrect ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: isLight ? '#059669' : '#34d399', fontSize: '0.88rem', fontWeight: 600 }}>
                            <CheckCircle2 size={18} /> Chính xác
                          </span>
                        ) : (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: isLight ? '#dc2626' : '#ff9a8d', fontSize: '0.88rem', fontWeight: 600 }}>
                            <XCircle size={18} /> Chưa chính xác
                          </span>
                        )
                      ) : (
                        <span style={{ color: '#8a8377', fontSize: '0.85rem' }}>Chưa chọn đáp án</span>
                      )}
                    </div>

                    <h4 style={{ fontSize: '1.05rem', color: isLight ? '#0f172a' : '#fbf5e6', lineHeight: 1.5, marginBottom: '1.2rem', fontWeight: 700 }}>
                      {q.question}
                    </h4>

                    {/* Options status */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.2rem' }}>
                      {q.options.map((opt, optIdx) => {
                        const isUserAnswer = userChoice === optIdx;
                        const isCorrectOption = optIdx === q.correctAnswer;

                        let optBg = isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.02)';
                        let optBorder = isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.06)';
                        let optColor = isLight ? '#475569' : '#b8b0a0';

                        if (isCorrectOption) {
                          optBg = isLight ? 'rgba(16, 185, 129, 0.15)' : 'rgba(52, 211, 153, 0.12)';
                          optBorder = isLight ? '1.5px solid #10b981' : '1px solid rgba(52, 211, 153, 0.4)';
                          optColor = isLight ? '#065f46' : '#ffffff';
                        } else if (isUserAnswer && !isCorrectOption) {
                          optBg = isLight ? 'rgba(239, 68, 68, 0.12)' : 'rgba(181, 64, 58, 0.15)';
                          optBorder = isLight ? '1.5px solid #ef4444' : '1px solid rgba(181, 64, 58, 0.4)';
                          optColor = isLight ? '#b91c1c' : '#ff9a8d';
                        }

                        return (
                          <div
                            key={optIdx}
                            style={{
                              padding: '0.8rem 1.1rem',
                              borderRadius: '8px',
                              background: optBg,
                              border: optBorder,
                              color: optColor,
                              fontSize: '0.92rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              fontWeight: isCorrectOption || isUserAnswer ? 600 : 400
                            }}
                          >
                            <span>{opt}</span>
                            {isCorrectOption && (
                              <span style={{ fontSize: '0.78rem', color: isLight ? '#059669' : '#34d399', fontWeight: 700 }}>
                                (Đáp án đúng)
                              </span>
                            )}
                            {isUserAnswer && !isCorrectOption && (
                              <span style={{ fontSize: '0.78rem', color: isLight ? '#dc2626' : '#ff9a8d', fontWeight: 600 }}>
                                (Lựa chọn của bạn)
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div
                      style={{
                        background: isLight ? 'rgba(217, 179, 107, 0.12)' : 'rgba(217, 179, 107, 0.06)',
                        borderRadius: '8px',
                        padding: '0.9rem 1.2rem',
                        borderLeft: '3px solid #d9b36b',
                        fontSize: '0.88rem',
                        color: isLight ? '#334155' : '#ded6c5',
                        lineHeight: 1.55
                      }}
                    >
                      <strong style={{ color: isLight ? '#854d0e' : '#f4e6c3' }}>Giải thích:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Restart Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={handleRestart}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '0.85rem 2.2rem',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #d9b36b, #c8973f)',
                  color: '#121017',
                  fontWeight: 700,
                  fontSize: '0.96rem',
                  boxShadow: '0 4px 20px rgba(217, 179, 107, 0.35)',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={18} />
                <span>Làm lại bài trắc nghiệm</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizArenaSection;
