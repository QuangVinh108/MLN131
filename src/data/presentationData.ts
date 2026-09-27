export interface Slide {
  id: string;
  sectionId: string;
  sectionTitle: string;
  slideNumber: number;
  title: string;
  subtitle: string;
  speaker: string;
  speakerRole: string;
  duration: string;
  script: string; // Lời thoại chi tiết cho người thuyết trình
  keyPoints: string[];
  quote?: {
    text: string;
    author: string;
  };
}

export interface ClassPillar {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  iconName: string;
  accentColor: string;
  position: string; // Vị trí, vai trò
  statistics: {
    label: string;
    value: string;
    trend: string;
  }[];
  characteristics: string[];
  trends: string[]; // Xu hướng biến đổi trong thời kỳ quá độ & CMCN 4.0
  challenges: string[];
  quote: string;
  scriptNote: string;
}

export interface AlliancePillar {
  id: string;
  title: string;
  nature: string; // Bản chất / Vị trí
  color: string;
  summary: string;
  coreContents: {
    heading: string;
    details: string;
  }[];
  practicalExamples: string[];
  scriptNote: string;
}

export interface TimelineMilestone {
  congress: string;
  year: string;
  title: string;
  significance: string;
  highlights: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  referencePage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  category: 'Lý luận' | 'Thực tiễn' | 'Phản biện Giảng viên';
  answer: string;
  keywords: string[];
}

export const PRESENTATION_CONFIG = {
  subjectCode: 'MLN131',
  subjectName: 'Chủ nghĩa Xã hội Khoa học',
  chapter: 'Chương 5 · Phần III',
  chapterTitle: 'Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam',
  textbookRef: 'Giáo trình Chủ nghĩa Xã hội Khoa học (Bộ GD&ĐT, 2021)',
  groupName: 'Nhóm Thuyết trình MLN131',
  presentationDate: 'Kỳ Fall2026',
};

export const TEAM_MEMBERS = [
  {
    name: 'Nguyễn Văn A',
    studentId: 'B21DCCN001',
    role: 'Trưởng nhóm · Thuyết trình Khai mạc & Phần III.1 Tổng quan',
    parts: 'Slide 1 - 4: Đặt vấn đề, Tính quy luật biến đổi cơ cấu xã hội - giai cấp'
  },
  {
    name: 'Trần Thị B',
    studentId: 'B21DCCN002',
    role: 'Thành viên · Thuyết trình Chi tiết 5 Giai cấp, Tầng lớp',
    parts: 'Slide 5 - 8: Công nhân, Nông dân, Trí thức, Doanh nhân, Thanh niên'
  },
  {
    name: 'Lê Hoàng C',
    studentId: 'B21DCCN003',
    role: 'Thành viên · Thuyết trình Phần III.2 Liên minh Giai cấp',
    parts: 'Slide 9 - 12: Tính tất yếu & 3 Nội dung Liên minh (Kinh tế, Chính trị, Xã hội)'
  },
  {
    name: 'Phạm Minh D',
    studentId: 'B21DCCN004',
    role: 'Thành viên · Phản biện, Trắc nghiệm & Điều hành Hội đồng Q&A',
    parts: 'Slide 13 - 15: Sơ đồ 4 Nhà, Tổng kết, Điều hành Minigame và Q&A'
  }
];

export const NAV_ITEMS = [
  { id: 'hero', label: 'Khai mạc' },
  { id: 'tong-quan', label: 'Bối cảnh' },
  { id: 'giai-tang', label: '5 Giai tầng' },
  { id: 'lien-minh', label: 'Bản chất Liên minh' },
  { id: 'tam-giac', label: '3 Nội dung' },
  { id: 'so-do-4-nha', label: 'Mô hình 4 Nhà' },
  { id: 'dong-thoi-gian', label: 'Dòng thời gian' },
  { id: 'quiz', label: 'Trắc nghiệm' }
];

