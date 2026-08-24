# BÁO CÁO PHÂN TÍCH KHO TRI THỨC FINPEACE
## MÃ SỐ TÀI LIỆU: REF-06
### CHƯƠNG TRÌNH: KBSV NEXTGEN 2026
**Đơn vị tổ chức:** Sở Giao Dịch 3 (HO3) - KB Securities Vietnam & FinPeace

---

## 📌 HƯỚNG DẪN TRA CỨU
- **Mục đích:** Tài liệu tham chiếu phân tích cấu trúc, nội dung và các công cụ công nghệ từ Kho tri thức FinPeace trên GitHub (nguyeneric81-del/finpeace-knowledge-base).
- **Phạm vi áp dụng:** Sử dụng để tích hợp học thuật vào giáo trình NextGen 2026 và phát triển bộ công cụ SalesGPT.

---

## I. TỔNG QUAN KHO TRI THỨC FINPEACE
Kho Tri Thức **FinPeace (finpeace-knowledge-base)** là hệ thống lưu trữ toàn diện về triết lý quản lý tài chính cá nhân, phương pháp đầu tư giá trị, giao dịch theo xu hướng và các chuyên đề nâng cao về Blockchain/DeFi. 

Bên cạnh phần lý thuyết dạng Markdown, kho tri thức còn tích hợp **bộ công cụ tự động hóa Python** chạy mô hình Multi-Agent song song tích hợp Cloudflare Workers AI và Groq LLM để phân tích cổ phiếu thực tế từ cơ sở dữ liệu Supabase.

---

## II. CẤU TRÚC THƯ MỤC & CÁC THÀNH PHẦN CỐT LÕI

```
finpeace-knowledge-base/
├── wiki/                           # Kho tài liệu lý thuyết (Markdown)
│   ├── core-philosophy/            # Triết lý lõi: 3 Vùng đất, Tháp tài sản, DISC
│   ├── layer-1-protection/         # Tầng 1: Quỹ khẩn cấp, Hoạch định bảo hiểm
│   ├── layer-2-priority/           # Tầng 2: Kế hoạch tài chính, Giảm rủi ro danh mục
│   ├── layer-3-advanced/           # Tầng 3: Tích sản & Trading nâng cao
│   │   ├── value-investing-sip/    # Đầu tư giá trị, Magic Formula, Định giá cổ phiếu
│   │   ├── trend-trading/          # CANSLIM, Wyckoff, Vietnam Trend Analyzer, Chỉ báo kỹ thuật
│   │   └── risk-money-management/  # Chiến lược quản trị vốn, Tâm lý giao dịch
│   └── blockchain/                 # Chuyên đề Blockchain, DeFi & RWA
└── tools/                          # Bộ công cụ tự động hóa phân tích (Python)
    ├── cloudflare_llm_provider.py  # Groq & Cloudflare Workers AI Fallback Provider
    ├── multi_agent_orchestrator.py # Hệ thống điều phối Multi-Agent song song
    └── validate_kb.py              # Script kiểm tra tính toàn vẹn liên kết nội bộ
```

---

## III. PHÂN TÍCH CHUYÊN SÂU NỘI DUNG TRI THỨC

### 1. Triết Lý Cốt Lõi & Hoạch Định Tài Chính
*   **Bản Đồ 3 Vùng Đất Tài Chính:**
    *   *Vùng Đất Hoang (Wasteland):* Nơi nhà đầu tư chìm trong mơ hồ, lo lắng, FOMO và đưa ra các quyết định theo cảm xúc bộc phát (bẫy "chữa lành" - Retail Therapy).
    *   *Vùng Kiểm Soát & Phát Triển (Control & Growth):* Bắt đầu làm chủ dòng tiền, điều phối chi tiêu theo quy tắc 6 chiếc hũ tài chính, và bắt đầu phân bổ tài sản.
    *   *Ốc Đảo Bình Yên (Oasis):* Đạt trạng thái tự do tài chính và bình an đích thực nhờ cấu trúc tài sản bền vững.
