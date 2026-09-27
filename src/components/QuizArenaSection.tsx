import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/presentationData';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, ArrowLeft, Send, Check, AlertTriangle } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUESTIONS: QuizQuestion[] = QUIZ_QUESTIONS.slice(0, 5);

export const QuizArenaSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(QUESTIONS.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

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
          Củng cố kiến thức trọng tâm với 5 câu hỏi bám sát ngân hàng đề thi và phản biện giảng đường.
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
                borderBottom: '1px solid rgba(217, 179, 107, 0.15)',
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
                <span style={{ fontSize: '0.86rem', color: '#b8b0a0' }}>
                  Đã chọn: <strong style={{ color: answeredCount === QUESTIONS.length ? '#34d399' : '#d9b36b' }}>{answeredCount}</strong>/{QUESTIONS.length}
                </span>
              </div>

              {/* Question Quick Jump Bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {QUESTIONS.map((_, i) => {
                  const isCurrent = i === currentIdx;
                  const hasAnswered = userAnswers[i] !== null;
                  const isMissingAlert = validationError !== null && !hasAnswered;

                  let btnBorder = '1px solid rgba(255, 255, 255, 0.12)';
                  let btnBg = 'rgba(255, 255, 255, 0.03)';
                  let btnColor = '#7a7368';
                  let btnShadow = 'none';

                  if (isCurrent) {
                    btnBorder = '2px solid #d9b36b';
                    btnBg = 'linear-gradient(135deg, #d9b36b, #b88628)';
                    btnColor = '#121017';
                    btnShadow = '0 0 15px rgba(217, 179, 107, 0.5)';
                  } else if (isMissingAlert) {
                    btnBorder = '2px solid #ef4444';
                    btnBg = 'rgba(239, 68, 68, 0.2)';
                    btnColor = '#ff9a8d';
                    btnShadow = '0 0 10px rgba(239, 68, 68, 0.4)';
                  } else if (hasAnswered) {
                    btnBorder = '1.5px solid rgba(217, 179, 107, 0.5)';
                    btnBg = 'rgba(217, 179, 107, 0.18)';
                    btnColor = '#f4e6c3';
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
                color: '#fbf5e6',
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
                  ? '2px solid #d9b36b'
                  : '1px solid rgba(217, 179, 107, 0.2)';
                const bgStyle = isSelected
                  ? 'rgba(217, 179, 107, 0.15)'
                  : 'rgba(255, 255, 255, 0.02)';
                const textColor = isSelected ? '#ffffff' : '#ded6c5';

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
                      fontWeight: isSelected ? 600 : 400,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 4px 15px rgba(217, 179, 107, 0.18)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          border: isSelected ? '2px solid #d9b36b' : '1.5px solid rgba(217, 179, 107, 0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isSelected ? '#d9b36b' : 'transparent',
                          flexShrink: 0
                        }}
                      >
                        {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#121017' }} />}
                      </div>
                      <span>{opt}</span>
                    </div>

                    {isSelected && (
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: '#d9b36b',
                          background: 'rgba(217, 179, 107, 0.12)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '999px',
                          border: '1px solid rgba(217, 179, 107, 0.3)'
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
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1.5px solid rgba(239, 68, 68, 0.5)',
                  borderRadius: '12px',
                  padding: '1rem 1.4rem',
                  marginBottom: '1.5rem',
                  color: '#fca5a5',
                  fontSize: '0.92rem',
                  boxShadow: '0 4px 20px rgba(239, 68, 68, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <AlertTriangle size={22} color="#ef4444" style={{ flexShrink: 0 }} />
                  <span style={{ lineHeight: 1.5 }}>{validationError}</span>
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
                borderTop: '1px solid rgba(217, 179, 107, 0.15)',
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
                  background: currentIdx === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.06)',
                  color: currentIdx === 0 ? '#635d55' : '#ded6c5',
                  border: currentIdx === 0 ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(217, 179, 107, 0.25)',
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
                      ? 'linear-gradient(135deg, #34d399, #10b981)'
                      : 'linear-gradient(135deg, #eab308, #ca8a04)',
                    color: answeredCount === QUESTIONS.length ? '#062b1e' : '#1a1402',
                    fontWeight: 800,
                    fontSize: '0.96rem',
                    boxShadow: answeredCount === QUESTIONS.length
                      ? '0 6px 20px rgba(52, 211, 153, 0.4)'
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
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  color: '#062b1e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem auto',
                  boxShadow: '0 0 35px rgba(52, 211, 153, 0.45)'
                }}
              >
                <Check size={40} strokeWidth={3} />
              </div>

              <h3 className="display" style={{ fontSize: '2rem', fontWeight: 800, color: '#fbf5e6', marginBottom: '0.6rem' }}>
                Đã Hoàn Thành 5 Câu Hỏi Ôn Tập!
              </h3>

              <p style={{ maxWidth: '640px', margin: '0 auto', color: '#ded6c5', fontSize: '0.98rem', lineHeight: 1.6 }}>
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
                      background: 'rgba(18, 16, 23, 0.85)',
                      borderRadius: '14px',
                      padding: '1.6rem 1.8rem',
                      border: isCorrect ? '1px solid rgba(52, 211, 153, 0.35)' : '1px solid rgba(217, 179, 107, 0.25)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <span
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: '#d9b36b',
                          background: 'rgba(217, 179, 107, 0.12)',
                          padding: '0.2rem 0.7rem',
                          borderRadius: '999px'
                        }}
                      >
                        CÂU {qIdx + 1}
                      </span>

                      {userChoice !== null ? (
                        isCorrect ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.88rem', fontWeight: 600 }}>
                            <CheckCircle2 size={18} /> Chính xác
                          </span>
                        ) : (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ff9a8d', fontSize: '0.88rem', fontWeight: 600 }}>
                            <XCircle size={18} /> Chưa chính xác
                          </span>
                        )
                      ) : (
                        <span style={{ color: '#8a8377', fontSize: '0.85rem' }}>Chưa chọn đáp án</span>
                      )}
                    </div>

                    <h4 style={{ fontSize: '1.05rem', color: '#fbf5e6', lineHeight: 1.5, marginBottom: '1.2rem', fontWeight: 600 }}>
                      {q.question}
                    </h4>

                    {/* Options status */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.2rem' }}>
                      {q.options.map((opt, optIdx) => {
                        const isUserAnswer = userChoice === optIdx;
                        const isCorrectOption = optIdx === q.correctAnswer;

                        let optBg = 'rgba(255, 255, 255, 0.02)';
                        let optBorder = '1px solid rgba(255, 255, 255, 0.06)';
                        let optColor = '#b8b0a0';

                        if (isCorrectOption) {
                          optBg = 'rgba(52, 211, 153, 0.12)';
                          optBorder = '1px solid rgba(52, 211, 153, 0.4)';
                          optColor = '#ffffff';
                        } else if (isUserAnswer && !isCorrectOption) {
                          optBg = 'rgba(181, 64, 58, 0.15)';
                          optBorder = '1px solid rgba(181, 64, 58, 0.4)';
                          optColor = '#ff9a8d';
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
                              justifyContent: 'space-between'
                            }}
                          >
                            <span>{opt}</span>
                            {isCorrectOption && (
                              <span style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 700 }}>
                                (Đáp án đúng)
                              </span>
                            )}
                            {isUserAnswer && !isCorrectOption && (
                              <span style={{ fontSize: '0.78rem', color: '#ff9a8d', fontWeight: 600 }}>
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
                        background: 'rgba(217, 179, 107, 0.06)',
                        borderRadius: '8px',
                        padding: '0.9rem 1.2rem',
                        borderLeft: '3px solid #d9b36b',
                        fontSize: '0.88rem',
                        color: '#ded6c5',
                        lineHeight: 1.55
                      }}
                    >
                      <strong style={{ color: '#f4e6c3' }}>Giải thích:</strong> {q.explanation}
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