export const CLASS_PILLARS: ClassPillar[] = [
  {
    id: 'cong-nhan',
    name: 'Giai cấp Công nhân',
    shortName: 'Công nhân',
    badge: 'Giai cấp Lãnh đạo',
    iconName: 'Hammer',
    accentColor: '#b5403a',
    position: 'Lực lượng lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam; lực lượng tiên phong trong sự nghiệp công nghiệp hoá, hiện đại hoá đất nước.',
    statistics: [
      { label: 'Quy mô lao động', value: '> 17 triệu', trend: 'Tăng trưởng đều hàng năm' },
      { label: 'Đóng góp GDP', value: '> 60%', trend: 'Nòng cốt trong khu vực công nghiệp & dịch vụ' },
      { label: 'Tỷ lệ qua đào tạo', value: '~ 28 - 30%', trend: 'Cần nâng cao trình độ tay nghề công nghệ cao' }
    ],
    characteristics: [
      'Đại diện cho phương thức sản xuất tiên tiến, gắn liền với nền công nghiệp hiện đại.',
      'Có hệ tư tưởng tiên tiến là chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh.',
      'Có tính tổ chức, kỷ luật cao, tinh thần quốc tế chân chính.'
    ],
    trends: [
      'Xu hướng trí thức hoá: Công nhân áo xanh chuyển dịch mạnh sang công nhân áo trắng (tri thức công nghiệp, vận hành tự động hoá, IoT).',
      'Đa dạng hoá thành phần: Làm việc trong doanh nghiệp nhà nước, tư nhân trong nước, và các tập đoàn FDI đa quốc gia.',
      'Tăng nhanh về số lượng trong các khu công nghiệp, đô thị kinh tế trọng điểm.'
    ],
    challenges: [
      'Nguy cơ bị thay thế bởi robot và tự động hoá nếu không kịp chuyển đổi số kỹ năng nghề.',
      'Đời sống, nhà ở công nhân, thiết chế văn hóa tại một số khu chế xuất còn nhiều khó khăn.'
    ],
    quote: 'Giai cấp công nhân Việt Nam là lực lượng lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam; giai cấp tiên phong trong sự nghiệp xây dựng chủ nghĩa xã hội.',
    scriptNote: 'Nhấn mạnh: Trong kinh tế thị trường, bản chất cách mạng của giai cấp công nhân không hề mất đi, mà đang được hiện đại hóa với tri thức công nghệ mới!'
  },
  {
    id: 'nong-dan',
    name: 'Giai cấp Nông dân',
    shortName: 'Nông dân',
    badge: 'Chiến lược Tam Nông',
    iconName: 'Wheat',
    accentColor: '#34d399',
    position: 'Lực lượng đông đảo nhất trong dân cư, có vị trí chiến lược trong sự nghiệp phát triển nông nghiệp, nông dân, nông thôn và bảo vệ chủ quyền quốc gia.',
    statistics: [
      { label: 'Tỷ trọng dân số', value: '~ 62%', trend: 'Khu vực nông thôn đang đô thị hóa' },
      { label: 'Lao động nông nghiệp', value: '~ 27%', trend: 'Giảm dần chuyển sang công nghiệp/dịch vụ' },
      { label: 'Xuất khẩu nông sản', value: '> 53 tỷ USD', trend: 'Top đầu thế giới về gạo, cà phê, sầu riêng' }
    ],
    characteristics: [
      'Gắn bó máu thịt với ruộng đồng, có truyền thống yêu nước, cần cù, chịu thương chịu khó.',
      'Là đồng minh tự nhiên, tin cậy nhất và bền vững nhất của giai cấp công nhân từ cách mạng dân tộc đến xây dựng CNXH.',
      'Lực lượng giữ gìn và phát huy bản sắc văn hóa dân tộc ở làng quê Việt Nam.'
    ],
    trends: [
      'Chuyển dịch cơ cấu lao động: Rời khỏi nông nghiệp truyền thống, chuyển sang công nghiệp chế biến, du lịch nông thôn.',
      'Xuất hiện tầng lớp nông dân thế hệ mới: Nông dân số, giám đốc hợp tác xã kiểu mới, làm chủ quy trình VietGAP, GlobalGAP.',
      'Sự phân hóa giàu nghèo nội bộ nông dân: Một bộ phận làm giàu từ nông nghiệp hàng hóa, trang trại sinh thái.'
    ],
    challenges: [
      'Biến đổi khí hậu (xâm nhập mặn ĐBSCL, hạn hán Tây Nguyên) ảnh hưởng trực tiếp đến sinh kế.',
      'Tình trạng ly nông - ly hương, già hóa dân số nông thôn khi thanh niên di cư về đô thị.'
    ],
    quote: 'Nông dân là chủ thể, là trung tâm của quá trình phát triển nông nghiệp, kinh tế nông thôn và xây dựng nông thôn mới.',
    scriptNote: 'Lưu ý: Nông dân Việt Nam ngày nay không còn là hình ảnh con trâu đi trước cái cày, mà đang trở thành doanh nhân nông nghiệp, nông dân 4.0 điều khiển drone phun thuốc!'
  },
  {
    id: 'tri-thuc',
    name: 'Đội ngũ Trí thức',
    shortName: 'Trí thức',
    badge: 'Tài nguyên Đặc biệt',
    iconName: 'GraduationCap',
    accentColor: '#e6c98c',
    position: 'Lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh CNH, HĐH đất nước và hội nhập quốc tế; nòng cốt của nền kinh tế tri thức.',
    statistics: [
      { label: 'Quy mô đội ngũ', value: '> 6.5 triệu', trend: 'Tăng trưởng hơn gấp 3 lần sau 20 năm' },
      { label: 'Tỷ lệ đóng góp TFP', value: '> 45%', trend: 'Đóng góp của năng suất các yếu tố tổng hợp' },
      { label: 'Công bố quốc tế', value: 'Tăng 15%/năm', trend: 'Nhiều bằng sáng chế công nghệ cao' }
    ],
    characteristics: [
      'Là tầng lớp xã hội đặc biệt (không phải giai cấp độc lập), quy tụ những người lao động trí óc tinh hoa.',
      'Luôn nhạy bén với cái mới, đi đầu trong nghiên cứu khoa học, chuyển giao công nghệ và khai phóng tư duy.',
      'Đóng vai trò phản biện xã hội, tham mưu hoạch định đường lối, chính sách cho Đảng và Nhà nước.'
    ],
    trends: [
      'Phát triển mạnh mẽ trong các lĩnh vực mũi nhọn: Trí tuệ nhân tạo (AI), Bán dẫn, Công nghệ sinh học, Năng lượng tái tạo.',
      'Gắn kết chặt chẽ với thị trường: Trí thức khởi nghiệp (Startup Founder, DeepTech).',
      'Đội ngũ trí thức người Việt ở nước ngoài (Việt kiều) ngày càng hướng về đóng góp cho quê hương.'
    ],
    challenges: [
      'Chảy máu chất xám (Brain drain) sang khu vực tư nhân hoặc các quốc gia phát triển.',
      'Cơ chế trọng dụng và đãi ngộ nhân tài, tự chủ đại học vẫn còn nhiều điểm nghẽn.'
    ],
    quote: 'Trí thức là vốn liếng quý báu của dân tộc... Xây dựng đội ngũ trí thức vững mạnh là trực tiếp nâng tầm trí tuệ của dân tộc, sức mạnh của đất nước.',
    scriptNote: 'Nhắc lại luận điểm Mác: Trí thức là một tầng lớp xã hội linh hoạt, luôn liên minh với giai cấp công nhân để biến tri thức thành lực lượng vật chất to lớn.'
  },
  {
    id: 'doanh-nhan',
    name: 'Đội ngũ Doanh nhân',
    shortName: 'Doanh nhân',
    badge: 'Lực lượng Xung kích',
    iconName: 'Briefcase',
    accentColor: '#f59e0b',
    position: 'Tầng lớp xã hội phát triển vượt bậc trong thời kỳ Đổi mới; lực lượng chủ công kiến tạo của cải, việc làm và nâng cao năng lực cạnh tranh quốc gia.',
    statistics: [
      { label: 'Số lượng doanh nghiệp', value: '> 900.000 DN', trend: 'Cùng hơn 5 triệu hộ kinh doanh cá thể' },
      { label: 'Đóng góp GDP', value: '> 50%', trend: 'Khu vực kinh tế tư nhân là động lực quan trọng' },
      { label: 'Tạo việc làm mới', value: '> 85%', trend: 'Giải quyết việc làm cho lực lượng lao động xã hội' }
    ],
    characteristics: [
      'Dám nghĩ, dám làm, năng động sáng tạo, chấp nhận rủi ro trên thương trường.',
      'Hoạt động sản xuất kinh doanh theo khuôn khổ pháp luật của Nhà nước định hướng XHCN.',
      'Hình thành tinh thần doanh nhân dân tộc, phụng sự Tổ quốc và trách nhiệm xã hội sâu sắc.'
    ],
    trends: [
      'Hình thành các tập đoàn kinh tế tư nhân quy mô lớn vươn tầm khu vực và thế giới (Viettel, Vingroup, Thaco, FPT, TH True Milk...).',
      'Thế hệ doanh nhân trẻ khởi nghiệp sáng tạo (GenZ Founder), bắt kịp xu hướng Net Zero, ESG, kinh tế tuần hoàn.'
    ],
    challenges: [
      'Quy mô đa phần là doanh nghiệp nhỏ và vừa (SMEs), khả năng chống chịu trước biến động chuỗi cung ứng còn hạn chế.',
      'Cần xây dựng đạo đức kinh doanh văn minh, tránh làm ăn chụp giật, trốn thuế hay hủy hoại môi trường.'
    ],
    quote: 'Phát triển đội ngũ doanh nhân lớn mạnh về số lượng và chất lượng, có tinh thần cống hiến cho dân tộc, có chuẩn mực đạo đức, văn hóa kinh doanh tiên tiến.',
    scriptNote: 'Làm rõ cho giảng viên: Doanh nhân trong KTTT định hướng XHCN ở VN không đối kháng với công nhân, mà liên kết hợp tác vì mục tiêu dân giàu nước mạnh.'
  },
  {
    id: 'phu-nu-thanh-nien',
    name: 'Tầng lớp Phụ nữ & Thế hệ Trẻ',
    shortName: 'Phụ nữ & Thế hệ Trẻ',
    badge: 'Động lực Tương lai',
    iconName: 'Sparkles',
    accentColor: '#ec4899',
    position: 'Các tầng lớp xã hội quan trọng bổ trợ, phát huy bình đẳng giới và là rường cột tương lai, xung kích đi đầu trong đổi mới sáng tạo.',
    statistics: [
      { label: 'Tỷ lệ nữ ĐBQH', value: '> 30%', trend: 'Cao hàng đầu khu vực ASEAN' },
      { label: 'Lực lượng thanh niên', value: '~ 22 triệu', trend: 'Thời kỳ dân số vàng của Việt Nam' },
      { label: 'Khởi nghiệp đổi mới', value: '> 70%', trend: 'Ý tưởng khởi nghiệp đến từ người trẻ' }
    ],
    characteristics: [
      'Phụ nữ Việt Nam phát huy truyền thống "Anh hùng, bất khuất, trung hậu, đảm đang" gắn liền với phong trào "Giỏi việc nước, đảm việc nhà".',
      'Thanh niên là lực lượng xung kích cách mạng, nhiệt huyết, khao khát khẳng định bản thân và tiếp cận công nghệ nhanh nhất.'
    ],
    trends: [
      'Thanh niên, sinh viên là lực lượng nòng cốt tham gia chuyển đổi số cộng đồng, bình dân học vụ số.',
      'Phụ nữ ngày càng giữ nhiều trọng trách lãnh đạo trong cơ quan Đảng, Nhà nước và tập đoàn kinh tế.'
    ],
    challenges: [
      'Áp lực việc làm, thích ứng với yêu cầu kỹ năng mới trong kỷ nguyên số.',
      'Hiện tượng sống ảo, lệch chuẩn giá trị văn hóa trên mạng xã hội của một bộ phận người trẻ.'
    ],
    quote: 'Thanh niên là rường cột của nước nhà, chủ nhân tương lai của đất nước... Phụ nữ là lực lượng quan trọng của khối đại đoàn kết toàn dân tộc.',
    scriptNote: 'Liên hệ trực tiếp: Chúng ta - những sinh viên ngồi đây - chính là đại diện cho thế hệ trẻ trong cơ cấu xã hội Việt Nam thời kỳ quá độ!'
  }
];

