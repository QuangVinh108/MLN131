import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../data/presentationData';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface AiChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AiChatbotDrawer: React.FC<AiChatbotDrawerProps> = ({ isOpen, onClose }) => {
  const { isLight } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'ai',
      text: 'Xin chào Thầy Cô và các bạn sinh viên! Tôi là Trợ lý AI Chuyên đề MLN131. Tôi có thể hỗ trợ giải đáp các câu hỏi học thuật, phản biện lý luận và liên hệ thực tiễn về "Cơ cấu xã hội - giai cấp và liên minh giai cấp thời kỳ quá độ lên CNXH ở Việt Nam". Bạn có câu hỏi nào cần trao đổi không?',
      timestamp: 'Vừa xong'
    }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // AI Intelligent Response Simulation based on keywords or FAQ database
    setTimeout(() => {
      let matchedFaq = FAQ_DATA.find(faq =>
        faq.keywords.some(k => query.toLowerCase().includes(k)) ||
        query.toLowerCase().includes(faq.question.toLowerCase())
      );

      let responseText = '';
      if (matchedFaq) {
        responseText = matchedFaq.answer;
      } else {
        responseText = `Về câu hỏi: "${query}", theo quan điểm của Giáo trình Chủ nghĩa Xã hội Khoa học (2021, Chương 5, Mục III):
1. Về cơ cấu giai cấp: Trong thời kỳ quá độ ở Việt Nam, cơ cấu giai cấp biến đổi gắn liền với nền kinh tế thị trường định hướng XHCN nhiều thành phần, gồm 4 giai cấp, tầng lớp cốt lõi: Công nhân, Nông dân, Trí thức và Doanh nhân dưới sự lãnh đạo của Đảng.
2. Về liên minh: Khối liên minh công nhân - nông dân - trí thức và đội ngũ doanh nhân là tất yếu khách quan. Trong đó, nội dung kinh tế là cơ sở quyết định nhất nhằm kết hợp hài hòa các lợi ích; nội dung chính trị giữ vững định hướng XHCN; nội dung văn hóa - xã hội hướng đến con người và công bằng xã hội.
Nếu cần thêm chi tiết, bạn có thể tham khảo thêm trong Giáo trình hoặc đặt thêm câu hỏi cụ thể hơn nhé!`;
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          background: isLight ? '#ffffff' : '#121017',
          borderLeft: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isLight ? '-5px 0 30px rgba(0, 0, 0, 0.15)' : '-10px 0 40px rgba(0, 0, 0, 0.8)',
          animation: 'slideInRight 0.3s ease'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Chat Drawer Header */}
        <div
          style={{
            padding: '1.2rem 1.5rem',
            borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isLight
              ? 'linear-gradient(180deg, rgba(181, 64, 58, 0.12) 0%, #ffffff 100%)'
              : 'linear-gradient(180deg, rgba(181, 64, 58, 0.25) 0%, rgba(18, 16, 23, 0.95) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #b5403a, #8e2b26)',
                border: '1.5px solid rgba(217, 179, 107, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(181, 64, 58, 0.3)'
              }}
            >
              <Bot size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: isLight ? '#0f172a' : '#fbf5e6' }}>
                Trợ Lý AI MLN131
              </div>
              <div style={{ fontSize: '0.72rem', color: isLight ? '#b45309' : '#e6c98c', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                <Sparkles size={12} color={isLight ? '#b45309' : '#d9b36b'} />
                <span>Kho tri thức Giáo trình Chuẩn</span>
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

        {/* Suggested Quick Questions */}
        <div
          style={{
            padding: '0.8rem 1.2rem',
            borderBottom: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.12)',
            background: isLight ? '#f8fafc' : 'rgba(255, 255, 255, 0.02)',
            overflowX: 'auto',
            display: 'flex',
            gap: '0.5rem',
            flexShrink: 0
          }}
        >
          {FAQ_DATA.map(faq => (
            <button
              key={faq.id}
              onClick={() => handleSend(faq.question)}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '999px',
                background: isLight ? '#ffffff' : 'rgba(217, 179, 107, 0.1)',
                border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.25)',
                color: isLight ? '#334155' : '#f4e6c3',
                fontSize: '0.75rem',
                fontWeight: isLight ? 500 : 400,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isLight ? '0 1px 3px rgba(0,0,0,0.05)' : 'none'
              }}
            >
              💬 {faq.question.slice(0, 32)}...
            </button>
          ))}
        </div>

        {/* Message Log */}
        <div
          style={{
            flex: 1,
            padding: '1.2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            background: isLight ? '#fafafa' : 'transparent'
          }}
        >
          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '90%',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <div
                style={{
                  padding: '0.9rem 1.15rem',
                  borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                  background: msg.sender === 'user'
                    ? 'linear-gradient(135deg, #b5403a, #8e2b26)'
                    : (isLight ? '#ffffff' : 'rgba(32, 28, 43, 0.9)'),
                  color: msg.sender === 'user' ? '#ffffff' : (isLight ? '#0f172a' : '#f3ede0'),
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  border: msg.sender === 'user'
                    ? '1px solid rgba(255, 154, 141, 0.3)'
                    : (isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)'),
                  boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.04)' : 'none',
                  whiteSpace: 'pre-line'
                }}
              >
                {msg.text}
              </div>
              <span style={{ fontSize: '0.68rem', color: isLight ? '#94a3b8' : '#888', marginTop: '0.25rem', padding: '0 0.4rem' }}>
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isTyping && (
            <div style={{ display: 'flex', gap: '0.4rem', padding: '0.5rem 0.8rem', color: isLight ? '#ca8a04' : '#d9b36b', fontSize: '0.82rem' }}>
              <Sparkles size={14} className="animate-spin" />
              <span>AI đang tra cứu giáo trình và phản biện...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div
          style={{
            padding: '1rem 1.2rem',
            borderTop: isLight ? '1px solid #e2e8f0' : '1px solid rgba(217, 179, 107, 0.2)',
            background: isLight ? '#ffffff' : 'rgba(18, 16, 23, 0.98)',
            display: 'flex',
            gap: '0.6rem'
          }}
        >
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Hỏi AI về cơ cấu giai cấp, liên minh 4 nhà..."
            style={{
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '999px',
              background: isLight ? '#f1f5f9' : 'rgba(255, 255, 255, 0.05)',
              border: isLight ? '1px solid #cbd5e1' : '1px solid rgba(217, 179, 107, 0.3)',
              color: isLight ? '#0f172a' : '#f3ede0',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          />
          <button
            onClick={() => handleSend()}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d9b36b, #c8973f)',
              color: '#121017',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
