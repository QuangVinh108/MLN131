import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType
} from "docx";
import fs from "fs";
import path from "path";

// Color Palette for Academic Report
const COLOR_PRIMARY = "8B1E1E"; // Crimson
const COLOR_SECONDARY = "1B365D"; // Navy Blue
const COLOR_DARK = "1E1E24"; // Off-black
const COLOR_MUTED = "4A5568"; // Slate gray
const COLOR_GOLD = "B8860B"; // Dark goldenrod
const COLOR_BG_LIGHT = "F8F9FA"; // Light gray
const COLOR_BORDER = "CBD5E1"; // Border gray

function createHeaderCell(text, widthPercent = 30) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    shading: { fill: COLOR_SECONDARY, type: ShadingType.CLEAR },
    margins: { top: 120, bottom: 120, left: 140, right: 140 },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text,
            bold: true,
            color: "FFFFFF",
            font: "Times New Roman",
            size: 22
          })
        ]
      })
    ]
  });
}

function createBodyCell(text, widthPercent = 30, isCenter = false, isBold = false) {
  return new TableCell({
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        alignment: isCenter ? AlignmentType.CENTER : AlignmentType.LEFT,
        children: [
          new TextRun({
            text,
            bold: isBold,
            color: COLOR_DARK,
            font: "Times New Roman",
            size: 21
          })
        ]
      })
    ]
  });
}

function pHeading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 140 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 30, // 15pt
        color: COLOR_PRIMARY,
        font: "Times New Roman"
      })
    ]
  });
}

function pHeading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 260, after: 100 },
    children: [
      new TextRun({
        text,
        bold: true,
        size: 26, // 13pt
        color: COLOR_SECONDARY,
        font: "Times New Roman"
      })
    ]
  });
}

function pHeading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 180, after: 80 },
    children: [
      new TextRun({
        text,
        bold: true,
        italics: true,
        size: 23, // 11.5pt
        color: COLOR_GOLD,
        font: "Times New Roman"
      })
    ]
  });
}

function pBody(text, options = {}) {
  const { bold = false, italics = false, bullet = false, color = COLOR_DARK, spacingAfter = 100 } = options;
  return new Paragraph({
    bullet: bullet ? { level: 0 } : undefined,
    spacing: { after: spacingAfter, line: 300 }, // 1.25 line height
    children: [
      new TextRun({
        text,
        bold,
        italics,
        color,
        size: 22, // 11pt
        font: "Times New Roman"
      })
    ]
  });
}

function pScript(speaker, text) {
  return new Paragraph({
    spacing: { before: 100, after: 140, line: 320 },
    shading: { fill: "F5F7FA", type: ShadingType.CLEAR },
    children: [
      new TextRun({
        text: `🎙️ ${speaker}: `,
        bold: true,
        color: COLOR_PRIMARY,
        font: "Times New Roman",
        size: 22
      }),
      new TextRun({
        text: `"${text}"`,
        italics: true,
        color: "2D3748",
        font: "Times New Roman",
        size: 22
      })
    ]
  });
}

