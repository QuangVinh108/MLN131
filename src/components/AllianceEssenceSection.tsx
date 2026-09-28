import React from 'react';
import {
  Users,
  Zap,
  ShieldCheck,
  TrendingUp,
  Compass,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AllianceEssenceSection: React.FC = () => {
  const { isLight } = useTheme();

  const coreGoals = [
    {
      number: '01',
      title: 'Củng cố khối đại đoàn kết toàn dân',
      description: 'Xây dựng và củng cố nền tảng đại đoàn kết toàn dân tộc vững chắc, quy tụ mọi lực lượng vì sự nghiệp chung.',
      icon: Users,
      color: '#b5403a',
      lightBg: 'rgba(181, 64, 58, 0.08)',
      darkBg: 'rgba(181, 64, 58, 0.15)'
    },
    {
      number: '02',
      title: 'Phát huy sức mạnh tổng hợp',
      description: 'Kết hợp tối đa nguồn lực trí tuệ, kỹ thuật, sức lao động và tiềm năng của các giai cấp, tầng lớp xã hội.',
      icon: Zap,
      color: '#d9b36b',
      lightBg: 'rgba(217, 179, 107, 0.1)',
      darkBg: 'rgba(217, 179, 107, 0.15)'
    },
    {
      number: '03',
      title: 'Xây dựng và bảo vệ Tổ quốc',
      description: 'Tạo lập bức tường thành chính trị – xã hội vững chắc, bảo vệ vững chắc độc lập, chủ quyền và toàn vẹn lãnh thổ.',
      icon: ShieldCheck,
      color: '#10b981',
      lightBg: 'rgba(16, 185, 129, 0.08)',
      darkBg: 'rgba(16, 185, 129, 0.15)'
    },
    {
      number: '04',
      title: 'Thực hiện mục tiêu phát triển đất nước theo định hướng XHCN',
      description: 'Hiện thực hóa khát vọng dân giàu, nước mạnh, dân chủ, công bằng, văn minh theo con đường xã hội chủ nghĩa.',
      icon: TrendingUp,
      color: '#38bdf8',
      lightBg: 'rgba(56, 189, 248, 0.08)',
      darkBg: 'rgba(56, 189, 248, 0.15)'
    }
  ];

  return (
    <section
      id="lien-minh"
      style={{
        padding: '5.5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
        <h2
          className="eyebrow"
          style={{
            color: isLight ? '#b91c1c' : '#d9b36b',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.52rem 1.5rem',
            borderRadius: '999px',
            background: isLight ? 'rgba(185, 28, 28, 0.08)' : 'rgba(217, 179, 107, 0.12)',
            border: isLight ? '1.5px solid rgba(185, 28, 28, 0.25)' : '1.5px solid rgba(217, 179, 107, 0.3)',
            fontSize: 'clamp(0.88rem, 1.2vw, 1.02rem)',
            fontWeight: 700,
            letterSpacing: '0.04em',
            margin: 0,
            lineHeight: 1.35,
            boxShadow: isLight ? '0 3px 10px rgba(185, 28, 28, 0.06)' : '0 3px 12px rgba(217, 179, 107, 0.08)'
          }}
        >
          <Sparkles size={18} style={{ flexShrink: 0 }} />
          <span>LIÊN MINH GIAI CẤP, TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ LÊN CNXH Ở VIỆT NAM</span>
        </h2>
      </div>

      {/* Core Definition Banner */}
      <div
        className="glass"
        style={{
          padding: '2.4rem 2.2rem',
          borderRadius: '20px',
          background: isLight
            ? 'linear-gradient(135deg, #ffffff, #f8fafc)'
            : 'linear-gradient(135deg, rgba(181, 64, 58, 0.12), rgba(217, 179, 107, 0.08))',
          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.3)',
          boxShadow: isLight
            ? '0 10px 30px rgba(0, 0, 0, 0.05)'
            : '0 15px 35px rgba(0, 0, 0, 0.35)',
          marginBottom: '3rem',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <p
          style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.38rem)',
            lineHeight: 1.7,
            color: isLight ? '#0f172a' : '#ffffff',
            fontWeight: 500,
            maxWidth: '1020px',
            margin: '0 auto'
          }}
        >
          Liên minh giai cấp, tầng lớp ở Việt Nam trước hết là liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam.
        </p>
      </div>

      {/* 4 Pillars Header */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <div
          style={{
            width: '4px',
            height: '24px',
            background: isLight ? '#b91c1c' : '#d9b36b',
            borderRadius: '4px'
          }}
        />
        <h3
          className="display"
          style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: isLight ? '#0f172a' : '#fbf5e6',
            margin: 0
          }}
        >
          Đây là cơ sở quan trọng để:
        </h3>
      </div>

      {/* 4 Pillars Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.35rem',
          marginBottom: '2.5rem'
        }}
      >
        {coreGoals.map((goal, idx) => {
          const IconComp = goal.icon;
          return (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.8rem 1.6rem',
                borderRadius: '16px',
                borderTop: `4px solid ${goal.color}`,
                background: isLight ? '#ffffff' : undefined,
                border: isLight ? '1px solid #cbd5e1' : undefined,
                borderTopColor: goal.color,
                boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: isLight ? goal.lightBg : goal.darkBg,
                    border: `1px solid ${goal.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: goal.color
                  }}
                >
                  <IconComp size={24} />
                </div>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    fontFamily: 'serif',
                    color: goal.color,
                    opacity: 0.85
                  }}
                >
                  {goal.number}
                </span>
              </div>

              <h4
                style={{
                  fontSize: '1.12rem',
                  fontWeight: 700,
                  color: isLight ? '#0f172a' : '#fbf5e6',
                  lineHeight: 1.4,
                  marginBottom: '0.75rem'
                }}
              >
                {goal.title}
              </h4>

              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: isLight ? '#475569' : '#b8b0a0',
                  margin: 0
                }}
              >
                {goal.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Final Crucial Principle Banner */}
      <div
        style={{
          padding: '1.4rem 1.8rem',
          borderRadius: '16px',
          background: isLight ? 'rgba(217, 179, 107, 0.12)' : 'rgba(217, 179, 107, 0.08)',
          borderLeft: `5px solid ${isLight ? '#b45309' : '#d9b36b'}`,
          border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.22)',
          borderLeftWidth: '5px',
          borderLeftColor: isLight ? '#b45309' : '#d9b36b',
          display: 'flex',
          alignItems: 'center',
          gap: '1.1rem',
          boxShadow: isLight ? '0 4px 16px rgba(0,0,0,0.03)' : 'none'
        }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: isLight ? 'rgba(180, 83, 9, 0.12)' : 'rgba(217, 179, 107, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isLight ? '#b45309' : '#d9b36b',
            flexShrink: 0
          }}
        >
          <Compass size={22} />
        </div>
        <p
          style={{
            margin: 0,
            fontSize: '1.02rem',
            lineHeight: 1.65,
            color: isLight ? '#1e293b' : '#f4e6c3'
          }}
        >
          <strong>Liên minh này không phải chỉ là liên kết chính trị</strong> mà còn là{' '}
          <span style={{ color: isLight ? '#b91c1c' : '#ff7a70', fontWeight: 700 }}>
            sự phối hợp lợi ích và hoạt động trên nhiều lĩnh vực
          </span>
          .
        </p>
      </div>
    </section>
  );
};
