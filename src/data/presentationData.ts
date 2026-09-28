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
  quoteAuthor?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  imageUrl?: string;
  imageCaption?: string;
  secondaryImageUrl?: string;
  secondaryImageCaption?: string;
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
  practicalExplanation?: string;
  practicalExamples: string[];
  sourceLabel?: string;
  sourceUrl?: string;
  images?: { url: string; caption: string }[];
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

export interface DirectionItem {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  badge: string;
  iconName: string;
  color: string;
  pagesRef?: string;
  coreContent: string;
  keyMeasures: string[];
  groupPolicies?: {
    group: string;
    icon: string;
    policy: string;
  }[];
  significance: string;
  sourceLabel?: string;
  sourceUrl?: string;
  imageUrl?: string;
  imageCaption?: string;
}

export const PRESENTATION_CONFIG = {
  subjectCode: 'MLN131',
  subjectName: 'Chủ nghĩa Xã hội Khoa học',
  chapter: 'Chuyên đề',
  chapterTitle: 'Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam',
  textbookRef: 'Giáo trình Chủ nghĩa Xã hội Khoa học',
  groupName: 'Nhóm Thuyết trình MLN131',
  presentationDate: 'Kỳ Fall2026',
};

export const TEAM_MEMBERS = [
  {
    name: 'Nguyễn Văn A',
    studentId: 'B21DCCN001',
    role: 'Trưởng nhóm · Thuyết trình Bối cảnh, Khái niệm & Cơ sở hình thành',
    parts: 'Khái niệm & Cơ sở hình thành (Cơ cấu kinh tế, Nhiều thành phần, CNH-HĐH, KH-CN)'
  },
  {
    name: 'Trần Thị B',
    studentId: 'B21DCCN002',
    role: 'Thành viên · Thuyết trình Đặc điểm & Cơ cấu giai cấp',
    parts: '3 Đặc điểm cơ cấu giai cấp & 5 giai cấp/tầng lớp: Công nhân, Nông dân, Trí thức, Doanh nhân, Phụ nữ & Thanh niên'
  },
  {
    name: 'Lê Hoàng C',
    studentId: 'B21DCCN003',
    role: 'Thành viên · Thuyết trình Bản chất & 3 Nội dung Liên minh',
    parts: 'Bản chất liên minh & 3 Nội dung Liên minh: Kinh tế (quyết định nhất), Chính trị, Văn hóa - Xã hội'
  },
  {
    name: 'Phạm Minh D',
    studentId: 'B21DCCN004',
    role: 'Thành viên · Thuyết trình 5 Phương hướng cơ bản & Điều hành Minigame',
    parts: '5 Phương hướng xây dựng cơ cấu & liên minh, Minigame Trắc nghiệm Hội trường & Q&A'
  }
];

export const NAV_ITEMS = [
  { id: 'tong-quan', label: 'Bối cảnh' },
  { id: 'giai-tang', label: 'Cơ cấu giai cấp' },
  { id: 'lien-minh', label: 'Bản chất Liên minh' },
  { id: 'tam-giac', label: 'Nội dung' },
  { id: 'phuong-huong', label: 'Phương hướng' },
  { id: 'quiz', label: 'Trắc nghiệm' },
  { id: 'quet-ma', label: 'Quét mã' }
];