*   **Tháp Tài Sản 3 Tầng:**
    *   *Tầng 1 (Đáy) - Bảo Vệ:* Quỹ khẩn cấp 3-6 tháng chi phí (tiền gửi thanh khoản cao) + Hệ thống bảo hiểm tài chính bảo vệ nền móng.
    *   *Tầng 2 (Thân) - Ưu Tiên:* Tích lũy cho các mục tiêu dài hạn (nhà, xe, hưu trí tự lập, giáo dục con cái) qua bất động sản tiêu dùng và tích sản dài hạn.
    *   *Tầng 3 (Đỉnh) - Nâng Cao:* Danh mục trading lướt sóng ngắn hạn (tối đa 20% NAV) và các tài sản tăng trưởng đột biến.
*   **Ứng Dụng Mô Hình Tính Cách DISC Trong Khai Vấn Tài Chính:**
    *   *Nhóm D (Dominance - Người Kiến Tạo):* Thích chinh phục, chấp nhận rủi ro cao, đòn bẩy lớn. Cần hạn chế lòng tham, xây dựng móng tháp vững chắc trước khi trading.
    *   *Nhóm I (Influence - Người Kết Nối):* Đầu tư theo cảm xúc, dễ bị FOMO đám đông. Giải pháp là bắt buộc thiết lập **Tích sản tự động (SIP)** để loại bỏ yếu tố tâm lý.
    *   *Nhóm S (Steadiness - Người Nuôi Dưỡng):* Kiên nhẫn nhưng ngại thay đổi, thích an toàn tuyệt đối. Cần động viên và đưa ra quy trình cụ thể khi lướt sóng.
    *   *Nhóm C (Compliance - Người Hoạch Định):* Chi tiết, logic, cẩn trọng. Dễ rơi vào bẫy "tê liệt phân tích" (Analysis Paralysis), cần hệ thống hóa bộ quy tắc mua/bán tự động.

### 2. Tầng 3 Nâng Cao: Tích Sản & Trading Thực Chiến
*   **Đầu Tư Giá Trị & SIP:**
    *   Tóm tắt nguyên lý chọn doanh nghiệp xuất chúng của Benjamin Graham (*The Intelligent Investor*) và Warren Buffett (*The Warren Buffett Way*).
    *   Ứng dụng **Magic Formula (Công Thức Kỳ Diệu)** của Joel Greenblatt vào thị trường Việt Nam (sắp xếp cổ phiếu theo tỷ suất sinh lời vốn ROC và lợi suất thu nhập Earnings Yield).
    *   Hệ thống hóa các phương pháp định giá cổ phiếu (P/E, P/B, định giá dòng tiền chiết khấu DCF).
*   **Giao Dịch Theo Xu Hướng (Trend Trading):**
    *   *Hệ thống CANSLIM:* Phương pháp chọn cổ phiếu tăng trưởng hàng đầu của William O'Neil.
    *   *Các Pha Chu Kỳ Wyckoff:* Phân tích cấu trúc thị trường qua 4 giai đoạn chính (Tích lũy $\rightarrow$ Đẩy giá $\rightarrow$ Phân phối $\rightarrow$ Đè giá).
    *   *Khung Giao Dịch Vietnam Trend Analyzer (VTA) của FinPeace:*
        *   Quy trình 3 bước: **Identify** (Nhận diện cấu trúc nến & Vol) $\rightarrow$ **Validate** (Xác nhận chéo qua ma trận điểm số) $\rightarrow$ **Execute** (Lập kế hoạch mua/bán với quản trị vốn).
        *   Ma trận tọa độ chấm điểm 2 chiều (tối đa 10 điểm): **Trend Score (0/5)** (sử dụng SMA, MACD, SuperTrend, Parabolic SAR, Momentum) kết hợp **Sideway Score (0/5)** (RSI, Bollinger Bands, Stochastic Slow...).
        *   Quản trị rủi ro nghiêm ngặt: Giới hạn quy mô vị thế sao cho mức thua lỗ tối đa nếu chạm Stop Loss không quá **2% tổng NAV**.

### 3. Chuyên Đề Blockchain & DeFi / RWA
*   Phân tích cấu trúc Blockchain từ hạ tầng cơ bản (PoW, PoS, UTXO vs Account Model) đến các công cụ lập trình thực tế (Rust, Solidity, Go).
*   Đặc biệt tập trung vào xu hướng **RWA (Real World Assets) - Mã hóa tài sản thực** (như bất động sản, chứng chỉ quỹ) thành các token on-chain phục vụ cho việc tích sản tài chính vi mô trong tương lai.

---

