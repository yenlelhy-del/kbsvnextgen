# LỘ TRÌNH ĐÀO TẠO & THỰC CHIẾN NEXTGEN 2026
## NGÀY 27 (D27): QUY ĐỊNH KÝ QUỸ VSD & QUẢN TRỊ RỦI RO PHÁI SINH
### MÃ TÀI LIỆU: NTD-SV-D27
*Chương trình hợp tác đào tạo giữa FinPeace và KB Securities Vietnam – Sở Giao Dịch 3 (HO3)*
> 📥 **Tài liệu thực hành:** [Bảng Tra Cứu Nhanh (Cheatsheet PDF)](file:///Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets/D27-cheatsheet-quy-dinh-ky-quys-vsd.html) | [Bản in sạch (Skill Resource)](file:///Users/yenle/Documents/kbsvnextgen/.agents/skills/kbsv-nextgen/resources/03-dao-tao/lessons/cheatsheets/D27-cheatsheet-quy-dinh-ky-quys-vsd.html)


---

## 📌 I. THÔNG TIN BÀI HỌC & MỤC TIÊU (LESSON OVERVIEW & OBJECTIVES)

*   **Thời lượng học:** Cả ngày (bám sát Daily Routine: Morning Briefing $\rightarrow$ Content Lab $\rightarrow$ CRM Update $\rightarrow$ VSD Compliance & Risk Audit).
*   **Vị trí trong lộ trình:** Ngày thứ hai mươi bảy của Lộ trình (Tuần 4 - Quy chế phái sinh và VSD).
*   **Mục tiêu bài học theo khung ASK:**
    *   **Attitude (Thái độ):** Đề cao tính tuân thủ quy chế, trung thực và minh bạch tài chính. Nhìn nhận các quy định ký quỹ nghiêm ngặt của Tổng công ty Lưu ký và Bù trừ Chứng khoán Việt Nam (VSDC) là bộ lọc bảo vệ an toàn cho hệ thống và tài sản của nhà đầu tư. Không có thái độ lách luật hay hứa hẹn phi pháp.
    *   **Skills (Kỹ năng):** Tính toán chính xác số dư ký quỹ ban đầu IM, số dư ký quỹ duy trì MR và chênh lệch lãi/lỗ thanh toán bù trừ hàng ngày (Mark-to-Market); tư vấn giải thích cặn kẽ cho khách hàng về thuế phí giao dịch phái sinh.
    *   **Knowledge (Kiến thức):** Nắm vững cơ chế bù trừ đối tác trung tâm (CCP) của VSDC. Hiểu rõ quy định nộp/rút tiền ký quỹ phái sinh tại KBSV và ý nghĩa của cột mốc Sudden Death tuần 4.

---

## 📌 II. LÝ THUYẾT CHUYÊN SÂU (THEORETICAL FOUNDATION)

### 1. Cơ Chế Bù Trừ Đối Tác Trung Tâm (CCP) Của VSDC Trên Thị Trường Phái Sinh

Khác với thị trường chứng khoán cơ sở, nơi các giao dịch được thanh toán sau 2 ngày làm việc (T+2), thị trường chứng khoán phái sinh Việt Nam vận hành theo cơ chế **Bù trừ đối tác trung tâm (Central Counterparty - CCP)** do Tổng công ty Lưu ký và Bù trừ Chứng khoán Việt Nam (VSDC) quản lý trực tiếp.

Trong mô hình CCP, VSDC đóng vai trò là người mua của mọi người bán và người bán của mọi người mua. Điều này triệt tiêu hoàn toàn rủi ro đối tác không thanh toán. Để đảm bảo khả năng thanh toán, VSDC bắt buộc các thành viên bù trừ (các CTCK) và khách hàng phải thực hiện ký quỹ đầy đủ trước khi mở vị thế giao dịch.

---

### 2. Các Quy Định Ký Quỹ Cốt Lõi Trên Thị Trường Phái Sinh

Khách hàng muốn giao dịch phái sinh phải thực hiện nộp tiền ký quỹ vào tài khoản chuyên biệt được kết nối trực tiếp với VSDC:
*   **Tỷ lệ ký quỹ ban đầu (Initial Margin - IM):** Tỷ lệ ký quỹ tối thiểu do VSDC quy định để khách hàng được phép mở vị thế mới. Hiện tại, VSDC quy định tỷ lệ ký quỹ ban đầu tối thiểu là **$15.6\%$** giá trị hợp đồng. Tuy nhiên, để đảm bảo an toàn trước các biến động giá cực đoan trong phiên, KBSV HO3 thường áp dụng tỷ lệ ký quỹ an toàn khoảng **$18.5\% - 22\%$**.
*   **Tỷ lệ ký quỹ duy trì (Maintenance Margin - MM):** Mức ký quỹ tối thiểu khách hàng phải duy trì trong suốt quá trình nắm giữ vị thế (thường bằng $80\%$ của IM). Nếu tài sản ròng trên tài khoản phái sinh sụt giảm dưới mốc MM, khách hàng sẽ bị Call Margin yêu cầu nộp thêm tiền bổ sung.
*   **Tài sản ký quỹ hợp lệ:** Chủ yếu là Tiền mặt (VND) và Cổ phiếu cơ sở nằm trong danh sách chấp nhận thế chấp của VSDC (với tỷ lệ chiết khấu định trước).

---

### 3. Cơ Chế Bù Trừ Lãi Lỗ Hàng Ngày (Mark-to-Market - MTM)

Đây là đặc tính quan trọng nhất phân biệt phái sinh với cơ sở. Mọi vị thế phái sinh đang mở đều được **Định giá theo thị trường hàng ngày (Mark-to-Market)** sau khi kết thúc phiên giao dịch (lúc 14h45):

$$\text{Lãi/Lỗ trong ngày} = (\text{Giá đóng cửa phiên hiện tại} - \text{Giá khớp lệnh vị thế}) \times \text{Số lượng hợp đồng} \times 100.000\text{ VNĐ}$$

*   **Nếu tài khoản lãi:** Khoản tiền lãi thực tế sẽ được VSDC tính toán và tự động cộng vào tài khoản tiền phái sinh của khách hàng trước 8h30 sáng ngày làm việc tiếp theo. Khách hàng có thể rút phần tiền lãi này ra ngoài.
*   **Nếu tài khoản lỗ:** Hệ thống sẽ tự động trích nợ từ số dư tiền mặt ký quỹ của khách hàng để thanh toán cho VSDC ngay trong đêm. Nếu số dư tiền mặt ký quỹ không đủ, tài khoản sẽ rơi vào diện Call Margin nguy hiểm trước phiên giao dịch sáng hôm sau.

---

### 4. Chi Tiết Các Khoản Phí Thuế Giao Dịch Phái Sinh Quy Định

Rất nhiều khách hàng F0 bị sốc khi thấy số dư tài khoản phái sinh bị hao hụt do chưa hiểu rõ cơ cấu thuế phí. Broker NextGen phải làm rõ các khoản phí sau:
1.  **Phí giao dịch của Công ty Chứng khoán:** Phí mở/đóng vị thế áp dụng theo biểu phí của KBSV (thường từ 2.000 VNĐ - 5.000 VNĐ/hợp đồng/lượt).
2.  **Phí dịch vụ của Sở Giao dịch VSDC (Thu hộ):**
    *   Phí quản lý vị thế qua đêm: **2.000 VNĐ/hợp đồng/ngày**.
    *   Phí giao dịch phái sinh: **3.000 VNĐ/hợp đồng/lượt** (áp dụng khi mở hoặc đóng vị thế).
3.  **Thuế thu nhập cá nhân (Thu hộ Nhà nước):** Áp dụng mức thuế suất **$0.1\%$** trên giá trị chuyển nhượng hợp đồng mỗi khi thực hiện đóng vị thế.

---

### 5. Câu Chuyện Thực Tế: Broker Lâm Cứu Tài Khoản Phái Sinh Quên Đóng Vị Thế Qua Đêm Của Anh Hùng

Anh Hùng (38 tuổi, chủ cửa hàng vật liệu xây dựng, nhóm tính cách **D-I**) tự giao dịch phái sinh tại KBSV HO3. Vào ngày thứ Tư của tuần đáo hạn hợp đồng tương lai tháng 8/2026, anh Hùng mở vị thế **Long 20 hợp đồng VN30F1M** ở mức giá $1.220$ điểm để ăn sóng hồi phục cuối phiên.

Đến 14h30, do bận tiếp khách hàng mua thép tại cửa hàng, anh Hùng quên đặt lệnh đóng vị thế và để mặc vị thế 20 hợp đồng qua đêm. Tối hôm đó, thị trường chứng khoán Mỹ (Dow Jones) đột ngột sụp đổ giảm hơn 800 điểm do chỉ số lạm phát Mỹ tăng vượt dự báo.

1.  **Cuộc gọi khẩn cấp từ Broker Lâm lúc 8h05 sáng hôm sau:** Lâm rà soát hệ thống CRM phát hiện vị thế qua đêm của anh Hùng. Anh lập tức gọi điện cảnh báo: *"Anh Hùng ơi, Dow Jones đêm qua giảm mạnh nên phiên sáng nay chỉ số VN30 Futures của mình dự kiến sẽ mở gap giảm ít nhất 15 - 20 điểm. Tài khoản của anh đang Long 20 hợp đồng qua đêm sẽ bị trích nợ lỗ MTM khoảng 30 - 40 triệu đồng ngay đầu phiên, đưa tỷ lệ ký quỹ khả dụng về mức cảnh báo nguy hiểm.*
    *   *Em đề xuất anh nộp gấp 40 triệu tiền mặt vào tài khoản phái sinh trước 8h45 để hệ thống đồng bộ lên VSDC, tránh việc tài khoản bị đình chỉ giao dịch hoặc bị hệ thống tự động bán đóng vị thế bắt buộc ở mức giá mở cửa ATO xấu nhất"*.
2.  **Thực thi quyết liệt:** Anh Hùng nghe Lâm phân tích số liệu rõ ràng và dự báo gap giảm chuẩn xác nên đã lập tức chuyển 40 triệu đồng nộp ký quỹ bổ sung qua app ngân hàng liên kết.
3.  **Kết quả:** Đúng 9h00, VN30 Futures mở cửa giảm 18 điểm về $1.002$ điểm. Nhờ có số tiền nộp ký quỹ 40 triệu bổ sung kịp thời của Lâm hướng dẫn, tài khoản của anh Hùng không bị dính lỗi vi phạm tỷ lệ ký quỹ của VSDC. Phiên chiều, thị trường hồi phục tốt về $1.015$ điểm, anh Hùng chủ động đóng vị thế chỉ chịu khoản lỗ nhẹ, bảo vệ nguyên vẹn sức mua tài khoản. Anh vô cùng khâm phục sự theo sát cảnh báo rủi ro chuyên nghiệp của Lâm.

---

## 📌 III. BÀI TẬP THỰC HÀNH TÍNH TOÁN & BỐC TÁCH (PRACTICAL EXERCISES)

### 📝 Bài Tập: Tính Toán Ký Quỹ Ban Đầu & Lãi Lỗ Mark-to-Market Hàng Ngày

**Thông số giao dịch của khách hàng:**
*   Khách hàng muốn mở vị thế **Long 15 hợp đồng tương lai VN30F1M** ở mức giá **1.250 điểm**.
*   Tỷ lệ ký quỹ ban đầu IM an toàn quy định tại KBSV: **$19\%$**.
*   Giá đóng cửa (Settlement Price) của hợp đồng VN30F1M cuối ngày giao dịch do VSDC công bố: **1.265 điểm**.

**Yêu cầu đối với học viên:**
1.  Tính tổng giá trị thực tế của vị thế 15 hợp đồng tương lai tại mức giá mở vị thế.
2.  Tính số tiền ký quỹ ban đầu tối thiểu (IM) khách hàng bắt buộc phải nộp vào tài khoản phái sinh để được hệ thống KBSV phê duyệt đặt lệnh mở vị thế.
3.  Tính số tiền lãi/lỗ thực tế của khách hàng sau khi kết thúc phiên giao dịch dựa trên giá đóng cửa. Xác định xem số tiền này sẽ được xử lý nộp/rút thế nào vào sáng hôm sau.

#### 💡 Lời Giải Chi Tiết Của Bài Tập:

1.  **Bước 1: Tính tổng giá trị vị thế 15 hợp đồng tương lai:**
    $$\text{Giá trị vị thế} = 15\text{ hđ} \times 1.250\text{ điểm} \times 100.000\text{ VNĐ (Hệ số nhân)} = 1.875.000.000\text{ VNĐ}$$

2.  **Bước 2: Tính số tiền ký quỹ ban đầu (IM) yêu cầu tối thiểu:**
    $$\text{Tiền ký quỹ IM} = \text{Giá trị vị thế} \times \text{Tỷ lệ ký quỹ IM} = 1.875.000.000 \times 19\% = 356.250.000\text{ VNĐ}$$
    *Kết luận:* Khách hàng phải nộp tối thiểu **356.250.000 VNĐ** tiền mặt vào tài khoản ký quỹ phái sinh trước khi đặt lệnh.

3.  **Bước 3: Tính lãi/lỗ thực tế thanh toán Mark-to-Market hàng ngày:**
    *   Mức điểm chênh lệch tăng giá của vị thế Long:
        $$\text{Mức tăng điểm} = 1.265 - 1.250 = 15\text{ điểm}$$
    *   Tính lãi thực tế trong ngày:
        $$\text{Lãi thực nhận} = 15\text{ hđ} \times 15\text{ điểm} \times 100.000\text{ VNĐ} = 22.500.000\text{ VNĐ}$$
    *   *Xử lý tài sản:* Khoản tiền lãi thực tế **22.500.000 VNĐ** (chưa tính phí thuế) sẽ được VSDC bù trừ và tự động cộng vào số dư tiền mặt khả dụng trên tài khoản phái sinh của khách hàng trước 8h30 sáng hôm sau. Khách hàng hoàn toàn có quyền rút số tiền lãi này ra ngoài chi tiêu hoặc dùng để gia tăng sức mua mở thêm vị thế mới.

---

## 📌 IV. BÀI TEST ĐÁNH GIÁ NĂNG LỰC (COMPETENCY ASSESSMENT)

*Hãy chọn đáp án đúng nhất cho các câu hỏi sau và đối chiếu với phần giải thích chi tiết ở dưới.*

### Câu 1: Cơ chế thanh toán bù trừ hàng ngày Mark-to-Market (MTM) trên thị trường phái sinh Việt Nam hoạt động như thế nào?
A. Chỉ tính toán lãi/lỗ khi khách hàng chủ động đặt lệnh đóng vị thế (bán hợp đồng).
B. Tự động tính toán chênh lệch giá đóng cửa cuối phiên với giá khớp vị thế mở để cộng tiền lãi hoặc trích nợ tiền lỗ trực tiếp trên tài khoản khách hàng trước 8h30 sáng hôm sau.
C. Cộng dồn toàn bộ lãi lỗ và thực hiện thanh toán 1 lần duy nhất vào ngày đáo hạn hợp đồng.
D. Doanh thu phí giao dịch sẽ được trả lại cho khách hàng nếu tài khoản bị lỗ.

### Câu 2: Khi tỷ lệ tài sản ký quỹ trên tài khoản phái sinh của khách hàng sụt giảm dưới mức ký quỹ duy trì (Maintenance Margin - MM) quy định, hành động nào sẽ xảy ra?
A. Tài khoản được tự động cho vay không lãi suất để bù nợ.
B. Hệ thống gửi thông báo Call Margin yêu cầu khách hàng phải nộp tiền ký quỹ bổ sung để đưa tỷ lệ về mốc ban đầu IM trước phiên giao dịch tiếp theo.
C. Toàn bộ cổ phiếu trên tài khoản cơ sở của khách hàng sẽ bị tịch thu lập tức.
D. Hệ thống tự động xóa bỏ lịch sử nợ vay của khách hàng.

### Câu 3: Mức phí quản lý vị thế qua đêm do VSDC quy định thu hộ trên mỗi hợp đồng tương lai nắm giữ là bao nhiêu?
A. 500 VNĐ/hợp đồng/ngày.
B. 1.000 VNĐ/hợp đồng/ngày.
C. 2.000 VNĐ/hợp đồng/ngày.
D. 5.000 VNĐ/hợp đồng/ngày.

### Câu 4: Cột mốc Sudden Death (Loại trực tiếp) của tuần thực chiến thứ 4 yêu cầu học viên Broker NextGen phải đạt chỉ tiêu lũy kế tối thiểu bao nhiêu tài khoản active Standard?
A. Đạt tối thiểu 2 tài khoản active Standard.
B. Đạt tối thiểu 5 tài khoản active Standard.
C. Đạt tối thiểu 10 tài khoản active Standard.
D. Đạt tối thiểu 15 tài khoản active Standard.

### Câu 5: Khi tư vấn thuế thu nhập cá nhân phát sinh từ giao dịch phái sinh cho khách hàng, Broker cần trích dẫn mức thuế suất quy định là bao nhiêu?
A. Thuế suất 10% tính trên tổng lợi nhuận thu được cuối năm.
B. Thuế suất 0.1% tính trên giá trị chuyển nhượng hợp đồng mỗi lần thực hiện đóng vị thế.
C. Được miễn thuế hoàn toàn theo chính sách hỗ trợ của UBCKNN.
D. Thuế suất 5% tính trên tổng nợ vay Margin của tài khoản.

---

### 💡 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (ANSWER KEY)

*   **Câu 1: Chọn B.**
    *   *Giải thích:* Đây là đặc trưng cốt lõi của phái sinh Việt Nam nhằm kiểm soát rủi ro thanh toán. Mọi lãi lỗ phát sinh đều được tất toán bằng tiền mặt ngay trong đêm, không cho phép gồng lỗ ảo qua đêm mà không có tiền mặt ký quỹ đối ứng.
*   **Câu 2: Chọn B.**
    *   *Giải thích:* Khi số dư ký quỹ giảm dưới mốc duy trì MM, khách hàng có nghĩa vụ phải nộp thêm tiền để bảo toàn khả năng thanh toán. Nếu vi phạm, công ty chứng khoán có quyền chủ động đặt lệnh đóng vị thế bắt buộc để bảo vệ an toàn hệ thống.
*   **Câu 3: Chọn C.**
    *   *Giải thích:* Đây là khoản phí dịch vụ lưu ký và quản lý vị thế qua đêm do VSDC quy định công khai thu hộ, áp dụng cho tất cả các tài khoản phái sinh nắm giữ vị thế mở qua ngày làm việc tiếp theo.
*   **Câu 4: Chọn B.**
    *   *Giải thích:* Quy chế Sudden Death tuần 4 quy định mốc an toàn tối thiểu lũy tiến là 5 tài khoản active Standard. Mốc này tăng dần qua các tuần để sàng lọc ra những Broker NextGen thực sự năng động và có hiệu suất sales bền bỉ.
*   **Câu 5: Chọn B.**
    *   *Giải thích:* Theo Luật Thuế thu nhập cá nhân hiện hành, giao dịch phái sinh chịu thuế suất $0.1\%$ trên giá trị chuyển nhượng hợp đồng mỗi khi thực hiện lệnh đóng vị thế (bán đóng Long hoặc mua đóng Short), tự động khấu trừ tại nguồn.

---

## 📌 VI. QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)

> [!IMPORTANT]
> **QUY TẮC MINH BẠCH THUẾ PHÍ PHÁI SINH:**
> 1.  Broker NextGen **tuyệt đối cấm** việc phát ngôn mập mờ hoặc nói dối khách hàng rằng giao dịch phái sinh không chịu thuế thu nhập cá nhân hoặc không có phí quản lý vị thế qua đêm của VSDC.
> 2.  Mọi thông tin hướng dẫn thuế phí phải được lập thành bảng chi tiết, ghi rõ phần thu của công ty chứng khoán và phần thu hộ nộp về VSDC/Nhà nước để khách hàng nắm rõ trước khi tham gia giao dịch.