export const ALLIANCE_PILLARS: AlliancePillar[] = [
  {
    id: 'kinh-te',
    title: 'Nội dung Kinh tế',
    nature: 'Nội dung CƠ BẢN, QUYẾT ĐỊNH NHẤT',
    color: '#d9b36b',
    summary: 'Kinh tế là cơ sở vật chất - kỹ thuật của liên minh. Nếu không thỏa mãn lợi ích kinh tế thiết thực của các bên thì liên minh chỉ là hình thức khẩu hiệu suông.',
    coreContents: [
      {
        heading: 'Đẩy mạnh CNH, HĐH gắn với kinh tế tri thức',
        details: 'Chuyển dịch cơ cấu kinh tế theo hướng hiện đại, nâng cao năng suất lao động, tạo tiền đề vật chất để gắn kết công nhân - nông dân - trí thức.'
      },
      {
        heading: 'Xác định đúng tiềm năng và cơ cấu kinh tế',
        details: 'Xây dựng mối liên hệ hữu cơ giữa công nghiệp chế tạo, nông nghiệp sạch công nghệ cao, dịch vụ logistics và công nghệ thông tin.'
      },
      {
        heading: 'Bảo đảm hài hòa lợi ích kinh tế (Lợi ích là động lực trực tiếp)',
        details: 'Thực hiện nguyên tắc phân phối theo kết quả lao động và hiệu quả kinh tế; tôn trọng và bảo vệ lợi ích hợp pháp của người lao động và chủ doanh nghiệp.'
      },
      {
        heading: 'Đổi mới quan hệ sản xuất & cơ chế thị trường',
        details: 'Phát triển kinh tế nhiều thành phần, hoàn thiện thể chế kinh tế thị trường định hướng XHCN, chống độc quyền và tiêu cực kinh tế.'
      }
    ],
    practicalExamples: [
      'Mô hình liên kết 4 Nhà (Nhà nước - Nhà khoa học - Doanh nghiệp - Nông dân).',
      'Chuỗi cung ứng xuất khẩu gạo Việt Nam sang EU theo hiệp định EVFTA.',
      'Chương trình OCOP (Mỗi xã một sản phẩm) kết hợp công nghệ thương mại điện tử.'
    ],
    scriptNote: 'Cực kỳ quan trọng: Lênin từng dạy "Chính trị là biểu hiện tập trung của kinh tế". Kinh tế là cái gốc, cái bụng có no thì lòng mới yên để đoàn kết!'
  },
  {
    id: 'chinh-tri',
    title: 'Nội dung Chính trị',
    nature: 'Nội dung ĐỊNH HƯỚNG & BẢO ĐẢM VỮNG CHẮC',
    color: '#b5403a',
    summary: 'Chính trị giữ vai trò định hướng chính trị cho khối liên minh, bảo đảm khối liên minh phát triển đúng quỹ đạo xã hội chủ nghĩa.',
    coreContents: [
      {
        heading: 'Giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam',
        details: 'Đảng là nhân tố quyết định mọi thắng lợi của cách mạng; định ra đường lối, chủ trương thống nhất lợi ích của toàn dân tộc.'
      },
      {
        heading: 'Xây dựng Nhà nước pháp quyền XHCN của Nhân dân',
        details: 'Nhà nước là công cụ chủ yếu thể chế hóa đường lối của Đảng, quản lý xã hội bằng pháp luật, bảo vệ quyền làm chủ của nhân dân.'
      },
      {
        heading: 'Phát huy nền dân chủ Xã hội chủ nghĩa',
        details: 'Thực hiện phương châm "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng" trong mọi lĩnh vực đời sống.'
      },
      {
        heading: 'Đấu tranh chống lại âm mưu "Diễn biến hòa bình"',
        details: 'Vạch trần âm mưu của các thế lực thù địch nhằm chia rẽ khối đại đoàn kết, tách rời công nhân với nông dân và trí thức.'
      }
    ],
    practicalExamples: [
      'Hệ thống Mặt trận Tổ quốc và các đoàn thể chính trị - xã hội giám sát và phản biện xã hội.',
      'Quy chế dân chủ ở cơ sở, các cuộc tiếp xúc cử tri của Đại biểu Quốc hội.',
      'Đại hội đại biểu toàn quốc lần thứ XIII của Đảng khẳng định sức mạnh đại đoàn kết toàn dân tộc.'
    ],
    scriptNote: 'Nhấn mạnh: Nếu không có sự lãnh đạo của Đảng và nền tảng chính trị vững chắc, liên minh sẽ bị phân rã trước các luồng tư tưởng ngoại lai và xung đột cục bộ.'
  },
  {
    id: 'van-hoa-xa-hoi',
    title: 'Nội dung Văn hóa - Xã hội',
    nature: 'Nội dung MỤC TIÊU & CHẤT LƯỢNG ĐỜI SỐNG',
    color: '#4aa3a0',
    summary: 'Văn hóa - Xã hội là thước đo tính ưu việt của chế độ XHCN, bảo đảm sự phát triển toàn diện của con người và gắn kết tinh thần toàn dân.',
    coreContents: [
      {
        heading: 'Gắn tăng trưởng kinh tế với tiến bộ & công bằng xã hội',
        details: 'Không hy sinh công bằng xã hội và môi trường để chạy theo tăng trưởng kinh tế đơn thuần; "Không để ai bị bỏ lại phía sau".'
      },
      {
        heading: 'Nâng cao dân trí & phát triển nguồn nhân lực chất lượng cao',
        details: 'Đổi mới căn bản, toàn diện giáo dục - đào tạo, phổ cập kỹ năng số cho công nhân và nông dân.'
      },
      {
        heading: 'Thực hiện tốt các chính sách an sinh xã hội',
        details: 'Bảo hiểm y tế, bảo hiểm xã hội toàn dân, xóa đói giảm nghèo bền vững, chăm sóc người có công, cựu chiến binh.'
      },
      {
        heading: 'Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc',
        details: 'Xây dựng con người Việt Nam thời đại mới với các hệ giá trị chuẩn mực: Yêu nước, đoàn kết, tự cường, nghĩa tình, trung thực, trách nhiệm, kỷ cương, sáng tạo.'
      }
    ],
    practicalExamples: [
      'Chương trình mục tiêu quốc gia về Xây dựng Nông thôn mới và Giảm nghèo bền vững.',
      'Chiến dịch tiêm chủng vắc-xin COVID-19 thần tốc miễn phí cho toàn dân.',
      'Chính sách nhà ở xã hội cho công nhân tại các khu công nghiệp Bắc Ninh, Bình Dương, Hải Phòng.'
    ],
    scriptNote: 'Chốt lại: Liên minh giai cấp cuối cùng là để phục vụ con người, mang lại cuộc sống ấm no, tự do, hạnh phúc cho toàn thể nhân dân Việt Nam!'
  }
];

