import React, { useState } from 'react';
import { Smartphone, ExternalLink, Copy, Check, QrCode } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface QrExperienceSectionProps {
  url?: string;
}

export const QrExperienceSection: React.FC<QrExperienceSectionProps> = ({
  url = 'https://mln131-gamma.vercel.app/'
}) => {
  const { isLight } = useTheme();
  const [copied, setCopied] = useState<boolean>(false);

  // Pre-rendered high-res scannable QR data URL for 'https://mln131-gamma.vercel.app/'
  // Gold Amber QR for Dark Mode
  const qrGoldDataUrl =
    'data:image/png;base64,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';

  // Pure White Crisp QR for Light Mode
  const qrWhiteDataUrl =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAAAAklEQVR4AewaftIAAAkQSURBVO3BsRFcCwpFwStqAsAkB/IPhRwwyUArXw6l/6SZHU73j5+/CAAOMgHAUSYAOMoEAEeZAOAoEwAcZQKAo0wAcJQJAI4yAcBRJgA4ygQAR5kA4CgTABxlAoCjXvoPPFL43XTpG3ikPtl06UkeqXeYLm14pPC76dKfMgHAUSYAOMoEAEeZAOAoEwAcZQKAo0wAcJQJAI4yAcBRL/0D06Vv4JH6ZB6pjenSN/BIbUyXNqZL32C69A08Un+bCQCOMgHAUSYAOMoEAEeZAOAoEwAcZQKAo0wAcJQJAI566YN4pN5huvQOHqlLpksbHqmN6dI7eKSeNF16B4/UO0yXPoUJAI4yAcBRJgA4ygQAR5kA4CgTABxlAoCjTABwlAkAjnoJX2O69KTp0pM8Uu/gkdqYLm1MlzY8UvhsJgA4ygQAR5kA4CgTABxlAoCjTABwlAkAjjIBwFEmADjqJXwNj9Q7TJc2pksbHqkNj9TGdOlJHil8BxMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOAoEwAc9dIHmS7hd9OlDY/UxnTpk02XnuSRetJ06RtMl64zAcBRJgA4ygQAR5kA4CgTABxlAoCjTABwlAkAjjIBwFEv/QMeKfz/8UhtTJc2PFIb06UNj9TGdGnDI/Ukj9TGdOlJHinsmADgKBMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOCol/6D6RL+Po/UxnRpwyOFP+eReofpEp5lAoCjTABwlAkAjjIBwFEmADjKBABHmQDgKBMAHGUCgKN+/PxFf8gjtTFd2vBIfYPp0pM8Uk+aLn0Dj9STpksbHqmN6dKTPFLfYLr0KUwAcJQJAI4yAcBRJgA4ygQAR5kA4CgTABxlAoCjTABw1Ev/gEfqSdOlT+aRusQj9Q7TpSd5pL7BdGnDI7UxXXoHj9TGdOlPmQDgKBMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOCoHz9/0ZfySG1MlzY8UhvTpXfwSD1purThkbpkurThkXrSdGnDI/Wk6dK3MgHAUSYAOMoEAEeZAOAoEwAcZQKAo0wAcJQJAI4yAcBRP37+or/MI7UxXfoGHql3mC5teKQ2pksbHqmN6dKGR2pjunSJR2pjurThkXrSdGnDI7UxXfrbTABwlAkAjjIBwFEmADjKBABHmQDgKBMAHGUCgKNMAHDUS/+BR2pjuvQNPFIb06UNj9TGdGnDI7UxXdrwSG1MlzY8Uu/gkdqYLr2DR2pjurThkdqYLm14pDY8UhvTpU9hAoCjTABwlAkAjjIBwFEmADjKBABHmQDgKBMAHGUCgKNe+j/kkdqYLm14pDamS+/gkdqYLm14pN5hurThkdrwSG1MlzY8Uu8wXdrwSG1MlzY8UhvTpXfwSG1Ml/6UCQCOMgHAUSYAOMoEAEeZAOAoEwAcZQKAo0wAcJQJAI768fMX/WUeqSdNl57kkXrSdOlJHql3mC7hz3mknjRdegeP1JOmS5/CBABHmQDgKBMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEe99EGmSxseqXeYLj3JI7UxXXqSR2rDI7UxXdrwSG1MlzY8UhvTpU82XXqSR2pjurQxXXqSR2pjuvS3mQDgKBMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOCoHz9/0R/ySG1MlzY8Uk+aLj3JI3XJdOkbeKQ2pksbHqmN6dKGR2pjuvQOHqknTZc+hQkAjjIBwFEmADjKBABHmQDgKBMAHGUCgKNMAHCUCQCOeukf8EhtTJfewSO1MV3a8EhtTJee5JF6B4/UO0yXnuSRepJH6kkeqXeYLm14pJ7kkdqYLv0pEwAcZQKAo0wAcJQJAI4yAcBRJgA4ygQAR5kA4CgTABz10j8wXdrwSG1MlzY8Uk/ySD3JI7UxXdqYLj3JI/XJPFIb06V38EhtTJc2PFIb06UNj9Qnmy79bSYAOMoEAEeZAOAoEwAcZQKAo0wAcJQJAI4yAcBRJgA46qUPMl160nTpk3mk3sEj9Q7TpSd5pJ7kkdqYLr3DdGnDI7UxXXrSdGnDI7UxXfrbTABwlAkAjjIBwFEmADjKBABHmQDgKBMAHGUCgKNMAHDUj5+/6A95pDamS0/ySD1purThkdqYLj3JI7UxXdrwSG1Ml57kkdqYLj3JI4U/N13a8Ei9w3TpT5kA4CgTABxlAoCjTABwlAkAjjIBwFEmADjKBABHmQDgqJf+g+nSO0yX3mG69CSP1MZ06RtMl77BdGnDI7UxXXoHj9SGR+pbmQDgKBMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOCol/4DjxR+N13amC5teKQ2pkvfwCO1MV160nRpwyP1Dh6pjenSJ5sufQoTABxlAoCjTABwlAkAjjIBwFEmADjKBABHmQDgKBMAHPXSPzBd+gYeqSd5pDamS9/AI/UO06UNj9Qnmy69w3TpSR6pjenS32YCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOAoEwAcZQKAo176IB6pd5guXTJdeofp0oZHasMj9aTp0pM8UhseqW/gkfp/YwKAo0wAcJQJAI4yAcBRJgA4ygQAR5kA4CgTABxlAoCjXsLH80htTJee5JHamC5teKQ2pksbHqmN6dKGR+pJ06Vv4JF6B4/UxnTpT5kA4CgTABxlAoCjTABwlAkAjjIBwFEmADjKBABHmQDgqJfw8aZLGx6pd/BIbUyXNjxSG9Old5guPckjhd9Nl/42EwAcZQKAo0wAcJQJAI4yAcBRJgA4ygQAR5kA4CgTABz10geZLl0yXdrwSG1Mlz6ZR+qTTZee5JHamC49ySP1DtOlDY/UpzABwFEmADjKBABHmQDgKBMAHGUCgKNMAHCUCQCOMgHAUS/9Ax4p/M4jtTFd2vBIbUyXNjxSG9OljenShkdqwyP1pOnShkdqY7r0JI/Uk6ZLT/JIbUyXPoUJAI4yAcBRJgA4ygQAR5kA4CgTABxlAoCjTABwlAkAjvrx8xcBwEEmADjKBABHmQDgKBMAHGUCgKNMAHCUCQCOMgHAUSYAOMoEAEeZAOAoEwAcZQKAo0wAcNT/AGbLOFIBYVTJAAAAAElFTkSuQmCC';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const domainDisplay = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const activeQrSrc = isLight ? qrWhiteDataUrl : qrGoldDataUrl;

  return (
    <section
      id="quet-ma"
      style={{
        padding: '5rem 1.5rem',
        position: 'relative',
        background: isLight
          ? 'radial-gradient(ellipse at 50% 30%, rgba(217, 179, 107, 0.12) 0%, rgba(255, 255, 255, 0.98) 70%, #f1f5f9 100%)'
          : 'radial-gradient(ellipse at 50% 30%, rgba(217, 179, 107, 0.08) 0%, rgba(13, 11, 17, 0.98) 70%, #0a090e 100%)',
        borderTop: isLight ? '1px solid rgba(217, 179, 107, 0.3)' : '1px solid rgba(217, 179, 107, 0.15)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '350px',
          background: isLight
            ? 'radial-gradient(circle, rgba(217, 179, 107, 0.18) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(217, 179, 107, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.8rem' }}>
          <p
            style={{
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: isLight ? '#b45309' : '#deb65d',
              marginBottom: '0.65rem'
            }}
          >
            TRẢI NGHIỆM THÊM
          </p>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.9rem)',
              fontFamily: 'Cinzel, "Playfair Display", "Times New Roman", serif',
              fontWeight: 700,
              margin: 0,
              color: isLight ? '#0f172a' : undefined,
              background: isLight ? undefined : 'linear-gradient(135deg, #ffffff 0%, #f4e3b2 45%, #deb65d 100%)',
              WebkitBackgroundClip: isLight ? undefined : 'text',
              WebkitTextFillColor: isLight ? undefined : 'transparent',
              letterSpacing: '-0.01em'
            }}
          >
            Quét mã để khám phá thêm
          </h2>
        </div>

        {/* Main Card Container */}
        <div
          style={{
            background: isLight
              ? '#ffffff'
              : 'linear-gradient(145deg, rgba(25, 21, 33, 0.92) 0%, rgba(17, 14, 23, 0.96) 100%)',
            border: isLight ? '1px solid rgba(217, 179, 107, 0.35)' : '1px solid rgba(217, 179, 107, 0.28)',
            borderRadius: '24px',
            boxShadow: isLight
              ? '0 20px 50px rgba(0, 0, 0, 0.07), 0 0 1px 1px rgba(0,0,0,0.03)'
              : '0 25px 60px -15px rgba(0, 0, 0, 0.75), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            padding: 'clamp(2rem, 4.5vw, 3.2rem)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(2rem, 5vw, 4rem)',
            flexWrap: 'wrap'
          }}
        >
          {/* Left Column: QR Code with stylish corner brackets */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            {/* Corner Bracket Frame */}
            <div
              style={{
                position: 'relative',
                padding: '12px'
              }}
            >
              {/* Top-Left Bracket */}
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  width: '22px',
                  height: '22px',
                  borderTop: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderLeft: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderTopLeftRadius: '8px'
                }}
              />
              {/* Top-Right Bracket */}
              <div
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '22px',
                  height: '22px',
                  borderTop: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderRight: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderTopRightRadius: '8px'
                }}
              />
              {/* Bottom-Left Bracket */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '-4px',
                  width: '22px',
                  height: '22px',
                  borderBottom: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderLeft: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderBottomLeftRadius: '8px'
                }}
              />
              {/* Bottom-Right Bracket */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  width: '22px',
                  height: '22px',
                  borderBottom: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderRight: isLight ? '2.5px solid #b45309' : '2.5px solid #deb65d',
                  borderBottomRightRadius: '8px'
                }}
              />

              {/* QR Image Box */}
              <div
                style={{
                  background: isLight ? '#ffffff' : '#deb65d',
                  border: isLight ? '1.5px solid rgba(217, 179, 107, 0.4)' : 'none',
                  borderRadius: '16px',
                  padding: '12px',
                  boxShadow: isLight ? '0 10px 30px rgba(0, 0, 0, 0.08)' : '0 12px 35px rgba(222, 182, 93, 0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '210px',
                  height: '210px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onClick={handleCopyLink}
                title="Bấm để sao chép liên kết"
              >
                <img
                  src={activeQrSrc}
                  alt={`QR Code dẫn đến ${url}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    borderRadius: '8px',
                    imageRendering: 'pixelated'
                  }}
                />
              </div>
            </div>

            {/* Monospace Domain underneath */}
            <span
              style={{
                marginTop: '14px',
                fontSize: '0.85rem',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                color: isLight ? '#b45309' : '#deb65d',
                letterSpacing: '0.04em',
                fontWeight: 600,
                opacity: 0.95
              }}
            >
              {domainDisplay}
            </span>
          </div>

          {/* Right Column: Information, Guidance & Action Button */}
          <div
            style={{
              flex: '1 1 340px',
              maxWidth: '460px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Mini Label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                marginBottom: '1rem'
              }}
            >
              <Smartphone size={17} color={isLight ? '#b45309' : '#deb65d'} />
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isLight ? '#b45309' : '#deb65d'
                }}
              >
                QUÉT BẰNG CAMERA ĐIỆN THOẠI
              </span>
            </div>

            {/* Description Text */}
            <p
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.7,
                color: isLight ? '#334155' : '#ddd5c7',
                margin: '0 0 1.8rem 0'
              }}
            >
              Dùng camera điện thoại quét mã QR bên cạnh để mở phiên bản web tương tác và tài liệu mở rộng của nhóm.
            </p>

            {/* Buttons Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              {/* Primary Open Link Button */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #deb65d 0%, #b8860b 100%)',
                  color: '#130f08',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: isLight ? '0 4px 15px rgba(180, 83, 9, 0.28)' : '0 6px 20px rgba(222, 182, 93, 0.35)',
                  transition: 'all 0.25s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(222, 182, 93, 0.45)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isLight ? '0 4px 15px rgba(180, 83, 9, 0.28)' : '0 6px 20px rgba(222, 182, 93, 0.35)';
                }}
              >
                <QrCode size={19} color="#130f08" />
                <span>Mở liên kết</span>
                <ExternalLink size={16} color="#130f08" />
              </a>

              {/* Secondary Copy Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.78rem 1.25rem',
                  borderRadius: '12px',
                  background: copied
                    ? 'rgba(34, 197, 94, 0.15)'
                    : isLight
                      ? 'rgba(180, 83, 9, 0.07)'
                      : 'rgba(255, 255, 255, 0.05)',
                  border: copied
                    ? '1px solid rgba(34, 197, 94, 0.5)'
                    : isLight
                      ? '1px solid rgba(180, 83, 9, 0.3)'
                      : '1px solid rgba(217, 179, 107, 0.25)',
                  color: copied
                    ? '#16a34a'
                    : isLight
                      ? '#92400e'
                      : '#deb65d',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  if (!copied) {
                    e.currentTarget.style.background = isLight ? 'rgba(180, 83, 9, 0.12)' : 'rgba(217, 179, 107, 0.1)';
                  }
                }}
                onMouseLeave={e => {
                  if (!copied) {
                    e.currentTarget.style.background = isLight ? 'rgba(180, 83, 9, 0.07)' : 'rgba(255, 255, 255, 0.05)';
                  }
                }}
              >
                {copied ? (
                  <>
                    <Check size={16} color="#16a34a" />
                    <span>Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} color={isLight ? '#92400e' : '#deb65d'} />
                    <span>Sao chép link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
