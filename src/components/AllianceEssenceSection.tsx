import React from 'react';
import { Shield, Coins, HeartHandshake, Quote, Check, Scale } from 'lucide-react';

export const AllianceEssenceSection: React.FC = () => {
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
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2
          className="display"
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 1.25
          }}
        >
          Tính Tất Yếu Của <span className="text-gold-grad">Khối Liên Minh</span>
        </h2>
        <div className="gold-line" style={{ maxWidth: '280px', margin: '0 auto 1.2rem auto' }} />
        <p
          style={{
            fontSize: '1.05rem',
            color: '#b8b0a0',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          V.I. Lênin khẳng định: Nếu giai cấp công nhân đơn độc thì không thể thắng lợi.
          Liên minh giữa công nhân, nông dân và trí thức là quy luật phổ biến mang ý nghĩa sống còn.
        </p>
      </div>

      {/* 3 Pillars of Inevitability */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}
      >
        {/* Góc độ Chính trị */}
        <div
          className="glass-card"
          style={{
            padding: '2.2rem 1.8rem',
            borderTop: '3px solid #b5403a'
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(181, 64, 58, 0.2)',
              border: '1px solid rgba(181, 64, 58, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff9a8d',
              marginBottom: '1.2rem'
            }}
          >
            <Shield size={26} />
          </div>
          <div className="eyebrow" style={{ color: '#ff9a8d', marginBottom: '0.35rem' }}>
            TẤT YẾU CHÍNH TRỊ
          </div>
          <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f4e6c3', marginBottom: '0.8rem' }}>
            Nền Tảng Của Nhà Nước XHCN
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#ded6c5', lineHeight: 1.65, marginBottom: '1.2rem' }}>
            Tạo dựng bức tường thành chính trị - xã hội vững chắc của Nhà nước pháp quyền XHCN do Đảng lãnh đạo.
            Khối liên minh là lực lượng nòng cốt đập tan mọi âm mưu chia rẽ, "diễn biến hòa bình" của các thế lực thù địch.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#b8b0a0' }}>
            <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <Check size={16} color="#b5403a" /> Củng cố nền chuyên chính vô sản & dân chủ XHCN.
            </li>
            <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <Check size={16} color="#b5403a" /> Phát huy sức mạnh đại đoàn kết toàn dân tộc.
            </li>
          </ul>
        </div>

        {/* Góc độ Kinh tế */}
        <div
          className="glass-card"
          style={{
            padding: '2.2rem 1.8rem',
            borderTop: '3px solid #d9b36b'
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(217, 179, 107, 0.2)',
              border: '1px solid rgba(217, 179, 107, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#e6c98c',
              marginBottom: '1.2rem'
            }}
          >
            <Coins size={26} />
          </div>
          <div className="eyebrow" style={{ color: '#d9b36b', marginBottom: '0.35rem' }}>
            TẤT YẾU KINH TẾ
          </div>
          <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f4e6c3', marginBottom: '0.8rem' }}>
            Gắn Kết Chuỗi Sản Xuất Vật Chất
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#ded6c5', lineHeight: 1.65, marginBottom: '1.2rem' }}>
            Xuất phát từ quy luật phân công lao động xã hội. Công nghiệp cần nguyên liệu, thị trường tiêu thụ từ nông nghiệp;
            nông nghiệp cần máy móc, phân bón của công nghiệp và giải pháp công nghệ cao của đội ngũ trí thức.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#b8b0a0' }}>
            <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <Check size={16} color="#d9b36b" /> Thỏa mãn nhu cầu lợi ích kinh tế thiết thực.
            </li>
            <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <Check size={16} color="#d9b36b" /> Động lực trực tiếp thúc đẩy tăng trưởng GDP.
            </li>
          </ul>
        </div>

        {/* Góc độ Xã hội */}
        <div
          className="glass-card"
          style={{
            padding: '2.2rem 1.8rem',
            borderTop: '3px solid #34d399'
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(52, 211, 153, 0.2)',
              border: '1px solid rgba(52, 211, 153, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34d399',
              marginBottom: '1.2rem'
            }}
          >
            <HeartHandshake size={26} />
          </div>
          <div className="eyebrow" style={{ color: '#34d399', marginBottom: '0.35rem' }}>
            TẤT YẾU VĂN HÓA - XÃ HỘI
          </div>
          <h3 className="display" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f4e6c3', marginBottom: '0.8rem' }}>
            Bảo Đảm Công Bằng & Hạnh Phúc
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#ded6c5', lineHeight: 1.65, marginBottom: '1.2rem' }}>
            Thu hẹp khoảng cách phát triển giữa thành thị và nông thôn, giữa lao động trí óc và chân tay.
            Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; hướng tới con người phát triển tự do, toàn diện.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#b8b0a0' }}>
            <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <Check size={16} color="#34d399" /> Xóa đói giảm nghèo bền vững, an sinh toàn dân.
            </li>
            <li style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              <Check size={16} color="#34d399" /> Nâng cao dân trí, phát triển nguồn nhân lực chất lượng cao.
            </li>
          </ul>
        </div>
      </div>

      {/* Classical Theoretical Box */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(20, 18, 27, 0.95), rgba(30, 26, 38, 0.85))',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(217, 179, 107, 0.3)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}
      >
        <div style={{ borderRight: '1px solid rgba(217, 179, 107, 0.2)', paddingRight: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <Quote size={24} color="#d9b36b" />
            <span className="eyebrow" style={{ color: '#d9b36b' }}>V.I. LÊNIN (TOÀN TẬP, TẬP 38)</span>
          </div>
          <blockquote style={{ fontSize: '1rem', fontStyle: 'italic', color: '#f4e6c3', lineHeight: 1.65, marginBottom: '0.8rem' }}>
            "Chuyên chính vô sản là một hình thức đặc biệt của liên minh giai cấp giữa giai cấp vô sản... với đông đảo
            những tầng lớp lao động không phải vô sản (tiểu tư sản, tiểu chủ, nông dân, trí thức...) hoặc với phần lớn
            những tầng lớp đó."
          </blockquote>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
            <Quote size={24} color="#b5403a" />
            <span className="eyebrow" style={{ color: '#ff9a8d' }}>CHỦ TỊCH HỒ CHÍ MINH</span>
          </div>
          <blockquote style={{ fontSize: '1rem', fontStyle: 'italic', color: '#f4e6c3', lineHeight: 1.65, marginBottom: '0.8rem' }}>
            "Trong sự nghiệp xây dựng chủ nghĩa xã hội, công nhân, nông dân và trí thức là ba lực lượng chính.
            Nếu không có sự liên minh chặt chẽ giữa ba lực lượng ấy thì không thể làm nên sự nghiệp lớn."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