export const CLASS_PILLARS: ClassPillar[] = [
  {
    id: 'cong-nhan',
    name: 'Giai cấp Công nhân',
    shortName: 'Công nhân',
    badge: 'Giai cấp Lãnh đạo',
    iconName: 'Hammer',
    accentColor: '#b5403a',
    position: 'Là giai cấp lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam; đại diện cho phương thức sản xuất tiên tiến; giữ vai trò tiên phong trong công nghiệp hóa, hiện đại hóa và là lực lượng nòng cốt trong liên minh công nhân – nông dân – trí thức.',
    statistics: [
      { label: 'Quy mô lao động', value: '> 17 triệu', trend: 'Tăng trưởng đều đặn hàng năm' },
      { label: 'Đóng góp GDP', value: '> 60%', trend: 'Nòng cốt trong khu vực công nghiệp & dịch vụ' },
      { label: 'Tỷ lệ qua đào tạo', value: '~ 28 - 30%', trend: 'Cần nâng cao trình độ tay nghề công nghệ cao' }
    ],
    characteristics: [
      'Là giai cấp lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam.',
      'Đại diện cho phương thức sản xuất tiên tiến.',
      'Giữ vai trò tiên phong trong công nghiệp hóa, hiện đại hóa.',
      'Là lực lượng nòng cốt trong liên minh công nhân – nông dân – trí thức.'
    ],
    trends: [
      'Tăng về số lượng và chất lượng.',
      'Cơ cấu nghề nghiệp ngày càng đa dạng.',
      'Bộ phận công nhân trí thức ngày càng phát triển.'
    ],
    challenges: [
      'Nguy cơ bị thay thế bởi robot và tự động hoá nếu không kịp chuyển đổi số kỹ năng nghề.',
      'Đời sống, nhà ở công nhân, thiết chế văn hóa tại một số khu chế xuất còn nhiều khó khăn.'
    ],
    quote: 'Giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam, đại diện cho phương thức sản xuất tiên tiến.',
    quoteAuthor: 'Giáo trình CNXHKH & Văn kiện Đảng',
    sourceLabel: 'Sứ mệnh lịch sử của giai cấp công nhân',
    imageUrl: '/images/docx/image6.png',
    imageCaption: 'Chủ tịch Hồ Chí Minh thăm và động viên công nhân đang thao tác máy móc kỹ thuật tại nhà máy',
    scriptNote: 'Nhấn mạnh: Trong kinh tế thị trường, bản chất cách mạng của giai cấp công nhân không hề mất đi, mà đang được hiện đại hóa với tri thức công nghệ mới!'
  },
  {
    id: 'nong-dan',
    name: 'Giai cấp Nông dân',
    shortName: 'Nông dân',
    badge: 'Chiến lược Tam Nông',
    iconName: 'Wheat',
    accentColor: '#34d399',
    position: 'Có vị trí quan trọng trong phát triển nông nghiệp, nông thôn và xây dựng nông thôn mới; góp phần bảo đảm ổn định xã hội và phát triển đất nước.',
    statistics: [
      { label: 'Tỷ trọng dân số', value: '~ 62%', trend: 'Khu vực nông thôn đang đô thị hóa' },
      { label: 'Lao động nông nghiệp', value: '~ 27%', trend: 'Giảm dần chuyển sang công nghiệp/dịch vụ' },
      { label: 'Xuất khẩu nông sản', value: '> 53 tỷ USD', trend: 'Top đầu thế giới về gạo, cà phê, sầu riêng' }
    ],
    characteristics: [
      'Có vị trí quan trọng trong phát triển nông nghiệp, nông thôn và xây dựng nông thôn mới.',
      'Góp phần bảo đảm ổn định xã hội và phát triển đất nước.'
    ],
    trends: [
      'Cơ cấu ngày càng đa dạng.',
      'Tỷ lệ lao động nông nghiệp có xu hướng giảm.',
      'Một bộ phận chuyển sang công nghiệp và dịch vụ, trở thành công nhân hoặc lao động ở các lĩnh vực khác.'
    ],
    challenges: [
      'Biến đổi khí hậu (xâm nhập mặn ĐBSCL, hạn hán Tây Nguyên) ảnh hưởng trực tiếp đến sinh kế.',
      'Tình trạng ly nông - ly hương, già hóa dân số nông thôn khi thanh niên di cư về đô thị.'
    ],
    quote: 'Nông dân ta giàu thì nước ta giàu. Nông nghiệp ta thịnh thì nước ta thịnh.',
    quoteAuthor: 'Chủ tịch Hồ Chí Minh',
    sourceLabel: 'Phát huy vai trò của giai cấp nông dân',
    imageUrl: '/images/docx/image5.png',
    imageCaption: 'Bác Hồ nói chuyện thân tình cùng bà con nông dân đang gặt lúa trên đồng ruộng: "Nông dân ta giàu thì nước ta giàu. Nông nghiệp ta thịnh thì nước ta thịnh"',
    scriptNote: 'Bác Hồ coi trọng đặc biệt vai trò của nông dân: Nông dân ta giàu thì nước ta giàu, nông nghiệp thịnh thì nước ta thịnh!'
  },
  {
    id: 'tri-thuc',
    name: 'Đội ngũ Trí thức',
    shortName: 'Trí thức',
    badge: 'Vốn Liếng Quý Báu',
    iconName: 'GraduationCap',
    accentColor: '#e6c98c',
    position: 'Là lực lượng lao động sáng tạo đặc biệt quan trọng; có vai trò to lớn trong công nghiệp hóa, hiện đại hóa, kinh tế tri thức, khoa học – công nghệ và phát triển văn hóa; là một bộ phận quan trọng của liên minh công nhân – nông dân – trí thức.',
    statistics: [
      { label: 'Quy mô đội ngũ', value: '> 6.5 triệu', trend: 'Tăng trưởng hơn gấp 3 lần sau 20 năm' },
      { label: 'Tỷ lệ đóng góp TFP', value: '> 45%', trend: 'Đóng góp của năng suất các yếu tố tổng hợp' },
      { label: 'Công bố quốc tế', value: 'Tăng 15%/năm', trend: 'Nhiều bằng sáng chế công nghệ cao' }
    ],
    characteristics: [
      'Là lực lượng lao động sáng tạo đặc biệt quan trọng.',
      'Có vai trò trong công nghiệp hóa, hiện đại hóa, kinh tế tri thức, khoa học – công nghệ và phát triển văn hóa.',
      'Là một bộ phận quan trọng của liên minh công nhân – nông dân – trí thức.'
    ],
    trends: [
      'Tăng về số lượng và chất lượng.',
      'Ngày càng giữ vai trò lớn trong khoa học – công nghệ, đổi mới sáng tạo và kinh tế tri thức.'
    ],
    challenges: [
      'Chảy máu chất xám (Brain drain) sang khu vực tư nhân hoặc các quốc gia phát triển.',
      'Cơ chế trọng dụng và đãi ngộ nhân tài, tự chủ học thuật vẫn cần tiếp tục hoàn thiện.'
    ],
    quote: 'Trí thức là vốn liếng quý báu của dân tộc.',
    quoteAuthor: 'Chủ tịch Hồ Chí Minh',
    sourceLabel: 'Xây dựng đội ngũ trí thức theo tư tưởng Hồ Chí Minh',
    imageUrl: '/images/docx/image9.png',
    imageCaption: 'Bác Hồ gặp gỡ, trò chuyện cùng các nhà khoa học, trí thức tiêu biểu: "Trí thức là vốn liếng quý báu của dân tộc"',
    secondaryImageUrl: '/images/docx/image17.png',
    secondaryImageCaption: 'Thủ tướng Phạm Minh Chính thăm các nhà khoa học, trí thức trẻ tại phòng thí nghiệm công nghệ sinh học',
    scriptNote: 'Bác Hồ khẳng định: Trí thức là vốn liếng quý báu của dân tộc, đưa tri thức gắn liền với xưởng máy và ruộng đồng.'
  },
  {
    id: 'doanh-nhan',
    name: 'Đội ngũ Doanh nhân',
    shortName: 'Doanh nhân',
    badge: 'Lực lượng Xung kích',
    iconName: 'Briefcase',
    accentColor: '#f59e0b',
    position: 'Là tầng lớp phát triển nhanh về số lượng và quy mô trong thời kỳ đổi mới; đóng góp to lớn vào phát triển kinh tế, tạo việc làm và thực hiện an sinh xã hội.',
    statistics: [
      { label: 'Số lượng doanh nghiệp', value: '> 900.000 DN', trend: 'Cùng hơn 5 triệu hộ kinh doanh cá thể' },
      { label: 'Đóng góp GDP', value: '> 50%', trend: 'Khu vực kinh tế tư nhân là động lực quan trọng' },
      { label: 'Tạo việc làm mới', value: '> 85%', trend: 'Giải quyết việc làm cho lực lượng lao động xã hội' }
    ],
    characteristics: [
      'Là tầng lớp phát triển nhanh về số lượng và quy mô trong thời kỳ đổi mới.',
      'Đóng góp vào phát triển kinh tế, tạo việc làm và thực hiện an sinh xã hội.'
    ],
    trends: [
      'Tiếp tục phát triển cả về số lượng và chất lượng.',
      'Yêu cầu ngày càng cao về năng lực quản trị, đạo đức kinh doanh, trách nhiệm xã hội và khả năng cạnh tranh.',
      'Định hướng xây dựng đội ngũ doanh nhân có tinh thần cống hiến cho dân tộc, chuẩn mực văn hóa và trình độ quản trị, kinh doanh tốt.'
    ],
    challenges: [
      'Quy mô đa phần là doanh nghiệp nhỏ và vừa (SMEs), khả năng chống chịu trước biến động chuỗi cung ứng còn hạn chế.',
      'Cần xây dựng đạo đức kinh doanh văn minh, trách nhiệm xã hội và bảo vệ môi trường sinh thái.'
    ],
    quote: 'Xây dựng đội ngũ doanh nhân lớn mạnh, có tinh thần cống hiến cho dân tộc, chuẩn mực văn hóa và trình độ quản trị, kinh doanh tốt.',
    quoteAuthor: 'Nghị quyết 41-NQ/TW của Bộ Chính trị',
    sourceLabel: 'Phát huy vai trò của đội ngũ doanh nhân',
    imageUrl: '/images/docx/image12.png',
    imageCaption: 'Lễ kỷ niệm Ngày Doanh nhân Việt Nam 13/10 - Tôn vinh Doanh nhân Việt Nam tiêu biểu',
    scriptNote: 'Doanh nhân trong KTTT định hướng XHCN không đối kháng mà đồng hành cùng công nhân, nông dân, trí thức vì mục tiêu dân giàu, nước mạnh.'
  },
  {
    id: 'phu-nu-thanh-nien',
    name: 'Tầng lớp Phụ nữ & Thế hệ Trẻ',
    shortName: 'Phụ nữ & Thế hệ Trẻ',
    badge: 'Chính sách Đặc thù',
    iconName: 'Sparkles',
    accentColor: '#ec4899',
    position: 'Các lực lượng xã hội được chú trọng đặc biệt trong hệ thống chính sách xã hội: Phụ nữ là lực lượng to lớn trong mọi lĩnh vực; Thanh niên là rường cột nước nhà, chủ nhân tương lai của đất nước.',
    statistics: [
      { label: 'Tỷ lệ nữ ĐBQH', value: '> 30%', trend: 'Cao hàng đầu khu vực ASEAN' },
      { label: 'Lực lượng thanh niên', value: '~ 22 triệu', trend: 'Thời kỳ dân số vàng của Việt Nam' },
      { label: 'Khởi nghiệp đổi mới', value: '> 70%', trend: 'Ý tưởng khởi nghiệp đến từ người trẻ' }
    ],
    characteristics: [
      'Phụ nữ Việt Nam phát huy truyền thống yêu nước, bản lĩnh, nhân ái, có vai trò to lớn trong gia đình và xã hội.',
      'Thanh niên là lực lượng xung kích trong học tập, lao động, chuyển đổi số và bảo vệ Tổ quốc.'
    ],
    trends: [
      'Thanh niên, sinh viên là lực lượng tiên phong trong phong trào khởi nghiệp sáng tạo và kinh tế số.',
      'Phụ nữ ngày càng khẳng định vị thế bình đẳng trong lãnh đạo, quản lý và hoạt động kinh tế.'
    ],
    challenges: [
      'Yêu cầu nâng cao kỹ năng số, thích ứng với cách mạng công nghiệp 4.0 và hội nhập quốc tế.',
      'Thực hiện bình đẳng giới thực chất, bảo vệ quyền lợi bà mẹ, trẻ em và đào tạo nghề cho thanh niên.'
    ],
    quote: 'Thanh niên là người chủ tương lai của nước nhà. Nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên.',
    quoteAuthor: 'Chủ tịch Hồ Chí Minh',
    sourceLabel: 'Chính sách an sinh và phát triển thanh niên, phụ nữ',
    imageUrl: '/images/docx/image15.png',
    imageCaption: 'Thế hệ trẻ và các tầng lớp nhân dân trong khối đại đoàn kết toàn dân tộc: Khát vọng phụng sự Tổ quốc',
    scriptNote: 'Phương hướng 2 nhấn mạnh: Cần xây dựng chính sách cho từng nhóm: công nhân, nông dân, trí thức, doanh nhân, phụ nữ, thanh niên.'
  }
];