## 💻 IV. PHÂN TÍCH BỘ CÔNG CỤ TỰ ĐỘNG HÓA (PYTHON TOOLS)

Hệ thống tích hợp 3 script Python giúp kết nối AI, truy xuất cơ sở dữ liệu và vận hành hệ thống phân tích.

### 1. Cơ Chế Kết Nối LLM Kép (cloudflare_llm_provider.py)
*   *Kênh chính (Groq API):* Sử dụng mô hình chất lượng cao **Llama 3.3 70B** để phân tích tài chính sâu sắc.
*   *Kênh dự phòng (Cloudflare Workers AI):* Nếu Groq bị quá giới hạn (Rate Limit) hoặc lỗi kết nối, hệ thống tự động chuyển tiếp (fallback) sang mô hình miễn phí **Moonshot Kimi K2.7 (@cf/moonshotai/kimi-k2.7-code)** được lưu trữ trên Cloudflare để đảm bảo tính liên tục 24/7.

### 2. Hệ Thống Multi-Agent Song Song (multi_agent_orchestrator.py)
*   *Luồng vận hành:*
    ```
                      [ Người dùng nhập mã CK (ví dụ: HPG) ]
                                       │
                                       ▼
                   [ Data Layer: Truy vấn từ Supabase REST API ]
                   (Thông tin doanh nghiệp & Lịch sử giá cổ phiếu)
                                       │
                                       ▼
                     [ Multi-Agent Orchestrator (Song song) ]
             ┌─────────────────────────┼────────────────────────┐
             ▼                         ▼                        ▼
       [ FA Agent ]              [ TA Agent ]             [ Macro Agent ]
     (Phân tích cơ bản,       (Phân tích kỹ thuật,     (Phân tích vĩ mô,
      biên an toàn)             cấu trúc sóng VTA)       ngành, chu kỳ kinh tế)
             │                         │                        │
             └─────────────────────────┼────────────────────────┘
                                       │
                                       ▼
                                [ Master Agent ]
                     (Tổng hợp luận điểm & ra khuyến nghị)
    ```
*   *Tích hợp dữ liệu:* Kết nối trực tiếp vào Supabase qua REST API để lấy dữ liệu thực tế từ các bảng `companies` và `stock_prices`.

### 3. Công Cụ Đảm Bảo Chất Lượng (validate_kb.py)
*   *Chức năng:* Tự động quét toàn bộ thư mục Knowledge Base và sử dụng Regex để tìm kiếm, xác thực các liên kết cục bộ (local markdown links), tránh tình trạng liên kết bị hỏng (broken links) trong hệ thống tài liệu.

---

## 🚀 V. ĐỀ XUẤT TÍCH HỢP VÀO CHƯƠNG TRÌNH KBSV NEXTGEN 2026

1.  **Cập nhật Giáo trình Đào tạo (Curriculum Upgrade):**
    *   *Module 1-3 (Nền tảng):* Tích hợp sâu triết lý **3 Vùng đất** và **Tháp tài sản** để học viên có tư duy bọc thép tài chính trước khi tiếp cận khách hàng.
    *   *Module 7-10 (Kiến thức CK):* Sử dụng phương pháp **Định giá cổ phiếu thực tế** và **Magic Formula** để học viên thực hành FA Combat chuyên sâu.
    *   *Module 15-18 (Thực chiến):* Áp dụng khung giao dịch **Vietnam Trend Analyzer (Identify - Validate - Execute)** làm tiêu chuẩn bắt buộc cho học viên khi lập Script tư vấn Deal cho khách hàng thực tế.
2.  **Xây dựng Công cụ Trợ lý Số (SalesGPT):**
    *   Ứng dụng kiến trúc **Parallel Multi-Agent** từ file `multi_agent_orchestrator.py` vào hệ thống SalesGPT của HO3. Khi học viên cần tư vấn 1 mã cho khách, SalesGPT sẽ tự động kích hoạt 3 Agent (FA, TA, Macro) để phân tích nhanh và sinh ra kịch bản tư vấn (Script) cá nhân hóa trong vòng 30 giây.
3.  **Tối ưu hóa Chi phí Hạ tầng AI:**
    *   Học tập giải pháp kết hợp **Groq & Cloudflare Workers AI fallback** để triển khai các chatbot/trợ lý ảo chi phí thấp cho học viên NextGen thực chiến sáng tạo nội dung hàng ngày.
