# LỘ TRÌNH ĐÀO TẠO & THỰC CHIẾN NEXTGEN 2026
## NGÀY 33 (D33): QUY TẮC QUẢN TRỊ RỦI RO 2% NAV
### MÃ TÀI LIỆU: NTD-SV-D33
*Chương trình hợp tác đào tạo giữa FinPeace và KB Securities Vietnam – Sở Giao Dịch 3 (HO3)*
> 📥 **Tài liệu thực hành:** [Bảng Tra Cứu Nhanh (Cheatsheet PDF)](file:///Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets/D33-cheatsheet-quy-tac-quan-tri-rui-ro-2-percent.html) | [Bản in sạch (Skill Resource)](file:///Users/yenle/Documents/kbsvnextgen/.agents/skills/kbsv-nextgen/resources/03-dao-tao/lessons/cheatsheets/D33-cheatsheet-quy-tac-quan-tri-rui-ro-2-percent.html)


---

## 📌 I. THÔNG TIN BÀI HỌC & MỤC TIÊU (LESSON OVERVIEW & OBJECTIVES)

*   **Thời lượng học:** Cả ngày (bám sát Daily Routine: Morning Briefing $\rightarrow$ Content Lab $\rightarrow$ CRM Update $\rightarrow$ Risk Management Session).
*   **Vị trí trong lộ trình:** Ngày thứ ba mươi ba của Lộ trình (Tuần 5 - Quản trị rủi ro danh mục nâng cao).
*   **Mục tiêu bài học theo khung ASK:**
    *   **Attitude (Thái độ):** Đề cao tính kỷ luật sắt đá, cẩn trọng và khoa học trong đầu tư. Tuyệt đối bài trừ tư duy đánh bạc, tất tay (all-in) mạo hiểm. Nhìn nhận quản trị rủi ro là xương sống quyết định sự tồn tại lâu dài và tăng trưởng bền vững của tài sản.
    *   **Skills (Kỹ năng):** Tính toán chính xác quy mô vị thế mua (Position Sizing) cho từng cổ phiếu dựa trên quy tắc giới hạn rủi ro 2% NAV; hướng dẫn khách hàng thiết lập tỷ lệ phân bổ vốn an toàn cho danh mục.
    *   **Knowledge (Kiến thức):** Nắm vững nguyên lý toán học xác suất của quy tắc 2% NAV. Hiểu rõ mối liên hệ hữu cơ giữa khoảng cắt lỗ kỹ thuật, số vốn chấp nhận mất và số lượng cổ phiếu tối đa được phép giải ngân.

---

## 📌 II. LÝ THUYẾT CHUYÊN SÂU (THEORETICAL FOUNDATION)

### 1. Tại Sao Đa Số Nhà Đầu Tư F0 Bị Cháy Tài Khoản?

Một sự thật khốc liệt trên thị trường chứng khoán: hơn $90\%$ nhà đầu tư cá nhân bị thua lỗ lớn không phải vì họ phân tích doanh nghiệp kém hay chọn sai cổ phiếu, mà chủ yếu là do họ **không biết quản trị quy mô vốn giải ngân (Position Sizing)**. 

Khi tìm thấy một cổ phiếu được phím hàng, F0 thường có xu hướng dồn toàn bộ $100\%$ số tiền đang có (all-in) và vay thêm Margin tối đa để mua duy nhất mã đó. Chỉ cần thị trường vĩ mô biến động xấu khiến cổ phiếu rơi sàn 3 phiên liên tiếp (giảm $21\%$), tài khoản của họ lập tức bị âm nặng, Call Margin và bốc hơi sạch sẽ phần vốn tích lũy cả đời.

Để bảo vệ tài sản khách hàng đi qua mọi giông bão của thị trường, FinPeace × KBSV HO3 áp dụng quy tắc quản trị rủi ro bọc thép: **Quy tắc giới hạn rủi ro 2% NAV**.

---

### 2. Bản Chất Của Quy Tắc Quản Trị Rủi Ro 2% NAV

**Quy tắc 2% NAV** quy định rằng: *"Trên mỗi Deal giao dịch ngắn hạn độc lập, số tiền lỗ thực tế tối đa mà khách hàng chấp nhận mất nếu vị thế chạm mốc cắt lỗ (Stop Loss) **tuyệt đối không được phép vượt quá 2% tổng tài sản ròng (NAV) hiện tại của toàn bộ tài khoản**"*.

Ý nghĩa của quy tắc này về mặt toán học xác suất:
*   Nếu tài khoản của khách hàng gặp phải chuỗi **10 deal thua lỗ liên tiếp** (một kịch bản vô cùng tồi tệ trong thực tế), tổng tài sản của họ cũng chỉ bị sụt giảm tối đa khoảng $18\%$ (tính theo lãi kép giảm dần). Họ vẫn còn nguyên hơn $80\%$ vốn gốc để dễ dàng làm lại khi thị trường phục hồi.
*   Nó loại bỏ hoàn toàn áp lực tâm lý hoảng loạn. Khách hàng biết trước tổn thất tối đa của mình là rất nhỏ nên tối ngủ cực kỳ ngon giấc, không bị cuốn vào vòng xoáy gỡ lỗ mạo hiểm.

---

### 3. Công Thức Tính Toán Quy Mô Vị Thế Mua (Position Sizing)

Để thiết lập lệnh mua chuẩn xác, Broker hướng dẫn khách hàng tính số lượng cổ phiếu tối đa được phép mua theo công thức định lượng sau:

$$Q = \frac{\text{Tổng NAV} \times 2\%}{\text{Giá mua (Entry)} - \text{Giá cắt lỗ (Stop Loss)}}$$

*Ví dụ minh họa quy trình tính toán:*
```
BÀI TOÁN POSITION SIZING:
[ Tổng NAV tài khoản: 500 triệu ] ──> [ Số tiền rủi ro tối đa 2% NAV = 10 triệu VNĐ ]
                                                                │
                                                (Đo khoảng cách SL: mua 20k, cắt lỗ 18.5k)
                                                                │
                                                                ▼
[ Chỉ được mua tối đa: 6.600 cổ phiếu ] <─── [ Chênh lệch giá = 1.500 VNĐ/cp ]
```

---

### 4. Câu Chuyện Thực Tế: Sự Khác Biệt Giữa All-In Cảm Tính Và Quy Tắc Kỷ Luật 2% NAV

Chúng ta cùng phân tích câu chuyện thực tế của anh Nam và anh Bắc tại HO3 vào tháng 10/2024. Cả hai anh đều có quy mô vốn **NAV ban đầu là 500 triệu đồng** và cùng tham gia Deal trading cổ phiếu **DXG** ở mức giá mua Entry là **$20.000$ VNĐ/cp**, mốc cắt lỗ kỹ thuật Stop Loss thiết lập ở **$18.500$ VNĐ/cp** (lỗ $7.5\%$).

*   **Tài khoản anh Nam (Đầu tư cảm tính, All-in kịch khung):**
    *   Anh Nam tin tưởng DXG sẽ tăng mạnh nên dùng toàn bộ 500 triệu đồng mua gom $25.000$ cổ phiếu DXG ở giá $20.000$ VNĐ.
*   **Tài khoản anh Bắc (Tuân thủ kỷ luật quy tắc 2% NAV):**
    *   Anh Bắc thực hiện tính toán quy mô vị thế theo công thức:
        $$\text{Số tiền rủi ro tối đa (2\% NAV)} = 500.000.000 \times 2\% = 10.000.000\text{ VNĐ}$$
        $$\text{Số lượng cổ phiếu mua (Q)} = \frac{10.000.000}{20.000 - 18.500} = \frac{10.000.000}{1.500} \approx 6.600\text{ cổ phiếu}$$
    *   Anh Bắc chỉ giải ngân mua đúng $6.600$ cổ phiếu DXG (tương đương tổng số tiền giải ngân thực tế là 132 triệu đồng, chiếm $26.4\%$ NAV của tài khoản). Số tiền còn lại anh gửi tiền gửi ngắn hạn an toàn đuôi 1.

#### 📉 Biến cố xảy ra:
Thị trường biến động xấu, cổ phiếu DXG quay đầu giảm mạnh thủng ngưỡng hỗ trợ kỹ thuật và chạm mốc cắt lỗ **$18.500$ VNĐ/cp**. Cả hai anh đều bắt buộc phải đặt lệnh bán cắt lỗ để bảo vệ vốn.

*   **Hậu quả đối với anh Nam:**
    *   Anh Nam bán sạch $25.000$ cổ phiếu DXG ở giá $18.500$ VNĐ. 
    *   Số tiền lỗ thực tế của anh Nam:
        $$\text{Tiền lỗ} = 25.000\text{ cp} \times 1.500\text{ VNĐ} = 37.500.000\text{ VNĐ (bốc hơi 7.5\% tổng NAV)}$$
    *   Anh Nam vô cùng xót xa, tiếc nuối và rơi vào trạng thái bực dọc, mất niềm tin vào thị trường.
*   **Hậu quả đối với anh Bắc:**
    *   Anh Bắc bán sạch $6.600$ cổ phiếu DXG ở giá $18.500$ VNĐ.
    *   Số tiền lỗ thực tế của anh Bắc:
        $$\text{Tiền lỗ} = 6.600\text{ cp} \times 1.500\text{ VNĐ} = 9.900.000\text{ VNĐ (bốc hơi đúng 2\% tổng NAV)}$$
    *   Anh Bắc hoàn toàn điềm tĩnh. Khoản lỗ chưa tới 10 triệu đồng là rất nhỏ so với quy mô tài sản 500 triệu của anh. Đầu óc anh thanh thản, sẵn sàng đón nhận các cơ hội đầu tư tiếp theo một cách thông thái.

*Bài học xương máu:* Việc giới hạn rủi ro 2% NAV là bí quyết cốt lõi giúp nhà đầu tư chuyên nghiệp sống sót qua mọi giai đoạn khó khăn nhất của thị trường để chờ đợi sóng tăng lớn.

---

## 📌 III. BÀI TẬP THỰC HÀNH TÍNH TOÁN & BỐC TÁCH (PRACTICAL EXERCISES)

### 📝 Bài Tập: Tính Toán Quy Mô Vị Thế Mua (Position Sizing) Cho Tài Khoản Kỷ Luật

**Thông số tài khoản của chị Vy:**
*   **Tổng tài sản ròng (NAV) hiện tại:** 300.000.000 VNĐ.
*   **Cổ phiếu muốn mua trading ngắn hạn:** **GEX** ở vùng giá mua Entry = **$22.000$ VNĐ/cp**.
*   **Mốc cắt lỗ kỹ thuật (Stop Loss) thiết lập tại:** **$20.240$ VNĐ/cp** (tương ứng mức lỗ $8\%$).

**Yêu cầu đối với học viên:**
1.  Tính số tiền rủi ro tối đa chị Vy chấp nhận mất trên Deal này theo quy tắc 2% NAV của HO3.
2.  Tính số lượng cổ phiếu GEX tối đa chị Vy được phép đặt lệnh mua (Position Sizing).
3.  Tính tổng số tiền thực tế giải ngân cho Deal này và tỷ lệ phần trăm phân bổ vốn của Deal trên tổng NAV tài khoản.
4.  Giả sử GEX tăng mạnh lên mốc chốt lời kỳ vọng Take Profit = **$26.400$ VNĐ/cp** (lợi nhuận $+20\%$). Hãy tính số tiền lãi thực tế chị Vy thu về và tỷ lệ tăng trưởng tổng NAV của tài khoản sau Deal thắng này.

#### 💡 Lời Giải Chi Tiết Của Bài Tập:

1.  **Bước 1: Tính số tiền rủi ro chấp nhận mất (Risk Amount):**
    $$\text{Tiền rủi ro} = 300.000.000 \times 2\% = 6.000.000\text{ VNĐ}$$

2.  **Bước 2: Tính số lượng cổ phiếu GEX tối đa được phép mua (Q):**
    *   Chênh lệch giá cắt lỗ trên mỗi cổ phiếu:
        $$\text{Chênh lệch} = 22.000 - 20.240 = 1.760\text{ VNĐ/cp}$$
    *   Số lượng cổ phiếu mua (Q):
        $$Q = \frac{6.000.000}{1.760} \approx 3.409\text{ cổ phiếu}$$
    *   *Kết luận:* Chị Vy được phép đặt lệnh mua tối đa **3.400 cổ phiếu GEX** (làm tròn số lô chẵn 100 cp gần nhất).

3.  **Bước 3: Tính tổng tiền giải ngân và tỷ lệ phân bổ vốn:**
    *   Tổng tiền giải ngân thực tế:
        $$\text{Tiền giải ngân} = 3.400\text{ cp} \times 22.000\text{ VNĐ} = 74.800.000\text{ VNĐ}$$
    *   Tỷ lệ phân bổ vốn trên NAV tài khoản:
        $$\text{Tỷ lệ phân bổ} = \frac{74.800.000}{300.000.000} \times 100\% \approx 24.9\%$$

4.  **Bước 4: Tính lãi và tỷ lệ tăng trưởng NAV khi chốt lời thành công:**
    *   Mức chênh lệch giá chốt lời trên mỗi cổ phiếu:
        $$\text{Chênh chốt lời} = 26.400 - 22.000 = 4.400\text{ VNĐ/cp}$$
    *   Số tiền lãi thực tế thu về:
        $$\text{Tiền lãi thu về} = 3.400\text{ cp} \times 4.400\text{ VNĐ} = 14.960.000\text{ VNĐ}$$
    *   Tỷ lệ tăng trưởng tổng NAV của tài khoản sau Deal thắng:
        $$\text{Tăng trưởng NAV} = \frac{14.960.000}{300.000.000} \times 100\% \approx 4.99\%$$
    *   *Kết luận:* Chỉ với mức rủi ro kiểm soát chặt chẽ ở mức $2\%$ NAV ban đầu (nếu cắt lỗ mất 6 triệu), chị Vy đã mang về khoản lợi nhuận thực tế gần 15 triệu đồng, tương ứng giúp tổng NAV tài khoản tăng trưởng thêm **$5\%$** cực kỳ an toàn và thảnh thơi.

---

## 📌 IV. BÀI TEST ĐÁNH GIÁ NĂNG LỰC (COMPETENCY ASSESSMENT)

*Hãy chọn đáp án đúng nhất cho các câu hỏi sau và đối chiếu với phần giải thích chi tiết ở dưới.*

### Câu 1: Ý nghĩa quan trọng nhất của quy tắc giới hạn rủi ro 2% NAV trong giao dịch chứng khoán ngắn hạn là gì?
A. Đảm bảo chắc chắn tất cả các deal giao dịch của khách hàng luôn có lãi lớn.
B. Bảo vệ an toàn tài sản của khách hàng trước các biến động xấu của thị trường, kiểm soát tổn thất tối đa ở mức rất nhỏ để có thể dễ dàng làm lại khi thị trường hồi phục.
C. Tăng doanh số phí giao dịch tối đa cho công ty chứng khoán.
D. Giúp khách hàng trốn thuế thu nhập cá nhân từ giao dịch chứng khoán.

### Câu 2: Trong công thức tính toán quy mô vị thế mua (Position Sizing), mẫu số của công thức được xác định bằng hiệu số nào?
A. Giá mua Entry - Giá cắt lỗ Stop Loss.
B. Giá chốt lời Take Profit - Giá cắt lỗ Stop Loss.
C. Giá cao nhất phiên hôm nay - Giá thấp nhất phiên hôm nay.
D. Tổng NAV tài khoản - Số dư nợ vay Margin.

### Câu 3: Một tài khoản có NAV = 200 triệu đồng. Khoảng cách từ điểm mua đến mốc cắt lỗ của cổ phiếu là 2.000 VNĐ/cp. Tính số lượng cổ phiếu tối đa được phép mua theo quy tắc 2% NAV?
A. 1.000 cổ phiếu.
B. 2.000 cổ phiếu.
C. 3.000 cổ phiếu.
D. 4.000 cổ phiếu.

### Câu 4: Khi khách hàng phàn nàn rằng việc chia nhỏ quy mô vốn mua theo quy tắc 2% NAV khiến tài khoản lãi quá ít, cách tư vấn giải thích chuẩn mực của Broker là gì?
A. Đồng ý và khuyên khách hàng nâng mức rủi ro lên 50% NAV để kiếm tiền nhanh.
B. Giải thích cặn kẽ nguyên lý bảo toàn vốn bằng toán học xác suất: đầu tư là cuộc chạy marathon dài hạn, bảo vệ vốn khỏi bị cháy ở nhịp giảm quan trọng hơn việc ăn xổi ngắn hạn; khi vốn gốc được bảo toàn, lãi kép dài hạn mới phát huy tối đa sức mạnh.
C. Khuyên khách hàng chuyển toàn bộ tiền sang chơi phái sinh đòn bẩy cao.
D. Mắng mỏ khách hàng thiếu kiến thức tài chính cơ bản.

### Câu 5: Nếu khoảng cách từ mốc mua đến mốc cắt lỗ kỹ thuật của một Deal quá lớn (lên tới 15% do biến động mạnh), Broker nên điều chỉnh quy mô mua của khách thế nào?
A. Giữ nguyên số lượng mua cũ và không cần thay đổi gì.
B. Giảm quy mô số lượng cổ phiếu mua xuống tương ứng theo công thức tính để đảm bảo số tiền mất thực tế nếu chạm cắt lỗ vẫn duy trì đúng mốc tối đa 2% NAV.
C. Khuyên khách hàng hủy bỏ hoàn toàn mốc cắt lỗ để gồng lỗ vô hạn.
D. Khuyên khách hàng đi vay thêm Margin để mua đuổi.

---

### 💡 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (ANSWER KEY)

*   **Câu 1: Chọn B.**
    *   *Giải thích:* Không có phương pháp phân tích nào đúng $100\%$. Quy tắc 2% NAV bảo vệ nhà đầu tư khỏi sự sụp đổ khi dính phải các chuỗi sai số ngẫu nhiên của thị trường, giữ lại nguồn lực tài chính để chiến thắng dài hạn.
*   **Câu 2: Chọn A.**
    *   *Giải thích:* Hiệu số (Giá mua - Giá cắt lỗ) phản ánh mức rủi ro chấp nhận mất trên mỗi đơn vị cổ phiếu nắm giữ. Đây là thông số bắt buộc để chia số tiền rủi ro tối đa ra quy mô số lượng mua.
*   **Câu 3: Chọn B.**
    *   *Giải thích:* Tính toán theo công thức:
        $$\text{Tiền rủi ro 2\% NAV} = 200.000.000 \times 2\% = 4.000.000\text{ VNĐ}$$
        $$\text{Số lượng mua (Q)} = \frac{4.000.000}{2.000\text{ VNĐ/cp}} = 2.000\text{ cổ phiếu}$$
*   **Câu 4: Chọn B.**
    *   *Giải thích:* Broker NextGen phải truyền cảm hứng về tư duy đầu tư bình an, thảnh thơi và bền bỉ. Sự hưng phấn muốn giàu nhanh là nguyên nhân chính dẫn đến việc cháy tài khoản của F0. Kỷ luật vốn là chìa khóa duy nhất của tự do tài chính.
*   **Câu 5: Chọn B.**
    *   *Giải thích:* Khi rủi ro kỹ thuật của cổ phiếu tăng lên (khoảng SL rộng ra), Position Sizing bắt buộc phải thu hẹp lại tương ứng để giữ nguyên biến số rủi ro tài khoản không đổi ở mức $2\%$. Đây là tư duy quản trị rủi ro năng động chuyên nghiệp.

---

## 📌 VI. QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)

> [!IMPORTANT]
> **QUY TẮC CẤM KHUYẾN NGHỊ ALL-IN:**
> 1.  Broker NextGen **tuyệt đối không** được gửi các khuyến nghị đầu tư hoặc tin nhắn chào deal hối thúc khách hàng sử dụng $100\%$ NAV tài sản để mua duy nhất một mã cổ phiếu.
> 2.  Mọi bảng khuyến nghị Deal giao dịch gửi cho khách hàng phải đi kèm ô tính toán Position Sizing mẫu theo quy tắc 2% NAV để định hướng hành vi kỷ luật vốn cho nhà đầu tư.
