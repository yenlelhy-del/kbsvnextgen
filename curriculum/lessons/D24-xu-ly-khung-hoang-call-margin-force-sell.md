# LỘ TRÌNH ĐÀO TẠO & THỰC CHIẾN NEXTGEN 2026
## NGÀY 24 (D24): XỬ LÝ KHỦNG HOẢNG CALL MARGIN & FORCE SELL
### MÃ TÀI LIỆU: NTD-SV-D24
*Chương trình hợp tác đào tạo giữa FinPeace và KB Securities Vietnam – Sở Giao Dịch 3 (HO3)*
> 📥 **Tài liệu thực hành:** [Bảng Tra Cứu Nhanh (Cheatsheet PDF)](file:///Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets/D24-cheatsheet-xu-ly-khung-hoang-call-margin-force-sell.html) | [Bản in sạch (Skill Resource)](file:///Users/yenle/Documents/kbsvnextgen/.agents/skills/kbsv-nextgen/resources/03-dao-tao/lessons/cheatsheets/D24-cheatsheet-xu-ly-khung-hoang-call-margin-force-sell.html)


---

## 📌 I. THÔNG TIN BÀI HỌC & MỤC TIÊU (LESSON OVERVIEW & OBJECTIVES)

*   **Thời lượng học:** Cả ngày (bám sát Daily Routine: Morning Briefing → Call Margin Alert → Content Lab → Client Crisis Handling).
*   **Vị trí trong lộ trình:** Ngày thứ hai mươi tư của Lộ trình (Tuần 3 - Giải quyết khủng hoảng tài khoản).
*   **Mục tiêu bài học theo khung ASK:**
    *   **Attitude (Thái độ):** Thể hiện bản lĩnh điềm tĩnh, vững vàng và kiên định trước những phản ứng tiêu cực, nóng giận từ phía khách hàng. Tuyệt đối không trốn tránh trách nhiệm, không tắt máy khi tài khoản khách hàng rơi vào ngưỡng bị Force Sell. Định vị bản thân là "người giải cứu tài sản" đồng hành cùng khách hàng vượt qua sóng gió.
    *   **Skills (Kỹ năng):** Thực hiện tính toán chuẩn xác số tiền nộp thêm hoặc số lượng cổ phiếu cần bán chủ động để đưa RTT về mốc an toàn 40%; thương lượng thuyết phục thành công khách đặt lệnh chủ động trong phiên sáng để bảo toàn tối đa tài sản.
    *   **Knowledge (Kiến thức):** Nắm vững quy trình cảnh báo Call Margin và giải chấp Force Sell của phòng Quản trị rủi ro KBSV. Hiểu rõ tác hại của lệnh MP giải chấp cưỡng bức đến giá vốn thực tế của khách hàng.

---

## 📌 II. LÝ THUYẾT CHUYÊN SÂU (THEORETICAL FOUNDATION)

### 1. Sự Khác Biệt Giữa Bán Chủ Động Phiên Sáng Và Hệ Thống Tự Động Force Sell Phiên Chiều

Khi tài khoản Margin của khách hàng chạm ngưỡng giải chấp bắt buộc ($\text{RTT} < 30%), nhiệm vụ hàng đầu của Broker NextGen là thuyết phục khách hàng **tự đặt lệnh bán chủ động ngay trong phiên sáng (từ 9h00 đến 11h30)**, thay vì để mặc cho hệ thống tự động quét giải chấp (Force Sell) vào phiên chiều (lúc 14h00).

Sự khác biệt về mặt thiệt hại tài sản giữa hai phương án này là vô cùng lớn:

```
             SO SÁNH BÁN CHỦ ĐỘNG VS. TỰ ĐỘNG FORCE SELL:
┌───────────────────────────────────────┬───────────────────────────────────────┐
│     BÁN CHỦ ĐỘNG TRONG PHIÊN SÁNG     │    HỆ THỐNG FORCE SELL PHIÊN CHIỀU    │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ - Broker chủ động chọn mức giá tốt    │ - Hệ thống tự động đặt lệnh MP        │
│   nhất trong các nhịp hồi phục để bán.│   (Market Price) bán bằng mọi giá.     │
├───────────────────────────────────────┼───────────────────────────────────────┤
│ - Khách hàng giữ quyền tự quyết chọn  │ - Hệ thống tự động quét bán mã có     │
│   mã yếu để bán hạ, giữ lại mã tốt.   │   thanh khoản tốt nhất bất kể lỗ nặng.│
├───────────────────────────────────────┼───────────────────────────────────────┤
│ - Tránh hiện tượng hoảng loạn kích    │ - Thường khớp đúng vùng giá thấp      │
│   hoạt bán tháo diện rộng.            │   nhất phiên khi thị trường hoảng loạn.│
└───────────────────────────────────────┴───────────────────────────────────────┘
```

---

### 2. Phác Đồ 4 Bước Xử Lý Giải Cứu Tài Khoản Call Margin & Force Sell

Hàng ngày, khi thị trường biến động mạnh, Broker NextGen phải thực thi quy trình 4 bước bọc thép sau trước giờ mở cửa:

*   **Bước 1: Rà soát danh sách CRM (08:00 - 08:30):** Đăng nhập hệ thống CRM chi nhánh HO3 để kiểm tra danh sách tài khoản khách hàng có RTT dưới 35%. Tách biệt nhóm Call Margin (30% - 35%) và nhóm đặc biệt nguy hiểm Force Sell (< 30%).
*   **Bước 2: Tính toán phương án giải cứu (08:30 - 09:00):** Thực hiện phép toán định lượng chính xác:
    *   Tính số tiền mặt tối thiểu khách hàng cần nộp thêm (Cash):
        $$\text{Cash cần nộp} = (40% \times \text{PV}) - \text{Equity}$$
    *   Tính tổng giá trị cổ phiếu tối thiểu cần bán chủ động (Value to Sell):
        $$\text{Giá trị bán} = \frac{\text{Cash cần nộp}}{1 - 40%} = \frac{\text{Cash cần nộp}}{0.6}$$
*   **Bước 3: Thực hiện cuộc gọi giải cứu khẩn cấp (09:00 - 09:30):** Gọi điện trực tiếp cho khách hàng. Sử dụng tông giọng trầm ấm, điềm tĩnh, đi thẳng vào số liệu rõ ràng và đề xuất phương án xử lý cụ thể. Tuyệt đối không vòng vo giải thích lý thuyết.
*   **Bước 4: Giám sát thực thi lệnh (09:30 - 11:30):** Hỗ trợ khách đặt lệnh bán chủ động từng phần trên ứng dụng KB Mobile. Kiểm tra chỉ số RTT trên CRM để xác nhận tài khoản đã hồi phục về mức an toàn tối thiểu 40%.

---

### 3. Câu Chuyện Thực Tế: Broker Minh Giải Cứu Tài Khoản 1.2 Tỷ Của Anh Hùng Nhóm D

Anh Hùng (48 tuổi, chủ thầu xây dựng tại Hà Nội, nhóm tính cách **D**) là khách hàng giao dịch năng động của Broker Minh (chi nhánh HO3). Vào tháng 9/2024, do ham sóng thép, anh Hùng đã dùng 500 triệu tiền mặt vay thêm 700 triệu Margin tại KBSV để mua gom 1.2 tỷ đồng cổ phiếu **HSG**. Khi thị trường thép thế giới biến động xấu, giá HSG giảm sàn liên tiếp 3 phiên, đưa RTT của anh Hùng sụt giảm nghiêm trọng về mức **28.5%** (lỗ thực tế hơn 340 triệu đồng). Tài khoản lọt vào danh sách Force Sell giải chấp bắt buộc phiên chiều.

*   **Cuộc gọi căng thẳng lúc 8h45:** Minh gọi điện báo cáo tình hình. Ngay khi nghe tin tài khoản bị giải chấp, anh Hùng nổi giận quát tháo oang oang qua điện thoại: *"Mấy đứa môi giới làm ăn kiểu gì thế? HSG tốt thế này sao lại giải chấp của anh? Anh không bán, cũng không có tiền nộp thêm. Đứa nào dám bán cổ phiếu của anh là anh lên tận văn phòng kiện đấy!"*.
*   **Sự điềm tĩnh của Minh:** Minh không tranh cãi đúng sai, anh giữ tông giọng trầm ấm, nói dứt khoát: *"Dạ anh Hùng, em hoàn toàn hiểu sự bực bội của anh khi tài sản của mình bị ảnh hưởng lớn. Nhưng cơ chế của hệ thống giải chấp tự động là bắt buộc đúng 14h00 chiều nay. Nếu anh không chủ động xử lý bây giờ, chiều nay hệ thống sẽ đặt lệnh MP bán tháo toàn bộ HSG của anh ngay vùng giá thấp nhất phiên để thu hồi nợ, thiệt hại của anh sẽ nặng nề hơn rất nhiều.*
    *   *Em đã tính toán kỹ phương án bọc thép cho anh: Anh chỉ cần đặt lệnh bán chủ động trước **50.000 cổ phiếu HSG** ngay trong nhịp hồi phiên sáng nay để thu hồi 200 triệu nợ vay. Việc này sẽ đưa tài khoản của anh thoát hoàn toàn diện giải chấp nguy hiểm, bảo vệ được **70% số cổ phiếu còn lại** để chờ sóng phục hồi quý sau. Em đặt lệnh bán chủ động giúp anh ngay bây giờ nhé?"*.
*   **Kết quả:** Nghe Minh đưa ra số liệu tính toán chính xác và thái độ điềm tĩnh bảo vệ tài sản, anh Hùng đã hạ nhiệt cơn giận, gật đầu đồng ý đặt lệnh bán chủ động. Phiên chiều hôm đó, giá HSG tiếp tục giảm sàn nhưng tài khoản anh Hùng đã hoàn toàn an toàn, không bị Force Sell quét sạch. Một quý sau, khi HSG phục hồi tăng mạnh trở lại, anh Hùng đã gỡ lại toàn bộ khoản lỗ và càng thêm tin tưởng bản lĩnh quản trị rủi ro của Minh.

---

## 📌 III. BÀI TẬP THỰC HÀNH TÍNH TOÁN & BỐC TÁCH (PRACTICAL EXERCISES)

### 📝 Bài Tập: Thực Hành Tính Toán Giải Cứu Tài Khoản Bị Call Margin

**Hồ sơ tài khoản khách hàng:**
*   **Giá trị danh mục cổ phiếu (PV):** 600.000.000 VNĐ.
*   **Nợ vay Margin của KBSV (D):** 410.000.000 VNĐ.
*   **Số dư tiền mặt:** 0 VNĐ.

**Yêu cầu đối với học viên:**
1.  Tính Tài sản ròng (Equity) và tỷ lệ RTT hiện tại của tài khoản. Xác định trạng thái tài khoản đang ở phân vùng nào.
2.  Tính số tiền mặt tối thiểu khách hàng cần nộp thêm để đưa RTT về mốc an toàn tối thiểu quy chuẩn là **40%**.
3.  Trong trường hợp khách hàng không có sẵn tiền mặt để nộp, hãy tính tổng giá trị cổ phiếu tối thiểu khách hàng cần đặt lệnh bán chủ động để đưa RTT phục hồi về mốc an toàn tối thiểu **40%**.

#### 💡 Lời Giải Chi Tiết Của Bài Tập:

1.  **Bước 1: Tính toán trạng thái tài khoản hiện tại:**
    *   Tài sản ròng (Equity):
        $$\text{Equity} = \text{PV} - \text{D} = 600.000.000 - 410.000.000 = 190.000.000\text{ VNĐ}$$
    *   Tính Tỷ lệ RTT hiện tại:
        $$\text{RTT} = \frac{\text{Equity}}{\text{PV}} \times 100% = \frac{190.000.000}{600.000.000} \times 100% = 31.67%$$
    *   *Kết luận:* Vì RTT đạt 31.67% (nằm trong khoảng từ 30% đến dưới 35%), tài khoản của khách hàng đang ở trạng thái **Call Margin (Cảnh báo nộp tiền)**.

2.  **Bước 2: Tính số tiền mặt cần nộp thêm (Cash) để đưa RTT về 40%:**
    *   Công thức:
        $$\text{Cash cần nộp} = (40% \times \text{PV}) - \text{Equity}$$
        Thế số vào công thức:
        $$\text{Cash cần nộp} = (0.4 \times 600.000.000) - 190.000.000 = 240.000.000 - 190.000.000 = 50.000.000\text{ VNĐ}$$
    *   *Kết luận:* Khách hàng cần nộp thêm tối thiểu **50.000.000 VNĐ** tiền mặt vào tài khoản để đưa RTT về mốc an toàn 40%.

3.  **Bước 3: Tính tổng giá trị cổ phiếu cần bán chủ động (Value to Sell) để đưa RTT về 40% (khi không nộp tiền):**
    *   Khi bán cổ phiếu để trả nợ Margin, giá trị danh mục (PV) giảm đi và nợ vay (D) cũng giảm đi một lượng tương đương, trong khi tài sản ròng (Equity) không đổi.
    *   Công thức tính giá trị cổ phiếu cần bán:
        $$\text{Giá trị bán} = \frac{\text{Cash cần nộp}}{1 - 40%} = \frac{\text{Cash cần nộp}}{0.6}$$
        Thế số vào công thức:
        $$\text{Giá trị bán} = \frac{50.000.000}{0.6} = 83.333.333\text{ VNĐ}$$
    *   *Kết luận:* Khách hàng cần đặt lệnh bán chủ động cổ phiếu với tổng giá trị tối thiểu là **83.333.333 VNĐ** (tương đương bán khoảng 14% danh mục hiện có) để đưa RTT phục hồi về mốc an toàn 40%.

---

## 📌 IV. BÀI TEST ĐÁNH GIÁ NĂNG LỰC (COMPETENCY ASSESSMENT)

*Hãy chọn đáp án đúng nhất cho các câu hỏi sau và đối chiếu với phần giải thích chi tiết ở dưới.*

### Câu 1: Tại sao Broker cần khuyên khách hàng bán chủ động hạ tỷ trọng cổ phiếu trong phiên sáng thay vì để hệ thống Force Sell tự động phiên chiều?
A. Để Broker được nhận nhiều hoa hồng phí giao dịch hơn từ công ty.
B. Để khách hàng giữ quyền tự quyết chọn mã cổ phiếu yếu để bán, chủ động chọn được mức giá tốt nhất trong các nhịp hồi phục và tránh bị khớp lệnh MP ở vùng giá thấp nhất phiên chiều.
C. Để hệ thống quản trị rủi ro của công ty bị lỗi không quét được tài khoản.
D. Vì bán phiên sáng sẽ không bị tính phí thuế giao dịch của Sở.

### Câu 2: Công thức tính tổng giá trị cổ phiếu tối thiểu cần bán chủ động để đưa RTT vi phạm về mốc an toàn 40% là gì?
A. Giá trị bán = (40% x PV - Equity) / 0.4.
B. Giá trị bán = (40% x PV - Equity) / 0.6.
C. Giá trị bán = Tổng nợ vay Margin / RTT hiện tại.
D. Giá trị bán = Giá trị danh mục PV - Số dư tiền mặt.

### Câu 3: Khi thực hiện cuộc gọi giải cứu tài khoản bị Call Margin, phong thái giao tiếp chuẩn mực của Broker NextGen là gì?
A. Vòng vo giải thích lý do thị trường giảm, hứa hẹn thị trường sẽ tăng lại ngay ngày mai để trấn an khách.
B. Giữ tông giọng trầm ấm, điềm tĩnh, thể hiện sự thấu cảm, đi thẳng vào số liệu rõ ràng và đề xuất phương án xử lý định lượng cụ thể (số tiền cần nộp hoặc số cổ phiếu cần bán).
C. Tắt máy, không gọi điện để tránh bị khách hàng mắng mỏ trút giận.
D. Tranh cãi tay đôi, chứng minh khách hàng sai lầm khi tự ý dùng Margin trước đây.

### Câu 4: Một tài khoản có PV = 300 triệu, Equity = 85 triệu. Tính RTT hiện tại và xác định trạng thái tài khoản?
A. RTT = 28.33% - Trạng thái Force Sell (Giải chấp bắt buộc).
B. RTT = 35.5% - Trạng thái Cảnh báo (Warning Zone).
C. RTT = 31.67% - Trạng thái Call Margin (Cảnh báo nộp tiền).
D. RTT = 45% - Trạng thái An toàn (Safe Zone).

### Câu 5: Thời hạn tối đa để khách hàng xử lý tài khoản sau khi nhận được thông báo Call Margin từ hệ thống KBSV là bao nhiêu phiên giao dịch trước khi bị giải chấp cưỡng bức?
A. Trong vòng 1 tiếng kể từ khi nhận tin nhắn.
B. Trong vòng 2 phiên giao dịch (T+2).
C. Khách hàng có thể gồng nợ vô thời hạn cho đến khi thị trường tăng lại.
D. Ngay lập tức trong vòng 5 phút cuối phiên giao dịch khớp lệnh định kỳ ATC.

---

### 💡 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (ANSWER KEY)

*   **Câu 1: Chọn B.**
    *   *Giải thích:* Bán chủ động giúp bảo vệ tài sản khách hàng tối đa. Lệnh giải chấp tự động Force Sell vào phiên chiều luôn sử dụng lệnh MP (khớp bằng mọi giá) nên thường quét đúng các mức giá sàn thấp nhất phiên của cổ phiếu, gây thiệt hại nghiêm trọng.
*   **Câu 2: Chọn B.**
    *   *Giải thích:* Công thức toán học quản trị rủi ro quy chuẩn:
        $$\text{Giá trị bán} = \frac{\text{Cash cần nộp (để RTT về 40%)}}{1 - 40%} = \frac{\text{Cash cần nộp}}{0.6}$$
*   **Câu 3: Chọn B.**
    *   *Giải thích:* Khi tài sản sụt giảm, khách hàng cần một cố vấn tài chính điềm tĩnh, bản lĩnh đưa ra giải pháp xử lý bằng con số rõ ràng để giải quyết vấn đề, chứ không cần những lời xin lỗi hay hứa hẹn suông vô căn cứ.
*   **Câu 4: Chọn A.**
    *   *Giải thích:* Áp dụng công thức tính RTT:
        $$\text{RTT} = \frac{85.000.000}{300.000.000} \times 100% = 28.33%$$
        Vì RTT dưới 30%, tài khoản lọt vào danh sách Force Sell bắt buộc.
*   **Câu 5: Chọn B.**
    *   *Giải thích:* Quy chế quản trị rủi ro ký quỹ của KBSV quy định khách hàng có thời hạn tối đa 2 phiên giao dịch kể từ khi nhận thông báo Call Margin để chủ động đưa RTT về mốc an toàn 40%.

---


---

## 📌 V. KỊCH BẢN ĐỐI LUYỆN (ROLE-PLAY & SCRIPT)

### 🎭 Tình huống: Gọi điện thông báo Call Margin cho khách hàng và hướng dẫn xử lý khẩn cấp
*   **Nhân vật:**
    *   **Broker NextGen HO3 (Học viên):** Điềm tĩnh, rõ ràng, biết quy trình xử lý Call Margin/Force Sell.
    *   **Anh Toàn (Khách hàng đang bị Call Margin):** 42 tuổi, kinh doanh. RTT tài khoản đã giảm về 31%. Hệ thống gửi SMS cảnh báo nhưng anh Toàn không hiểu, đang hoảng loạn.

#### 📞 Đoạn Đối Thoại Mẫu (Script)

*   **Broker NextGen (giọng bình tĩnh, chủ động gọi):** *Dạ anh Toàn, em là [Tên] Broker phụ trách tài khoản anh bên KBSV ạ. Anh vừa nhận được tin nhắn cảnh báo từ hệ thống đúng không? Em gọi ngay để hỗ trợ anh xử lý kịp thời ạ.*
*   **Anh Toàn (giọng hoảng, lo lắng):** *Đúng rồi em, nó nhắn gì mà tỷ lệ RTT 31%, yêu cầu bổ sung tiền. Anh không hiểu gì cả, giờ phải làm sao? Tiền anh mất hết rồi à?*
*   **Broker NextGen (giọng chậm, rõ từng chữ):** *Anh yên tâm, tiền anh chưa mất đâu ạ. RTT 31% nghĩa là tỷ lệ tài sản ròng trên nợ vay Margin đang ở mức cận ngưỡng cảnh báo 30%. Chúng ta có 2 cách xử lý: Cách 1 — Anh nộp thêm tiền mặt vào tài khoản trước 15h chiều nay để đưa RTT lên trên 38%. Cách 2 — Anh bán bớt cổ phiếu yếu nhất để giảm dư nợ Margin. Nếu anh không xử lý, hệ thống sẽ tự động Force Sell vào sáng mai ở giá ATO — đó là điều mình muốn tránh nhất ạ.*
*   **Anh Toàn (vẫn lo):** *Nộp bao nhiêu em? Giờ anh có thể chuyển khoản được không?*
*   **Broker NextGen (tính toán nhanh):** *Dạ, em tính nhanh cho anh: danh mục anh hiện tại khoảng 800 triệu, nợ Margin 350 triệu. Anh cần nộp thêm khoảng 50 triệu để RTT về 38% an toàn. Anh chuyển khoản vào tài khoản KBSV đứng tên anh, tiền vào ngay trong ngày ạ. Hoặc nếu anh muốn bán bớt, em đề xuất bán 50% mã FLC đang lỗ nặng nhất — đó là mã yếu nhất trong danh mục, bán chủ động còn hơn bị Force Sell thụ động ạ.*
*   **Anh Toàn (bình tĩnh lại):** *Thôi anh chuyển 50 triệu vào chiều nay đi. Xong rồi em lên lịch review lại danh mục cho anh nhé, cơ cấu lại cho an toàn hơn.*
*   **Broker NextGen (chuyên nghiệp):** *Dạ vâng anh. Em gửi anh số tài khoản nộp tiền qua Zalo ngay bây giờ. Anh nộp xong báo em, em kiểm tra RTT cập nhật liền. Tối nay em sẽ gửi anh bản phân tích danh mục và đề xuất cơ cấu để chúng ta không rơi vào tình huống này nữa ạ.*

#### 📊 Bảng Tiêu Chí Đánh Giá Năng Lực Sắm Vai (Grading Rubric dành cho Mentor)

| Tiêu Chí Đánh Giá | Điểm Tối Đa | Yêu Cầu Đạt Được (KPI) | Chấm Điểm Thực Tế |
| :--- | :---: | :--- | :---: |
| **Quy trình xử lý Call Margin (Process)** | **40%** | Giải thích đúng RTT, ngưỡng Call Margin, thời hạn nộp tiền, cơ chế Force Sell; tính toán nhanh số tiền cần nộp. | / 40 |
| **Kiểm soát cảm xúc khách hàng (Empathy)** | **35%** | Trấn an kịp thời, không hù dọa; dùng giọng chậm rõ; chủ động gọi trước khi KH hoảng. | / 35 |
| **Chốt hành động & Follow-up** | **25%** | Đưa 2 phương án cụ thể; cam kết review danh mục sau xử lý; gửi thông tin qua Zalo. | / 25 |

*Ngưỡng đạt yêu cầu: ≥ 80/100 điểm. Học viên dưới 80 điểm bắt buộc phải thực hành lại kịch bản đối luyện.*

## 📌 VI. QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)

> [!IMPORTANT]
> **QUY TẮC TUÂN THỦ QUY TRÌNH GIẢI CHẤP HỆ THỐNG:**
> 1.  Broker **tuyệt đối không** được cam kết bằng lời nói hoặc tin nhắn hứa hẹn can thiệp kỹ thuật vào hệ thống core-giao dịch của KBSV để trì hoãn hoặc hủy lệnh Force Sell giải chấp đối với tài khoản của khách hàng khi đã quá thời hạn T+2 quy định.
> 2.  Mọi hành vi can thiệp trái phép hoặc làm sai quy trình quản trị rủi ro nợ vay sẽ bị truy cứu trách nhiệm kỷ luật sa thải ngay lập tức và phải đền bù thiệt hại tài chính phát sinh cho chi nhánh HO3.
