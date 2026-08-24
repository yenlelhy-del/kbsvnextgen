# LỘ TRÌNH ĐÀO TẠO & THỰC CHIẾN NEXTGEN 2026
## NGÀY 23 (D23): ĐÒN BẨY MARGIN & CÔNG THỨC TÍNH RTT
### MÃ TÀI LIỆU: NTD-SV-D23
*Chương trình hợp tác đào tạo giữa FinPeace và KB Securities Vietnam – Sở Giao Dịch 3 (HO3)*
> 📥 **Tài liệu thực hành:** [Bảng Tra Cứu Nhanh (Cheatsheet PDF)](file:///Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets/D23-cheatsheet-don-bay-margin-cong-thuc-rtt.html) | [Bản in sạch (Skill Resource)](file:///Users/yenle/Documents/kbsvnextgen/.agents/skills/kbsv-nextgen/resources/03-dao-tao/lessons/cheatsheets/D23-cheatsheet-don-bay-margin-cong-thuc-rtt.html)


---

## 📌 I. THÔNG TIN BÀI HỌC & MỤC TIÊU (LESSON OVERVIEW & OBJECTIVES)

*   **Thời lượng học:** Cả ngày (bám sát Daily Routine: Morning Briefing $\rightarrow$ Content Lab $\rightarrow$ CRM Update $\rightarrow$ Margin Math Session).
*   **Vị trí trong lộ trình:** Ngày thứ hai mươi ba của Lộ trình (Tuần 3 - Quản trị rủi ro và Margin).
*   **Mục tiêu bài học theo khung ASK:**
    *   **Attitude (Thái độ):** Thấu hiểu sâu sắc rằng đòn bẩy Margin là con dao hai lưỡi – là chất xúc tác nhân đôi lợi nhuận khi thị trường tăng giá, nhưng cũng là ngòi nổ thiêu rụi tài sản nhanh gấp đôi khi thị trường giảm giá. Luôn duy trì thái độ thận trọng, kỷ luật và đặt an toàn vốn của khách hàng lên trên hết.
    *   **Skills (Kỹ năng):** Tính toán chính xác sức mua Margin, số dư nợ vay và Tỷ lệ tài sản ròng RTT thực tế của tài khoản; tư vấn thiết lập tỷ lệ sử dụng đòn bẩy an toàn cho khách hàng theo từng bối cảnh thị trường.
    *   **Knowledge (Kiến thức):** Nắm vững cơ chế cho vay ký quỹ (Margin) tại KBSV. Hiểu sâu công thức tính RTT và ý nghĩa pháp lý của các mốc cảnh báo RTT quan trọng.

---

## 📌 II. LÝ THUYẾT CHUYÊN SÂU (THEORETICAL FOUNDATION)

### 1. Bản Chất Của Đòn Bẩy Margin Trong Giao Dịch Chứng Khoán

**Giao dịch ký quỹ (Margin Trading)** là dịch vụ cho phép nhà đầu tư vay thêm tiền từ Công ty Chứng khoán (CTCK) để mua cổ phiếu, sử dụng chính số cổ phiếu đang có sẵn và cổ phiếu mua mới làm tài sản thế chấp cho khoản vay đó.

Mục đích của việc cho vay Margin đối với các CTCK là tạo thêm nguồn doanh thu từ **Lãi vay Margin** (thường từ $9.9\% - 14.5\%$/năm) và gia tăng **Doanh thu phí giao dịch** nhờ quy mô đặt lệnh lớn hơn của khách hàng. Đối với nhà đầu tư, Margin giúp tối ưu hóa vốn để gia tăng tỷ suất sinh lời khi xu hướng thị trường tăng giá rõ rệt.

Tuy nhiên, rủi ro cực lớn của Margin là khi giá cổ phiếu giảm, khoản lỗ sẽ bị nhân lên theo tỷ lệ đòn bẩy tương ứng. Nếu không quản trị chặt chẽ, tài khoản sẽ nhanh chóng rơi vào tình trạng bị giải chấp ép buộc.

---

### 2. Các Thuật Ngữ Cốt Lõi Về Nghiệp Vụ Margin

Broker NextGen bắt buộc phải nắm lòng các khái niệm sau để giải thích cho khách hàng:
*   **Giá trị danh mục (Portfolio Value - PV):** Tổng giá trị thị trường của toàn bộ cổ phiếu hiện có trong tài khoản Standard đuôi 6.
    $$\text{PV} = \sum (\text{Số lượng cổ phiếu} \times \text{Thị giá hiện tại})$$
*   **Nợ vay Margin (Margin Debt - D):** Tổng số tiền khách hàng đang vay từ KBSV để mua cổ phiếu (bao gồm cả gốc vay ban đầu và phí lãi vay tích lũy).
*   **Tài sản ròng (Equity - E):** Giá trị tài sản thực tế thuộc sở hữu của khách hàng sau khi đã trừ đi khoản nợ vay.
    $$\text{E} = \text{PV} + \text{Số dư tiền mặt} - \text{Nợ vay Margin (D)}$$
*   **Tỷ lệ ký quỹ (Margin Ratio):** Tỷ lệ phần trăm vốn tự có tối thiểu mà khách hàng phải đóng góp để mua một mã cổ phiếu cụ thể. Ví dụ, cổ phiếu HPG có tỷ lệ ký quỹ là $50\%$ nghĩa là nếu khách hàng muốn mua 100 triệu HPG, họ phải có sẵn tối thiểu 50 triệu tiền mặt, còn lại 50 triệu vay của KBSV (tỷ lệ đòn bẩy tối đa là $1:1$).

---

### 3. Công Thức Tính Tỷ Lệ Tài Sản Ròng RTT Thực Tế Tại KBSV

Tại KBSV, để quản trị rủi ro nợ vay, hệ thống liên tục tính toán **Tỷ lệ tài sản ròng RTT** (viết tắt của Ratio of Total Assets) theo thời gian thực của phiên giao dịch:

$$\text{RTT} = \frac{\text{Tài sản ròng (Equity - E)}}{\text{Giá trị danh mục chứng khoán (Portfolio Value - PV)}} \times 100\%$$

*Ví dụ diễn giải bằng ASCII về cơ chế RTT:*
```
KHI THỊ TRƯỜNG TĂNG:
[Giá cổ phiếu tăng] ──> [PV tăng] ──> [E tăng nhanh hơn D] ──> [RTT tăng (> 50%)] ──> AN TOÀN

KHI THỊ TRƯỜNG GIẢM:
[Giá cổ phiếu giảm] ──> [PV giảm] ──> [D giữ nguyên] ──> [E bốc hơi nhanh] ──> [RTT giảm (< 35%)] ──> CALL MARGIN
```

---

### 4. Bốn Mốc RTT Quan Trọng Và Hành Động Quản Trị Rủi Ro

Hệ thống quản trị rủi ro tự động của KBSV chia RTT thành 4 phân vùng cảnh báo với các mốc hành động nghiêm ngặt như sau:

| Tỷ Lệ RTT | Phân Vùng Cảnh Báo | Ý Nghĩa / Hành Động Bắt Buộc |
| :--- | :--- | :--- |
| **$\text{RTT} \ge 45\%$** | **Vùng An Toàn (Safe Zone)** | Tài khoản hoạt động bình thường. Khách hàng có thể tiếp tục đặt lệnh mua thêm cổ phiếu mới hoặc rút tiền nhặng dư ra ngoài. |
| **$35\% \le \text{RTT} < 45\%$** | **Vùng Cảnh Báo (Warning Zone)** | Hệ thống gửi cảnh báo màu vàng trên app. Tài khoản không được phép mua thêm cổ phiếu bằng Margin. Broker cần chủ động theo dõi sát. |
| **$30\% \le \text{RTT} < 35\%$** | **Vùng Call Margin (Call Zone)** | **Hệ thống tự động gửi tin nhắn Call Margin.** Khách hàng có nghĩa vụ phải nộp thêm tiền mặt hoặc chủ động bán bớt cổ phiếu để đưa RTT phục hồi về mức an toàn tối thiểu **$40\%$** trong vòng 2 phiên giao dịch. |
| **$\text{RTT} < 30\%$** | **Vùng Giải Chấp (Force Sell Zone)** | **Hệ thống kích hoạt trạng thái Force Sell.** Đúng 14h00 hàng ngày, nếu khách hàng không nộp tiền hoặc bán hạ tỷ trọng, bộ phận Quản trị rủi ro của KBSV HO3 buộc phải tự động đặt lệnh bán giải chấp cổ phiếu của khách bằng lệnh MP để thu hồi nợ gốc. |

---

### 5. Câu Chuyện Thực Tế: Câu Chuyện Hai Tài Khoản HPG Trong Nhịp Giảm Điểm Cuối Năm 2024

Để thấy rõ sự khác biệt sinh tử của việc sử dụng đòn bẩy Margin, chúng ta cùng xem xét câu chuyện thực tế của anh Nam và anh Bắc tại chi nhánh HO3 vào tháng 11/2024. Cả hai anh đều là kỹ sư cơ khí, có cùng chung niềm tin dài hạn vào cổ phiếu **HPG** và cùng sở hữu số vốn tự có ban đầu là **300 triệu đồng** khi thị giá HPG đang ở mức **$28.000$ VNĐ/cp**.

*   **Tài khoản anh Nam (Tích sản tiền mặt, không dùng Margin):**
    *   Anh Nam dùng đúng 300 triệu đồng mua gom được $10.700$ cổ phiếu HPG ở giá $28.000$ VNĐ/cp. Tài khoản không phát sinh một đồng nợ vay nào.
*   **Tài khoản anh Bắc (Đầu cơ đòn bẩy, Margin kịch khung tỷ lệ ký quỹ $50\%$):**
    *   Với 300 triệu tiền mặt, anh Bắc vay thêm của KBSV **300 triệu đồng** nữa để mua kịch khung tổng cộng **600 triệu đồng** cổ phiếu HPG (tổng số lượng mua được là $21.400$ cổ phiếu). Tài khoản ghi nhận khoản nợ vay Margin $D = 300$ triệu đồng. RTT ban đầu đạt $50\%$.

#### 📉 Biến cố thị trường xảy ra:
Vào cuối năm 2024, thị trường chứng khoán bất ngờ gặp cú sốc vĩ mô toàn cầu, giá cổ phiếu HPG sụt giảm mạnh từ $28.000$ VNĐ/cp về mức đáy **$20.000$ VNĐ/cp** (giảm $28.5\%$).

*   **Hậu quả đối với anh Nam:**
    *   Giá trị danh mục HPG của anh Nam giảm từ 300 triệu về còn **214 triệu đồng** (lỗ tạm thời $86$ triệu đồng). Tuy nhiên, vì không có nợ vay, tài khoản của anh Nam hoàn toàn không chịu bất kỳ áp lực Call Margin nào. Anh Nam điềm tĩnh tắt app, tiếp tục nhận cổ tức tiền mặt và chờ đợi thị trường phục hồi trong sự bình an.
*   **Hậu quả đối với anh Bắc:**
    *   Giá trị danh mục HPG của anh Bắc giảm mạnh về:
        $$\text{PV mới} = 21.400\text{ cp} \times 20.000 = 428.000.000\text{ VNĐ}$$
    *   Khoản nợ vay Margin của anh Bắc vẫn giữ nguyên là **300 triệu đồng**.
    *   Tài sản ròng (Equity) thực tế còn lại của anh Bắc bốc hơi cực mạnh:
        $$\text{Equity} = 428.000.000 - 300.000.000 = 128.000.000\text{ VNĐ (lỗ thực tế 172 triệu)}$$
    *   Tỷ lệ RTT chạm mức nguy hiểm:
        $$\text{RTT} = \frac{128.000.000}{428.000.000} \times 100\% = 29.9\%$$
    *   Vì RTT của anh Bắc dưới $30\%$, tài khoản của anh rơi vào diện **Force Sell giải chấp bắt buộc**. Do không thể nộp thêm tiền mặt lập tức, đúng 14h00 hệ thống KBSV đã tự động đặt lệnh MP bán giải chấp một nửa số cổ phiếu HPG của anh Bắc ở vùng giá đáy $20.000$ VNĐ để trả nợ.
    *   Đến khi thị trường phục hồi trở lại mức giá $28.000$ VNĐ/cp vào giữa năm 2025, anh Nam đã hòa vốn và bắt đầu có lãi lớn. Trong khi đó, anh Bắc đã bị hiện thực hóa khoản lỗ vĩnh viễn ở vùng đáy, mất đi một nửa số cổ phiếu và không bao giờ có cơ hội gỡ lại số vốn đã mất.

*Bài học rút ra:* Margin có thể phóng đại lợi nhuận nhưng cũng là tác nhân biến khoản lỗ tạm thời thành khoản lỗ vĩnh viễn không thể khắc phục. Broker NextGen phải luôn cảnh báo kỹ rủi ro này cho khách hàng F0 trước khi họ có ý định mở tính năng Margin.

---

## 📌 III. BÀI TẬP THỰC HÀNH TÍNH TOÁN & BỐC TÁCH (PRACTICAL EXERCISES)

### 📝 Bài Tập: Tính Toán Sức Mua & Biến Động RTT Của Tài Khoản Margin

**Thông số ban đầu của tài khoản chị Vy:**
*   Chị Vy nộp **150.000.000 VNĐ** tiền mặt vào tài khoản Standard đuôi 6.
*   Chị Vy muốn mua cổ phiếu **ACB** có tỷ lệ ký quỹ quy định tại KBSV là **$40\%$** (tương đương tỷ lệ đòn bẩy tối đa là $1 : 1.5$, tức là có 4 đồng tiền mặt được vay thêm tối đa 6 đồng).

**Yêu cầu đối với học viên:**
1.  Tính tổng giá trị danh mục cổ phiếu ACB tối đa chị Vy có thể mua (Sức mua tối đa).
2.  Tính số tiền nợ vay Margin phát sinh khi chị Vy đặt lệnh mua tối đa.
3.  Giả sử sau khi khớp lệnh mua tối đa ở vùng giá $25.000$ VNĐ/cp, giá cổ phiếu ACB đột ngột sụt giảm $15\%$ về mức giá $21.250$ VNĐ/cp. Hãy tính toán:
    *   Giá trị danh mục (PV) mới.
    *   Tài sản ròng (Equity) mới.
    *   Tỷ lệ tài sản ròng RTT mới của tài khoản.
    *   Xác định trạng thái tài khoản của chị Vy (An toàn, Cảnh báo, Call Margin, hay Force Sell) và đề xuất hành động tư vấn tương ứng.

#### 💡 Lời Giải Chi Tiết Của Bài Tập:

1.  **Bước 1: Tính tổng giá trị danh mục tối đa (Sức mua tối đa):**
    *   Tỷ lệ ký quỹ yêu cầu là $40\%$. Điều này nghĩa là tiền mặt đóng vai trò $40\%$ trong tổng giá trị danh mục mua tối đa.
    *   Công thức tính sức mua tối đa:
        $$\text{Sức mua tối đa} = \frac{\text{Tiền mặt có sẵn}}{\text{Tỷ lệ ký quỹ}} = \frac{150.000.000}{40\%} = 375.000.000\text{ VNĐ}$$

2.  **Bước 2: Tính nợ vay Margin phát sinh:**
    $$\text{Nợ vay Margin (D)} = \text{Tổng giá trị danh mục} - \text{Tiền mặt gốc} = 375.000.000 - 150.000.000 = 225.000.000\text{ VNĐ}$$

3.  **Bước 3: Tính toán biến động khi cổ phiếu ACB giảm 15%:**
    *   **Giá trị danh mục (PV) mới sau giảm 15%:**
        $$\text{PV mới} = 375.000.000 \times (1 - 15\%) = 318.750.000\text{ VNĐ}$$
    *   **Tài sản ròng (Equity) mới:**
        $$\text{Equity mới} = \text{PV mới} - \text{Nợ vay Margin (D)} = 318.750.000 - 225.000.000 = 93.750.000\text{ VNĐ}$$
    *   **Tính Tỷ lệ RTT mới của tài khoản:**
        $$\text{RTT mới} = \frac{\text{Equity mới}}{\text{PV mới}} \times 100\% = \frac{93.750.000}{318.750.000} \times 100\% = 29.41\%$$

#### 📊 Đánh giá trạng thái tài khoản và tư vấn:
*   **Trạng thái tài khoản:** RTT của chị Vy sụt giảm về **$29.41\%$**, nhỏ hơn mốc giải chấp nguy hiểm **$30\%$**. Do đó, tài khoản của chị Vy rơi vào trạng thái **Force Sell (Giải chấp bắt buộc)**.
*   **Đề xuất hành động tư vấn của Broker:**
    *   Broker cần gọi điện khẩn cấp cho chị Vy trước 14h00 để thông báo tình trạng giải chấp.
    *   Khuyên chị Vy chủ động đặt lệnh bán một phần cổ phiếu ACB ngay trong phiên sáng hoặc nộp thêm tiền mặt để đưa RTT phục hồi về mốc an toàn tối thiểu **$40\%$**, tránh việc bị hệ thống Force Sell cưỡng bức ở mức giá xấu nhất phiên chiều.

---

## 📌 IV. BÀI TEST ĐÁNH GIÁ NĂNG LỰC (COMPETENCY ASSESSMENT)

*Hãy chọn đáp án đúng nhất cho các câu hỏi sau và đối chiếu với phần giải thích chi tiết ở dưới.*

### Câu 1: Tỷ lệ tài sản ròng RTT của tài khoản ký quỹ tại KBSV được tính bằng công thức nào sau đây?
A. RTT = (Tổng nợ vay / Tổng tài sản) x 100%.
B. RTT = (Tài sản ròng Equity / Giá trị danh mục chứng khoán PV) x 100%.
C. RTT = (Tiền mặt nhàn rỗi / Tổng nợ vay) x 100%.
D. RTT = (Doanh thu phí giao dịch / Lãi suất Margin) x 100%.

### Câu 2: Khi tỷ lệ RTT của tài khoản khách hàng sụt giảm về mốc 32%, hệ thống KBSV sẽ kích hoạt trạng thái cảnh báo nào?
A. Trạng thái An Toàn (Safe Zone), cho phép rút tiền mặt tự do.
B. Trạng thái Force Sell (Giải chấp bắt buộc), tự động đặt lệnh bán bằng mọi giá.
C. Trạng thái Call Margin, gửi tin nhắn yêu cầu khách hàng nộp tiền hoặc bán bớt cổ phiếu để đưa RTT về 40% trong vòng 2 ngày làm việc.
D. Trạng thái khóa vĩnh viễn tài khoản giao dịch của khách hàng.

### Câu 3: Mốc tỷ lệ RTT tối thiểu để kích hoạt trạng thái Force Sell (Bán giải chấp bắt buộc) tại hệ thống KBSV là bao nhiêu?
A. RTT dưới 50%.
B. RTT dưới 45%.
C. RTT dưới 35%.
D. RTT dưới 30%.

### Câu 4: Nếu tài khoản Margin của khách hàng có tiền mặt 100 triệu và muốn mua một cổ phiếu có tỷ lệ ký quỹ 50%, sức mua tối đa của tài khoản là bao nhiêu?
A. 100 triệu VNĐ.
B. 150 triệu VNĐ.
C. 200 triệu VNĐ.
D. 300 triệu VNĐ.

### Câu 5: Tại sao việc sử dụng Margin kịch khung mua gom cổ phiếu trong nhịp thị trường giảm mạnh lại cực kỳ nguy hiểm đối với nhà đầu tư F0?
A. Vì phí giao dịch của tài khoản Margin đắt gấp 10 lần tài khoản thường.
B. Vì giá cổ phiếu giảm sẽ khiến RTT sụt giảm nhanh chóng dưới tác động nhân đôi của đòn bẩy, dễ dẫn đến bị Force Sell giải chấp ép buộc ở vùng giá đáy, hiện thực hóa khoản lỗ vĩnh viễn.
C. Vì công ty chứng khoán sẽ tịch thu toàn bộ cổ phiếu của khách hàng.
D. Vì khách hàng sẽ bị cấm tham gia thị trường chứng khoán vĩnh viễn.

---

### 💡 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (ANSWER KEY)

*   **Câu 1: Chọn B.**
    *   *Giải thích:* RTT phản ánh tỷ lệ phần sở hữu thực tế của khách hàng (Equity) trên tổng quy mô tài sản thế chấp (PV). Đây là chỉ số quan trọng nhất để quản trị rủi ro cho cả khách hàng và CTCK.
*   **Câu 2: Chọn C.**
    *   *Giải thích:* Mốc RTT nằm trong khoảng từ $30\%$ đến dưới $35\%$ thuộc diện Call Margin. Hệ thống sẽ cảnh báo yêu cầu khách hàng nộp tiền hoặc bán chủ động đưa RTT về mốc an toàn $40\%$.
*   **Câu 3: Chọn D.**
    *   *Giải thích:* RTT dưới $30\%$ chạm ngưỡng Force Sell giải chấp. Hệ thống buộc phải tự động bán giải chấp cổ phiếu vào lúc 14h00 để bảo toàn vốn cho khoản nợ vay của công ty.
*   **Câu 4: Chọn C.**
    *   *Giải thích:* Áp dụng công thức tính sức mua:
        $$\text{Sức mua} = \frac{\text{Tiền mặt}}{\text{Tỷ lệ ký quỹ}} = \frac{100.000.000}{50\%} = 200.000.000\text{ VNĐ}$$
*   **Câu 5: Chọn B.**
    *   *Giải thích:* Khi không có Margin, khoản lỗ chỉ là tạm thời (lỗ trên giấy tờ) và cổ phiếu tốt chắc chắn sẽ phục hồi. Nhưng dùng Margin cao bị giải chấp bắt buộc nghĩa là cổ phiếu bị bán thật ở giá đáy, khách hàng mất mát tài sản vĩnh viễn và không thể làm lại.

---

## 📌 VI. QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)

> [!IMPORTANT]
> **QUY TẮC CẢNH BÁO RỦI RO ĐÒN BẨY MARGIN BẮT BUỘC:**
> 1.  Broker NextGen **tuyệt đối không** được chủ động khuyên khách hàng F0 mới mở tài khoản dưới 1 tháng sử dụng tối đa hạn mức Margin để mua gom các cổ phiếu biến động mạnh.
> 2.  Mọi tư vấn sử dụng Margin phải đi kèm với việc làm rõ lãi suất vay Margin hiện hành của KBSV và các mốc cảnh báo RTT Call Margin/Force Sell bằng văn bản tin nhắn để khách hàng nắm rõ trước khi đặt lệnh.
