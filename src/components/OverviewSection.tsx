import React, { useState } from 'react';
import { Layers, Shuffle, Compass, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const OverviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'khai-niem' | 'quy-luat' | 'so-sanh'>('quy-luat');
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
          Tính Quy Luật Biến Đổi Của <span className="text-gold-grad">Cơ Cấu Giai Cấp</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: isLight ? '#475569' : '#b8b0a0',
            maxWidth: '780px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Trong thời kỳ quá độ, cơ cấu xã hội - giai cấp giữ vị trí trung tâm, chi phối các cơ cấu xã hội khác
          và biến đổi gắn liền với sự vận động của nền kinh tế thị trường định hướng XHCN.
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
          ✨ 3 Đặc điểm Quy luật Biến đổi
        </button>
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
          📖 Khái niệm & Vị trí Trung tâm
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
          ⚖️ So sánh Trước Đổi mới vs Hiện nay
        </button>
      </div>

      {/* Tab 1: 3 Quy Luật Biến Đổi */}
      {activeTab === 'quy-luat' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {/* Card 1 */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: isLight ? '#ffffff' : undefined,
              border: isLight ? '1px solid rgba(217, 179, 107, 0.35)' : undefined,
              boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined
            }}
          >
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
              QUY LUẬT 01
            </div>
            <h3 className="display" style={{ fontSize: '1.3rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '0.75rem' }}>
              Quy định bởi Cơ cấu Kinh tế
            </h3>
            <p style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.65, marginBottom: '1rem' }}>
              Cơ cấu xã hội - giai cấp biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế nhiều thành phần. Nền kinh tế
              có bao nhiêu thành phần kinh tế, hình thức sở hữu thì cơ cấu giai cấp sẽ có sự đa dạng hóa tương ứng.
            </p>
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
              💡 <em>Kinh tế nhà nước, tập thể, tư nhân và FDI tạo nên sự phân tầng và tính đa dạng trong người lao động.</em>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: isLight ? '#ffffff' : undefined,
              border: isLight ? '1px solid rgba(181, 64, 58, 0.35)' : undefined,
              boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined
            }}
          >
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
              QUY LUẬT 02
            </div>
            <h3 className="display" style={{ fontSize: '1.3rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '0.75rem' }}>
              Vừa Đa Dạng, Vừa Thống Nhất
            </h3>
            <p style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.65, marginBottom: '1rem' }}>
              Đa dạng, phức tạp về ngành nghề, mức thu nhập và lợi ích cục bộ; nhưng <strong>thống nhất cao độ</strong> vì
              mọi giai cấp, tầng lớp đều đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, cùng chung mục tiêu XHCN.
            </p>
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
              💡 <em>Không tồn tại đối kháng giai cấp sinh tử, mà là quan hệ đồng thuận xã hội trên nền tảng độc lập dân tộc.</em>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: isLight ? '#ffffff' : undefined,
              border: isLight ? '1px solid rgba(52, 211, 153, 0.35)' : undefined,
              boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined
            }}
          >
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
              QUY LUẬT 03
            </div>
            <h3 className="display" style={{ fontSize: '1.3rem', fontWeight: 700, color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '0.75rem' }}>
              Xu Hướng Xích Lại Gần Nhau
            </h3>
            <p style={{ fontSize: '0.92rem', color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.65, marginBottom: '1rem' }}>
              Dưới tác động của CNH, HĐH và chuyển đổi số, khoảng cách giữa các giai tầng dần được thu hẹp về quan hệ sở hữu,
              tính chất lao động (trí thức hóa) và mức độ thụ hưởng thành quả văn hóa, tinh thần.
            </p>
            <div
              style={{
                background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                borderLeft: '3px solid #34d399',
                fontSize: '0.82rem',
                color: isLight ? '#475569' : '#b8b0a0'
              }}
            >
              💡 <em>Nông dân có tri thức công nghệ; công nhân có kỹ năng cao; trí thức gắn liền với xưởng máy và đồng ruộng.</em>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Khái niệm & Vị trí */}
      {activeTab === 'khai-niem' && (
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: isLight ? '#ffffff' : undefined,
            boxShadow: isLight ? '0 4px 20px -2px rgba(0,0,0,0.06)' : undefined
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ color: isLight ? '#b45309' : '#d9b36b', marginBottom: '0.5rem' }}>
                ĐỊNH NGHĨA KHOA HỌC
              </div>
              <h3 className="display" style={{ fontSize: '1.6rem', color: isLight ? '#0f172a' : '#f4e6c3', marginBottom: '1rem' }}>
                Cơ Cấu Xã Hội - Giai Cấp Là Gì?
              </h3>
              <p style={{ color: isLight ? '#334155' : '#ded6c5', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '1.2rem' }}>
                Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định,
                cùng với những mối quan hệ về sở hữu, quản lý và phân phối lợi ích giữa chúng trong quá trình sản xuất vật chất.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: isLight ? '#1e293b' : '#f3ede0' }}>
                  <CheckCircle2 size={18} color="#d9b36b" />
                  <span>Là loại hình cơ cấu cơ bản, quan trọng và giữ vị trí trung tâm nhất.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: isLight ? '#1e293b' : '#f3ede0' }}>
                  <CheckCircle2 size={18} color="#d9b36b" />
                  <span>Chi phối trực tiếp đến cơ cấu dân tộc, tôn giáo, dân số và nghề nghiệp.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: isLight ? '#1e293b' : '#f3ede0' }}>
                  <CheckCircle2 size={18} color="#d9b36b" />
                  <span>Là căn cứ chính trị để Đảng và Nhà nước hoạch định chính sách đại đoàn kết toàn dân tộc.</span>
                </li>
              </ul>
            </div>
            <div
              style={{
                background: isLight ? '#f8fafc' : 'linear-gradient(135deg, rgba(20, 18, 27, 0.9), rgba(30, 26, 38, 0.7))',
                borderRadius: '16px',
                padding: '2rem',
                border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.25)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
                <span className="eyebrow" style={{ color: isLight ? '#b45309' : '#e6c98c' }}>SƠ ĐỒ VỊ TRÍ TRUNG TÂM</span>
              </div>
              <div
                style={{
                  background: isLight
                    ? 'linear-gradient(135deg, rgba(181, 64, 58, 0.15), rgba(217, 179, 107, 0.25))'
                    : 'linear-gradient(135deg, rgba(181, 64, 58, 0.3), rgba(217, 179, 107, 0.25))',
                  border: isLight ? '2px solid #ca8a04' : '1.5px solid #d9b36b',
                  borderRadius: '12px',
                  padding: '1.2rem',
                  textAlign: 'center',
                  fontWeight: 700,
                  color: isLight ? '#991b1b' : '#fbf5e6',
                  marginBottom: '1rem',
                  fontSize: '1.05rem',
                  boxShadow: isLight ? '0 4px 15px rgba(202, 138, 4, 0.2)' : '0 0 25px rgba(217, 179, 107, 0.25)'
                }}
              >
                Cơ Cấu Xã Hội - Giai Cấp
                <div style={{ fontSize: '0.75rem', fontWeight: 500, color: isLight ? '#b45309' : '#e6c98c', marginTop: '0.2rem' }}>
                  (Hạt nhân & Vị trí Quyết định)
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                <div style={{ background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.05)', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.8rem', color: isLight ? '#334155' : '#b8b0a0', border: isLight ? '1px solid #e2e8f0' : 'none', fontWeight: isLight ? 600 : 400 }}>
                  Cơ cấu Dân tộc
                </div>
                <div style={{ background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.05)', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.8rem', color: isLight ? '#334155' : '#b8b0a0', border: isLight ? '1px solid #e2e8f0' : 'none', fontWeight: isLight ? 600 : 400 }}>
                  Cơ cấu Dân cư & Nghề nghiệp
                </div>
                <div style={{ background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.05)', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.8rem', color: isLight ? '#334155' : '#b8b0a0', border: isLight ? '1px solid #e2e8f0' : 'none', fontWeight: isLight ? 600 : 400 }}>
                  Cơ cấu Tôn giáo
                </div>
                <div style={{ background: isLight ? '#ffffff' : 'rgba(255, 255, 255, 0.05)', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', fontSize: '0.8rem', color: isLight ? '#334155' : '#b8b0a0', border: isLight ? '1px solid #e2e8f0' : 'none', fontWeight: isLight ? 600 : 400 }}>
                  Cơ cấu Lãnh thổ Vùng miền
                </div>
              </div>
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
                <li>✅ Xác định rõ 4 giai cấp, tầng lớp cốt lõi: Công nhân, Nông dân, Trí thức và Doanh nhân.</li>
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