// Generate the Document
async function main() {
  const children = [];

  // TITLE & METADATA
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 80 },
      children: [
        new TextRun({
          text: "BỘ GIÁO DỤC VÀ ĐÀO TẠO — HỌC PHẦN MLN131",
          bold: true,
          size: 22,
          color: COLOR_MUTED,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 40, after: 160 },
      children: [
        new TextRun({
          text: "CHỦ ĐỀ BÁO CÁO THUYẾT TRÌNH HỌC THUẬT",
          bold: true,
          size: 24,
          color: COLOR_SECONDARY,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 140 },
      children: [
        new TextRun({
          text: "CƠ CẤU XÃ HỘI - GIAI CẤP VÀ LIÊN MINH GIAI CẤP, TẦNG LỚP\nTRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM",
          bold: true,
          size: 32, // 16pt
          color: COLOR_PRIMARY,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 40, after: 60 },
      children: [
        new TextRun({
          text: "Chương 5 · Mục III (Từ trang 177 đến trang 187 Giáo trình chuẩn 2021) · Kỳ Fall2026",
          italics: true,
          size: 22,
          color: COLOR_MUTED,
          font: "Times New Roman"
        })
      ]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 20, after: 200 },
      children: [
        new TextRun({
          text: "Website tương tác trực tuyến: https://mln131-gamma.vercel.app/ (Quét mã QR khám phá trên điện thoại)",
          bold: true,
          size: 21,
          color: COLOR_SECONDARY,
          font: "Times New Roman"
        })
      ]
    })
  );

  // TABLE OF CITATIONS / SUMMARY
  children.push(
    pHeading2("BẢNG TRA CỨU SỐ TRANG GIÁO TRÌNH THAM CHIẾU (BỘ GD&ĐT, 2021)"),
    pBody("Bảng tóm tắt vị trí các nội dung cốt lõi trong Giáo trình Chủ nghĩa Xã hội Khoa học (NXB Chính trị quốc gia Sự thật, 2021, Chương 5, Mục III):", { italics: true }),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            createHeaderCell("Mục kiến thức cốt lõi", 35),
            createHeaderCell("Nội dung tóm tắt & Vị trí", 45),
            createHeaderCell("Số trang", 20)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Khái niệm cơ cấu XH - giai cấp", 35, false, true),
            createBodyCell("Hệ thống các giai cấp, tầng lớp gắn với sở hữu, quản lý và phân phối; giữ vị trí trung tâm chi phối các cơ cấu khác.", 45),
            createBodyCell("Trang 177", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Quy luật biến đổi theo kinh tế", 35, false, true),
            createBodyCell("Cơ cấu kinh tế nhiều thành phần định hướng XHCN quy định tính chất đa dạng, phức tạp của cơ cấu giai cấp.", 45),
            createBodyCell("Trang 177", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Tính thống nhất dưới sự lãnh đạo của Đảng", 35, false, true),
            createBodyCell("Khác với CNTB, sự đa dạng giai tầng không dẫn tới mâu thuẫn đối kháng một mất một còn mà thống nhất vì mục tiêu chung.", 45),
            createBodyCell("Trang 177 – 178", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Xu hướng xích lại gần nhau", 35, false, true),
            createBodyCell("Xu hướng bao trùm về sở hữu, tính chất lao động, mức độ thụ hưởng thành quả và đời sống văn hóa tinh thần.", 45),
            createBodyCell("Trang 178", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Giai cấp Công nhân Việt Nam", 35, false, true),
            createBodyCell("Lãnh đạo cách mạng qua Đảng; tiên phong CNH-HĐH; xu hướng trí thức hóa; hiện có >17 triệu người, đóng góp >60% GDP.", 45),
            createBodyCell("Trang 178 – 180", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Giai cấp Nông dân Việt Nam", 35, false, true),
            createBodyCell("Lực lượng đông đảo nhất (~62% dân số); vị trí chiến lược Tam nông; đồng minh tự nhiên của công nhân; nông dân 4.0.", 45),
            createBodyCell("Trang 180 – 181", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Đội ngũ Trí thức Việt Nam", 35, false, true),
            createBodyCell("Lao động sáng tạo đặc biệt quan trọng; nòng cốt kinh tế tri thức; là một 'tầng lớp' tinh hoa (không phải giai cấp độc lập).", 45),
            createBodyCell("Trang 180 – 181", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Đội ngũ Doanh nhân Việt Nam", 35, false, true),
            createBodyCell("Lực lượng xung kích phát triển KTTT định hướng XHCN; kiến tạo >85% việc làm mới và >50% GDP cho toàn xã hội.", 45),
            createBodyCell("Trang 181 – 182", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Phụ nữ & Thế hệ Trẻ (Thanh niên)", 35, false, true),
            createBodyCell("Bình đẳng giới; rường cột tương lai, lực lượng xung kích trong chuyển đổi số và đổi mới sáng tạo quốc gia.", 45),
            createBodyCell("Trang 182 – 183", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Tính tất yếu của khối Liên minh", 35, false, true),
            createBodyCell("Tất yếu về Chính trị (nền tảng Nhà nước), Kinh tế (gắn kết sản xuất), Văn hóa - Xã hội (công bằng, ấm no).", 45),
            createBodyCell("Trang 183 – 184", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Nội dung Kinh tế của Liên minh", 35, false, true),
            createBodyCell("Nội dung CƠ BẢN, QUYẾT ĐỊNH NHẤT; Lợi ích kinh tế là động lực trực tiếp gắn kết các bên.", 45),
            createBodyCell("Trang 184 – 185", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Nội dung Chính trị của Liên minh", 35, false, true),
            createBodyCell("Giữ vững vai trò lãnh đạo duy nhất của Đảng; củng cố Nhà nước của Nhân dân; phát huy dân chủ XHCN.", 45),
            createBodyCell("Trang 185", 20, true, true)
          ]
        }),
        new TableRow({
          children: [
            createBodyCell("Nội dung Văn hóa - Xã hội", 35, false, true),
            createBodyCell("Thước đo tính ưu việt nhân văn; phát triển kinh tế gắn với công bằng xã hội ('Không để ai bị bỏ lại phía sau').", 45),
            createBodyCell("Trang 185 – 186", 20, true, true)
          ]
        })
      ]
    }),
    new Paragraph({ spacing: { after: 200 } })
  );

  // PHẦN I
  children.push(
    pHeading1("PHẦN I: KHÁI NIỆM VÀ QUY LUẬT BIẾN ĐỔI CƠ CẤU XÃ HỘI - GIAI CẤP"),
    pHeading2("1. Khái niệm và vị trí của cơ cấu xã hội - giai cấp (Trang 177)"),
    pBody("• Định nghĩa: Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, cùng với những mối quan hệ về sở hữu tư liệu sản xuất, tổ chức quản lý lao động và phân phối của cải giữa các giai cấp, tầng lớp đó trong quá trình sản xuất vật chất.", { bullet: true }),
    pBody("• Vị trí trung tâm số một: Trong hệ thống xã hội có nhiều loại hình cơ cấu (dân số, dân tộc, tôn giáo, nghề nghiệp, vùng miền...), cơ cấu xã hội - giai cấp giữ vị trí trung tâm, quan trọng nhất, chi phối các loại hình cơ cấu khác bởi nó liên quan trực tiếp đến quan hệ sản xuất và quyền lực chính trị nhà nước.", { bullet: true }),
    pBody("• Ý nghĩa: Là căn cứ khoa học và chính trị cốt lõi để Đảng Cộng sản Việt Nam và Nhà nước hoạch định đường lối, chính sách phát triển kinh tế - xã hội và chiến lược đại đoàn kết toàn dân tộc.", { bullet: true }),

    pHeading2("2. Tính quy luật biến đổi trong thời kỳ quá độ lên CNXH ở Việt Nam (Trang 177 – 178)"),
    pBody("Sự biến đổi của cơ cấu xã hội - giai cấp ở Việt Nam tuân theo 3 quy luật khách quan:"),
    pBody("1. Biến đổi bị chi phối và quyết định bởi cơ cấu kinh tế (Trang 177): Cơ sở hạ tầng quyết định kiến trúc thượng tầng. Trong thời kỳ quá độ, nước ta phát triển nền kinh tế thị trường định hướng XHCN với nhiều thành phần kinh tế, nhiều hình thức sở hữu. Nền kinh tế nhiều thành phần tất yếu quy định tính chất đa dạng, phức tạp của cơ cấu xã hội - giai cấp.", { bullet: true }),
    pBody("2. Đa dạng, phức tạp đan xen nhưng thống nhất cao (Trang 177 - 178): Điểm khác biệt căn bản giữa Việt Nam và các nước tư bản là sự đa dạng này không dẫn tới mâu thuẫn đối kháng giai cấp một mất một còn. Mọi giai cấp, tầng lớp đều đặt dưới sự lãnh đạo duy nhất của Đảng Cộng sản Việt Nam và cùng chung mục tiêu: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.", { bullet: true }),
    pBody("3. Xu hướng xích lại gần nhau giữa các giai cấp, tầng lớp (Trang 178): Đây là xu hướng bao trùm, tiến bộ. Các giai cấp từng bước xích lại gần nhau về quyền sở hữu tư liệu sản xuất, tính chất lao động, mức độ thụ hưởng của cải và điều kiện học tập, phát triển toàn diện.", { bullet: true })
  );

  // PHẦN II
  children.push(
    pHeading1("PHẦN II: CƠ CẤU VÀ ĐẶC ĐIỂM BIẾN ĐỔI CỦA 5 GIAI TẦNG TRỤ CỘT Ở VIỆT NAM"),
    pHeading2("1. Giai cấp Công nhân Việt Nam (Trang 178 – 180)"),
    pBody("• Vị thế: Là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam; lực lượng tiên phong trong sự nghiệp công nghiệp hoá, hiện đại hoá đất nước.", { bullet: true }),
    pBody("• Số liệu thực tiễn: Chiếm hơn 17 triệu lao động xã hội, tạo ra trên 60% tổng sản phẩm quốc nội (GDP) và hơn 70% ngân sách nhà nước.", { bullet: true }),
    pBody("• Xu hướng biến đổi: Chuyển dịch mạnh mẽ từ 'công nhân áo xanh' cơ bắp sang 'công nhân áo trắng' có tri thức, làm chủ tự động hóa, robot và công nghệ số.", { bullet: true }),
    pBody("• Thách thức: Tỷ lệ qua đào tạo có bằng cấp còn thấp (~28–30%); đời sống an sinh nhà ở, thiết chế văn hóa tại một số khu công nghiệp còn nhiều thiếu thốn.", { bullet: true }),

    pHeading2("2. Giai cấp Nông dân Việt Nam (Trang 180 – 181)"),
    pBody("• Vị thế: Là lực lượng đông đảo nhất trong xã hội; giữ vị trí chiến lược trong sự nghiệp phát triển nông nghiệp, nông dân, nông thôn ('Tam nông'), bảo đảm an ninh lương thực quốc gia.", { bullet: true }),
    pBody("• Số liệu thực tiễn: Chiếm ~62% dân số, lao động nông nghiệp thuần túy giảm xuống còn ~27%; đưa kim ngạch xuất khẩu nông sản vượt mốc 53 tỷ USD/năm (lúa gạo, cà phê, sầu riêng...).", { bullet: true }),
    pBody("• Xu hướng: Chuyển mình thành 'Nông dân thế hệ mới / Nông dân 4.0', làm chủ nông nghiệp công nghệ cao VietGAP, GlobalGAP, điều khiển drone tưới tiêu và kinh doanh nông sản số hóa.", { bullet: true }),
    pBody("• Thách thức: Tác động nặng nề của biến đổi khí hậu (hạn hán, xâm nhập mặn Đồng bằng sông Cửu Long); nguy cơ già hóa lao động nông thôn khi thanh niên rời làng quê.", { bullet: true }),

    pHeading2("3. Đội ngũ Trí thức Việt Nam (Trang 180 – 181)"),
    pBody("• Vị thế: Là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh CNH, HĐH và hội nhập quốc tế; nòng cốt của nền kinh tế tri thức.", { bullet: true }),
    pBody("• Bản chất lý luận: Trí thức là một 'tầng lớp' xã hội đặc biệt (không phải một giai cấp độc lập vì không sở hữu phương thức sản xuất riêng), xuất thân từ nhiều giai cấp và phục vụ cách mạng dưới sự lãnh đạo của giai cấp công nhân.", { bullet: true }),
    pBody("• Quy mô & Xu hướng: Quy mô đạt hơn 6.5 triệu người, đóng góp trên 45% vào TFP; đi đầu trong các ngành công nghệ cao mũi nhọn (AI, vi mạch bán dẫn, năng lượng tái tạo); trí thức khởi nghiệp sáng tạo (Startup Founders).", { bullet: true }),
    pBody("• Thách thức: Chảy máu chất xám; cơ chế trọng dụng, đãi ngộ và tự chủ học thuật còn nhiều điểm nghẽn.", { bullet: true }),

    pHeading2("4. Đội ngũ Doanh nhân Việt Nam (Trang 181 – 182)"),
    pBody("• Vị thế: Tầng lớp phát triển vượt bậc trong thời kỳ Đổi mới; lực lượng chủ công, xung kích phát triển kinh tế thị trường định hướng XHCN, nâng cao năng lực cạnh tranh quốc gia.", { bullet: true }),
    pBody("• Số liệu thực tiễn: Hơn 900.000 doanh nghiệp và hơn 5 triệu hộ kinh doanh cá thể; đóng góp >50% GDP, tạo ra >85% việc làm mới cho toàn xã hội.", { bullet: true }),
    pBody("• Xu hướng: Hình thành các tập đoàn tư nhân đa ngành vươn tầm thế giới (Viettel, Vingroup, Thaco, FPT, Vinamilk, TH True Milk...); doanh nhân trẻ hướng đến Net Zero, ESG và kinh tế tuần hoàn.", { bullet: true }),
    pBody("• Mối quan hệ với công nhân: Quan hệ 'vừa hợp tác, vừa đấu tranh': Hợp tác sản xuất tạo của cải; đấu tranh qua tổ chức Công đoàn để bảo đảm quyền lợi, tiền lương, an toàn lao động.", { bullet: true }),

    pHeading2("5. Tầng lớp Phụ nữ và Thế hệ Trẻ (Trang 182 – 183)"),
    pBody("• Phụ nữ Việt Nam: Chiếm hơn 50% dân số, phát huy truyền thống 'Anh hùng, bất khuất, trung hậu, đảm đang' và 'Giỏi việc nước, đảm việc nhà'; tỷ lệ nữ Đại biểu Quốc hội khóa XV đạt trên 30% (cao hàng đầu khu vực ASEAN).", { bullet: true }),
    pBody("• Thế hệ Trẻ (Thanh niên, Sinh viên): Chiếm hơn 22 triệu dân số (lợi thế dân số vàng), là rường cột tương lai, xung kích đi đầu trong học tập, nghiên cứu khoa học, khởi nghiệp và chuyển đổi số quốc gia.", { bullet: true })
  );

  // PHẦN III
  children.push(
    pHeading1("PHẦN III: TÍNH TẤT YẾU VÀ 3 NỘI DUNG LIÊN MINH GIAI CẤP, TẦNG LỚP"),
    pHeading2("1. Tính tất yếu khách quan của liên minh (Trang 183 – 184)"),
    pBody("V.I. Lênin đã khẳng định: Nếu không liên minh với nông dân và trí thức thì giai cấp công nhân không thể bảo vệ chính quyền và không thể xây dựng thành công CNXH. Ở Việt Nam, tính tất yếu này xuất phát từ:"),
    pBody("• Góc độ Chính trị (Trang 183): Tạo nền tảng chính trị - xã hội vững chắc cho Nhà nước pháp quyền XHCN; củng cố khối đại đoàn kết toàn dân tộc, đập tan âm mưu 'Diễn biến hòa bình'.", { bullet: true }),
    pBody("• Góc độ Kinh tế (Trang 184): Xuất phát từ phân công lao động xã hội và sự gắn kết khách quan của nền sản xuất vật chất. Công nghiệp không thể phát triển nếu thiếu lương thực, nguyên liệu của nông nghiệp; nông nghiệp không thể cơ giới hóa nếu thiếu công nghiệp và công nghệ của trí thức.", { bullet: true }),
    pBody("• Góc độ Văn hóa - Xã hội (Trang 184): Tạo điều kiện thu hẹp khoảng cách phát triển thành thị - nông thôn, nâng cao chất lượng cuộc sống người dân.", { bullet: true }),

    pHeading2("2. Tam giác 3 nội dung liên minh cốt lõi (Trang 184 – 186)"),
    pHeading3("A. Nội dung Kinh tế — Cơ sở CƠ BẢN, QUYẾT ĐỊNH NHẤT (Trang 184 – 185)"),
    pBody("• Lợi ích kinh tế là động lực trực tiếp gắn kết các bên. Nếu không thỏa mãn lợi ích kinh tế thiết thực thì liên minh chỉ là khẩu hiệu suông."),
    pBody("• Thực hiện phân phối công bằng theo kết quả lao động và mức độ đóng góp; đẩy mạnh công nghiệp hóa nông nghiệp - nông thôn, phát triển kinh tế tri thức; hoàn thiện thể chế kinh tế thị trường định hướng XHCN."),

    pHeading3("B. Nội dung Chính trị — Giữ vai trò ĐỊNH HƯỚNG VỮNG CHẮC (Trang 185)"),
    pBody("• Giữ vững vai trò lãnh đạo duy nhất của Đảng Cộng sản Việt Nam đối với toàn xã hội."),
    pBody("• Củng cố và hoàn thiện Nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân."),
    pBody("• Phát huy quyền làm chủ với phương châm mở rộng tại Đại hội XIII: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'."),

    pHeading3("C. Nội dung Văn hóa - Xã hội — THƯỚC ĐO TÍNH ƯU VIỆT NHÂN ĐẠO (Trang 185 – 186)"),
    pBody("• Gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội; thực hiện mục tiêu 'Không để ai bị bỏ lại phía sau'."),
    pBody("• Nâng cao dân trí, phát triển nguồn nhân lực chất lượng cao; thực hiện tốt an sinh xã hội, bảo hiểm y tế toàn dân, giảm nghèo bền vững."),
    pBody("• Xây dựng hệ giá trị quốc gia và chuẩn mực con người Việt Nam thời đại mới (Yêu nước, đoàn kết, tự cường, nghĩa tình, sáng tạo).")
  );

  // PHẦN IV
  children.push(
    pHeading1("PHẦN IV: THỰC TIỄN MÔ HÌNH 'LIÊN KẾT 4 NHÀ' VÀ ĐƯỜNG LỐI ĐẠI HỘI ĐẢNG"),
    pHeading2("1. Mô hình Liên kết 4 Nhà (ST25 — Gạo ngon nhất thế giới)"),
    pBody("Mô hình 'Liên kết 4 Nhà' là sự cụ thể hóa sinh động nhất của khối liên minh Công nhân – Nông dân – Trí thức – Doanh nhân:"),
    pBody("• Nhà nước: Ban hành quy hoạch vùng, chính sách đất đai, cấp tín dụng ưu đãi, đàm phán hiệp định thương mại EVFTA, CPTPP mở đường xuất khẩu.", { bullet: true }),
    pBody("• Nhà khoa học (Trí thức): Nghiên cứu lai tạo giống lúa ST25 (KS. Hồ Quang Cua), chuyển giao quy trình canh tác thông minh 'Lúa thơm - Tôm sạch'.", { bullet: true }),
    pBody("• Nhà doanh nghiệp: Đầu tư nhà máy sấy lúa, kho lạnh đạt chuẩn châu Âu, ký hợp đồng bao tiêu lúa ổn định giá, xây dựng thương hiệu quốc tế.", { bullet: true }),
    pBody("• Nhà nông (Nông dân): Tập hợp vào HTX kiểu mới, vận hành drone bay phun thuốc, tuân thủ tiêu chuẩn VietGAP, thu nhập tăng vọt 40–70 triệu đồng/ha/vụ.", { bullet: true }),

    pHeading2("2. Lịch sử phát triển nhận thức của Đảng qua các kỳ Đại hội (1986 – 2021)"),
    pBody("• Đại hội VI (1986): Đổi mới toàn diện, xóa bỏ cơ chế bao cấp, thừa nhận KTTT nhiều thành phần và cơ cấu giai cấp đa dạng.", { bullet: true }),
    pBody("• Đại hội VII & VIII (1991 - 1996): Cương lĩnh 1991 xác định liên minh công - nông - trí thức là nền tảng chính trị - xã hội của Nhà nước.", { bullet: true }),
    pBody("• Đại hội IX & X (2001 - 2006): Xác lập mô hình KTTT định hướng XHCN; thừa nhận vai trò kiến tạo của doanh nhân.", { bullet: true }),
    pBody("• Đại hội XI & XII (2011 - 2016): Cương lĩnh bổ sung 2011 xác định doanh nhân là lực lượng quan trọng; gắn tăng trưởng với công bằng xã hội.", { bullet: true }),
    pBody("• Đại hội XIII (2021): Xây dựng giai cấp công nhân hiện đại; phát huy vai trò chủ thể của nông dân; trọng dụng trí thức; bổ sung phương châm 'Dân giám sát, dân thụ hưởng'.", { bullet: true })
  );

  // PHẦN V
  children.push(
    pHeading1("PHẦN V: BỘ CÂU HỎI TRẮC NGHIỆM ÔN TẬP VÀ PHẢN BIỆN GIẢNG ĐƯỜNG"),
    pHeading2("1. Hệ thống 5 câu hỏi trắc nghiệm trọng tâm (Đồng bộ với Web App MLN131)"),
    pBody("• Cơ chế tương tác trên Web App: Gồm 5 câu hỏi trọng tâm; không tính điểm số học áp lực; tự do chọn lại đáp án bất kỳ lúc nào; chuyển đổi qua lại linh hoạt giữa 5 câu; cảnh báo bắt buộc hoàn thành đủ 5 câu trước khi nộp bài ở câu cuối; hiển thị kết quả đúng/sai và lời giải thích khoa học chi tiết kèm số trang giáo trình.", { italics: true, color: COLOR_MUTED }),

    pBody("Câu 1 (Trang 178): Trong thời kỳ quá độ lên CNXH ở Việt Nam, giai cấp nào giữ vai trò lãnh đạo cách mạng thông qua đội tiền phong?\nA. Giai cấp Nông dân | B. Đội ngũ Trí thức | C. Giai cấp Công nhân (ĐÚNG) | D. Đội ngũ Doanh nhân\n→ Giải thích (Tr. 178): Giai cấp công nhân lãnh đạo cách mạng thông qua Đảng Cộng sản Việt Nam, là lực lượng tiên phong CNH, HĐH.", { italics: true }),

    pBody("Câu 2 (Trang 177): Yếu tố nào là nguyên nhân trực tiếp dẫn tới sự biến đổi đa dạng, phức tạp của cơ cấu xã hội - giai cấp ở Việt Nam?\nA. Sự suy giảm dân số nông thôn | B. Nền kinh tế nhiều thành phần định hướng XHCN (ĐÚNG) | C. Quá trình di cư lao động quốc tế | D. Sự phát triển đơn nhất của kinh tế nhà nước\n→ Giải thích (Tr. 177): Cơ cấu kinh tế quyết định cơ cấu giai cấp. Nền kinh tế nhiều thành phần quy định tính đa dạng của cơ cấu giai cấp.", { italics: true }),

    pBody("Câu 3 (Trang 184): Trong khối liên minh công - nông - trí thức, nội dung nào giữ vai trò cơ bản, quyết định nhất?\nA. Nội dung Chính trị | B. Nội dung Tư tưởng | C. Nội dung Kinh tế (ĐÚNG) | D. Nội dung Văn hóa - Xã hội\n→ Giải thích (Tr. 184): Kinh tế là cơ sở vật chất kỹ thuật; lợi ích kinh tế là động lực trực tiếp gắn kết các bên.", { italics: true }),

    pBody("Câu 4 (Trang 180): Tầng lớp nào được xem là lực lượng lao động sáng tạo đặc biệt quan trọng, nòng cốt của nền kinh tế tri thức?\nA. Đội ngũ Trí thức (ĐÚNG) | B. Đội ngũ Doanh nhân | C. Giai cấp Tiểu tư sản | D. Thợ thủ công truyền thống\n→ Giải thích (Tr. 180): Đội ngũ trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng cấu thành nền kinh tế tri thức.", { italics: true }),

    pBody("Câu 5 (Trang 178): Xu hướng biến đổi nào sau đây thể hiện tính quy luật tích cực trong cơ cấu xã hội - giai cấp ở Việt Nam?\nA. Phân cực đối kháng gay gắt | B. Xích lại gần nhau giữa các giai cấp về quyền làm chủ và mức độ thụ hưởng (ĐÚNG) | C. Triệt tiêu hoàn toàn sự khác biệt ngay lập tức | D. Xóa bỏ kinh tế tư nhân\n→ Giải thích (Tr. 178): Xu hướng xích lại gần nhau là xu hướng bao trùm, tiến bộ trong thời kỳ quá độ.", { italics: true }),

    pHeading2("2. Các câu hỏi trắc nghiệm mở rộng & dự phòng"),
    pBody("Câu 6 (Trang 185): Nội dung chính trị của liên minh giai cấp ở Việt Nam trước hết nhằm mục đích gì?\nA. Giữ vững vai trò lãnh đạo của Đảng và củng cố Nhà nước XHCN (ĐÚNG) | B. Phổ biến văn hóa ngoại nhập | C. Cạnh tranh đa đảng | D. Tư nhân hóa toàn bộ\n→ Giải thích (Tr. 185): Giữ vững vai trò lãnh đạo của Đảng, củng cố Nhà nước của dân, do dân, vì dân.", { italics: true }),

    pBody("Câu 7 (Trang 184 – 186): Mô hình liên kết nào trong thực tiễn nông nghiệp phản ánh sâu sắc mối quan hệ liên minh công nhân - nông dân - trí thức - doanh nhân?\nA. Canh tác tự túc | B. Mô hình Liên kết 4 Nhà (ĐÚNG) | C. Buôn bán tiểu ngạch | D. Phường hội cổ truyền\n→ Giải thích (Tr. 184 – 186): Mô hình 4 Nhà là biểu hiện thực tiễn hiệu quả nhất của sự gắn kết giữa công nghiệp, nông nghiệp và khoa học.", { italics: true }),

    pBody("Câu 8 (Văn kiện Đại hội XIII): Phương châm phát huy dân chủ xã hội chủ nghĩa được Đảng ta bổ sung tại Đại hội XIII là gì?\nA. Dân biết, dân làm, dân chịu trách nhiệm | B. Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng (ĐÚNG) | C. Dân bầu, dân từ bỏ | D. Cơ quan hành chính toàn quyền\n→ Giải thích: Đại hội XIII bổ sung hai vế then chốt: 'Dân giám sát, dân thụ hưởng'.", { italics: true }),

    pHeading2("3. Câu hỏi phản biện chuyên sâu giảng đường"),
    pBody("• Tại sao kinh tế là nội dung quyết định nhất? Lợi ích kinh tế là động lực trực tiếp; nếu không nâng cao đời sống cho công nhân, nông dân thì liên minh chỉ là khẩu hiệu suông.", { bullet: true }),
    pBody("• Doanh nhân có phải giai cấp bóc lột không? Doanh nhân VN hoạt động trong khuôn khổ pháp luật XHCN, đóng góp thuế, giải quyết việc làm (>85%). Quan hệ công nhân - doanh nhân là 'vừa hợp tác vừa đấu tranh' văn minh.", { bullet: true }),
    pBody("• Vì sao trí thức là tầng lớp, không phải giai cấp? Trí thức không có phương thức sản xuất riêng, không sở hữu tư liệu sản xuất độc lập, xuất thân từ nhiều giai cấp khác nhau.", { bullet: true }),
    pBody("• Cơ cấu giai cấp VN có mâu thuẫn đối kháng không? Không có mâu thuẫn đối kháng một mất một còn vì cùng đặt dưới sự lãnh đạo của Đảng và chung mục tiêu dân giàu nước mạnh.", { bullet: true }),
    pBody("• Trách nhiệm của sinh viên? Học tập làm chủ công nghệ cao (AI, bán dẫn), trau dồi bản lĩnh chính trị và chuyển giao tri thức giúp đỡ cộng đồng.", { bullet: true })
  );

  // PHẦN VI
  children.push(
    pHeading1("PHẦN VI: KỊCH BẢN LỜI THOẠI CHI TIẾT CHO 4 THUYẾT TRÌNH VIÊN"),
    pHeading2("Người 1: Khai mạc, Khái niệm & Quy luật biến đổi (Trang 177 – 178)"),
    pScript("Người 1 (Nguyễn Văn A)", "Kính chào Thầy Cô và các bạn! Bác Hồ từng dạy: Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công. Trong thời kỳ quá độ lên CNXH, khối đại đoàn kết ấy được xây dựng trên một nền tảng khoa học vững chắc: Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp. Hôm nay nhóm em xin trình bày chuyên đề Mục III Chương 5 Giáo trình CNXHKH. Cơ cấu xã hội - giai cấp giữ vị trí trung tâm số một vì gắn liền với quan hệ sản xuất và quyền lực nhà nước. Nước ta có 3 quy luật biến đổi lớn: Thứ nhất là bị quy định bởi kinh tế nhiều thành phần; thứ hai là đa dạng nhưng thống nhất cao độ dưới sự lãnh đạo của Đảng; thứ ba là xu hướng xích lại gần nhau giữa các giai tầng!"),

    pHeading2("Người 2: Chi tiết 5 Giai tầng trụ cột ở Việt Nam (Trang 178 – 183)"),
    pScript("Người 2 (Trần Thị B)", "Xin cảm ơn bạn A! Kính thưa Thầy Cô, cơ cấu giai tầng nước ta hiện nay quy tụ 5 trụ cột: Thứ nhất, Công nhân là giai cấp lãnh đạo cách mạng qua Đảng, tiên phong CNH-HĐH, chiếm hơn 17 triệu lao động và trên 60% GDP, đang chuyển dịch thành 'công nhân áo trắng' tri thức. Thứ hai, Nông dân chiếm hơn 60% dân số, vị trí chiến lược Tam Nông, nay đã là 'nông dân 4.0' đưa xuất khẩu nông sản vượt 53 tỷ USD. Thứ ba, Trí thức là vốn quý của dân tộc, lực lượng nòng cốt kinh tế tri thức với hơn 6.5 triệu người. Thứ tư, Doanh nhân là lực lượng xung kích phát triển kinh tế thị trường, tạo ra hơn 85% việc làm mới. Và thứ năm là Phụ nữ bình đẳng giỏi việc nước đảm việc nhà, cùng Thế hệ trẻ thanh niên sinh viên xung kích chuyển đổi số quốc gia!"),

    pHeading2("Người 3: Tính tất yếu & Tam giác 3 Nội dung Liên minh (Trang 183 – 187)"),
    pScript("Người 3 (Lê Hoàng C)", "Kính thưa Thầy Cô! Tại sao các giai tầng bắt buộc phải liên minh? Lênin đã chỉ rõ: Nếu không có liên minh công nông và trí thức thì không thể xây dựng thành công chế độ mới. Liên minh tất yếu trên cả 3 góc độ Chính trị, Kinh tế và Xã hội. Khối liên minh vận hành trên 3 trụ cột tam giác: 1) Kinh tế là CƠ BẢN VÀ QUYẾT ĐỊNH NHẤT, vì lợi ích kinh tế là động lực trực tiếp gắn kết lòng người. 2) Chính trị giữ vai trò ĐỊNH HƯỚNG VỮNG CHẮC, giữ vững ngọn cờ lãnh đạo của Đảng và phát huy phương châm: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng. 3) Văn hóa - Xã hội là THƯỚC ĐO TÍNH ƯU VIỆT, bảo đảm tăng trưởng phải đi đôi với công bằng xã hội, không để ai bị bỏ lại phía sau!"),

    pHeading2("Người 4: Thực tiễn Mô hình 4 Nhà ST25, Minigame, Quét mã QR & Kết luận"),
    pScript("Người 4 (Phạm Minh D)", "Kính thưa Thầy Cô và các bạn! Minh chứng sinh động nhất của liên minh chính là mô hình 'Liên kết 4 Nhà' với kỳ tích hạt gạo ST25 hai lần đoạt giải Gạo ngon nhất thế giới: Nhà khoa học lai tạo giống, Nhà nước bảo hộ và quy hoạch, Doanh nghiệp đầu tư chế biến bao tiêu, và Nông dân canh tác công nghệ cao. Bây giờ, em xin kính mời Thầy Cô và cả lớp cùng tham gia 'Đấu trường Trắc nghiệm MLN131' gồm 5 câu hỏi trọng tâm ngay trên màn hình web tương tác! Chúng ta có thể tự do chọn, đổi đáp án và chuyển đổi giữa 5 câu hỏi. Sau khi cả lớp hoàn thành trọn vẹn, nút Nộp bài ở câu cuối sẽ mở ra đáp án đúng và lời giải thích khoa học chi tiết bám sát từng trang giáo trình!... Và để Thầy Cô cùng các bạn có thể tự mình khám phá, làm lại trắc nghiệm bất cứ lúc nào, nhóm em trân trọng kính mời mọi người hướng camera điện thoại lên màn hình quét mã QR để truy cập trực tiếp trang web https://mln131-gamma.vercel.app/! Thay mặt nhóm, chúng em xin chân thành cảm ơn sự lắng nghe và đóng góp quý báu từ Thầy Cô và các bạn!")
  );

  // PHẦN VII
  children.push(
    pHeading1("PHẦN VII: TRẢI NGHIỆM TƯƠNG TÁC QUÉT MÃ QR (https://mln131-gamma.vercel.app/)"),
    pBody("Nhóm thuyết trình đã triển khai toàn bộ bài báo cáo lên nền tảng Web tương tác công khai, giúp Giảng viên và Sinh viên dễ dàng tiếp cận mọi lúc, mọi nơi:"),
    pBody("• Địa chỉ truy cập chính thức: https://mln131-gamma.vercel.app/", { bold: true, color: COLOR_SECONDARY }),
    pBody("• Hướng dẫn quét mã QR: Mở ứng dụng Camera hoặc Zalo trên điện thoại thông minh, quét mã QR tại mục 'Quét mã để khám phá thêm' trên màn hình web hoặc slide báo cáo để mở trang web ngay trên điện thoại.", { bullet: true }),
    pBody("• Đấu trường trắc nghiệm 5 câu hỏi trọng tâm: Tự do chọn và đổi đáp án, nộp bài nhận giải thích khoa học chi tiết có dẫn chứng trang giáo trình.", { bullet: true }),
    pBody("• Khám phá trực quan 5 giai tầng: Số liệu thực tế, vai trò lãnh đạo của công nhân, chuyển mình của nông dân 4.0, trí thức và doanh nhân.", { bullet: true }),
    pBody("• Sơ đồ tương tác Tam giác Liên minh & Mô hình 4 Nhà ST25: Trực quan hóa sinh động, mượt mà trên mọi kích cỡ màn hình di động.", { bullet: true })
  );

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Times New Roman",
            size: 22,
            color: COLOR_DARK
          },
          paragraph: {
            spacing: { line: 300 }
          }
        }
      }
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 2.54 cm
              right: 1440,
              bottom: 1440,
              left: 1440
            }
          }
        },
        children
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.resolve("d:/Learning/Ki_9/MLN131/Web/Noi_Dung_Thuyet_Trinh_MLN131.docx");
  fs.writeFileSync(outputPath, buffer);
  console.log(`Successfully generated DOCX file at: ${outputPath}`);
}

main().catch(err => {
  console.error("Error generating DOCX:", err);
  process.exit(1);
});