export const FOUR_HOUSES_DATA = [
  {
    role: 'Nhà nước',
    title: 'Kiến tạo & Định hướng Thể chế',
    icon: 'Building2',
    color: '#b5403a',
    responsibilities: [
      'Ban hành quy hoạch vùng, chính sách đất đai, tín dụng ưu đãi.',
      'Đầu tư hạ tầng giao thông, thủy lợi, logistics quốc gia.',
      'Ký kết các hiệp định thương mại tự do (FTA, EVFTA, CPTPP) mở đường xuất khẩu.'
    ]
  },
  {
    role: 'Nhà khoa học (Trí thức)',
    title: 'Nghiên cứu & Chuyển giao Công nghệ',
    icon: 'Microscope',
    color: '#e6c98c',
    responsibilities: [
      'Lai tạo giống cây trồng, vật nuôi năng suất cao, chống chịu biến đổi khí hậu (ST25).',
      'Chuyển giao công nghệ sinh học, tự động hóa tưới tiêu thông minh, chế phẩm vi sinh.',
      'Tập huấn chuyển đổi số, hướng dẫn kỹ thuật canh tác VietGAP, truy xuất nguồn gốc.'
    ]
  },
  {
    role: 'Nhà doanh nghiệp',
    title: 'Đầu tư, Chế biến & Tiêu thụ',
    icon: 'Factory',
    color: '#d9b36b',
    responsibilities: [
      'Cung ứng vật tư chất lượng, ký hợp đồng bao tiêu sản phẩm ổn định giá.',
      'Đầu tư công nghệ chế biến sâu, bảo quản lạnh, nâng cao giá trị gia tăng.',
      'Xây dựng thương hiệu quốc tế, xúc tiến thương mại mở rộng thị trường.'
    ]
  },
  {
    role: 'Nhà nông (Nông dân)',
    title: 'Chủ thể Sản xuất & Vận hành',
    icon: 'Tractor',
    color: '#34d399',
    responsibilities: [
      'Tập hợp vào các hợp tác xã, tổ hợp tác kiểu mới để tích tụ ruộng đất quy mô lớn.',
      'Tuân thủ nghiêm ngặt quy trình kỹ thuật, đảm bảo an toàn vệ sinh thực phẩm.',
      'Ứng dụng phần mềm ghi chép nhật ký mùa vụ số hóa, sử dụng drone, cảm biến IoT.'
    ]
  }
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    congress: 'Đại hội VI',
    year: '1986',
    title: 'Khởi xướng Công cuộc Đổi mới Toàn diện',
    significance: 'Bước ngoặt lịch sử thừa nhận nền kinh tế nhiều thành phần, giải phóng sức sản xuất xã hội.',
    highlights: [
      'Xóa bỏ cơ chế tập trung quan liêu bao cấp.',
      'Thừa nhận sự tồn tại khách quan của cơ cấu giai cấp đa dạng trong thời kỳ quá độ.'
    ]
  },
  {
    congress: 'Đại hội VII & VIII',
    year: '1991 - 1996',
    title: 'Cương lĩnh 1991 & Đẩy mạnh CNH - HĐH',
    significance: 'Khẳng định liên minh công nhân - nông dân - trí thức là nền tảng chính trị của chế độ.',
    highlights: [
      'Đưa tầng lớp trí thức chính thức vào nền tảng khối liên minh cùng công nhân và nông dân.',
      'Khởi động chiến lược công nghiệp hóa, hiện đại hóa đất nước.'
    ]
  },
  {
    congress: 'Đại hội IX & X',
    year: '2001 - 2006',
    title: 'Xác lập Kinh tế Thị trường Định hướng XHCN',
    significance: 'Thừa nhận kinh tế tư nhân và vai trò kiến tạo của tầng lớp doanh nhân.',
    highlights: [
      'Xác định KTTT định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ.',
      'Khẳng định sự xích lại gần nhau giữa các giai cấp, tầng lớp.'
    ]
  },
  {
    congress: 'Đại hội XI & XII',
    year: '2011 - 2016',
    title: 'Cương lĩnh Bổ sung 2011 & Phát triển Bền vững',
    significance: 'Hoàn thiện nhận thức về cơ cấu xã hội - giai cấp trong nền kinh tế thị trường hội nhập sâu.',
    highlights: [
      'Xác định đội ngũ doanh nhân là lực lượng quan trọng cần được chăm lo phát triển.',
      'Gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội ngay trong từng bước phát triển.'
    ]
  },
  {
    congress: 'Đại hội XIII',
    year: '2021',
    title: 'Khát vọng Phát triển Đất nước Phồn vinh, Hạnh phúc',
    significance: 'Nâng tầm khối liên minh giai cấp trong kỷ nguyên số và hội nhập quốc tế toàn diện.',
    highlights: [
      'Xây dựng giai cấp công nhân hiện đại, lớn mạnh gắn với CMCN 4.0.',
      'Phát huy vai trò chủ thể của nông dân trong xây dựng nông thôn mới hiện đại.',
      'Xây dựng đội ngũ trí thức tinh hoa và phát triển đội ngũ doanh nhân dân tộc lớn mạnh.'
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Trong thời kỳ quá độ lên CNXH ở Việt Nam, giai cấp nào giữ vai trò lãnh đạo cách mạng thông qua đội tiền phong?',
    options: [
      'A. Giai cấp Nông dân',
      'B. Đội ngũ Trí thức',
      'C. Giai cấp Công nhân',
      'D. Đội ngũ Doanh nhân'
    ],
    correctAnswer: 2,
    explanation: 'Theo giáo trình CNXHKH, giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam; là lực lượng tiên phong trong sự nghiệp CNH, HĐH đất nước.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 2,
    question: 'Yếu tố nào là nguyên nhân trực tiếp dẫn tới sự biến đổi đa dạng, phức tạp của cơ cấu xã hội - giai cấp ở Việt Nam?',
    options: [
      'A. Sự suy giảm dân số nông thôn',
      'B. Nền kinh tế nhiều thành phần định hướng XHCN',
      'C. Quá trình di cư lao động quốc tế',
      'D. Sự phát triển đơn nhất của kinh tế nhà nước'
    ],
    correctAnswer: 1,
    explanation: 'Cơ cấu kinh tế nhiều thành phần quy định tính chất đa dạng, phức tạp của cơ cấu xã hội - giai cấp. Kinh tế biến đổi thế nào thì cơ cấu giai cấp biến đổi tương ứng.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 3,
    question: 'Trong khối liên minh công - nông - trí thức, nội dung nào giữ vai trò cơ bản, quyết định nhất?',
    options: [
      'A. Nội dung Chính trị',
      'B. Nội dung Văn hóa - Tư tưởng',
      'C. Nội dung Kinh tế',
      'D. Nội dung Xã hội'
    ],
    correctAnswer: 2,
    explanation: 'Nội dung kinh tế là nội dung cơ bản, quyết định nhất của liên minh, vì lợi ích kinh tế là động lực trực tiếp gắn kết các giai cấp, tầng lớp lại với nhau.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 4,
    question: 'Tầng lớp nào được xem là lực lượng lao động sáng tạo đặc biệt quan trọng, nòng cốt của nền kinh tế tri thức?',
    options: [
      'A. Đội ngũ Trí thức',
      'B. Đội ngũ Doanh nhân',
      'C. Giai cấp Tiểu tư sản',
      'D. Thợ thủ công truyền thống'
    ],
    correctAnswer: 0,
    explanation: 'Đội ngũ trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh CNH, HĐH và hội nhập quốc tế.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 5,
    question: 'Xu hướng biến đổi nào sau đây thể hiện tính quy luật tích cực trong cơ cấu xã hội - giai cấp ở Việt Nam?',
    options: [
      'A. Phân cực đối kháng gay gắt giữa các tầng lớp',
      'B. Xích lại gần nhau giữa các giai cấp, tầng lớp về quyền làm chủ và mức độ thụ hưởng',
      'C. Triệt tiêu hoàn toàn sự khác biệt giữa lao động trí óc và chân tay ngay lập tức',
      'D. Xóa bỏ khu vực kinh tế tư nhân'
    ],
    correctAnswer: 1,
    explanation: 'Xu hướng xích lại gần nhau giữa các giai cấp, tầng lớp là xu hướng bao trùm, diễn ra trên cơ sở phát triển của lực lượng sản xuất và sự hoàn thiện quan hệ sản xuất mới.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 6,
    question: 'Nội dung chính trị của liên minh giai cấp ở Việt Nam trước hết nhằm mục đích gì?',
    options: [
      'A. Giữ vững vai trò lãnh đạo của Đảng và củng cố Nhà nước pháp quyền XHCN',
      'B. Phổ biến văn hóa ngoại nhập',
      'C. Cạnh tranh quyền lực đa đảng',
      'D. Tư nhân hóa toàn bộ doanh nghiệp nhà nước'
    ],
    correctAnswer: 0,
    explanation: 'Mục đích chính trị là giữ vững vai trò lãnh đạo của Đảng Cộng sản Việt Nam, củng cố Nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 7,
    question: 'Mô hình liên kết nào trong thực tiễn nông nghiệp phản ánh sâu sắc mối quan hệ liên minh công nhân - nông dân - trí thức - doanh nhân?',
    options: [
      'A. Canh tác tự cung tự cấp nhỏ lẻ',
      'B. Mô hình Liên kết 4 Nhà (Nhà nước - Nhà khoa học - Doanh nghiệp - Nhà nông)',
      'C. Buôn bán tiểu ngạch biên giới',
      'D. Phát triển phường hội thủ công cổ truyền'
    ],
    correctAnswer: 1,
    explanation: 'Mô hình "Liên kết 4 Nhà" là biểu hiện sinh động, hiệu quả nhất của sự gắn kết giữa công nghiệp, nông nghiệp, khoa học công nghệ và sự quản lý định hướng của Nhà nước.',
    referencePage: 'Giáo trình CNXHKH'
  },
  {
    id: 8,
    question: 'Phương châm phát huy dân chủ trong đời sống xã hội được Đảng ta bổ sung tại Đại hội XIII là gì?',
    options: [
      'A. Dân biết, dân làm, dân chịu trách nhiệm',
      'B. Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng',
      'C. Dân bầu, dân chỉ trích, dân từ bỏ',
      'D. Toàn quyền quyết định thuộc về cơ quan hành chính'
    ],
    correctAnswer: 1,
    explanation: 'Đại hội XIII bổ sung thêm hai thành tố then chốt: "dân giám sát, dân thụ hưởng", khẳng định mục tiêu cao nhất của chế độ XHCN là vì hạnh phúc của nhân dân.',
    referencePage: 'Văn kiện Đại hội XIII của Đảng'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Tại sao nội dung kinh tế lại là nội dung cơ bản, quyết định nhất của liên minh giai cấp?',
    category: 'Lý luận',
    keywords: ['kinh tế', 'quyết định', 'lợi ích', 'cơ bản'],
    answer: 'Theo quan điểm chủ nghĩa Mác - Lênin: "Chính trị là biểu hiện tập trung của kinh tế". Liên minh giai cấp trước hết xuất phát từ đòi hỏi khách quan của nền sản xuất vật chất. Nông nghiệp không thể phát triển nếu thiếu máy móc, phân bón của công nghiệp; công nghiệp không thể vận hành nếu thiếu lương thực, nguyên liệu của nông nghiệp và công nghệ của trí thức. Quan trọng nhất, "Lợi ích kinh tế là động lực trực tiếp". Nếu liên minh không mang lại cơm no áo ấm, nâng cao thu nhập cho nông dân và công nhân thì liên minh đó chỉ là khẩu hiệu hình thức và không thể bền vững.'
  },
  {
    id: 'faq-2',
    question: 'Trong thời kỳ quá độ, tầng lớp doanh nhân có phải là giai cấp bóc lột không? Bản chất quan hệ công nhân - doanh nhân hiện nay là gì?',
    category: 'Phản biện Giảng viên',
    keywords: ['doanh nhân', 'bóc lột', 'quan hệ', 'tư bản'],
    answer: 'Trong thời kỳ quá độ lên CNXH ở Việt Nam, đội ngũ doanh nhân hoạt động trong khuôn khổ Hiến pháp và pháp luật của Nhà nước định hướng XHCN. Khác với chủ nghĩa tư bản cổ điển, doanh nhân Việt Nam là những người đóng góp thuế, tạo việc làm, phát triển kinh tế dân tộc và chia sẻ trách nhiệm xã hội. Mối quan hệ giữa công nhân và người sử dụng lao động (doanh nhân) hiện nay là quan hệ "vừa hợp tác, vừa đấu tranh": Hợp tác để sản xuất phát triển, tạo ra của cải; đồng thời đấu tranh thông qua tổ chức Công đoàn để bảo vệ quyền lợi hợp pháp, tiền lương, an toàn lao động, chống hành vi vi phạm pháp luật.'
  },
  {
    id: 'faq-3',
    question: 'Tại sao trí thức lại được gọi là "tầng lớp" mà không phải là một "giai cấp" độc lập?',
    category: 'Lý luận',
    keywords: ['trí thức', 'tầng lớp', 'giai cấp', 'độc lập'],
    answer: 'Theo định nghĩa của V.I. Lênin, giai cấp được xác định dựa trên quan hệ sở hữu đối với tư liệu sản xuất và vị trí trong hệ thống phân công lao động xã hội. Đội ngũ trí thức không có quan hệ sở hữu tư liệu sản xuất riêng biệt độc lập, mà xuất thân từ mọi giai cấp khác nhau (con em công nhân, nông dân, trí thức...) và phục vụ cho các giai cấp khác nhau. Trí thức là một tầng lớp xã hội đặc biệt - lao động bằng trí tuệ, là tinh hoa tri thức, luôn liên minh và gắn bó mật thiết với giai cấp lãnh đạo để phát huy vai trò.'
  },
  {
    id: 'faq-4',
    question: 'Cơ cấu xã hội - giai cấp ở Việt Nam hiện nay có mâu thuẫn đối kháng giai cấp không?',
    category: 'Phản biện Giảng viên',
    keywords: ['đối kháng', 'mâu thuẫn', 'xã hội', 'thống nhất'],
    answer: 'Không có mâu thuẫn đối kháng giai cấp gay gắt. Bởi vì mọi giai cấp, tầng lớp ở Việt Nam đều đặt dưới sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam và đều chung mục tiêu: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh". Tuy nhiên, vẫn tồn tại những mâu thuẫn không đối kháng (như chênh lệch giàu nghèo, khác biệt về thu nhập, lợi ích cục bộ ngành nghề). Những mâu thuẫn này được giải quyết thông qua luật pháp, chính sách an sinh xã hội và sự điều tiết của Nhà nước pháp quyền XHCN.'
  },
  {
    id: 'faq-5',
    question: 'Sinh viên chúng ta có vị trí và trách nhiệm gì đối với khối liên minh giai cấp hiện nay?',
    category: 'Thực tiễn',
    keywords: ['sinh viên', 'trách nhiệm', 'thanh niên', '4.0'],
    answer: 'Sinh viên là nguồn lực kế cận trực tiếp của đội ngũ trí thức và giai cấp công nhân hiện đại trong kỷ nguyên số. Trách nhiệm của sinh viên gồm: 1) Học tập, làm chủ khoa học công nghệ mũi nhọn (AI, bán dẫn, chuyển đổi số); 2) Trau dồi bản lĩnh chính trị vững vàng, hiểu đúng đường lối của Đảng; 3) Rèn luyện tác phong công nghiệp, kỷ luật và ngoại ngữ; 4) Tích cực tham gia các hoạt động vì cộng đồng, chuyển giao tri thức về nông thôn, phụng sự Tổ quốc.'
  }
];

