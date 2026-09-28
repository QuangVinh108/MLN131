import React from 'react';
import { TEAM_MEMBERS, PRESENTATION_CONFIG } from '../data/presentationData';
import { X, Users, FileText, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenScriptModal: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  onOpenScriptModal
}) => {
  const { isLight } = useTheme();

  if (!isOpen) return null;

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
          maxWidth: '760px',
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
            <Users size={22} color={isLight ? '#ca8a04' : '#d9b36b'} />
            <div>
              <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6' }}>
                Thành Viên Nhóm & Phân Công Nhiệm Vụ
              </h3>
              <div style={{ fontSize: '0.76rem', color: isLight ? '#64748b' : '#b8b0a0' }}>
                {PRESENTATION_CONFIG.subjectName} ({PRESENTATION_CONFIG.subjectCode}) · {PRESENTATION_CONFIG.chapter}
              </div>
            </div>
          </div>

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

        {/* Modal Content */}
        <div style={{ flex: 1, padding: '1.8rem', overflowY: 'auto' }}>
          {/* Team Members List */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b', marginBottom: '1rem' }}>
              DANH SÁCH PHÂN CÔNG THUYẾT TRÌNH (4 THÀNH VIÊN)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {TEAM_MEMBERS.map((member, idx) => (
                <div
                  key={idx}
                  style={{
                    background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
                    padding: '1rem 1.2rem',
                    borderRadius: '10px',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.8rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: isLight ? 'rgba(217, 179, 107, 0.25)' : 'rgba(217, 179, 107, 0.2)',
                          color: isLight ? '#854d0e' : '#d9b36b',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {idx + 1}
                      </span>
                      <strong style={{ color: isLight ? '#0f172a' : '#fbf5e6', fontSize: '0.98rem' }}>{member.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: isLight ? '#64748b' : '#b8b0a0' }}>({member.studentId})</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: isLight ? '#b45309' : '#d9b36b', marginTop: '0.2rem', paddingLeft: '2.2rem', fontWeight: 600 }}>
                      {member.role}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: isLight ? '#334155' : '#b8b0a0', background: isLight ? '#e2e8f0' : 'rgba(18, 16, 23, 0.7)', padding: '0.35rem 0.75rem', borderRadius: '6px', fontWeight: isLight ? 500 : 400 }}>
                    {member.parts}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Resource Box */}
          <div
            style={{
              background: isLight ? 'rgba(254, 240, 138, 0.25)' : 'rgba(217, 179, 107, 0.06)',
              borderRadius: '12px',
              padding: '1.2rem 1.5rem',
              border: isLight ? '1.5px solid #ca8a04' : '1px solid rgba(217, 179, 107, 0.25)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: isLight ? '#854d0e' : '#f4e6c3' }}>
              <BookOpen size={18} color={isLight ? '#ca8a04' : '#d9b36b'} />
              <strong style={{ fontSize: '0.95rem' }}>Tài Liệu Học Tập & Trích Dẫn Chuẩn</strong>
            </div>
            <p style={{ fontSize: '0.86rem', color: isLight ? '#1e293b' : '#ded6c5', lineHeight: 1.6 }}>
              Toàn bộ nội dung bài thuyết trình được biên soạn dựa trên <strong>Giáo trình Chủ nghĩa Xã hội Khoa học (Bộ GD&ĐT, 2021)</strong>: "Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam".
            </p>
          </div>

          {/* Quick Action Button */}
          <div>
            <button
              onClick={() => {
                onClose();
                onOpenScriptModal();
              }}
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #f4e6c3 0%, #d9b36b 50%, #b88628 100%)',
                color: '#121017',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(217, 179, 107, 0.4)'
              }}
            >
              <FileText size={18} color="#121017" />
              <span>Xem & Sao Chép Toàn Văn Kịch Bản Thuyết Trình</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
