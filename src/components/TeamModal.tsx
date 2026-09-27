import React from 'react';
import { TEAM_MEMBERS, PRESENTATION_CONFIG } from '../data/presentationData';
import { X, Users, FileText, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

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
  if (!isOpen) return null;

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
          maxWidth: '760px',
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
            <Users size={22} color="#d9b36b" />
            <div>
              <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fbf5e6' }}>
                Thành Viên Nhóm & Phân Công Nhiệm Vụ
              </h3>
              <div style={{ fontSize: '0.76rem', color: '#b8b0a0' }}>
                {PRESENTATION_CONFIG.subjectName} ({PRESENTATION_CONFIG.subjectCode}) · {PRESENTATION_CONFIG.chapter}
              </div>
            </div>
          </div>

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

        {/* Modal Content */}
        <div style={{ flex: 1, padding: '1.8rem', overflowY: 'auto' }}>
          {/* Team Members List */}
          <div style={{ marginBottom: '2rem' }}>
            <div className="eyebrow" style={{ color: '#d9b36b', marginBottom: '1rem' }}>
              DANH SÁCH PHÂN CÔNG THUYẾT TRÌNH (4 THÀNH VIÊN)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {TEAM_MEMBERS.map((member, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '1rem 1.2rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(217, 179, 107, 0.15)',
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
                          background: 'rgba(217, 179, 107, 0.2)',
                          color: '#d9b36b',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {idx + 1}
                      </span>
                      <strong style={{ color: '#fbf5e6', fontSize: '0.98rem' }}>{member.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: '#b8b0a0' }}>({member.studentId})</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#d9b36b', marginTop: '0.2rem', paddingLeft: '2.2rem' }}>
                      {member.role}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#b8b0a0', background: 'rgba(18, 16, 23, 0.7)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    {member.parts}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Resource Box */}
          <div
            style={{
              background: 'rgba(217, 179, 107, 0.06)',
              borderRadius: '12px',
              padding: '1.2rem 1.5rem',
              border: '1px solid rgba(217, 179, 107, 0.25)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#f4e6c3' }}>
              <BookOpen size={18} color="#d9b36b" />
              <strong style={{ fontSize: '0.95rem' }}>Tài Liệu Học Tập & Trích Dẫn Chuẩn</strong>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#ded6c5', lineHeight: 1.6 }}>
              Toàn bộ nội dung bài thuyết trình được biên soạn dựa trên <strong>Giáo trình Chủ nghĩa Xã hội Khoa học (Bộ GD&ĐT, 2021)</strong>, Chương 5, Mục III: "Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam".
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
