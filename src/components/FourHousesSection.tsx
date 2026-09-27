import React, { useState } from 'react';
import { FOUR_HOUSES_DATA } from '../data/presentationData';
import { Building2, Microscope, Factory, Tractor, Award, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FourHousesSection: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<number>(0);
  const { isLight } = useTheme();

  const getHouseIcon = (iconName: string, size = 26, color = 'currentColor') => {
    switch (iconName) {
      case 'Building2': return <Building2 size={size} color={color} />;
      case 'Microscope': return <Microscope size={size} color={color} />;
      case 'Factory': return <Factory size={size} color={color} />;
      case 'Tractor': return <Tractor size={size} color={color} />;
      default: return <Building2 size={size} color={color} />;
    }
  };

  const house = FOUR_HOUSES_DATA[selectedHouse];

  return (
    <section
      id="so-do-4-nha"
      style={{
        padding: '5.5rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
          Mô Hình Tương Tác <span className="text-gold-grad">"Liên Kết 4 Nhà"</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: isLight ? '#475569' : '#b8b0a0',
            maxWidth: '820px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Mô hình liên kết 4 Nhà (Nhà nước - Nhà khoa học - Nhà doanh nghiệp - Nhà nông) chính là
          hình thức tổ chức kinh tế cụ thể hóa sâu sắc nhất liên minh công nhân - nông dân - trí thức - doanh nhân.
        </p>
      </div>

      {/* 4 Houses Grid Navigation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2.5rem'
        }}
      >
        {FOUR_HOUSES_DATA.map((item, idx) => {
          const isSelected = selectedHouse === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedHouse(idx)}
              className="glass"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                textAlign: 'left',
                border: isSelected
                  ? `2px solid ${item.color}`
                  : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.2)'),
                background: isSelected
                  ? (isLight ? '#ffffff' : `linear-gradient(135deg, ${item.color}22, rgba(20, 18, 27, 0.95))`)
                  : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.02)'),
                transform: isSelected ? 'scale(1.02)' : 'none',
                boxShadow: isSelected
                  ? (isLight ? `0 6px 20px ${item.color}25` : `0 10px 30px -10px ${item.color}50`)
                  : (isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'),
                transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: isSelected
                    ? item.color
                    : (isLight ? `${item.color}15` : 'rgba(255, 255, 255, 0.05)'),
                  color: isSelected ? '#ffffff' : item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}
              >
                {getHouseIcon(item.icon, 24, isSelected ? '#ffffff' : item.color)}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                TRỤ CỘT 0{idx + 1}
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6', margin: '0.2rem 0 0.3rem 0' }}>
                {item.role}
              </div>
              <div style={{ fontSize: '0.84rem', color: isLight ? '#475569' : '#b8b0a0' }}>
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected House Deep-dive Card */}
      <div
        className="glass-card"
        style={{
          padding: 'clamp(1.8rem, 4vw, 3rem)',
          border: isLight ? `1.5px solid ${house.color}45` : `1.5px solid ${house.color}60`,
          background: isLight ? '#ffffff' : undefined,
          boxShadow: isLight
            ? `0 10px 30px -5px rgba(0,0,0,0.06), 0 0 25px -10px ${house.color}25`
            : `0 20px 60px -20px rgba(0,0,0,0.9), 0 0 40px -15px ${house.color}35`,
          marginBottom: '2.5rem'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.8rem', borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.15)', paddingBottom: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: house.color,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isLight ? `0 4px 15px ${house.color}30` : undefined
              }}
            >
              {getHouseIcon(house.icon, 28, '#ffffff')}
            </div>
            <div>
              <span className="eyebrow" style={{ color: house.color }}>VAI TRÒ VÀ TRÁCH NHIỆM TRONG CHUỖI GIÁ TRỊ</span>
              <h3 className="display" style={{ fontSize: '1.6rem', color: isLight ? '#0f172a' : '#fbf5e6', fontWeight: 700 }}>
                {house.role} — {house.title}
              </h3>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
          {house.responsibilities.map((resp, i) => (
            <div
              key={i}
              style={{
                background: isLight ? '#f8fafc' : 'rgba(18, 16, 23, 0.8)',
                padding: '1.4rem',
                borderRadius: '12px',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.16)',
                display: 'flex',
                gap: '0.8rem'
              }}
            >
              <CheckCircle2 size={20} color={house.color} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
              <div style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.6 }}>
                {resp}
              </div>
            </div>
          ))}
        </div>

        {/* Real world Case Study: Gạo ST25 */}
        <div
          style={{
            background: isLight
              ? 'linear-gradient(135deg, rgba(254, 240, 138, 0.35), rgba(254, 202, 202, 0.2))'
              : 'linear-gradient(135deg, rgba(20, 18, 27, 0.95), rgba(30, 26, 38, 0.85))',
            borderRadius: '14px',
            padding: '1.6rem 2rem',
            border: isLight ? '1.5px solid #ca8a04' : '1px solid rgba(217, 179, 107, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}
        >
          <div
            style={{
              padding: '1rem',
              borderRadius: '12px',
              background: isLight ? 'rgba(217, 179, 107, 0.25)' : 'rgba(217, 179, 107, 0.15)',
              border: isLight ? '1.5px solid #ca8a04' : '1px solid #d9b36b',
              color: isLight ? '#854d0e' : '#f4e6c3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Award size={36} color={isLight ? '#ca8a04' : '#d9b36b'} />
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b', marginBottom: '0.3rem' }}>
              CASE STUDY ĐIỂN HÌNH VIỆT NAM
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6', marginBottom: '0.4rem' }}>
              Kỳ tích Gạo ST25 — Gạo ngon nhất thế giới
            </div>
            <p style={{ fontSize: '0.88rem', color: isLight ? '#1e293b' : '#ded6c5', lineHeight: 1.6 }}>
              Kỹ sư Hồ Quang Cua và nhóm cộng sự (<strong>Nhà khoa học</strong>) nghiên cứu lai tạo giống;{' '}
              Bà con Sóc Trăng (<strong>Nhà nông</strong>) canh tác lúa - tôm hữu cơ;{' '}
              Doanh nghiệp chế biến, đóng gói chuẩn xuất khẩu (<strong>Nhà doanh nghiệp</strong>);{' '}
              Chính phủ và Bộ Nông nghiệp (<strong>Nhà nước</strong>) cấp chỉ dẫn địa lý, hỗ trợ đăng ký bản quyền quốc tế.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
