import React from 'react';
import { LayoutTemplate } from 'lucide-react';

interface BottomFloatingControlsProps {
  onOpenTeamModal: () => void;
}

export const BottomFloatingControls: React.FC<BottomFloatingControlsProps> = ({
  onOpenTeamModal
}) => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        zIndex: 40
      }}
    >
      <button
        onClick={onOpenTeamModal}
        className="glass"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.65rem 1.15rem',
          borderRadius: '999px',
          fontSize: '0.84rem',
          fontWeight: 600,
          background: 'rgba(243, 237, 224, 0.95)',
          color: '#121017',
          border: '1px solid rgba(217, 179, 107, 0.4)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
          cursor: 'pointer',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(217, 179, 107, 0.35)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
        }}
      >
        <LayoutTemplate size={16} color="#b5403a" />
        <span>Thành viên + Phân công</span>
      </button>
    </div>
  );
};