export const PRESENTATION_SLIDES: Slide[] = [
  {
    id: 'slide-1',
    sectionId: 'hero',
    sectionTitle: 'Khai mạc',
    slideNumber: 1,
    title: 'Cơ Cấu Xã Hội - Giai Cấp & Liên Minh Giai Cấp, Tầng Lớp',
    subtitle: 'Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam · Học phần MLN131 (Chương 5, Mục III)',
    speaker: 'Nguyễn Văn A',
    speakerRole: 'Trưởng nhóm Thuyết trình',
    duration: '2 phút',
    script: 'Kính chào Thầy Cô và toàn thể các bạn sinh viên! Trong dòng chảy xây dựng đất nước thời kỳ quá độ lên chủ nghĩa xã hội, Đảng ta luôn khẳng định: Nhận thức đúng đắn cơ cấu xã hội - giai cấp và củng cố vững chắc khối liên minh công nhân - nông dân - trí thức là vấn đề có ý nghĩa chiến lược sống còn. Hôm nay, nhóm chúng em xin trân trọng trình bày chuyên đề Phần III: "Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam". Kính mời Thầy Cô và các bạn cùng theo dõi!',
    keyPoints: [
      'Xác định vị trí then chốt của cơ cấu xã hội - giai cấp trong hệ thống xã hội.',
      'Làm rõ sự biến đổi có tính quy luật trong nền kinh tế thị trường định hướng XHCN.',
      'Phân tích tính tất yếu và 3 trụ cột liên minh: Kinh tế, Chính trị, Văn hóa - Xã hội.'
    ],
    quote: {
      text: 'Không có liên minh công nông và trí thức thì không thể xây dựng được chủ nghĩa xã hội.',
      author: 'V.I. Lênin'
    }
  },
  {
    id: 'slide-2',
    sectionId: 'tong-quan',
    sectionTitle: 'Bối cảnh & Quy luật',
    slideNumber: 2,
    title: 'Tính Quy Luật Biến Đổi Cơ Cấu Xã Hội - Giai Cấp',
    subtitle: 'Sự tương tác giữa Cơ cấu kinh tế nhiều thành phần và Cơ cấu giai tầng xã hội',
    speaker: 'Nguyễn Văn A',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Thưa Thầy Cô và các bạn, bước vào thời kỳ quá độ, cơ cấu xã hội - giai cấp của nước ta biến đổi theo một quy luật rất đặc thù. Nó không còn đơn giản, thuần nhất như thời kỳ bao cấp, mà bị chi phối trực tiếp bởi nền kinh tế thị trường định hướng XHCN với nhiều hình thức sở hữu. Kinh tế biến đổi đa dạng kéo theo cơ cấu giai cấp biến đổi vừa đa dạng, phức tạp nhưng lại vừa thống nhất dưới sự lãnh đạo của Đảng Cộng sản Việt Nam. Điểm cốt lõi là xu hướng các giai cấp đang ngày càng xích lại gần nhau vì mục tiêu chung: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh!',
    keyPoints: [
      'Cơ cấu kinh tế nhiều thành phần quyết định tính đa dạng, phức tạp của cơ cấu giai cấp.',
      'Tính thống nhất cao độ: Đặt dưới sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam.',
      'Xu hướng bao trùm: Xích lại gần nhau về sở hữu, tính chất lao động và hưởng thụ văn hóa.'
    ],
    quote: {
      text: 'Cơ cấu xã hội - giai cấp biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế.',
      author: 'Giáo trình CNXHKH (Bộ GD&ĐT, 2021)'
    }
  },
  {
    id: 'slide-3',
    sectionId: 'giai-tang',
    sectionTitle: '5 Giai tầng',
    slideNumber: 3,
    title: 'Vị Thế & Biến Đổi Của Giai Cấp Công Nhân Việt Nam',
    subtitle: 'Lực lượng lãnh đạo cách mạng và nòng cốt trong sự nghiệp CNH, HĐH đất nước',
    speaker: 'Trần Thị B',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Tiếp theo, bạn Trần Thị B xin trình bày về trụ cột đầu tiên: Giai cấp công nhân Việt Nam. Thưa các bạn, công nhân nước ta hiện có hơn 17 triệu lao động, đóng góp trên 60% GDP. Trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư, công nhân Việt Nam đang chuyển mình mạnh mẽ từ lao động cơ bắp sang lao động trí tuệ, làm chủ robot tự động và công nghệ số. Dù làm việc trong doanh nghiệp nhà nước hay doanh nghiệp FDI, bản chất giai cấp tiên phong và vai trò lãnh đạo cách mạng thông qua Đảng vẫn là nguyên tắc bất biến!',
    keyPoints: [
      'Giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam.',
      'Chuyển dịch cơ cấu mạnh mẽ: Xu hướng trí thức hóa công nhân (công nhân áo trắng).',
      'Thách thức lớn về nâng cao tỷ lệ qua đào tạo và đảm bảo an sinh nhà ở, đời sống tinh thần.'
    ]
  },
  {
    id: 'slide-4',
    sectionId: 'giai-tang',
    sectionTitle: '5 Giai tầng',
    slideNumber: 4,
    title: 'Giai Cấp Nông Dân & Đội Ngũ Trí Thức Trong Kỷ Nguyên Mới',
    subtitle: 'Nông dân hiện đại và Trí thức sáng tạo - Hai động lực chiến lược của dân tộc',
    speaker: 'Trần Thị B',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Xin Thầy Cô và các bạn hãy nhìn vào bức tranh nông thôn hôm nay. Nông dân chiếm hơn 60% dân số, không còn bó hẹp trong lối canh tác cũ mà đang trở thành "nông dân 4.0", làm chủ nông nghiệp công nghệ cao, đưa Việt Nam vào top xuất khẩu nông sản thế giới. Song hành cùng nông dân là đội ngũ trí thức - vốn liếng quý báu của dân tộc. Trí thức chính là khối óc sáng tạo, nghiên cứu giống mới, phần mềm quản lý, và vạch ra giải pháp ứng phó biến đổi khí hậu để chắp cánh cho nông nghiệp và công nghiệp cất cánh!',
    keyPoints: [
      'Nông dân là chủ thể trong xây dựng nông thôn mới, chuyển từ nông dân truyền thống sang nông dân số.',
      'Trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng, tài nguyên trí tuệ của đất nước.',
      'Sự hòa quyện mật thiết giữa trí thức và nông dân tạo nên sức bật kinh tế nông nghiệp hàng hóa.'
    ]
  },
  {
    id: 'slide-5',
    sectionId: 'giai-tang',
    sectionTitle: '5 Giai tầng',
    slideNumber: 5,
    title: 'Đội Ngũ Doanh Nhân & Tầng Lớp Phụ Nữ, Thế Hệ Trẻ',
    subtitle: 'Động lực bứt phá kinh tế tư nhân và rường cột tương lai của đất nước',
    speaker: 'Trần Thị B',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Một điểm rất mới và tiến bộ trong văn kiện Đảng ta là vị trí của đội ngũ doanh nhân. Doanh nhân không phải đối tượng bị gạt ra ngoài, mà là lực lượng xung kích kiến tạo trên 50% GDP và hơn 85% việc làm mới. Cùng với đó, phụ nữ và thế hệ trẻ - những sinh viên như chúng ta hôm nay - là ngọn lửa xung kích đổi mới sáng tạo, chuyển đổi số cộng đồng. Khối liên minh xã hội vì thế trở nên tràn đầy sinh lực và đa dạng sắc màu!',
    keyPoints: [
      'Doanh nhân là lực lượng xung kích phát triển kinh tế thị trường, mang tinh thần phụng sự dân tộc.',
      'Phụ nữ khẳng định vai trò bình đẳng giới, đóng góp to lớn trên mọi mặt trận chính trị - kinh tế.',
      'Thanh niên, sinh viên là lực lượng xung kích làm chủ công nghệ, gánh vác tương lai đất nước.'
    ]
  },
  {
    id: 'slide-6',
    sectionId: 'lien-minh',
    sectionTitle: 'Bản chất Liên minh',
    slideNumber: 6,
    title: 'Tính Tất Yếu Của Khối Liên Minh Giai Cấp, Tầng Lớp',
    subtitle: 'Tại sao công nhân, nông dân và trí thức bắt buộc phải liên minh chặt chẽ?',
    speaker: 'Lê Hoàng C',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Kính thưa Thầy Cô và các bạn, em là Lê Hoàng C. Bây giờ chúng ta bước sang Mục III.2: Liên minh giai cấp, tầng lớp. Tại sao liên minh lại là tất yếu khách quan? V.I. Lênin đã chỉ rõ: Nếu chỉ có giai cấp công nhân đơn độc thì không thể đánh đổ được chế độ cũ và càng không thể xây dựng thành công chế độ mới. Ở Việt Nam, tính tất yếu này xuất phát từ: Thứ nhất, về chính trị - tạo dựng bức tường thành bảo vệ Tổ quốc; Thứ hai, về kinh tế - sự gắn kết cung - cầu sống còn giữa công nghiệp, nông nghiệp và khoa học kỹ thuật; Thứ ba, về xã hội - nhằm nâng cao đời sống và thực hiện công bằng xã hội.',
    keyPoints: [
      'Góc độ Chính trị: Xây dựng nền tảng chính trị vững chắc của Nhà nước pháp quyền XHCN.',
      'Góc độ Kinh tế: Yêu cầu khách quan của nền kinh tế nhiều thành phần và phân công lao động.',
      'Góc độ Xã hội: Xóa bỏ khoảng cách phát triển giữa thành thị và nông thôn, củng cố lòng dân.'
    ],
    quote: {
      text: 'Chỉ có sự liên minh giữa công nhân, nông dân và trí thức mới tạo ra được sức mạnh vô địch để xây dựng xã hội mới.',
      author: 'Hồ Chí Minh'
    }
  },
  {
    id: 'slide-7',
    sectionId: 'tam-giac',
    sectionTitle: '3 Nội dung',
    slideNumber: 7,
    title: 'Nội Dung Kinh Tế Của Liên Minh: Cơ Sở Quyết Định Nhất',
    subtitle: 'Kết hợp hài hòa lợi ích kinh tế và tổ chức sản xuất hiện đại',
    speaker: 'Lê Hoàng C',
    speakerRole: 'Thành viên Nhóm',
    duration: '4 phút',
    script: 'Thưa Thầy Cô, khi nghiên cứu về liên minh, câu hỏi quan trọng nhất là: Nội dung nào là quyết định nhất? Câu trả lời chính là: KINH TẾ. Bác Hồ từng dạy: "Có thực mới vực được đạo". Liên minh không thể bền vững bằng những lời hứa suông nếu đời sống của công nhân và nông dân không được nâng cao. Nội dung kinh tế đòi hỏi: Đẩy mạnh công nghiệp hóa, hiện đại hóa nông nghiệp; hình thành các chuỗi giá trị khép kín; phân phối hợp lý lợi nhuận để người nông dân một nắng hai sương không bị ép giá, công nhân có tiền lương xứng đáng và doanh nghiệp có động lực tái đầu tư!',
    keyPoints: [
      'Lợi ích kinh tế là động lực trực tiếp gắn kết các tầng lớp nhân dân.',
      'Đẩy mạnh CNH, HĐH đất nước gắn với phát triển kinh tế tri thức và bảo vệ môi trường.',
      'Xây dựng chuỗi liên kết giá trị và cơ chế phân phối công bằng theo kết quả lao động.'
    ]
  },
  {
    id: 'slide-8',
    sectionId: 'tam-giac',
    sectionTitle: '3 Nội dung',
    slideNumber: 8,
    title: 'Nội Dung Chính Trị & Văn Hóa - Xã Hội Của Liên Minh',
    subtitle: 'Giữ vững ngọn cờ lãnh đạo của Đảng và thước đo nhân văn xã hội chủ nghĩa',
    speaker: 'Lê Hoàng C',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Nếu nội dung kinh tế là cái móng nhà, thì nội dung chính trị chính là rường cột định hướng. Liên minh phải giữ vững sự lãnh đạo của Đảng Cộng sản Việt Nam và nền tảng Nhà nước pháp quyền của Nhân dân. Đồng thời, nội dung văn hóa - xã hội là thước đo tính ưu việt của chế độ chúng ta: Đó là chủ trương "Không để ai bị bỏ lại phía sau", nâng cao dân trí, phát triển y tế, giáo dục vùng sâu vùng xa, và xây dựng hệ giá trị con người Việt Nam tiên tiến, đậm đà bản sắc dân tộc.',
    keyPoints: [
      'Chính trị: Giữ vững vai trò lãnh đạo của Đảng; đập tan âm mưu chia rẽ của các thế lực thù địch.',
      'Văn hóa - Xã hội: Tăng trưởng kinh tế phải đi đôi với tiến bộ và công bằng xã hội.',
      'Phát huy quyền làm chủ: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.'
    ]
  },
  {
    id: 'slide-9',
    sectionId: 'so-do-4-nha',
    sectionTitle: 'Mô hình 4 Nhà',
    slideNumber: 9,
    title: 'Mô Hình "Liên Kết 4 Nhà" - Hiện Thân Thực Tiễn Sống Động',
    subtitle: 'Nhà nước · Nhà khoa học · Nhà doanh nghiệp · Nhà nông trong nông nghiệp hiện đại',
    speaker: 'Phạm Minh D',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Kính thưa Thầy Cô và các bạn, em là Phạm Minh D. Để biến lý luận thành hiện thực, Việt Nam đã xây dựng mô hình "Liên kết 4 Nhà" nổi tiếng. Hãy nhìn vào hạt gạo ST25 ngon nhất thế giới: Nhà khoa học (Kỹ sư Hồ Quang Cua và cộng sự) dày công lai tạo; Nhà nước quy hoạch hạ tầng tưới tiêu và cấp mã vùng trồng; Doanh nghiệp đầu tư nhà máy sấy, chế biến và xúc tiến xuất khẩu; và Nhà nông cần cù canh tác đúng chuẩn. Đây chính là minh chứng hùng hồn nhất cho liên minh công - nông - trí - doanh!',
    keyPoints: [
      'Nhà nước: Kiến tạo cơ chế, quy hoạch và bảo hộ pháp lý.',
      'Nhà khoa học (Trí thức): Nghiên cứu giống, công nghệ sinh học và kỹ thuật thông minh.',
      'Nhà doanh nghiệp: Đầu tư vốn, chế biến sâu, xây dựng thương hiệu và mở rộng thị trường.',
      'Nhà nông: Trực tiếp sản xuất, liên kết hợp tác xã để hình thành cánh đồng mẫu lớn.'
    ]
  },
  {
    id: 'slide-10',
    sectionId: 'dong-thoi-gian',
    sectionTitle: 'Dòng thời gian',
    slideNumber: 10,
    title: 'Sự Phát Triển Nhận Thức Của Đảng Qua Các Kỳ Đại Hội',
    subtitle: 'Hành trình từ Đổi mới 1986 đến khát vọng Đại hội XIII (2021)',
    speaker: 'Phạm Minh D',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Nhìn lại 40 năm Đổi mới, nhận thức của Đảng ta về cơ cấu xã hội - giai cấp đã có những bước tiến vượt bậc. Từ chỗ chỉ nhìn nhận đơn giản, chúng ta đã tiến đến tôn vinh đầy đủ vị thế của doanh nhân, trí thức, thanh niên và phụ nữ. Đại hội XIII khẳng định: Khát vọng phát triển đất nước phồn vinh, hạnh phúc chỉ có thể đạt được khi khơi dậy tối đa sức mạnh khối đại đoàn kết toàn dân tộc trên nền tảng liên minh công - nông - trí thức!',
    keyPoints: [
      'Đại hội VI (1986): Thừa nhận nền kinh tế nhiều thành phần và tính đa dạng giai tầng.',
      'Đại hội VII - VIII: Chính thức bổ sung đội ngũ trí thức vào nền tảng cốt lõi của khối liên minh.',
      'Đại hội IX - XII: Định hình KTTT định hướng XHCN, tôn vinh vai trò của doanh nhân.',
      'Đại hội XIII (2021): Khơi dậy khát vọng phát triển đất nước, chuyển đổi số quốc gia.'
    ]
  },
  {
    id: 'slide-11',
    sectionId: 'quiz',
    sectionTitle: 'Trắc nghiệm',
    slideNumber: 11,
    title: 'Đấu Trường Trắc Nghiệm: Ôn Tập Nhanh MLN131',
    subtitle: 'Củng cố kiến thức trọng tâm Giáo trình Chủ nghĩa Xã hội Khoa học',
    speaker: 'Phạm Minh D',
    speakerRole: 'Điều hành Minigame',
    duration: '3 phút',
    script: 'Để buổi thuyết trình thêm phần sôi nổi, nhóm em xin kính mời Thầy Cô và các bạn sinh viên cùng tham gia Minigame Trắc nghiệm ngắn gồm 5 câu hỏi bám sát kiến thức cốt lõi. Các bạn có thể trực tiếp chọn đáp án trên màn hình và xem ngay giải thích học thuật nhé!',
    keyPoints: [
      '5 câu hỏi trắc nghiệm sát với đề thi kết thúc học phần MLN131.',
      'Tích hợp chấm điểm tức thì, hiệu ứng âm thanh và giải thích khoa học.',
      'Tạo không khí tương tác sôi nổi giữa người thuyết trình và người nghe.'
    ]
  },
  {
    id: 'slide-12',
    sectionId: 'phu-luc-ai',
    sectionTitle: 'Tổng kết & Hỏi đáp',
    slideNumber: 12,
    title: 'Tổng Kết & Lời Cảm Ơn · Không Gian Hỏi Đáp Q&A',
    subtitle: 'Sẵn sàng giải đáp phản biện của Giảng viên và Sinh viên với Trợ lý AI MLN131',
    speaker: 'Cả Nhóm Thuyết trình',
    speakerRole: 'Đại diện Nhóm',
    duration: '2 phút',
    script: 'Kính thưa Thầy Cô và các bạn! Cơ cấu xã hội - giai cấp và liên minh giai cấp không phải là những trang lý luận khô khan trên giảng đường, mà chính là hơi thở cuộc sống, là nền móng để dân tộc Việt Nam tự tin bước vào kỷ nguyên vươn mình của dân tộc. Nhóm chúng em xin chân thành cảm ơn sự lắng nghe và theo dõi của Thầy Cô và các bạn. Chúng em xin sẵn sàng lắng nghe mọi ý kiến đóng góp, nhận xét và câu hỏi phản biện từ Thầy Cô và cả lớp!',
    keyPoints: [
      'Tổng kết ngắn gọn thông điệp cốt lõi của chuyên đề.',
      'Kêu gọi tinh thần trách nhiệm của sinh viên đối với sự phát triển đất nước.',
      'Mở không gian hỏi đáp tương tác trực tiếp và tra cứu nhanh qua Trợ lý AI.'
    ]
  }
];