export const ALLIANCE_PILLARS: AlliancePillar[] = [
  {
    id: 'kinh-te',
    title: 'Nội dung Kinh tế',
    nature: 'Nội dung CƠ BẢN, QUYẾT ĐỊNH NHẤT',
    color: '#d9b36b',
    summary: 'Đây là nội dung cơ bản và có ý nghĩa quyết định nhất. Mục tiêu nhằm tạo cơ sở vật chất - kỹ thuật cho CNXH, bảo đảm lợi ích kinh tế của các giai cấp, tầng lớp, tạo sự gắn bó lâu dài.',
    coreContents: [
      {
        heading: 'Mục tiêu kinh tế của liên minh',
        details: 'Tạo cơ sở vật chất - kỹ thuật cho CNXH; bảo đảm lợi ích kinh tế của các giai cấp, tầng lớp; tạo sự gắn bó lâu dài giữa công nhân, nông dân, trí thức và các lực lượng khác.'
      },
      {
        heading: 'Đẩy mạnh CNH, HĐH & Chuyển dịch cơ cấu kinh tế',
        details: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa; phát triển sản xuất; chuyển dịch cơ cấu kinh tế; phát triển nông nghiệp, nông thôn gắn với khoa học - công nghệ; nâng cao năng suất lao động.'
      },
      {
        heading: 'Mở rộng hợp tác & Hài hòa lợi ích',
        details: 'Mở rộng hợp tác giữa công nghiệp - nông nghiệp - khoa học, công nghệ - dịch vụ; bảo đảm hài hòa lợi ích giữa các giai cấp, tầng lớp trong xã hội.'
      }
    ],
    practicalExplanation: 'Có thể hiểu đơn giản: công nhân tạo ra sản phẩm công nghiệp, nông dân tạo ra sản phẩm nông nghiệp, trí thức cung cấp tri thức và công nghệ; khi ba lực lượng này phối hợp hiệu quả thì nền kinh tế phát triển bền vững hơn.',
    practicalExamples: [
      'Chuỗi liên kết công nghiệp chế biến nông sản xuất khẩu chất lượng cao (gạo, cà phê, thủy sản).',
      'Ứng dụng phần mềm IoT, cảm biến, máy bay không người lái trong quản lý đồng ruộng thông minh.',
      'Khắc phục bệnh quan liêu, hình thức trong phát triển hợp tác xã kiểu mới theo định hướng của Chính phủ.'
    ],
    sourceLabel: 'Tư tưởng Hồ Chí Minh về phát triển kinh tế thời kỳ quá độ',
    images: [
      { url: '/images/docx/image3.png', caption: 'Bác Hồ thăm nhà máy sản xuất - Tư tưởng Hồ Chí Minh về phát triển kinh tế thời kỳ quá độ' },
      { url: '/images/docx/image10.png', caption: 'Khảo sát và phát triển chuỗi giá trị nông sản an toàn của Hợp tác xã' }
    ],
    scriptNote: 'Kinh tế là nội dung cốt lõi và quyết định nhất. Khi lợi ích kinh tế của các bên được bảo đảm thì khối liên minh mới thực sự bền chặt lâu dài.'
  },
  {
    id: 'chinh-tri',
    title: 'Nội dung Chính trị',
    nature: 'Nội dung ĐỊNH HƯỚNG & BẢO ĐẢM VỮNG CHẮC',
    color: '#b5403a',
    summary: 'Mục tiêu chính là giữ vững ổn định chính trị, củng cố vai trò lãnh đạo của Đảng, phát huy quyền làm chủ của nhân dân và tăng cường khối đại đoàn kết toàn dân.',
    coreContents: [
      {
        heading: 'Mục tiêu chính trị cốt lõi',
        details: 'Giữ vững ổn định chính trị; củng cố vai trò lãnh đạo của Đảng; phát huy quyền làm chủ của nhân dân; tăng cường khối đại đoàn kết toàn dân.'
      },
      {
        heading: 'Phát huy dân chủ XHCN & Xây dựng Nhà nước pháp quyền',
        details: 'Phát huy dân chủ XHCN; bảo đảm quyền và lợi ích chính đáng của các giai cấp, tầng lớp; xây dựng Nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân.'
      },
      {
        heading: 'Tăng cường đồng thuận & Đấu tranh chống chia rẽ',
        details: 'Tăng cường đồng thuận xã hội; kiên quyết đấu tranh chống những biểu hiện chia rẽ, phá hoại khối đại đoàn kết toàn dân tộc của các thế lực thù địch.'
      }
    ],
    practicalExplanation: 'Giáo trình nhấn mạnh liên minh phải gắn chặt với việc củng cố nền tảng chính trị - xã hội của chế độ XHCN dưới sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam.',
    practicalExamples: [
      'Đại hội đại biểu toàn quốc Mặt trận Tổ quốc Việt Nam củng cố khối đại đoàn kết dân tộc.',
      'Thực hiện phương châm: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng.',
      'Phát huy vai trò phản biện xã hội của Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ.'
    ],
    sourceLabel: 'Đại hội MTTQ Việt Nam',
    images: [
      { url: '/images/docx/image4.png', caption: 'Khai mạc trọng thể Đại hội đại biểu toàn quốc Mặt trận Tổ quốc Việt Nam - Củng cố nền tảng khối đại đoàn kết' }
    ],
    scriptNote: 'Chính trị giữ vai trò định hướng bảo đảm cho liên minh đi đúng quỹ đạo XHCN, không bị chệch hướng trong kinh tế thị trường.'
  },
  {
    id: 'van-hoa-xa-hoi',
    title: 'Nội dung Văn hóa - Xã hội',
    nature: 'Nội dung MỤC TIÊU & CHẤT LƯỢNG ĐỜI SỐNG',
    color: '#4aa3a0',
    summary: 'Mục tiêu nâng cao đời sống vật chất và tinh thần, phát triển con người, thu hẹp khoảng cách xã hội, xây dựng đời sống văn hóa tiến bộ gắn với: Dân tộc – Nhân văn – Dân chủ – Khoa học.',
    coreContents: [
      {
        heading: 'Mục tiêu văn hóa - xã hội',
        details: 'Nâng cao đời sống vật chất và tinh thần; phát triển con người; thu hẹp khoảng cách xã hội; xây dựng đời sống văn hóa tiến bộ.'
      },
      {
        heading: 'Các nội dung xã hội trọng tâm',
        details: 'Phát triển giáo dục; chăm sóc sức khỏe; giải quyết việc làm; giảm nghèo bền vững; thực hiện chính sách an sinh xã hội; nâng cao đời sống văn hóa; thực hiện công bằng xã hội; xây dựng con người Việt Nam phát triển toàn diện.'
      },
      {
        heading: '4 Giá trị văn hóa cốt lõi theo Giáo trình',
        details: 'Giáo trình nhấn mạnh phát triển văn hóa phải gắn liền với 4 giá trị rường cột: Dân tộc – Nhân văn – Dân chủ – Khoa học.'
      }
    ],
    practicalExplanation: 'Phát triển văn hóa và bảo đảm an sinh xã hội là mục tiêu tối thượng nhằm mang lại hạnh phúc thực sự cho mọi giai cấp, tầng lớp nhân dân trong xã hội.',
    practicalExamples: [
      'Hướng dẫn tổ chức Ngày hội Đại đoàn kết toàn dân tộc tại các khu dân cư trên toàn quốc.',
      'Chính sách bao phủ bảo hiểm y tế toàn dân, cấp thẻ BHYT miễn phí cho hộ nghèo, cận nghèo.',
      'Phát triển mạng lưới trường học, trạm y tế, thiết chế văn hóa cơ sở tại nông thôn và khu công nghiệp.'
    ],
    sourceLabel: 'Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam',
    images: [
      { url: '/images/docx/image1.png', caption: 'Giao lưu văn hóa nghệ thuật các dân tộc tại Ngày hội Đại đoàn kết: Thấm nhuần 4 giá trị Dân tộc - Nhân văn - Dân chủ - Khoa học' }
    ],
    scriptNote: 'Văn hóa - xã hội thể hiện bản chất nhân văn ưu việt của CNXH: phát triển kinh tế vì con người, không để ai bị bỏ lại phía sau.'
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

export const DIRECTIONS_DATA: DirectionItem[] = [
  {
    id: 'phuong-huong-1',
    number: 1,
    title: 'Đẩy mạnh công nghiệp hóa, hiện đại hóa',
    shortTitle: 'Đẩy mạnh CNH, HĐH',
    badge: 'Nhiệm vụ Trung tâm',
    iconName: 'Factory',
    color: '#b5403a',
    coreContent: 'Phát triển lực lượng sản xuất; gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội; tạo môi trường để các giai cấp, tầng lớp phát triển; tạo cơ sở kinh tế cho liên minh giai cấp, tầng lớp.',
    keyMeasures: [
      'Phát triển mạnh mẽ lực lượng sản xuất và khoa học công nghệ.',
      'Gắn tăng trưởng kinh tế với bảo đảm tiến bộ, công bằng xã hội trong từng bước phát triển.',
      'Tạo môi trường thuận lợi để các giai cấp, tầng lớp phát huy tối đa năng lực.',
      'Tạo lập cơ sở kinh tế vững chắc cho khối liên minh giai cấp, tầng lớp.'
    ],
    significance: 'Kinh tế phát triển thì mới có điều kiện nâng cao đời sống và tạo sự gắn kết lợi ích giữa các lực lượng xã hội.',
    sourceLabel: 'Đẩy mạnh CNH, HĐH đất nước',
    imageUrl: '/images/docx/image8.png',
    imageCaption: 'Dây chuyền sản xuất tự động hóa công nghệ cao: Đẩy mạnh công nghiệp hóa, hiện đại hóa'
  },
  {
    id: 'phuong-huong-2',
    number: 2,
    title: 'Xây dựng và thực hiện hệ thống chính sách xã hội phù hợp',
    shortTitle: 'Chính sách xã hội phù hợp',
    badge: 'Đòn bẩy Trực tiếp',
    iconName: 'Users',
    color: '#d9b36b',
    coreContent: 'Xây dựng chính sách cho từng giai cấp, tầng lớp: công nhân, nông dân, trí thức, doanh nhân, phụ nữ, thanh niên nhằm bảo đảm quyền lợi chính đáng, tạo cơ hội phát triển, giảm chênh lệch và phân hóa giàu nghèo.',
    keyMeasures: [
      'Bảo đảm quyền lợi chính đáng và tạo cơ hội phát triển đồng đều cho mọi công dân.',
      'Giảm chênh lệch xã hội, hạn chế phân hóa giàu nghèo giữa các giai tầng và vùng miền.',
      'Tăng khả năng tiếp cận giáo dục, y tế, việc làm, nhà ở và các chế độ phúc lợi an sinh xã hội.',
      'Thực hiện chính sách bảo hiểm y tế toàn dân, hỗ trợ mua và cấp thẻ BHYT miễn phí cho hộ nghèo.'
    ],
    groupPolicies: [
      {
        group: 'Giai cấp Công nhân',
        icon: 'Hammer',
        policy: 'Quan tâm đào tạo, bồi dưỡng nâng cao trình độ văn hóa, chuyên môn, kỹ năng nghề; giải quyết việc làm, nhà ở xã hội, bệnh viện, trường học tại các khu công nghiệp; xây dựng giai cấp công nhân hiện đại, lớn mạnh.'
      },
      {
        group: 'Giai cấp Nông dân',
        icon: 'Wheat',
        policy: 'Phát huy vai trò chủ thể trong phát triển nông nghiệp, kinh tế nông thôn và xây dựng nông thôn mới; hỗ trợ vốn ưu đãi, chuyển giao KH-CN, đào tạo nghề chuyển đổi sinh kế và bảo hiểm nông nghiệp.'
      },
      {
        group: 'Đội ngũ Trí thức',
        icon: 'GraduationCap',
        policy: 'Xây dựng đội ngũ trí thức ngày càng lớn mạnh, chất lượng cao; thực hiện chính sách trọng dụng, đãi ngộ xứng đáng nhân tài; bảo vệ quyền sở hữu trí tuệ và tạo môi trường tự do học thuật, sáng tạo.'
      },
      {
        group: 'Đội ngũ Doanh nhân',
        icon: 'Briefcase',
        policy: 'Tạo môi trường kinh doanh minh bạch, bình đẳng, an toàn; khuyến khích tinh thần khởi nghiệp sáng tạo, làm giàu hợp pháp; tôn vinh doanh nhân cống hiến vì cộng đồng và phụng sự Tổ quốc.'
      },
      {
        group: 'Tầng lớp Phụ nữ',
        icon: 'Sparkles',
        policy: 'Nâng cao trình độ mọi mặt và đời sống vật chất, tinh thần; thực hiện tốt bình đẳng giới thực chất; tạo điều kiện cho phụ nữ phát triển tài năng, tham gia lãnh đạo quản lý và bảo vệ quyền lợi bà mẹ, trẻ em.'
      },
      {
        group: 'Thế hệ trẻ / Thanh niên',
        icon: 'TrendingUp',
        policy: 'Giáo dục lý tưởng cách mạng, đạo đức lối sống văn hóa; đổi mới căn bản giáo dục và đào tạo; tạo môi trường khởi nghiệp, lập nghiệp, phát huy tinh thần xung kích trong chuyển đổi số và bảo vệ Tổ quốc.'
      }
    ],
    significance: 'Giáo trình nhấn mạnh chính sách phải phù hợp với đặc điểm, vị trí và vai trò của từng nhóm xã hội.',
    sourceLabel: 'Chính sách cấp thẻ BHYT cho hộ nghèo',
    imageUrl: '/images/docx/image2.png',
    imageCaption: 'Chương trình cấp phát thẻ BHYT và an sinh xã hội cho hộ nghèo, phụ nữ và người yếu thế'
  },
  {
    id: 'phuong-huong-3',
    number: 3,
    title: 'Tạo sự đồng thuận và phát huy đại đoàn kết toàn dân',
    shortTitle: 'Đồng thuận & Đại đoàn kết',
    badge: 'Nguồn lực Sức mạnh',
    iconName: 'HeartHandshake',
    color: '#34d399',
    coreContent: 'Nâng cao nhận thức về vai trò của liên minh giai cấp, tầng lớp; phát huy vai trò của từng thành viên trong xã hội; giải quyết hài hòa lợi ích, hạn chế mâu thuẫn xã hội, tăng cường sự đồng thuận.',
    keyMeasures: [
      'Nâng cao nhận thức của toàn xã hội về vị trí chiến lược của khối liên minh giai cấp, tầng lớp.',
      'Phát huy vai trò, năng lực sáng tạo của từng thành viên trong cộng đồng xã hội.',
      'Giải quyết hài hòa quan hệ lợi ích, hạn chế mâu thuẫn xã hội nảy sinh.',
      'Tăng cường sự đồng thuận xã hội trên nền tảng mục tiêu chung: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.'
    ],
    significance: 'Mục tiêu cuối cùng là tạo thành sức mạnh tổng hợp của toàn xã hội trong sự nghiệp xây dựng và bảo vệ vững chắc Tổ quốc.',
    sourceLabel: 'Phát huy đại đoàn kết toàn dân tộc',
    imageUrl: '/images/docx/image14.png',
    imageCaption: 'Ngày hội Đại đoàn kết toàn dân tộc tại khu dân cư: Tạo sự đồng thuận và sức mạnh tổng hợp'
  },
  {
    id: 'phuong-huong-4',
    number: 4,
    title: 'Hoàn thiện thể chế kinh tế thị trường định hướng XHCN',
    shortTitle: 'Thể chế KTTT & Đổi mới sáng tạo',
    badge: 'Động lực Kinh tế',
    iconName: 'Layers',
    color: '#38bdf8',
    coreContent: 'Hoàn thiện cơ chế, chính sách; tạo môi trường thuận lợi cho sản xuất, kinh doanh; phát huy vai trò của khoa học - công nghệ; khuyến khích đổi mới sáng tạo; bảo đảm hài hòa lợi ích và tăng cường liên kết 4 lực lượng.',
    keyMeasures: [
      'Hoàn thiện cơ chế, chính sách, tạo môi trường thuận lợi cho sản xuất, kinh doanh phát triển.',
      'Phát huy vai trò của khoa học - công nghệ, khuyến khích chuyển đổi số và đổi mới sáng tạo.',
      'Tạo điều kiện thuận lợi để mọi giai cấp, tầng lớp tham gia và thụ hưởng thành quả phát triển kinh tế.',
      'Bảo đảm hài hòa lợi ích; nâng cao trình độ lực lượng lao động; tăng cường liên kết giữa công nhân, nông dân, trí thức và doanh nhân.'
    ],
    significance: 'Giải phóng triệt để sức sản xuất xã hội, tạo hành lang pháp lý thông thoáng để các chủ thể liên minh hợp tác cùng phát triển bền vững.',
    sourceLabel: 'Đổi mới công nghệ cao thúc đẩy kinh tế',
    imageUrl: '/images/docx/image16.png',
    imageCaption: 'Chuyên gia vận hành trung tâm gia công CNC hiện đại: Hoàn thiện thể chế KTTT & liên kết công nghệ cao'
  },
  {
    id: 'phuong-huong-5',
    number: 5,
    title: 'Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc và các tổ chức chính trị - xã hội',
    shortTitle: 'Đổi mới hệ thống chính trị & Đoàn thể',
    badge: 'Nhân tố Quyết định',
    iconName: 'ShieldCheck',
    color: '#a855f7',
    coreContent: 'Nâng cao hiệu quả lãnh đạo của Đảng; nâng cao hiệu lực quản lý của Nhà nước; phát huy vai trò của Mặt trận Tổ quốc; tăng cường hoạt động của Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ và các tổ chức xã hội.',
    keyMeasures: [
      'Nâng cao năng lực và hiệu quả lãnh đạo của Đảng đối với toàn xã hội.',
      'Nâng cao hiệu lực, hiệu quả quản lý, điều hành của Nhà nước pháp quyền XHCN.',
      'Phát huy mạnh mẽ vai trò tập hợp khối đại đoàn kết của Mặt trận Tổ quốc Việt Nam.',
      'Tăng cường hoạt động thiết thực của Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ trong việc đại diện và bảo vệ quyền lợi chính đáng của đoàn viên, hội viên.'
    ],
    significance: 'Tập hợp các lực lượng xã hội; bảo vệ quyền lợi chính đáng; củng cố khối đại đoàn kết; tăng cường liên minh giữa các giai cấp và tầng lớp.',
    sourceLabel: 'Đại hội Công đoàn Xây dựng giai cấp công nhân vững mạnh',
    imageUrl: '/images/docx/image11.png',
    imageCaption: 'Đại hội XIII Công đoàn Việt Nam: Đổi mới hoạt động các tổ chức chính trị - xã hội, bảo vệ người lao động'
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
    question: 'Lực lượng nào được Chủ tịch Hồ Chí Minh khẳng định là "vốn liếng quý báu của dân tộc", là lực lượng lao động sáng tạo đặc biệt quan trọng?',
    options: [
      'A. Đội ngũ Trí thức',
      'B. Đội ngũ Doanh nhân',
      'C. Giai cấp Tiểu tư sản',
      'D. Thợ thủ công truyền thống'
    ],
    correctAnswer: 0,
    explanation: 'Chủ tịch Hồ Chí Minh khẳng định: "Trí thức là vốn liếng quý báu của dân tộc", nhấn mạnh vị trí đặc biệt quan trọng của trí thức trong CNH, HĐH, kinh tế tri thức và phát triển văn hóa.',
    referencePage: 'Tài liệu chuyên đề'
  },
  {
    id: 5,
    question: 'Chủ tịch Hồ Chí Minh từng nhấn mạnh vai trò của giai cấp nào qua câu nói: "Nông dân ta giàu thì nước ta giàu. Nông nghiệp ta thịnh thì nước ta thịnh"?',
    options: [
      'A. Giai cấp Công nhân',
      'B. Giai cấp Nông dân & Nông nghiệp',
      'C. Đội ngũ Doanh nhân',
      'D. Lực lượng Hợp tác xã'
    ],
    correctAnswer: 1,
    explanation: 'Hồ Chí Minh từng nhấn mạnh: "Nông dân ta giàu thì nước ta giàu. Nông nghiệp ta thịnh thì nước ta thịnh", khẳng định vị trí chiến lược của nông dân trong bảo đảm an ninh lương thực và ổn định xã hội.',
    referencePage: 'Tài liệu chuyên đề'
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
    question: 'Theo nội dung văn hóa - xã hội của liên minh trong MLN131, sự phát triển văn hóa phải gắn liền với 4 giá trị nào?',
    options: [
      'A. Tự do - Bình đẳng - Bác ái - Hiện đại',
      'B. Dân tộc - Nhân văn - Dân chủ - Khoa học',
      'C. Cổ truyền - Hội nhập - Kinh tế - Thị trường',
      'D. Toàn cầu hóa - Công nghệ - Khởi nghiệp - Tinh hoa'
    ],
    correctAnswer: 1,
    explanation: 'Tài liệu MLN131 và Giáo trình CNXHKH nhấn mạnh phát triển văn hóa trong khối liên minh phải gắn chặt với 4 giá trị cốt lõi: Dân tộc, Nhân văn, Dân chủ và Khoa học.',
    referencePage: 'Tài liệu chuyên đề'
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
    sectionId: 'tong-quan',
    sectionTitle: 'Bối cảnh',
    slideNumber: 1,
    title: 'Cơ Cấu Xã Hội - Giai Cấp & Liên Minh Giai Cấp, Tầng Lớp',
    subtitle: 'Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam · Học phần MLN131',
    speaker: 'Nguyễn Văn A',
    speakerRole: 'Trưởng nhóm Thuyết trình',
    duration: '2.5 phút',
    script: 'Kính chào Thầy Cô và toàn thể các bạn sinh viên! Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội - giai cấp ở Việt Nam luôn vận động và biến đổi gắn liền với sự biến đổi của cơ cấu kinh tế nhiều thành phần, quá trình CNH, HĐH và hội nhập quốc tế. Hôm nay, nhóm chúng em xin trân trọng trình bày chuyên đề: "Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam". Kính mời Thầy Cô và các bạn cùng theo dõi!',
    keyPoints: [
      'Cơ cấu xã hội - giai cấp vận động và biến đổi gắn liền với sự biến đổi của cơ cấu kinh tế.',
      'Sự phân hóa bên trong, vừa có lợi ích riêng, vừa có lợi ích chung gắn bó, hợp tác.',
      'Công nhân, nông dân và trí thức giữ vị trí đặc biệt quan trọng, là nòng cốt của khối liên minh.'
    ],
    quote: {
      text: 'Cơ cấu xã hội - giai cấp biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế.',
      author: 'Giáo trình CNXHKH (Bộ GD&ĐT, 2021)'
    }
  },
  {
    id: 'slide-2',
    sectionId: 'tong-quan',
    sectionTitle: 'Bối cảnh',
    slideNumber: 2,
    title: 'Khái Niệm, Cơ Sở Hình Thành & Ba Đặc Điểm Cơ Cấu Xã Hội - Giai Cấp',
    subtitle: 'Kinh tế nhiều thành phần, CNH-HĐH và xu hướng xích lại gần nhau giữa các giai tầng',
    speaker: 'Nguyễn Văn A',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Thưa Thầy Cô và các bạn, cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp tồn tại khách quan, thể hiện qua quan hệ sở hữu tư liệu sản xuất, tổ chức quản lý và địa vị chính trị - xã hội. Cơ cấu này có 3 đặc điểm lớn: Thứ nhất, vừa mang tính quy luật phổ biến của thời kỳ quá độ, vừa mang tính đặc thù của Việt Nam; Thứ hai, ngày càng đa dạng, phức tạp và xuất hiện các tầng lớp mới như doanh nhân; Thứ ba, vừa có sự khác biệt về lợi ích nhưng lại vừa có sự liên minh và xích lại gần nhau dưới sự lãnh đạo của Đảng!',
    keyPoints: [
      '3 Cơ sở hình thành: Cơ cấu kinh tế, Kinh tế nhiều thành phần, CNH-HĐH & KH-CN.',
      'Đặc điểm 1: Vừa mang tính quy luật phổ biến, vừa mang tính đặc thù.',
      'Đặc điểm 2: Đa dạng, phức tạp, xuất hiện doanh nhân và các nhóm xã hội mới.',
      'Đặc điểm 3: Vừa khác biệt, vừa liên minh và xích lại gần nhau vì mục tiêu chung.'
    ]
  },
  {
    id: 'slide-3',
    sectionId: 'giai-tang',
    sectionTitle: 'Cơ cấu giai cấp',
    slideNumber: 3,
    title: 'Vị Thế & Xu Hướng Biến Đổi Của Giai Cấp Công Nhân Việt Nam',
    subtitle: 'Giai cấp lãnh đạo cách mạng và lực lượng tiên phong trong CNH, HĐH đất nước',
    speaker: 'Trần Thị B',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Tiếp theo, bạn Trần Thị B xin trình bày về lực lượng đầu tiên: Giai cấp công nhân Việt Nam. Theo giáo trình và các nghị quyết của Đảng, công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam; đại diện cho phương thức sản xuất tiên tiến và là nòng cốt của liên minh công - nông - trí. Xu hướng hiện nay là công nhân tăng nhanh cả về số lượng và chất lượng, cơ cấu nghề nghiệp đa dạng và bộ phận công nhân trí thức ngày càng phát triển mạnh mẽ.',
    keyPoints: [
      'Là giai cấp lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam.',
      'Đại diện cho phương thức sản xuất tiên tiến, tiên phong trong CNH, HĐH.',
      'Xu hướng: Tăng về số lượng, chất lượng và phát triển mạnh mẽ bộ phận công nhân trí thức.'
    ]
  },
  {
    id: 'slide-4',
    sectionId: 'giai-tang',
    sectionTitle: 'Cơ cấu giai cấp',
    slideNumber: 4,
    title: 'Giai Cấp Nông Dân & Đội Ngũ Trí Thức Trong Kỷ Nguyên Mới',
    subtitle: 'Lời dạy của Bác Hồ: "Nông dân ta giàu thì nước ta giàu" & "Trí thức là vốn liếng quý báu"',
    speaker: 'Trần Thị B',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Thưa Thầy Cô và các bạn, về giai cấp nông dân, Chủ tịch Hồ Chí Minh từng căn dặn: "Nông dân ta giàu thì nước ta giàu. Nông nghiệp ta thịnh thì nước ta thịnh". Nông dân có vị trí then chốt trong phát triển nông nghiệp, xây dựng nông thôn mới và ổn định xã hội. Song hành cùng nông dân là đội ngũ trí thức - lực lượng lao động sáng tạo đặc biệt quan trọng, được Bác Hồ khẳng định: "Trí thức là vốn liếng quý báu của dân tộc". Trí thức giữ vai trò nòng cốt trong kinh tế tri thức, khoa học công nghệ và đổi mới sáng tạo.',
    keyPoints: [
      'Nông dân: Vị trí quan trọng trong nông nghiệp, nông thôn mới và ổn định xã hội.',
      'Trích dẫn Bác Hồ: "Nông dân ta giàu thì nước ta giàu. Nông nghiệp ta thịnh thì nước ta thịnh."',
      'Trí thức: Lực lượng lao động sáng tạo đặc biệt quan trọng trong CNH, HĐH và văn hóa.',
      'Trích dẫn Bác Hồ: "Trí thức là vốn liếng quý báu của dân tộc."'
    ]
  },
  {
    id: 'slide-5',
    sectionId: 'giai-tang',
    sectionTitle: 'Cơ cấu giai cấp',
    slideNumber: 5,
    title: 'Đội Ngũ Doanh Nhân & Tầng Lớp Phụ Nữ, Thế Hệ Trẻ',
    subtitle: 'Động lực bứt phá kinh tế và các lực lượng được đặc biệt quan tâm trong chính sách xã hội',
    speaker: 'Trần Thị B',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Lực lượng thứ tư là Đội ngũ Doanh nhân - tầng lớp phát triển nhanh về số lượng và quy mô trong thời kỳ đổi mới, đóng góp to lớn vào tăng trưởng GDP, tạo việc làm và an sinh xã hội. Bên cạnh đó, tầng lớp Phụ nữ và Thế hệ trẻ (thanh niên, sinh viên) là các lực lượng xã hội được chú trọng đặc biệt trong hệ thống chính sách xã hội của Đảng. Phụ nữ phát huy vai trò to lớn trong mọi mặt đời sống; thanh niên là rường cột nước nhà, xung kích trong chuyển đổi số và bảo vệ Tổ quốc!',
    keyPoints: [
      'Doanh nhân: Phát triển nhanh, đóng góp lớn vào kinh tế, tạo việc làm và trách nhiệm xã hội.',
      'Định hướng: Xây dựng doanh nhân có đạo đức kinh doanh, chuẩn mực văn hóa và tinh thần dân tộc.',
      'Phụ nữ: Nâng cao đời sống, thực hiện bình đẳng giới thực chất và bảo vệ quyền lợi bà mẹ, trẻ em.',
      'Thanh niên: Rường cột nước nhà, tiên phong khởi nghiệp sáng tạo và chuyển đổi số.'
    ]
  },
  {
    id: 'slide-6',
    sectionId: 'lien-minh',
    sectionTitle: 'Bản chất Liên minh',
    slideNumber: 6,
    title: 'Bản Chất & Tính Tất Yếu Của Khối Liên Minh Giai Cấp, Tầng Lớp',
    subtitle: 'Nền tảng chính trị - xã hội vững chắc dưới sự lãnh đạo của Đảng Cộng sản Việt Nam',
    speaker: 'Lê Hoàng C',
    speakerRole: 'Thành viên Nhóm',
    duration: '3 phút',
    script: 'Kính thưa Thầy Cô và các bạn, em là Lê Hoàng C. Chúng ta bước sang phần Liên minh giai cấp, tầng lớp. Ở Việt Nam, liên minh trước hết là giữa công nhân với nông dân và trí thức, dưới sự lãnh đạo của Đảng. Đây là cơ sở quan trọng để: củng cố khối đại đoàn kết toàn dân, phát huy sức mạnh tổng hợp, xây dựng và bảo vệ Tổ quốc theo định hướng XHCN. Khối liên minh không chỉ là liên kết chính trị đơn thuần mà là sự phối hợp lợi ích và hành động toàn diện trên cả kinh tế, chính trị và văn hóa - xã hội.',
    keyPoints: [
      'Bản chất: Liên minh giữa công nhân với nông dân và trí thức dưới sự lãnh đạo của Đảng.',
      'Mục tiêu: Củng cố khối đại đoàn kết, phát huy sức mạnh tổng hợp, bảo vệ vững chắc Tổ quốc.',
      'Liên minh toàn diện: Không chỉ liên kết chính trị mà là phối hợp lợi ích trên mọi lĩnh vực đời sống.'
    ],
    quote: {
      text: 'Không có liên minh công nông và trí thức thì không thể xây dựng được chủ nghĩa xã hội.',
      author: 'V.I. Lênin'
    }
  },
  {
    id: 'slide-7',
    sectionId: 'tam-giac',
    sectionTitle: 'Nội dung',
    slideNumber: 7,
    title: 'Nội Dung Kinh Tế Của Liên Minh: Cơ Sở Quyết Định Nhất',
    subtitle: 'Tạo cơ sở vật chất - kỹ thuật cho CNXH và bảo đảm hài hòa lợi ích kinh tế',
    speaker: 'Lê Hoàng C',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Thưa Thầy Cô, theo tài liệu và Giáo trình, Nội dung Kinh tế là nội dung cơ bản và có ý nghĩa quyết định nhất. Mục tiêu nhằm tạo cơ sở vật chất - kỹ thuật cho CNXH, bảo đảm lợi ích kinh tế của các giai cấp, tầng lớp và tạo sự gắn bó lâu dài. Có thể hiểu rất đơn giản: công nhân tạo ra máy móc công nghiệp, nông dân tạo ra lương thực thực phẩm, trí thức cung cấp khoa học và công nghệ; khi ba lực lượng này phối hợp nhịp nhàng thì nền kinh tế phát triển nhanh và bền vững hơn rất nhiều!',
    keyPoints: [
      'Nội dung cơ bản và quyết định nhất của liên minh giai cấp.',
      'Mục tiêu: Tạo cơ sở vật chất - kỹ thuật cho CNXH; bảo đảm lợi ích kinh tế của các giai tầng.',
      'Nhiệm vụ: Đẩy mạnh CNH-HĐH, phát triển nông nghiệp gắn với KH-CN, nâng cao năng suất lao động.',
      'Bản chất thực tế: Công nhân sản xuất công nghiệp + Nông dân làm nông sản + Trí thức cung cấp công nghệ.'
    ]
  },
  {
    id: 'slide-8',
    sectionId: 'tam-giac',
    sectionTitle: 'Nội dung',
    slideNumber: 8,
    title: 'Nội Dung Chính Trị & Văn Hóa - Xã Hội Của Liên Minh',
    subtitle: 'Giữ vững vai trò lãnh đạo của Đảng và 4 giá trị văn hóa: Dân tộc - Nhân văn - Dân chủ - Khoa học',
    speaker: 'Lê Hoàng C',
    speakerRole: 'Thành viên Nhóm',
    duration: '3.5 phút',
    script: 'Nội dung thứ hai là Chính trị: Giữ vững ổn định chính trị, củng cố vai trò lãnh đạo của Đảng, phát huy dân chủ XHCN và xây dựng Nhà nước pháp quyền của Nhân dân, do Nhân dân, vì Nhân dân. Nội dung thứ ba là Văn hóa - Xã hội: Nâng cao đời sống vật chất và tinh thần, thực hiện chính sách an sinh xã hội, giảm nghèo bền vững. Đặc biệt, giáo trình nhấn mạnh phát triển văn hóa trong khối liên minh phải gắn liền với 4 giá trị cốt lõi: Dân tộc - Nhân văn - Dân chủ - Khoa học!',
    keyPoints: [
      'Chính trị: Giữ vững vai trò lãnh đạo của Đảng; xây dựng Nhà nước pháp quyền XHCN.',
      'Chính trị: Tăng cường đồng thuận xã hội, đấu tranh chống chia rẽ khối đại đoàn kết toàn dân.',
      'Văn hóa - Xã hội: Nâng cao đời sống, an sinh xã hội, giải quyết việc làm, giảm nghèo bền vững.',
      '4 Giá trị văn hóa cốt lõi: Dân tộc – Nhân văn – Dân chủ – Khoa học.'
    ]
  },
  {
    id: 'slide-9',
    sectionId: 'phuong-huong',
    sectionTitle: 'Phương hướng',
    slideNumber: 9,
    title: '5 Phương Hướng Cơ Bản Xây Dựng Cơ Cấu & Tăng Cường Liên Minh',
    subtitle: 'Định hướng chiến lược từ Giáo trình Chủ nghĩa Xã hội Khoa học',
    speaker: 'Phạm Minh D',
    speakerRole: 'Thành viên Nhóm',
    duration: '4 phút',
    script: 'Kính thưa Thầy Cô và các bạn, em là Phạm Minh D. Để hiện thực hóa mục tiêu trên, chuyên đề xác định 5 phương hướng cơ bản: Một là, đẩy mạnh CNH, HĐH đất nước; Hai là, xây dựng và thực hiện hệ thống chính sách xã hội phù hợp cho 6 nhóm: công nhân, nông dân, trí thức, doanh nhân, phụ nữ, thanh niên; Ba là, tạo sự đồng thuận và phát huy đại đoàn kết toàn dân; Bốn là, hoàn thiện thể chế kinh tế thị trường định hướng XHCN & liên kết các lực lượng; Năm là, đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc và các đoàn thể!',
    keyPoints: [
      'Phương hướng 1: Đẩy mạnh CNH, HĐH; kinh tế phát triển mới nâng cao đời sống và gắn kết lợi ích.',
      'Phương hướng 2: Chính sách xã hội phù hợp cho từng nhóm: công nhân, nông dân, trí thức, doanh nhân, phụ nữ, thanh niên.',
      'Phương hướng 3: Tạo sự đồng thuận, giải quyết hài hòa lợi ích và phát huy sức mạnh khối đại đoàn kết toàn dân.',
      'Phương hướng 4: Hoàn thiện thể chế KTTT định hướng XHCN, phát triển KH-CN và tăng cường liên kết các lực lượng.',
      'Phương hướng 5: Đổi mới hoạt động Đảng, Nhà nước, MTTQ và các tổ chức chính trị - xã hội.'
    ]
  },
  {
    id: 'slide-10',
    sectionId: 'quiz',
    sectionTitle: 'Trắc nghiệm',
    slideNumber: 10,
    title: 'Đấu Trường Trắc Nghiệm: Ôn Tập Nhanh MLN131',
    subtitle: 'Mini-game 5 câu hỏi trọng tâm bám sát nội dung chuyên đề và Giáo trình',
    speaker: 'Phạm Minh D',
    speakerRole: 'Điều hành Minigame',
    duration: '3 phút',
    script: 'Để buổi thuyết trình thêm phần sôi nổi, nhóm em xin kính mời Thầy Cô và các bạn sinh viên cùng tham gia Minigame Trắc nghiệm gồm 5 câu hỏi trọng tâm: từ câu nói của Bác Hồ về nông dân, trí thức đến nội dung liên minh và 5 phương hướng. Mời các bạn cùng chọn đáp án trực tiếp trên giao diện nhé!',
    keyPoints: [
      '5 câu hỏi trắc nghiệm sát với nội dung thuyết trình và đề cương ôn tập môn học.',
      'Tích hợp chấm điểm tức thì, hiệu ứng tương tác sinh động và giải thích chi tiết.',
      'Hệ thống câu hỏi khoa học, bao quát toàn diện các phần trọng tâm.'
    ]
  },
  {
    id: 'slide-11',
    sectionId: 'quet-ma',
    sectionTitle: 'Quét mã & Q&A',
    slideNumber: 11,
    title: 'Quét Mã Trải Nghiệm Web Tương Tác & Thảo Luận Q&A',
    subtitle: 'Truy cập trang web tương tác trên điện thoại để tra cứu và làm trắc nghiệm',
    speaker: 'Cả Nhóm Thuyết trình',
    speakerRole: 'Đại diện Nhóm',
    duration: '2 phút',
    script: 'Kính mời Thầy Cô và các bạn dùng camera điện thoại quét mã QR trên màn hình để trải nghiệm phiên bản web tương tác đầy đủ, đọc lại 5 phương hướng và làm trắc nghiệm. Nhóm chúng em xin chân thành cảm ơn sự chú ý lắng nghe của Thầy Cô và các bạn, và xin sẵn sàng lắng nghe mọi câu hỏi phản biện!',
    keyPoints: [
      'Quét mã QR bằng điện thoại để xem trực tiếp ứng dụng web tương tác.',
      'Tra cứu đầy đủ 5 phương hướng, các trích dẫn của Bác Hồ và nội dung chuyên đề.',
      'Mở không gian hỏi đáp, giải đáp phản biện học thuật giữa người thuyết trình và người nghe.'
    ]
  }
];

