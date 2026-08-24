# LỘ TRÌNH ĐÀO TẠO & THỰC CHIẾN NEXTGEN 2026
## NGÀY 26 (D26): PHÁI SINH VN30 FUTURES & CHIẾN THUẬT HEDGING
### MÃ TÀI LIỆU: NTD-SV-D26
*Chương trình hợp tác đào tạo giữa FinPeace và KB Securities Vietnam – Sở Giao Dịch 3 (HO3)*
> 📥 **Tài liệu thực hành:** [Bảng Tra Cứu Nhanh (Cheatsheet PDF)](file:///Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets/D26-cheatsheet-phai-sinh-vn30-futures.html) | [Bản in sạch (Skill Resource)](file:///Users/yenle/Documents/kbsvnextgen/.agents/skills/kbsv-nextgen/resources/03-dao-tao/lessons/cheatsheets/D26-cheatsheet-phai-sinh-vn30-futures.html)


---

## 📌 I. THÔNG TIN BÀI HỌC & MỤC TIÊU (LESSON OVERVIEW & OBJECTIVES)

*   **Thời lượng học:** Cả ngày (bám sát Daily Routine: Morning Briefing $\rightarrow$ Content Lab $\rightarrow$ CRM Update $\rightarrow$ Derivatives & Hedging Strategy).
*   **Vị trí trong lộ trình:** Ngày thứ hai mươi sáu của Lộ trình (Tuần 4 - Nghiệp vụ phái sinh nâng cao).
*   **Mục tiêu bài học theo khung ASK:**
    *   **Attitude (Thái độ):** Tư duy phòng thủ bọc thép tài sản (Hedging Mindset). Định vị chứng khoán phái sinh là công cụ quản trị rủi ro, bảo vệ danh mục cơ sở trong bão giảm của thị trường, tuyệt đối không cổ súy khách hàng tham gia đầu cơ cờ bạc T+0 mạo hiểm phá hủy tài khoản.
    *   **Skills (Kỹ năng):** Tính toán chính xác số lượng hợp đồng tương lai VN30 cần bán khống (Short) để phòng vệ đối ứng cho danh mục cơ sở; tư vấn thiết lập kế hoạch giải ngân Hedging nhịp nhàng theo diễn biến vĩ mô.
    *   **Knowledge (Kiến thức):** Nắm vững cơ chế giao dịch, ký quỹ và thanh toán T+0 của Hợp đồng tương lai chỉ số VN30 (VN30F1M). Hiểu rõ nguyên lý bù trừ lãi/lỗ của chiến thuật phòng vệ danh mục (Hedging).

---

## 📌 II. LÝ THUYẾT CHUYÊN SÂU (THEORETICAL FOUNDATION)

### 1. Bản Chất Của Hợp Đồng Tương Lai Chỉ Số VN30 (VN30 Futures)

**Chứng khoán phái sinh** là công cụ tài chính mà giá trị của nó phụ thuộc vào giá trị của một tài sản cơ sở. Tại thị trường Việt Nam, sản phẩm phái sinh phổ biến nhất là **Hợp đồng tương lai chỉ số VN30 (VN30 Futures)**.

Đặc tính giao dịch của VN30 Futures:
*   **Giao dịch hai chiều (Long/Short):** Nhà đầu tư có thể kiếm lời cả khi thị trường tăng (mở vị thế Mua - Long) và khi thị trường giảm (mở vị thế Bán khống - Short).
*   **Giao dịch T+0:** Cho phép mua và bán đóng vị thế ngay trong phiên, không cần chờ cổ phiếu về tài khoản như thị trường cơ sở (T+2).
*   **Đòn bẩy cao:** Nhà đầu tư chỉ cần ký quỹ một tỷ lệ nhỏ (khoảng $18\% - 22\%$ giá trị hợp đồng) là có thể giao dịch quy mô lớn.
*   **Hệ số nhân hợp đồng:** Quy định của Sở giao dịch là **$100.000$ VNĐ** cho mỗi điểm chỉ số VN30. Ví dụ, nếu chỉ số VN30 Futures đang ở $1.200$ điểm, giá trị thực tế của 1 hợp đồng tương lai là:
    $$\text{Giá trị 1 hợp đồng} = 1.200\text{ điểm} \times 100.000\text{ VNĐ} = 120.000.000\text{ VNĐ}$$

---

### 2. Chiến Thuật Hedging Phòng Ngừa Rủi Ro Danh Mục

**Hedging (Phòng vệ giá)** là hành động mở một vị thế phái sinh đối ứng ngược chiều với danh mục chứng khoán cơ sở đang nắm giữ nhằm triệt tiêu hoặc giảm thiểu tối đa rủi ro thua lỗ khi thị trường chung sụt giảm mạnh.

Triết lý của Môi giới Bình an HO3: *"Khi thị trường đi vào xu hướng Downtrend dài hạn, thay vì khuyên khách hàng bán tháo cắt lỗ các cổ phiếu cơ bản cực tốt (như FPT, ACB) trong hoảng loạn, Broker sẽ hướng dẫn khách hàng giữ nguyên danh mục cơ sở và mở vị thế Short phái sinh tương ứng để bảo vệ tài sản"*.

```
                    SƠ ĐỒ BÙ TRỪ TÀI SẢN CỦA CHIẾN THUẬT HEDGING:
┌───────────────────────────────────────┐       ┌───────────────────────────────────────┐
│     DANH MỤC CƠ SỞ (HPG, FPT, ACB)     │       │     VỊ THẾ SHORT PHÁI SINH VN30       │
├───────────────────────────────────────┤       ├───────────────────────────────────────┤
│ Thị trường giảm 15% ──> Lỗ tạm thời   │       │ Thị trường giảm 15% ──> Lãi thực tế   │
│ - 150.000.000 VNĐ                     │       │ + 150.000.000 VNĐ                     │
└───────────────────┬───────────────────┘       └───────────────────┬───────────────────┘
                    │                                               │
                    └───────────────────────┬───────────────────────┘
                                            ▼
                       [ TỔNG NAV TÀI KHOẢN KHÔNG ĐỔI (BÌNH AN) ]
```

---

### 3. Công Thức Tính Số Lượng Hợp Đồng Tương Lai Cần Short Để Hedging

Để thiết lập một vị thế phòng vệ hoàn hảo (Perfect Hedge), Broker áp dụng công thức định lượng sau:

$$N = \frac{V_p \times \beta}{F \times 100.000}$$

Trong đó:
*   $N$: Số lượng hợp đồng tương lai VN30 cần bán khống (Short).
*   $V_p$: Tổng giá trị thị trường của danh mục cổ phiếu cơ sở cần bảo vệ (Portfolio Value).
*   $\beta$ (Hệ số Beta): Hệ số đo lường mức độ biến động của danh mục cơ sở so với chỉ số VN30. (Ví dụ: danh mục có Beta = 1.2 nghĩa là khi VN30 giảm $10\%$, danh mục cơ sở sẽ giảm $12\%$).
*   $F$: Điểm số của chỉ số hợp đồng tương lai VN30 Futures hiện tại.
*   $100.000$ VNĐ: Hệ số nhân quy định của Sở giao dịch.

---

### 4. Câu Chuyện Thực Tế: Chị Vân Bảo Vệ Danh Mục 2 Tỷ Đồng Đi Qua Bão Giảm Điểm Năm 2024

Chị Vân (42 tuổi, chủ chuỗi cửa hàng thuốc tây tại TP.HCM, nhóm tính cách **S**) sở hữu danh mục cổ phiếu bọc thép tích sản trị giá **2 tỷ đồng** tại chi nhánh HO3 (bao gồm FPT, ACB, HPG). Vào tháng 8/2024 vĩ mô xuất hiện thông tin tiêu cực, chỉ số VN30 Futures giảm mạnh từ $1.250$ điểm về còn $1.060$ điểm (giảm $15.2\%$). Danh mục cơ sở của chị Vân do có hệ số Beta trung bình là $1.0$ nên cũng sụt giảm tương ứng gần 300 triệu đồng. 

Chị Vân vô cùng hoảng loạn, mất ngủ liên tục và gọi điện đòi Broker đặt lệnh bán tháo sạch sẽ danh mục tích sản để thu hồi tiền mặt gửi tiết kiệm.

Broker tư vấn (chi nhánh HO3) đã áp dụng chiến thuật Hedging bọc thép để giải cứu tâm lý cho chị Vân:
1.  **Tính toán vị thế:** Diễn giá tính toán số lượng hợp đồng cần Short tại mức VN30 Futures đang ở $1.250$ điểm:
    $$N = \frac{2.000.000.000\text{ VNĐ} \times 1.0}{1.250\text{ điểm} \times 100.000\text{ VNĐ}} = 16\text{ hợp đồng tương lai}$$
2.  **Thực thi:** Hướng dẫn chị Vân nộp khoảng 400 triệu tiền ký quỹ ($20\%$) vào tiểu khoản phái sinh và thực hiện đặt lệnh **Short 16 hợp đồng VN30F1M** ở mức giá $1.250$ điểm.
3.  **Kết quả khi thị trường giảm về đáy 1.060 điểm:**
    *   *Trên tài khoản cơ sở:* Danh mục cổ phiếu của chị Vân bị giảm giá trị tạm thời mất **304.000.000 VNĐ**.
    *   *Trên tài khoản phái sinh:* Vị thế Short 16 hợp đồng mang về khoản lợi nhuận thực tế:
        $$\text{Lợi nhuận phái sinh} = 16\text{ hđ} \times (1.250 - 1.060)\text{ điểm} \times 100.000\text{ VNĐ} = 304.000.000\text{ VNĐ}$$
    *   *Tổng kết tài sản:* Khoản lãi phái sinh bù trừ chính xác $100\%$ cho khoản lỗ tạm thời của danh mục cơ sở. Tổng NAV tài sản ròng của chị Vân được bảo toàn nguyên vẹn ở mức 2 tỷ đồng.

Nhờ chiến thuật Hedging thông thái này, chị Vân không bị mất một cổ phiếu tốt nào ở vùng giá đáy, tối ngủ cực kỳ ngon giấc. Khi thị trường tạo đáy và phục hồi trở lại vào cuối năm, chị Vân đóng vị thế Short phái sinh và tận hưởng đà tăng trưởng mạnh mẽ của danh mục cổ phiếu cơ sở ban đầu.

---

## 📌 III. BÀI TẬP THỰC HÀNH TÍNH TOÁN & BỐC TÁCH (PRACTICAL EXERCISES)

### 📝 Bài Tập: Thiết Lập Vị Thế Hedging Phái Sinh Cho Danh Mục 1.5 Tỷ Đồng

**Thông số danh mục của khách hàng anh Hoàng:**
*   **Tổng giá trị danh mục cơ sở cần bảo vệ ($V_p$):** 1.500.000.000 VNĐ.
*   **Hệ số Beta trung bình của danh mục so với VN30:** 1.15 (danh mục biến động mạnh hơn VN30 $15\%$).
*   **Điểm số chỉ số VN30 Futures hiện tại ($F$):** 1.200 điểm.

**Yêu cầu đối với học viên:**
1.  Tính số lượng hợp đồng tương lai VN30F1M tối thiểu anh Hoàng cần Short để thiết lập vị thế phòng vệ Hedging hoàn hảo.
2.  Giả sử sau 1 tuần, thị trường sụt giảm mạnh khiến chỉ số VN30 Futures giảm $8\%$ về mức $1.104$ điểm và danh mục cổ phiếu cơ sở của anh Hoàng sụt giảm tương ứng $9.2\%$ ($8\% \times 1.15$). Hãy tính toán:
    *   Khoản lỗ tạm thời trên tài khoản chứng khoán cơ sở của anh Hoàng.
    *   Khoản lợi nhuận thực tế thu được từ vị thế Short phái sinh (chưa tính phí thuế).
    *   Đánh giá mức độ bù trừ tài sản ròng của tài khoản sau khi thực hiện Hedging.

#### 💡 Lời Giải Chi Tiết Của Bài Tập:

1.  **Bước 1: Tính số lượng hợp đồng cần Short (N):**
    *   Áp dụng công thức:
        $$N = \frac{1.500.000.000 \times 1.15}{1.200 \times 100.000} = \frac{1.725.000.000}{120.000.000} = 14.375\text{ hợp đồng}$$
    *   *Kết luận:* Anh Hoàng cần thực hiện đặt lệnh Short **14 hợp đồng tương lai VN30F1M** (làm tròn về số hợp đồng nguyên gần nhất).

2.  **Bước 2: Tính toán hiệu quả khi thị trường giảm 8%:**
    *   **Khoản lỗ tạm thời trên tài khoản cơ sở:**
        $$\text{Khoản lỗ cơ sở} = 1.500.000.000 \times (-9.2\%) = -138.000.000\text{ VNĐ}$$
    *   **Khoản lợi nhuận thu được từ vị thế Short 14 hợp đồng phái sinh:**
        $$\text{Mức điểm chênh lệch} = 1.200 - 1.104 = 96\text{ điểm}$$
        $$\text{Lợi nhuận phái sinh} = 14\text{ hđ} \times 96\text{ điểm} \times 100.000\text{ VNĐ} = 134.400.000\text{ VNĐ}$$

3.  **Bước 3: Đánh giá hiệu quả bù trừ tài sản:**
    *   Khoản lợi nhuận phái sinh (+134.4 triệu) đã bù đắp được **$97.4\%$** khoản lỗ tạm thời của danh mục cơ sở (-138 triệu).
    *   Mức thiệt hại thực tế của tổng NAV sau Hedging chỉ còn lại:
        $$\text{Thiệt hại ròng} = -138.000.000 + 134.400.000 = -3.600.000\text{ VNĐ}$$
    *   *Kết luận:* Chiến thuật Hedging đã bảo vệ cực kỳ xuất sắc tài sản của anh Hoàng, giảm thiểu mức sụt giảm tài sản từ lỗ 138 triệu xuống chỉ còn lỗ nhẹ 3.6 triệu đồng ($0.24\%$ NAV) trước một cơn bão sụt giảm lớn của thị trường.

---

## 📌 IV. BÀI TEST ĐÁNH GIÁ NĂNG LỰC (COMPETENCY ASSESSMENT)

*Hãy chọn đáp án đúng nhất cho các câu hỏi sau và đối chiếu với phần giải thích chi tiết ở dưới.*

### Câu 1: Ý nghĩa cốt lõi của hoạt động phòng vệ giá (Hedging) bằng chứng khoán phái sinh là gì?
A. Để giúp Broker kiếm thêm hoa hồng quay vòng phí phái sinh của khách hàng.
B. Bù trừ biến động tài sản bằng cách mở vị thế phái sinh ngược chiều với danh mục cơ sở, giúp bảo vệ tổng NAV không bị sụt giảm mạnh khi thị trường đi vào xu hướng giảm.
C. Cam kết chắc chắn thu nhập cố định hàng tháng cho khách hàng.
D. Để mua được cổ phiếu cơ sở với mức giá rẻ hơn giá thị trường.

### Câu 2: Trong công thức tính số hợp đồng phái sinh cần Short để Hedging, hệ số Beta của danh mục cơ sở đo lường chỉ số nào?
A. Tỷ lệ lãi suất vay Margin của công ty chứng khoán.
B. Độ biến động của chỉ số VN-Index so với giá vàng.
C. Mức độ biến động (độ nhạy) của danh mục cổ phiếu cơ sở đang nắm giữ so với biến động chung của chỉ số tham chiếu VN30.
D. Số năm kinh nghiệm đầu tư thực tế của khách hàng.

### Câu 3: Một hợp đồng tương lai chỉ số VN30 Futures có điểm số là 1.150 điểm. Giá trị thực tế của hợp đồng này theo quy định của Sở giao dịch là bao nhiêu?
A. 11.500.000 VNĐ.
B. 115.000.000 VNĐ.
C. 1.150.000.000 VNĐ.
D. Tùy thuộc vào số vốn ký quỹ của khách hàng nộp vào.

### Câu 4: Khi thị trường chứng khoán cơ sở bước vào nhịp phục hồi tăng trưởng mạnh trở lại, Broker cần hướng dẫn khách hàng xử lý vị thế Hedging phái sinh như thế nào?
A. Tiếp tục giữ nguyên vị thế Short phái sinh vĩnh viễn.
B. Thực hiện đặt lệnh Long đóng vị thế Short phái sinh để khóa khoản lãi/lỗ phòng vệ, quay trở lại tập trung hưởng đà tăng trưởng của danh mục cơ sở.
C. Khuyên khách hàng nộp thêm tiền vay Margin để mua thêm hợp đồng Short.
D. Tự ý đặt lệnh ngược chiều trên tài khoản của khách hàng để tạo doanh số.

### Câu 5: Tại sao đòn bẩy cao của chứng khoán phái sinh lại là rủi ro cực lớn đối với nhà đầu tư F0 tự lướt sóng ngắn hạn T+0 không kỷ luật?
A. Phí thuế phái sinh sẽ tự động trừ hết tiền gốc sau 1 ngày.
B. Biến động điểm số nhanh kết hợp đòn bẩy lớn có thể khiến tài khoản ký quỹ phái sinh bị cháy sạch tiền gốc chỉ sau vài giờ giao dịch nếu đi ngược xu hướng mà không đặt lệnh cắt lỗ (Stop Loss).
C. Hệ thống phái sinh không cho phép khách hàng đặt lệnh bán cắt lỗ.
D. Khách hàng sẽ bị công ty chứng khoán khởi kiện khi tài khoản bị lỗ.

---

### 💡 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (ANSWER KEY)

*   **Câu 1: Chọn B.**
    *   *Giải thích:* Bản chất của Hedging là tạo ra một vị thế cân bằng tài sản. Khoản lỗ trên thị trường này được bù đắp bởi khoản lãi trên thị trường kia, giữ cho tổng quy mô tài sản của nhà đầu tư được bình an đi qua bão giảm.
*   **Câu 2: Chọn C.**
    *   *Giải thích:* Beta là hệ số đo lường rủi ro hệ thống của cổ phiếu hoặc danh mục. Nắm chắc hệ số Beta của danh mục giúp Broker tính toán chính xác số lượng hợp đồng phái sinh cần thiết để phòng vệ tối ưu.
*   **Câu 3: Chọn B.**
    *   *Giải thích:* Giá trị hợp đồng phái sinh = Điểm số chỉ số x Hệ số nhân quy định ($100.000$ VNĐ). Do đó:
        $$\text{Giá trị hợp đồng} = 1.150 \times 100.000 = 115.000.000\text{ VNĐ}$$
*   **Câu 4: Chọn B.**
    *   *Giải thích:* Hedging chỉ áp dụng trong các nhịp giảm của thị trường để bảo vệ vốn. Khi thị trường quay trở lại xu hướng tăng, phải đóng vị thế phòng thủ để danh mục cơ sở phát huy tối đa hiệu suất sinh lời.
*   **Câu 5: Chọn B.**
    *   *Giải thích:* Phái sinh là trò chơi có tổng bằng không (Zero-sum game) biến động cực nhanh với đòn bẩy gấp 5 - 6 lần cơ sở. F0 lướt sóng cảm xúc không kỷ luật cắt lỗ sẽ nhanh chóng bị cháy sạch tài khoản do tác động đòn bẩy.

---

## 📌 VI. QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)

> [!IMPORTANT]
> **QUY TẮC PHÁT NGÔN VỀ GIAO DỊCH PHÁI SINH:**
> 1.  Broker NextGen **tuyệt đối không** được tư vấn phái sinh cho khách hàng F0 như một công cụ làm giàu nhanh hoặc kênh đầu cơ kiếm tiền hàng ngày.
> 2.  Mọi khuyến nghị phái sinh phải đi kèm với việc làm rõ tỷ lệ ký quỹ yêu cầu, phí thuế giao dịch của Sở giao dịch và bắt buộc khách hàng phải tuân thủ kỷ luật đặt lệnh cắt lỗ Stop Loss tự động trên hệ thống.
