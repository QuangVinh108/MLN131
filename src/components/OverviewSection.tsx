import React, { useState } from 'react';
import { Layers, Shuffle, Compass, CheckCircle2, BookOpen, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const OverviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'khai-niem' | 'quy-luat' | 'so-sanh'>('khai-niem');
  const { isLight } = useTheme();

  return (
    <section
      id="tong-quan"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1240px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div
          className="eyebrow"
          style={{
            color: isLight ? '#b91c1c' : '#d9b36b',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '999px',
            background: isLight ? 'rgba(185, 28, 28, 0.08)' : 'rgba(217, 179, 107, 0.1)',
            border: isLight ? '1px solid rgba(185, 28, 28, 0.2)' : '1px solid rgba(217, 179, 107, 0.25)',
            marginBottom: '1rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em'
          }}
        >
          <BookOpen size={15} />
          <span>CƠ CẤU XÃ HỘI - GIAI CẤP TRONG THỜI KỲ QUÁ ĐỘ</span>
        </div>

        <h2
          className="display"
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.25,
            color: isLight ? '#0f172a' : '#f8fafc'
          }}
        >
          Bối Cảnh & Cơ Sở <span className="text-gold-grad">Cơ Cấu Giai Cấp</span>
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
          Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội - giai cấp ở Việt Nam luôn vận động và biến đổi,
          gắn chặt với sự chuyển dịch của cơ cấu kinh tế nhiều thành phần, CNH, HĐH và hội nhập quốc tế.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap'
        }}
      >
        <button
          onClick={() => setActiveTab('khai-niem')}
          className="glass"
          style={{
            padding: '0.7rem 1.4rem',
            borderRadius: '999px',
            fontSize: '0.9rem',
            fontWeight: 600,
            background: activeTab === 'khai-niem'
              ? (isLight ? 'linear-gradient(135deg, rgba(217, 179, 107, 0.3), rgba(200, 151, 63, 0.2))' : 'linear-gradient(135deg, rgba(217, 179, 107, 0.3), rgba(200, 151, 63, 0.15))')
              : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.03)'),
            color: activeTab === 'khai-niem' ? (isLight ? '#854d0e' : '#f4e6c3') : (isLight ? '#475569' : '#b8b0a0'),
            border: activeTab === 'khai-niem' ? (isLight ? '1.5px solid #ca8a04' : '1px solid #d9b36b') : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.18)'),
            boxShadow: isLight && activeTab === 'khai-niem' ? '0 2px 8px rgba(202, 138, 4, 0.2)' : 'none'
          }}
        >
          📖 Khái niệm & Cơ sở hình thành
        </button>
        <button
          onClick={() => setActiveTab('quy-luat')}
          className="glass"
          style={{
            padding: '0.7rem 1.4rem',
            borderRadius: '999px',
            fontSize: '0.9rem',
            fontWeight: 600,
            background: activeTab === 'quy-luat'
              ? (isLight ? 'linear-gradient(135deg, rgba(217, 179, 107, 0.3), rgba(200, 151, 63, 0.2))' : 'linear-gradient(135deg, rgba(217, 179, 107, 0.3), rgba(200, 151, 63, 0.15))')
              : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.03)'),
            color: activeTab === 'quy-luat' ? (isLight ? '#854d0e' : '#f4e6c3') : (isLight ? '#475569' : '#b8b0a0'),
            border: activeTab === 'quy-luat' ? (isLight ? '1.5px solid #ca8a04' : '1px solid #d9b36b') : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.18)'),
            boxShadow: isLight && activeTab === 'quy-luat' ? '0 2px 8px rgba(202, 138, 4, 0.2)' : 'none'
          }}
        >
          ✨ Đặc điểm Cơ cấu giai cấp
        </button>
        <button
          onClick={() => setActiveTab('so-sanh')}
          className="glass"
          style={{
            padding: '0.7rem 1.4rem',
            borderRadius: '999px',
            fontSize: '0.9rem',
            fontWeight: 600,
            background: activeTab === 'so-sanh'
              ? (isLight ? 'linear-gradient(135deg, rgba(217, 179, 107, 0.3), rgba(200, 151, 63, 0.2))' : 'linear-gradient(135deg, rgba(217, 179, 107, 0.3), rgba(200, 151, 63, 0.15))')
              : (isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.03)'),
            color: activeTab === 'so-sanh' ? (isLight ? '#854d0e' : '#f4e6c3') : (isLight ? '#475569' : '#b8b0a0'),
            border: activeTab === 'so-sanh' ? (isLight ? '1.5px solid #ca8a04' : '1px solid #d9b36b') : (isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.18)'),
            boxShadow: isLight && activeTab === 'so-sanh' ? '0 2px 8px rgba(202, 138, 4, 0.2)' : 'none'
          }}
        >
          ⚖️ So sánh Cơ cấu giai cấp các thời kỳ
        </button>
      </div>

      {/* Tab 1: Khái niệm & Cơ sở hình thành */}
      {activeTab === 'khai-niem' && (
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: isLight ? '#ffffff' : undefined,
            boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
            {/* Cột Trái: Khái niệm */}
            <div>
              <div className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b', marginBottom: '0.5rem' }}>
                ĐỊNH NGHĨA KHOA HỌC
              </div>
              <h3 className="display" style={{ fontSize: '1.55rem', color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '1rem' }}>
                Khái Niệm Cơ Cấu Xã Hội - Giai Cấp
              </h3>
              <p style={{ color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '1.2rem' }}>
                Cơ cấu xã hội – giai cấp là <strong>hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan</strong> trong một chế độ xã hội nhất định,
                được thể hiện qua các mối quan hệ về <em>sở hữu tư liệu sản xuất, tổ chức – quản lý sản xuất và địa vị chính trị – xã hội</em>.
              </p>

              {/* Image 13: Lenin */}
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.25)',
                  marginBottom: '1.2rem',
                  background: isLight ? '#f1f5f9' : 'rgba(0,0,0,0.3)'
                }}
              >
                <div
                  style={{
                    height: '210px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: isLight ? '#0f172a' : '#08070b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/images/docx/image13.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      width: 'calc(100% + 40px)',
                      height: 'calc(100% + 40px)',
                      objectFit: 'cover',
                      filter: 'blur(16px) brightness(0.35)',
                      opacity: 0.7,
                      pointerEvents: 'none'
                    }}
                  />
                  <img
                    src="/images/docx/image13.png"
                    alt="V.I. Lênin diễn thuyết trước quần chúng"
                    style={{
                      position: 'relative',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      zIndex: 1,
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div
                  style={{
                    padding: '0.6rem 0.9rem',
                    fontSize: '0.8rem',
                    color: isLight ? '#64748b' : '#b8b0a0',
                    background: isLight ? '#f8fafc' : 'rgba(20, 18, 27, 0.75)',
                    borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
                    fontStyle: 'italic'
                  }}
                >
                  📷 V.I. Lênin diễn thuyết trước quần chúng: Định nghĩa kinh điển về phân chia giai cấp
                </div>
              </div>

              <div
                style={{
                  background: isLight ? 'rgba(217, 179, 107, 0.12)' : 'rgba(217, 179, 107, 0.08)',
                  padding: '1rem 1.2rem',
                  borderRadius: '12px',
                  borderLeft: '4px solid #d9b36b',
                  fontSize: '0.9rem',
                  color: isLight ? '#854d0e' : '#f4e6c3',
                  lineHeight: 1.6
                }}
              >
                👉 <strong>Trong thời kỳ quá độ lên CNXH:</strong> Cơ cấu này gồm nhiều giai cấp, tầng lớp cùng tồn tại, có quan hệ vừa khác biệt về lợi ích, vừa liên hệ, hợp tác mật thiết với nhau.
              </div>
            </div>

            {/* Cột Phải: Cơ sở hình thành và biến đổi ở Việt Nam */}
            <div
              style={{
                background: isLight ? '#f8fafc' : 'linear-gradient(135deg, rgba(20, 18, 27, 0.9), rgba(30, 26, 38, 0.7))',
                borderRadius: '16px',
                padding: '2rem',
                border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.25)'
              }}
            >
              <div className="eyebrow" style={{ color: isLight ? '#b45309' : '#e6c98c', marginBottom: '1rem' }}>
                CƠ SỞ HÌNH THÀNH & BIẾN ĐỔI Ở VIỆT NAM
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.4rem', borderRadius: '8px', background: isLight ? 'rgba(181, 64, 58, 0.12)' : 'rgba(181, 64, 58, 0.2)', color: '#b5403a' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isLight ? '#0f172a' : '#f4e6c3' }}>
                      1. Cơ cấu kinh tế là cơ sở quyết định
                    </div>
                    <div style={{ fontSize: '0.85rem', color: isLight ? '#475569' : '#b8b0a0', marginTop: '0.2rem' }}>
                      Sự thay đổi của cơ cấu kinh tế trực tiếp dẫn đến sự thay đổi về số lượng, vị trí và vai trò của các giai cấp, tầng lớp xã hội.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.4rem', borderRadius: '8px', background: isLight ? 'rgba(217, 179, 107, 0.15)' : 'rgba(217, 179, 107, 0.2)', color: '#d9b36b' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isLight ? '#0f172a' : '#f4e6c3' }}>
                      2. Nền kinh tế nhiều thành phần
                    </div>
                    <div style={{ fontSize: '0.85rem', color: isLight ? '#475569' : '#b8b0a0', marginTop: '0.2rem' }}>
                      Sự tồn tại của nhiều hình thức sở hữu và thành phần kinh tế làm cho cơ cấu xã hội – giai cấp ngày càng đa dạng, năng động và linh hoạt.
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.4rem', borderRadius: '8px', background: isLight ? 'rgba(52, 211, 153, 0.15)' : 'rgba(52, 211, 153, 0.2)', color: '#34d399' }}>
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isLight ? '#0f172a' : '#f4e6c3' }}>
                      3. CNH, HĐH & Khoa học – Công nghệ
                    </div>
                    <div style={{ fontSize: '0.85rem', color: isLight ? '#475569' : '#b8b0a0', marginTop: '0.2rem' }}>
                      Thúc đẩy chuyển dịch cơ cấu lao động theo hướng hiện đại, hình thành và phát triển những nhóm xã hội mới (công nhân trí thức, chuyên gia số).
                    </div>
                  </div>
                </div>

                {/* Image 19: CNH, HĐH & KH-CN */}
                <div
                  style={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.25)',
                    marginTop: '0.6rem',
                    background: isLight ? '#f1f5f9' : 'rgba(0,0,0,0.3)'
                  }}
                >
                  <div
                    style={{
                      height: '185px',
                      overflow: 'hidden',
                      position: 'relative',
                      background: isLight ? '#0f172a' : '#08070b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src="/images/docx/image19.png"
                      alt=""
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        inset: '-20px',
                        width: 'calc(100% + 40px)',
                        height: 'calc(100% + 40px)',
                        objectFit: 'cover',
                        filter: 'blur(16px) brightness(0.35)',
                        opacity: 0.7,
                        pointerEvents: 'none'
                      }}
                    />
                    <img
                      src="/images/docx/image19.png"
                      alt="Đẩy mạnh công nghiệp hóa, hiện đại hóa và ứng dụng khoa học công nghệ"
                      style={{
                        position: 'relative',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        zIndex: 1,
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div
                    style={{
                      padding: '0.5rem 0.8rem',
                      fontSize: '0.78rem',
                      color: isLight ? '#64748b' : '#b8b0a0',
                      background: isLight ? '#f8fafc' : 'rgba(20, 18, 27, 0.75)',
                      borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
                      fontStyle: 'italic'
                    }}
                  >
                    📷 Đẩy mạnh CNH, HĐH và phát triển khoa học – công nghệ thúc đẩy chuyển dịch cơ cấu lao động
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 3 Đặc điểm của cơ cấu xã hội – giai cấp */}
      {activeTab === 'quy-luat' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {/* Đặc điểm 1 */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: isLight ? '#ffffff' : undefined,
              border: isLight ? '1px solid rgba(217, 179, 107, 0.35)' : undefined,
              boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: isLight ? 'rgba(217, 179, 107, 0.22)' : 'rgba(217, 179, 107, 0.18)',
                  border: '1px solid rgba(217, 179, 107, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isLight ? '#92400e' : '#e6c98c',
                  marginBottom: '1.2rem'
                }}
              >
                <Shuffle size={24} />
              </div>
              <div className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b', marginBottom: '0.35rem' }}>
                ĐẶC ĐIỂM 01
              </div>
              <h3 className="display" style={{ fontSize: '1.25rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '0.75rem' }}>
                Vừa Mang Tính Quy Luật Phổ Biến, Vừa Mang Tính Đặc Thù
              </h3>
              <p style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.65, marginBottom: '1rem' }}>
                Sự biến đổi cơ cấu xã hội – giai cấp ở Việt Nam vừa tuân theo quy luật chung của thời kỳ quá độ lên CNXH,
                vừa chịu tác động sâu sắc của điều kiện lịch sử, kinh tế và xã hội đặc thù của Việt Nam.
              </p>

              {/* Image 7 */}
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)',
                  marginBottom: '1rem',
                  background: isLight ? '#f1f5f9' : 'rgba(0,0,0,0.3)'
                }}
              >
                <div
                  style={{
                    height: '185px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: isLight ? '#0f172a' : '#08070b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/images/docx/image7.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      width: 'calc(100% + 40px)',
                      height: 'calc(100% + 40px)',
                      objectFit: 'cover',
                      filter: 'blur(16px) brightness(0.35)',
                      opacity: 0.7,
                      pointerEvents: 'none'
                    }}
                  />
                  <img
                    src="/images/docx/image7.png"
                    alt="Tranh cổ động các tầng lớp nhân dân đoàn kết dưới ngọn cờ Đảng và Bác Hồ"
                    style={{
                      position: 'relative',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      zIndex: 1,
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.78rem',
                    color: isLight ? '#64748b' : '#b8b0a0',
                    background: isLight ? '#f8fafc' : 'rgba(20, 18, 27, 0.75)',
                    borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
                    fontStyle: 'italic'
                  }}
                >
                  📷 Tranh cổ động các tầng lớp nhân dân đoàn kết dưới ngọn cờ Đảng và Bác Hồ
                </div>
              </div>

              <div
                style={{
                  background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  borderLeft: '3px solid #d9b36b',
                  fontSize: '0.82rem',
                  color: isLight ? '#475569' : '#b8b0a0'
                }}
              >
                💡 <em>Cơ cấu giai cấp Việt Nam có những đặc điểm riêng nhưng vẫn nằm trong xu hướng vận động chung của thời kỳ quá độ.</em>
              </div>
            </div>
          </div>

          {/* Đặc điểm 2 */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: isLight ? '#ffffff' : undefined,
              border: isLight ? '1px solid rgba(181, 64, 58, 0.35)' : undefined,
              boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: isLight ? 'rgba(181, 64, 58, 0.15)' : 'rgba(181, 64, 58, 0.2)',
                  border: '1px solid rgba(181, 64, 58, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isLight ? '#b91c1c' : '#ff9a8d',
                  marginBottom: '1.2rem'
                }}
              >
                <Compass size={24} />
              </div>
              <div className="eyebrow" style={{ color: isLight ? '#b91c1c' : '#ff9a8d', marginBottom: '0.35rem' }}>
                ĐẶC ĐIỂM 02
              </div>
              <h3 className="display" style={{ fontSize: '1.25rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '0.75rem' }}>
                Ngày Càng Đa Dạng, Phức Tạp & Xuất Hiện Tầng Lớp Mới
              </h3>
              <p style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.65, marginBottom: '1rem' }}>
                Kinh tế nhiều thành phần, CNH, HĐH và kinh tế tri thức làm xuất hiện nhiều nhóm xã hội mới. Bên cạnh công nhân, nông dân, trí thức,
                ngày càng nổi bật đội ngũ doanh nhân và các nhóm lao động số năng động.
              </p>

              {/* Image 15 */}
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(181, 64, 58, 0.25)',
                  marginBottom: '1rem',
                  background: isLight ? '#f1f5f9' : 'rgba(0,0,0,0.3)'
                }}
              >
                <div
                  style={{
                    height: '185px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: isLight ? '#0f172a' : '#08070b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/images/docx/image15.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      width: 'calc(100% + 40px)',
                      height: 'calc(100% + 40px)',
                      objectFit: 'cover',
                      filter: 'blur(16px) brightness(0.35)',
                      opacity: 0.7,
                      pointerEvents: 'none'
                    }}
                  />
                  <img
                    src="/images/docx/image15.png"
                    alt="Đại đoàn kết toàn dân tộc phát huy sức mạnh thời đại mới"
                    style={{
                      position: 'relative',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      zIndex: 1,
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.78rem',
                    color: isLight ? '#64748b' : '#b8b0a0',
                    background: isLight ? '#f8fafc' : 'rgba(20, 18, 27, 0.75)',
                    borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
                    fontStyle: 'italic'
                  }}
                >
                  📷 Cơ cấu xã hội đa dạng, phong phú với các lực lượng xã hội mới
                </div>
              </div>

              <div
                style={{
                  background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  borderLeft: '3px solid #b5403a',
                  fontSize: '0.82rem',
                  color: isLight ? '#475569' : '#b8b0a0'
                }}
              >
                💡 <em>Cơ cấu xã hội – giai cấp Việt Nam ngày càng đa dạng, linh hoạt và năng động trong kỷ nguyên phát triển mới.</em>
              </div>
            </div>
          </div>

          {/* Đặc điểm 3 */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: isLight ? '#ffffff' : undefined,
              border: isLight ? '1px solid rgba(52, 211, 153, 0.35)' : undefined,
              boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: isLight ? 'rgba(52, 211, 153, 0.15)' : 'rgba(52, 211, 153, 0.2)',
                  border: '1px solid rgba(52, 211, 153, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isLight ? '#047857' : '#34d399',
                  marginBottom: '1.2rem'
                }}
              >
                <Layers size={24} />
              </div>
              <div className="eyebrow" style={{ color: isLight ? '#047857' : '#34d399', marginBottom: '0.35rem' }}>
                ĐẶC ĐIỂM 03
              </div>
              <h3 className="display" style={{ fontSize: '1.25rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '0.75rem' }}>
                Vừa Khác Biệt, Vừa Có Sự Liên Minh & Xích Lại Gần Nhau
              </h3>
              <p style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.65, marginBottom: '1rem' }}>
                Các giai cấp, tầng lớp có vị trí và lợi ích khác nhau nên vẫn tồn tại những khác biệt. Tuy nhiên, họ đồng thời có lợi ích chung,
                từ đó hình thành quan hệ hợp tác, liên kết và liên minh chặt chẽ.
              </p>

              {/* Image 18: Đại đoàn kết toàn dân tộc */}
              <div
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(52, 211, 153, 0.25)',
                  marginBottom: '1rem',
                  background: isLight ? '#f1f5f9' : 'rgba(0,0,0,0.3)'
                }}
              >
                <div
                  style={{
                    height: '185px',
                    overflow: 'hidden',
                    position: 'relative',
                    background: isLight ? '#0f172a' : '#08070b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="/images/docx/image18.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: '-20px',
                      width: 'calc(100% + 40px)',
                      height: 'calc(100% + 40px)',
                      objectFit: 'cover',
                      filter: 'blur(16px) brightness(0.35)',
                      opacity: 0.7,
                      pointerEvents: 'none'
                    }}
                  />
                  <img
                    src="/images/docx/image18.png"
                    alt="Khối đại đoàn kết toàn dân tộc trong kỷ nguyên mới"
                    style={{
                      position: 'relative',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      zIndex: 1,
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div
                  style={{
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.78rem',
                    color: isLight ? '#64748b' : '#b8b0a0',
                    background: isLight ? '#f8fafc' : 'rgba(20, 18, 27, 0.75)',
                    borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255,255,255,0.06)',
                    fontStyle: 'italic'
                  }}
                >
                  📷 Khối đại đoàn kết toàn dân tộc: Vừa tôn trọng sự khác biệt, vừa gắn kết liên minh
                </div>
              </div>

              <div
                style={{
                  background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  borderLeft: '3px solid #34d399',
                  fontSize: '0.82rem',
                  color: isLight ? '#475569' : '#b8b0a0',
                  marginBottom: '1rem'
                }}
              >
                💡 <em>Đây là cơ sở củng cố khối đại đoàn kết toàn dân tộc, với nền tảng là liên minh công - nông - trí thức dưới sự lãnh đạo của Đảng.</em>
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', color: isLight ? '#047857' : '#34d399', fontWeight: 600 }}>
              Cơ sở khối Đại đoàn kết toàn dân
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: So Sánh Trước Đổi Mới vs Hiện Nay */}
      {activeTab === 'so-sanh' && (
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: isLight ? '#ffffff' : undefined,
            boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Trước 1986 */}
            <div
              style={{
                background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
                borderRadius: '12px',
                padding: '1.8rem',
                border: isLight ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: isLight ? '#64748b' : '#b8b0a0' }}>
                <AlertCircle size={20} />
                <span className="eyebrow" style={{ color: isLight ? '#64748b' : '#b8b0a0' }}>TRƯỚC ĐỔI MỚI (1986)</span>
              </div>
              <h4 className="display" style={{ fontSize: '1.25rem', color: isLight ? '#1e293b' : '#ded6c5', marginBottom: '1rem', fontWeight: 700 }}>
                Mô hình Khép kín & Đơn nhất
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: isLight ? '#475569' : '#a0988a' }}>
                <li>❌ Chỉ thừa nhận 2 giai cấp (Công nhân, Nông dân tập thể) và 1 tầng lớp (Trí thức XHCN).</li>
                <li>❌ Phủ nhận kinh tế tư nhân; quy đổi mọi thành phần về sở hữu toàn dân và tập thể.</li>
                <li>❌ Phân phối bình quân, cào bằng, triệt tiêu động lực phấn đấu cá nhân.</li>
                <li>❌ Cơ cấu giai cấp đóng kín, kém năng động và kìm hãm sức sản xuất.</li>
              </ul>
            </div>

            {/* Hiện nay */}
            <div
              style={{
                background: isLight
                  ? 'linear-gradient(135deg, rgba(254, 240, 138, 0.25), rgba(254, 202, 202, 0.15))'
                  : 'linear-gradient(135deg, rgba(217, 179, 107, 0.1), rgba(181, 64, 58, 0.08))',
                borderRadius: '12px',
                padding: '1.8rem',
                border: isLight ? '1.5px solid #ca8a04' : '1px solid rgba(217, 179, 107, 0.35)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: isLight ? '#b45309' : '#e6c98c' }}>
                <CheckCircle2 size={20} color={isLight ? '#ca8a04' : '#d9b36b'} />
                <span className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b' }}>THỜI KỲ QUÁ ĐỘ HIỆN NAY (2024+)</span>
              </div>
              <h4 className="display" style={{ fontSize: '1.25rem', color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '1rem', fontWeight: 700 }}>
                Đa dạng, Mở rộng & Hội nhập Số
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem', color: isLight ? '#1e293b' : '#ded6c5' }}>
                <li>✅ Xác định rõ 5 giai cấp, tầng lớp cốt lõi: Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ & Thanh niên.</li>
                <li>✅ Kinh tế thị trường nhiều thành phần; kinh tế tư nhân là động lực quan trọng của nền kinh tế.</li>
                <li>✅ Phân phối chủ yếu theo kết quả lao động và mức độ đóng góp vốn, công nghệ.</li>
                <li>✅ Khơi dậy khát vọng dân tộc, giải phóng tối đa sức sáng tạo của mọi tầng lớp nhân dân.</li>
              </ul>
            </div>
          </div>
        </div>
      )}


    </section>
  );
};
