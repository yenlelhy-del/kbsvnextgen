# LỘ TRÌNH ĐÀO TẠO & THỰC CHIẾN NEXTGEN 2026
## NGÀY 6 (D06): PIOTROSKI F-SCORE ĐỌC VỊ GIAN LẬN BCTC & THUYẾT TRÌNH FA COMBAT
### MÃ TÀI LIỆU: NTD-SV-D06
*Chương trình hợp tác đào tạo giữa FinPeace và KB Securities Vietnam – Sở Giao Dịch 3 (HO3)*
> 📥 **Tài liệu thực hành:** [Bảng Tra Cứu Nhanh (Cheatsheet PDF)](file:///Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets/D06-cheatsheet-fscore-doc-vi-gian-lan.html) | [Bản in sạch (Skill Resource)](file:///Users/yenle/Documents/kbsvnextgen/.agents/skills/kbsv-nextgen/resources/03-dao-tao/lessons/cheatsheets/D06-cheatsheet-fscore-doc-vi-gian-lan.html)


---

## 📌 I. THÔNG TIN BÀI HỌC & MỤC TIÊU (LESSON OVERVIEW & OBJECTIVES)

*   **Thời lượng học:** Cả ngày (bám sát Daily Routine: Morning Briefing $\rightarrow$ Content Lab $\rightarrow$ CRM Update $\rightarrow$ FA Combat Presentation).
*   **Vị trí trong lộ trình:** Ngày thứ sáu của Tuần 1 (Giai đoạn đào tạo nền tảng).
*   **Mục tiêu bài học theo khung ASK:**
    *   **Attitude (Thái độ):** Xác lập sự hoài nghi lành mạnh (professional skepticism) trước các số liệu kế toán. Luôn đặt câu hỏi phản biện về tính xác thực của lợi nhuận. Coi trọng tính toàn vẹn của báo cáo tài chính và sự an toàn vốn của khách hàng trên hết.
    *   **Skills (Kỹ năng):** Tính toán thành thạo điểm số Piotroski F-Score trên thang điểm 9; phát hiện nhanh các dấu hiệu xào nấu sổ sách tài chính thông dụng; trình bày báo cáo phân tích cơ bản (FA Combat) trước đám đông thuyết phục và chuyên nghiệp.
    *   **Knowledge (Kiến thức):** Nắm vững 9 tiêu chí của hệ thống điểm Piotroski F-Score thuộc 3 nhóm: Hiệu quả sinh lợi, Nguồn vốn và Hiệu quả vận hành. Hiểu rõ các thủ thuật làm đẹp số liệu BCTC của các doanh nghiệp niêm yết (ghi nhận doanh thu khống, giấu nợ vay, vốn hóa chi phí ảo).

---

## 📌 II. LÝ THUYẾT CHUYÊN SÂU (THEORETICAL FOUNDATION)

### 1. Hệ Thống Điểm Số Piotroski F-Score: Bộ Lọc Sức Khỏe Tài Chính Bọc Thép

Trong đầu tư giá trị, việc tìm kiếm những cổ phiếu có chỉ số P/B hay P/E thấp là chưa đủ. Một tỷ lệ lớn các cổ phiếu giá rẻ thực chất là các doanh nghiệp đang trên đà suy kiệt tài chính và sắp phá sản. 

Để giải quyết bài toán lọc rủi ro này, vào năm 2000, Giáo sư Kế toán Joseph Piotroski của Đại học Chicago (Mỹ) đã công bố hệ thống điểm số **Piotroski F-Score**. Hệ thống này sử dụng **9 tiêu chí tài chính nhị phân** (đạt được = 1 điểm, không đạt = 0 điểm) để đánh giá toàn diện sức khỏe tài chính của doanh nghiệp.

```
                  ┌────────────────────────────────────────┐
                  │       HỆ THỐNG PIOTROSKI F-SCORE       │
                  └───────────────────┬────────────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐
│  SỨC SINH LỢI   │          │ ĐÒN BẨY & NGUỒN │          │ HIỆU QUẢ VẬN    │
│  (Profitability)│          │     (Funding)   │          │    HÀNH (Sales) │
├─────────────────┤          ├─────────────────┤          ├─────────────────┤
│ 1. ROA > 0      │          │ 5. Nợ dài hạn   │          │ 8. Biên gộp     │
│ 2. CFO > 0      │          │    giảm         │          │    cải thiện    │
│ 3. ROA tăng     │          │ 6. Thanh khoản  │          │ 9. Vòng quay    │
│ 4. CFO > Lãi    │          │    hiện hành    │          │    tài sản tăng │
│    ròng         │          │    tăng         │          │                 │
│                 │          │ 7. Không phát   │          │                 │
│                 │          │    hành thêm cổ │          │                 │
│                 │          │    phiếu mới    │          │                 │
└─────────────────┘          └─────────────────┘          └─────────────────┘
```

#### Phân tích chi tiết 9 tiêu chí của Piotroski F-Score:

##### Nhóm A: Hiệu quả sinh lợi (Profitability)
1.  **ROA dương (ROA > 0):** Doanh nghiệp tạo ra lợi nhuận sau thuế dương trong năm hiện hành. (Đạt = 1 điểm, Không đạt = 0 điểm).
2.  **CFO dương (CFO > 0):** Dòng tiền từ hoạt động kinh doanh thực tế trong năm phải dương. (Đạt = 1 điểm).
3.  **ROA cải thiện ($\Delta\text{ROA} > 0$):** Chỉ số ROA năm nay phải lớn hơn ROA năm trước liền kề. Điều này chứng tỏ hiệu quả sử dụng tài sản đang gia tăng. (Đạt = 1 điểm).
4.  **Chất lượng lợi nhuận ($\text{CFO} > \text{Lợi nhuận ròng}$):** Dòng tiền kinh doanh thực tế phải lớn hơn lợi nhuận sau thuế kế toán. Đây là tiêu chí cực kỳ quan trọng để kiểm chứng doanh nghiệp có bán hàng thu tiền thật hay không. (Đạt = 1 điểm).

##### Nhóm B: Đòn bẩy tài chính và Nguồn vốn (Leverage & Source of Funds)
5.  **Tỷ lệ đòn bẩy giảm ($\Delta\text{Leverage} < 0$):** Tỷ lệ Nợ dài hạn/Tổng tài sản trung bình của năm nay phải thấp hơn năm trước. Chứng tỏ doanh nghiệp đang giảm dần sự phụ thuộc vào nợ vay tài chính dài hạn. (Đạt = 1 điểm).
6.  **Khả năng thanh toán cải thiện ($\Delta\text{Liquidity} > 0$):** Tỷ lệ thanh toán hiện hành (Tài sản ngắn hạn/Nợ ngắn hạn) năm nay phải cao hơn năm trước. Chứng tỏ khả năng thanh toán nợ đến hạn được củng cố. (Đạt = 1 điểm).
7.  **Không pha loãng cổ phiếu:** Doanh nghiệp không phát hành thêm cổ phiếu phổ thông mới trong năm. Việc phát hành thêm cổ phiếu thường là dấu hiệu doanh nghiệp bị thiếu hụt tiền mặt hoặc đang pha loãng lợi ích của cổ đông hiện hữu. (Đạt = 1 điểm, Phát hành thêm = 0 điểm).

##### Nhóm C: Hiệu quả vận hành (Operating Efficiency)
8.  **Biên lợi nhuận gộp cải thiện ($\Delta\text{Gross Margin} > 0$):** Biên lợi nhuận gộp năm nay phải cao hơn năm trước. Chứng tỏ doanh nghiệp có sức mạnh đàm phán giá hoặc kiểm soát tốt chi phí nguyên liệu đầu vào. (Đạt = 1 điểm).
9.  **Vòng quay tài sản tăng ($\Delta\text{Asset Turnover} > 0$):** Tỷ số Doanh thu thuần/Tổng tài sản bình quân năm nay phải lớn hơn năm trước. Chứng tỏ doanh nghiệp đang sử dụng tài sản hiệu quả hơn để tạo ra doanh thu. (Đạt = 1 điểm).

#### 💡 Đánh giá điểm F-Score thực tế:
*   **8 - 9 điểm:** Sức khỏe tài chính xuất sắc. Cổ phiếu cực kỳ an toàn để tích sản.
*   **5 - 7 điểm:** Sức khỏe tài chính trung bình khá, hoạt động ổn định.
*   **0 - 4 điểm:** Tình trạng tài chính rất yếu, rủi ro cao. Đây thường là các doanh nghiệp nợ nần chồng chất, dòng tiền suy kiệt hoặc lợi nhuận kế toán không đi kèm tiền mặt thực tế. Broker **tuyệt đối không** khuyến nghị khách hàng tích sản các mã này.

---

### 2. Các Thủ Thuật Kế Toán "Làm Đẹp" BCTC (Creative Accounting) & Cách Phát Hiện

Doanh nghiệp niêm yết luôn chịu áp lực phải công bố những con số doanh thu và lợi nhuận đẹp đẽ để giữ giá cổ phiếu hoặc đáp ứng các điều kiện vay ngân hàng. Do đó, ban lãnh đạo doanh nghiệp đôi khi áp dụng các thủ thuật kế toán tinh vi để "xào nấu" sổ sách:

#### Thủ thuật 1: Ghi nhận Doanh thu non (Doanh thu chưa thực hiện)
*   **Bản chất:** Ghi nhận trước doanh thu của các kỳ sau vào kỳ hiện tại (ví dụ: giao hàng cho khách nhưng chưa lắp đặt nghiệm thu, hoặc ép nhà phân phối nhận hàng dù chưa có nhu cầu sử dụng thực tế).
*   **Cách phát hiện của Broker 4.0:** So sánh tốc độ tăng của **Các khoản phải thu khách hàng** trên BCĐKT với tốc độ tăng của **Doanh thu thuần** trên BC KQKD. Nếu khoản phải thu tăng vọt gấp nhiều lần tốc độ tăng doanh thu, đây là dấu hiệu doanh nghiệp đang ghi nhận doanh thu ảo mà chưa thu được tiền thực tế.

#### Thủ thuật 2: Vốn hóa chi phí hoạt động thành tài sản dở dang
*   **Bản chất:** Thay vì ghi nhận các chi phí phát sinh trong kỳ (như chi phí quản lý, nghiên cứu phát triển, tiếp thị) trực tiếp vào chi phí làm giảm lợi nhuận trên BC KQKD, doanh nghiệp lại chuyển các chi phí này vào mục **Chi phí xây dựng cơ bản dở dang** hoặc **Tài sản vô hình dở dang** trên BCĐKT để trì hoãn việc khấu hao.
*   **Cách phát hiện của Broker 4.0:** Đọc kỹ thuyết minh mục "Tài sản dở dang dài hạn". Nếu thấy mục này phình to qua nhiều năm mà không có dự án nào đi vào hoạt động thực tế để tạo ra doanh thu, đó là dấu hiệu doanh nghiệp đang giấu chi phí để làm đẹp lợi nhuận sổ sách.

#### Thủ thuật 3: Giao dịch ảo với các bên liên quan (Related Parties Transactions)
*   **Bản chất:** Doanh nghiệp mẹ bán hàng hóa với giá cao bất thường cho các công ty con, công ty liên kết hoặc các doanh nghiệp sân sau của ban lãnh đạo để tạo ra doanh thu và lợi nhuận ảo. Sau đó, số tiền này lại được rút ra dưới hình thức "cho vay" hoặc "tạm ứng" cho các bên liên quan.
*   **Cách phát hiện của Broker 4.0:** Đọc kỹ thuyết minh BCTC phần **Giao dịch với các bên liên quan** và các khoản **Phải thu ngắn hạn khác (Tạm ứng, cho vay cá nhân)** trên BCĐKT. Nếu các khoản này chiếm tỷ trọng lớn trong tài sản, rủi ro rút ruột doanh nghiệp là cực kỳ lớn.

---

### 3. Câu Chuyện Thực Tế: Vụ Gian Lận Hàng Tồn Kho Gỗ Trường Thành (TTF) và Bài Học Xương Máu

Case study của **Công ty Cổ phần Tập đoàn Kỹ nghệ Gỗ Trường Thành (TTF)** năm 2016 là bài học đắt giá nhất về rủi ro bỏ qua việc kiểm chứng chất lượng tài sản trên BCTC của nhà đầu tư Việt Nam.

Trước năm 2016, TTF được ca tụng là doanh nghiệp xuất khẩu đồ gỗ hàng đầu Việt Nam, liên tục công bố doanh thu nghìn tỷ và lợi nhuận tăng trưởng đều đặn. Nhiều quỹ đầu tư lớn và hàng chục nghìn nhà đầu tư cá nhân đã đổ tiền mua cổ phiếu TTF, đẩy giá tăng vọt từ $5.000$ VNĐ lên gần $44.000$ VNĐ/cp.

Tuy nhiên, nếu một nhà phân tích áp dụng bộ lọc **Piotroski F-Score** vào BCTC của TTF giai đoạn 2014 - 2015, họ sẽ phát hiện ra các dấu hiệu bất thường nghiêm trọng:
*   Mặc dù báo cáo lợi nhuận sau thuế dương, nhưng **Dòng tiền hoạt động kinh doanh (CFO) của TTF liên tục bị âm nặng** hàng trăm tỷ đồng do tiền bị chôn chân trong khoản mục Hàng tồn kho phình to bất thường. (Tiêu chí số 4 của F-Score đạt 0 điểm).
*   **Tỷ lệ nợ vay dài hạn và ngắn hạn** của doanh nghiệp liên tục tăng mạnh để bù đắp sự suy kiệt dòng tiền mặt. (Tiêu chí số 5 và 6 đạt 0 điểm).
*   Điểm số F-Score tổng thể của TTF chỉ dao động ở mức **2 - 3 điểm** (ngưỡng cực kỳ nguy hiểm).

```
DẤU HIỆU BÁO ĐỘNG ĐỎ TRÊN BCTC CỦA TTF TRƯỚC SỤP ĐỔ:
[Lợi nhuận kế toán dương] ──(Kiểm tra F-Score)──> [F-Score đạt 2/9 điểm]
                                                         │
                                               (CFO âm nặng liên tục)
                                                         │
                                                         ▼
[Hàng tồn kho ảo bốc hơi 1.000 tỷ] <─── (Kiểm toán khui ra) ── [Nợ vay ngân hàng tăng vọt]
```

Vào giữa năm 2016, công ty kiểm toán độc lập đã khui ra sự thật chấn động: TTF đã **gian lận thổi phồng giá trị Hàng tồn kho khống lên tới hơn 980 tỷ đồng** (hàng tồn kho thực tế trong kho biến mất hoặc bị mục nát nhưng vẫn được ghi nhận trên sổ sách với giá trị cao). 

Thông tin này nổ ra khiến cổ phiếu TTF rơi vào chuỗi 30 phiên giảm sàn liên tiếp mất thanh khoản, giảm từ giá $44.000$ VNĐ xuống còn dưới $4.000$ VNĐ/cp. Hàng nghìn nhà đầu tư bị cháy tài khoản hoàn toàn mà không thể bán cắt lỗ. 

Anh Hùng (42 tuổi, chủ một doanh nghiệp phân phối thiết bị điện tại Hải Phòng, nhóm **D-C** – mạnh mẽ nhưng rất cẩn trọng) là một trong những nhà đầu tư đã mất sạch 1.5 tỷ đồng tích lũy trong vụ sập TTF đó. 

Sau khi được Broker NextGen của HO3 tiếp cận và chia sẻ về công cụ lọc **Piotroski F-Score**, anh Hùng đã vô cùng thấu hiểu và thừa nhận: *"Nếu ngày xưa tôi biết đến F-Score và kiểm tra chất lượng dòng tiền CFO của TTF trước khi mua, tôi đã không phải trả cái giá đắt đỏ như vậy. Từ nay, doanh nghiệp nào F-Score dưới 5 điểm là tôi tuyệt đối không bao giờ chạm vào"*.

---

## 📌 III. BÀI TẬP THỰC HÀNH TÍNH TOÁN & BỐC TÁCH (PRACTICAL EXERCISES)

### 📝 Bài Tập: Tính Điểm Piotroski F-Score Cho Công Ty Cổ Phần X25

**Dữ liệu báo cáo tài chính tóm tắt của Công ty X25 trong 2 năm 2024 và 2025:**

| Chỉ Tiêu Tài Chính | Năm 2024 | Năm 2025 |
| :--- | :---: | :---: |
| Lợi nhuận sau thuế | 100 tỷ VNĐ | 120 tỷ VNĐ |
| Dòng tiền hoạt động kinh doanh (CFO) | -20 tỷ VNĐ | 80 tỷ VNĐ |
| Tổng tài sản (cuối kỳ) | 1.000 tỷ VNĐ | 1.100 tỷ VNĐ |
| Nợ vay tài chính dài hạn | 300 tỷ VNĐ | 280 tỷ VNĐ |
| Tài sản ngắn hạn | 400 tỷ VNĐ | 450 tỷ VNĐ |
| Nợ ngắn hạn | 200 tỷ VNĐ | 210 tỷ VNĐ |
| Số lượng cổ phiếu phổ thông đang lưu hành | 10 triệu CP | 10 triệu CP |
| Doanh thu thuần | 1.500 tỷ VNĐ | 1.800 tỷ VNĐ |
| Giá vốn hàng bán | 1.200 tỷ VNĐ | 1.400 tỷ VNĐ |

**Yêu cầu đối với học viên:**
1.  Tính toán chi tiết các chỉ số trung gian cần thiết cho 2 năm: ROA, Tỷ lệ Nợ dài hạn/Tổng tài sản, Tỷ lệ thanh toán hiện hành, Biên lợi nhuận gộp, Vòng quay tài sản.
2.  Chấm điểm chi tiết từng tiêu chí trong 9 tiêu chí của hệ thống Piotroski F-Score cho năm 2025.
3.  Đưa ra kết luận đánh giá về sức khỏe tài chính và chất lượng tài sản của Công ty X25. Khách hàng NextGen có nên giải ngân tích sản cổ phiếu này không?

#### 💡 Lời Giải Chi Tiết Của Bài Tập:

1.  **Bước 1: Tính toán các chỉ số tài chính trung gian:**
    *   **ROA (Lợi nhuận sau thuế / Tổng tài sản):**
        *   $ROA_{2024} = 100 / 1.000 = 10\%$
        *   $ROA_{2025} = 120 / 1.100 \approx 10.9\%$ (ROA tăng trưởng: Đạt).
    *   **Tỷ lệ đòn bẩy dài hạn (Nợ dài hạn / Tổng tài sản):**
        *   $Leverage_{2024} = 300 / 1.000 = 30\%$
        *   $Leverage_{2025} = 280 / 1.100 \approx 25.45\%$ (Tỷ lệ đòn bẩy giảm: Đạt).
    *   **Tỷ lệ thanh toán hiện hành (Tài sản ngắn hạn / Nợ ngắn hạn):**
        *   $Liquidity_{2024} = 400 / 200 = 2.0\text{ lần}$
        *   $Liquidity_{2025} = 450 / 210 \approx 2.14\text{ lần}$ (Khả năng thanh toán tăng: Đạt).
    *   **Biên lợi nhuận gộp ((Doanh thu - Giá vốn) / Doanh thu):**
        *   $GrossMargin_{2024} = (1.500 - 1.200) / 1.500 = 20\%$
        *   $GrossMargin_{2025} = (1.800 - 1.400) / 1.800 \approx 22.22\%$ (Biên gộp tăng: Đạt).
    *   **Vòng quay tài sản (Doanh thu / Tổng tài sản cuối kỳ):**
        *   $Turnover_{2024} = 1.500 / 1.000 = 1.5\text{ vòng}$
        *   $Turnover_{2025} = 1.800 / 1.100 \approx 1.63\text{ vòng}$ (Vòng quay tăng: Đạt).

2.  **Bước 2: Chấm điểm Piotroski F-Score cho năm 2025:**
    *   *Tiêu chí 1: ROA > 0?* Lợi nhuận 2025 là 120 tỷ ($&gt; 0$) $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 2: CFO > 0?* CFO 2025 là 80 tỷ ($&gt; 0$) $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 3: ROA tăng?* ROA tăng từ $10\%$ lên $10.9\%$ $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 4: CFO > Lợi nhuận ròng?* CFO là 80 tỷ, Lợi nhuận ròng là 120 tỷ. CFO < Lợi nhuận ròng $\rightarrow$ **0 điểm**. *(Dấu hiệu cảnh báo: lợi nhuận tăng nhưng chưa thu được hết tiền mặt về).*
    *   *Tiêu chí 5: Đòn bẩy dài hạn giảm?* Giảm từ $30\%$ xuống $25.45\%$ $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 6: Thanh khoản hiện hành tăng?* Tăng từ $2.0$ lên $2.14$ lần $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 7: Không phát hành thêm cổ phiếu?* Số lượng cổ phiếu giữ nguyên 10 triệu CP $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 8: Biên gộp cải thiện?* Tăng từ $20\%$ lên $22.22\%$ $\rightarrow$ **1 điểm**.
    *   *Tiêu chí 9: Vòng quay tài sản tăng?* Tăng từ $1.5$ lên $1.63$ vòng $\rightarrow$ **1 điểm**.
    *   **Tổng điểm F-Score năm 2025:** **8 / 9 điểm**.

3.  **Bước 3: Kết luận đánh giá:**
    *   Công ty X25 có điểm số F-Score rất cao (**8/9 điểm**), thể hiện sức khỏe tài chính cực kỳ vững mạnh và hiệu quả vận hành cải thiện rõ rệt qua các năm. Điểm trừ duy nhất là chất lượng lợi nhuận chưa tối ưu (CFO < Lợi nhuận sau thuế do công ty có thể đang mở rộng quy mô bán hàng cho nợ gối đầu).
    *   *Khuyến nghị:* Đây là một doanh nghiệp chất lượng cao, hoàn toàn **đáp ứng tiêu chuẩn an toàn** để đưa vào danh mục tích sản dài hạn của khách hàng.

---

## 📌 IV. BÀI TEST ĐÁNH GIÁ NĂNG LỰC (COMPETENCY ASSESSMENT)

*Hãy chọn đáp án đúng nhất cho các câu hỏi sau và đối chiếu với phần giải thích chi tiết ở dưới.*

### Câu 1: Ý nghĩa của tiêu chí số 4 trong hệ thống Piotroski F-Score (Dòng tiền kinh doanh CFO > Lợi nhuận sau thuế) là gì?
A. Đo lường mức độ vay nợ tài chính của doanh nghiệp.
B. Kiểm chứng chất lượng lợi nhuận kế toán, đảm bảo lợi nhuận ghi nhận trên sổ sách thực sự được mang về dưới dạng tiền mặt chứ không phải là doanh thu ảo hoặc nợ xấu khó đòi.
C. Đánh giá tốc độ tăng trưởng quy mô nhà xưởng của doanh nghiệp.
D. Tính toán tỷ lệ chia cổ tức bằng tiền mặt cho ban lãnh đạo.

### Câu 2: Một doanh nghiệp có tổng điểm Piotroski F-Score đạt 3/9 điểm thuộc nhóm nào và Broker nên xử lý ra sao?
A. Nhóm xuất sắc; Khuyên khách hàng tích sản mạnh.
B. Nhóm trung bình; Khuyên khách hàng mua lướt sóng ngắn hạn.
C. Nhóm yếu rủi ro cao (bẫy tài chính); Broker tuyệt đối không khuyến nghị khách hàng tích sản mã này vì nguy cơ suy kiệt dòng tiền hoặc gian lận sổ sách rất lớn.
D. Nhóm đầu cơ an toàn; Khuyên khách hàng sử dụng tối đa Margin.

### Câu 3: Thủ thuật "Vốn hóa chi phí hoạt động" (Capitalizing Expenses) của doanh nghiệp được thực hiện nhằm mục đích gì và phát hiện ở đâu trên BCTC?
A. Tăng lượng tiền mặt thực tế trong két sắt; Phát hiện trên BCLCTT.
B. Trì hoãn việc ghi nhận chi phí vào BC KQKD để thổi phồng lợi nhuận trong kỳ; Phát hiện bằng cách theo dõi sự phình to bất thường của mục "Tài sản dở dang dài hạn" trên BCĐKT và Thuyết minh BCTC.
C. Giảm thuế thu nhập doanh nghiệp phải nộp; Phát hiện trên báo cáo của cơ quan thuế.
D. Tăng số lượng cổ phiếu đang lưu hành; Phát hiện trên báo cáo quản trị.

### Câu 4: Dấu hiệu nào trên Báo cáo tài chính cho thấy doanh nghiệp đang có nguy cơ "ghi nhận doanh thu non" để làm đẹp lợi nhuận kế toán?
A. Tiền mặt của doanh nghiệp tăng mạnh qua từng quý.
B. Nợ vay dài hạn giảm nhanh hơn nợ ngắn hạn.
C. Khoản phải thu khách hàng tăng trưởng vọt với tốc độ nhanh gấp nhiều lần tốc độ tăng trưởng doanh thu thuần.
D. Biên lợi nhuận gộp của doanh nghiệp bị sụt giảm nhẹ.

### Câu 5: Khi thực hiện thuyết trình luận điểm phân tích cơ bản (FA Combat) trước hội đồng đánh giá HO3, cấu trúc bài thuyết trình thuyết phục nhất của học viên NextGen nên như thế nào?
A. Chỉ nói về biểu đồ kỹ thuật và các đường trung bình MA.
B. Đi thẳng vào việc phím mã cổ phiếu và hứa hẹn mức tăng giá trong tuần tới.
C. Bố cục logic 4 phần: (1) Phân tích mô hình kinh doanh của doanh nghiệp bằng Khung Canvas; (2) Đánh giá chất lượng BCTC và điểm số F-Score; (3) Định giá hợp lý bằng công thức Graham; (4) Đề xuất vùng giá mua tích sản đáp ứng Biên An Toàn tối thiểu.
D. Đọc lại toàn bộ báo cáo phân tích của Research KB từ đầu đến cuối.

---

### 💡 ĐÁP ÁN & GIẢI THÍCH CHI TIẾT (ANSWER KEY)

*   **Câu 1: Chọn B.**
    *   *Giải thích:* Tiêu chí CFO > Lợi nhuận sau thuế là chốt chặn quan trọng nhất của F-Score để chống lại các thủ thuật kế toán làm đẹp lợi nhuận. Lợi nhuận kế toán có thể "xào nấu" bằng cách bán hàng cho nợ gối đầu liên tục, nhưng dòng tiền CFO thì không thể làm giả được. CFO dương lớn thể hiện sức khỏe dòng tiền thực chất của doanh nghiệp.
*   **Câu 2: Chọn C.**
    *   *Giải thích:* Theo thang điểm Piotroski, điểm số từ $0 - 4$ điểm là mức báo động đỏ về sức khỏe tài chính. Việc đưa các mã này vào danh mục tích sản dài hạn là vi phạm nghiêm trọng nguyên tắc bảo vệ tài sản của Broker 4.0.
*   **Câu 3: Chọn B.**
    *   *Giải thích:* Thay vì đưa chi phí hoạt động vào BC KQKD (làm giảm lợi nhuận ngay lập tức), doanh nghiệp chuyển chúng thành tài sản dở dang dài hạn trên BCĐKT. Việc này giúp lợi nhuận kế toán trông có vẻ đẹp đẽ, nhưng chất lượng tài sản của doanh nghiệp bị suy giảm nghiêm trọng vì chứa đầy các "tài sản ảo" không tạo ra dòng tiền.
*   **Câu 4: Chọn C.**
    *   *Giải thích:* Ghi nhận doanh thu non nghĩa là doanh nghiệp ghi nhận doanh thu trên giấy tờ nhưng chưa thu được tiền thực tế từ người mua. Do đó, khoản doanh thu ảo này bắt buộc phải được đối ứng bằng việc tăng mạnh mục "Khoản phải thu" trên BCĐKT.
*   **Câu 5: Chọn C.**
    *   *Giải thích:* Đây là cấu trúc chuẩn mực bọc thép của bài thuyết trình FA Combat NextGen. Nó thể hiện đầy đủ tư duy từ hiểu sâu mô hình hoạt động đến định lượng số liệu tài chính và quản trị rủi ro bằng Biên An Toàn.

---

## 📌 V. KỊCH BẢN SẮM VAI (ROLE-PLAY SCENARIO)

### 🎭 Tình huống: Thuyết phục khách hàng từ bỏ cổ phiếu tăng trưởng nóng có điểm F-Score thấp
*   **Nhân vật:**
    *   **Broker NextGen HO3 (Học viên):** Sử dụng các lập luận sắc bén về F-Score và rủi ro khoản phải thu tăng vọt để thuyết phục khách hàng hạ nhiệt hưng phấn và bảo vệ dòng vốn.
    *   **Anh Long (Khách hàng):** 38 tuổi, chủ một chuỗi cửa hàng ăn uống. Nhóm tính cách **I-D** (nhiệt huyết, thích dẫn dắt). Anh đang rất đắc ý khoe vừa tự ý mua đuổi cổ phiếu của công ty xuất khẩu nông sản **AGM** vì doanh thu của họ tăng gấp đôi trong quý vừa qua nhờ giá gạo xuất khẩu tăng. Anh lờ đi việc điểm F-Score của AGM chỉ đạt $3/9$ điểm và các khoản phải thu chiếm tới $70\%$ cơ cấu tài sản ngắn hạn.

#### 📞 Đoạn Đối Thoại Mẫu (Script)

*   **Anh Long (giọng tự tin, đắc thắng):** *Em thấy anh tự chọn mã giỏi không? Con AGM anh mua tuần trước nay lại trần tiếp nhé. Doanh thu của nó quý này tăng gấp đôi cùng kỳ luôn, giá gạo đang sốt thế này thì AGM còn phi mạnh. Mấy đứa cứ phân tích linh tinh chứ anh cứ nhìn con nào doanh thu tăng mạnh là anh chiến. Có khi anh nạp thêm 200 triệu nữa mua gia tăng luôn em ạ!*
*   **Broker NextGen (điềm tĩnh, giọng tôn trọng):** *Dạ anh Long, em rất chúc mừng anh đã có được lợi nhuận ngắn hạn rất tốt với mã AGM trong tuần qua. Việc anh nhạy bén phát hiện ra sóng xuất khẩu gạo để đón đầu quả thực thể hiện tư duy kinh doanh rất nhạy bén của anh. Tuy nhiên, dưới góc độ quản trị rủi ro tài khoản để bảo vệ thành quả cho anh Long, em có thực hiện quét nhanh điểm số sức khỏe tài chính **Piotroski F-Score** của AGM sáng nay và phát hiện ra một số điểm cảnh báo khá quan trọng. Em xin phép chia sẻ nhanh với anh để anh có thêm góc nhìn trước khi quyết định nạp thêm tiền được không ạ?*
*   **Anh Long (giọng hơi nghi ngờ):** *Điểm số gì em? Doanh thu tăng gấp đôi thế kia thì tài chính phải khoẻ chứ có gì mà cảnh báo?*
*   **Broker NextGen:** *Dạ anh Long, đúng là doanh thu của AGM tăng gấp đôi, nhưng khi bóc tách 9 tiêu chí sức khỏe tài chính, **AGM chỉ đạt vỏn vẹn 3 trên tổng số 9 điểm**, tức là nằm ở vùng báo động đỏ về rủi ro tài chính.*
*   **Anh Long:** *Sao thấp thế được? Em giải thích rõ xem nào.*
*   **Broker NextGen:** *Dạ, điểm bất thường lớn nhất nằm ở **chất lượng lợi nhuận**. Dù doanh thu tăng gấp đôi nhưng Dòng tiền hoạt động kinh doanh (CFO) của AGM quý này lại bị âm hơn 150 tỷ đồng. Lý do là vì tiền bán gạo của họ chưa hề thu được về, mà đang bị các đối tác nước ngoài nợ lại ở mục **Khoản phải thu** trên Bảng cân đối kế toán. Mục khoản phải thu này đã tăng gấp 5 lần so với đầu năm và chiếm tới $70\%$ tài sản ngắn hạn của công ty.*
    *   *Nói một cách dễ hiểu như trong ngành kinh doanh cửa hàng của anh Long, việc này giống như cửa hàng của anh bán được rất nhiều đơn hàng lớn trên giấy tờ, nhưng khách hàng họ ăn xong toàn ký sổ nợ chứ không trả tiền mặt. Trong khi đó, anh vẫn phải bỏ tiền túi ra trả lương nhân viên, thanh toán tiền điện nước và nhập nguyên liệu hàng ngày. Doanh nghiệp AGM hiện tại đang phải gồng nợ vay ngắn hạn ngân hàng để tài trợ cho các khoản nợ của khách hàng.*
*   **Anh Long (nghĩ ngợi, giọng nghiêm túc hơn):** *À... Hóa ra là bán chịu nhiều quá à. Thế nếu đối tác họ bùng nợ hoặc chậm trả thì công ty này đứt dòng tiền luôn đúng không em?*
*   **Broker NextGen:** *Dạ đúng thế anh Long ạ. Chỉ cần một đối tác lớn chậm thanh toán, AGM sẽ lập tức rơi vào khủng hoảng thanh khoản nợ ngắn hạn. Lợi nhuận kế toán trên giấy lúc đó sẽ lập tức biến thành các khoản trích lập dự phòng nợ xấu khó đòi khổng lồ và bào mòn sạch vốn chủ sở hữu, giống như vụ sập hàng tồn kho của Gỗ Trường Thành ngày xưa.*
    *   *Vì vậy, em đề xuất phương án an toàn nhất cho anh Long lúc này:*
    *   *Một là: Chúng ta **kiên quyết không nạp thêm 200 triệu** để mua gia tăng AGM ở vùng giá hưng phấn này nữa.*
    *   *Hai là: Anh nên chủ động hiện thực hóa lợi nhuận, bán chốt lời dần mã AGM để bảo vệ số tiền lãi đã kiếm được.*
    *   *Ba là: Sau khi chốt lời, em sẽ hướng dẫn anh dịch chuyển dòng vốn sang tích sản cổ phiếu **ACB** hoặc **FPT** – những doanh nghiệp có điểm F-Score tối đa 8 - 9 điểm, dòng tiền CFO luôn dương dồi dào để xây dựng phần móng tháp tài sản thật vững chắc.*
*   **Anh Long (gật gù, vỗ vai Broker):** *Được, em phân tích rất thực tế và dễ hiểu. Suýt nữa thì anh dồn thêm tiền mua đuổi rồi. Đúng là kinh doanh sợ nhất nợ xấu khó đòi. Em canh nhịp phiên chiều nay chốt lời dần AGM cho anh, rồi chuyển dần tiền sang tích lũy ACB nhé.*
*   **Broker NextGen:** *Dạ vâng anh Long, em sẽ canh lệnh trong phiên và hỗ trợ anh cơ cấu tài khoản an toàn nhất ạ. Cảm ơn anh đã luôn tin tưởng em.*

#### 📊 Bảng Tiêu Chí Đánh Giá Năng Lực Sắm Vai (Grading Rubric dành cho Mentor)

| Tiêu Chí Đánh Giá | Điểm Tối Đa | Yêu Cầu Đạt Được (KPI) | Chấm Điểm Thực Tế |
| :--- | :---: | :--- | :---: |
| **Ứng dụng công cụ F-Score thực chiến** | **40%** | Sử dụng chính xác điểm số F-Score (3/9 điểm) và chỉ ra lỗ hổng nợ xấu khoản phải thu để phản biện khoa học, thuyết phục. | / 40 |
| **Kỹ năng ẩn dụ trực quan (Metaphor)** | **30%** | Khéo léo liên hệ rủi ro tài chính của doanh nghiệp với ngành nghề kinh doanh thực tế của khách hàng (bán hàng ký sổ nợ) để tạo sự thấu cảm dễ hiểu. | / 30 |
| **Định hướng bảo vệ dòng vốn (Risk-control)** | **30%** | Thuyết phục khách ngưng mua đuổi rủi ro, thực hiện chốt lời bảo vệ thành quả và tái cơ cấu dòng tiền sang tài sản an toàn chất lượng cao. | / 30 |

*Ngưỡng đạt yêu cầu: $\ge 85/100$ điểm.*

---

## 📌 VI. QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)

> [!IMPORTANT]
> **QUY TẮC TUÂN THỦ VỀ ĐƯA RA CẢNH BÁO TÀI CHÍNH:**
> 1.  Broker **tuyệt đối không** sử dụng các từ ngữ khẳng định mang tính quy kết chủ quan như: *"Doanh nghiệp X chắc chắn đang xào nấu sổ sách để lừa đảo"* hoặc *"Báo cáo tài chính này hoàn toàn là giả tạo"*. Điều này có thể vi phạm pháp luật về bôi nhọ uy tín doanh nghiệp và gây ảnh hưởng đến danh tiếng của KBSV.
> 2.  Luôn sử dụng các thuật ngữ chuyên môn khách quan và mang tính cảnh báo rủi ro dựa trên số liệu: *"Dữ liệu cho thấy có sự gia tăng bất thường ở khoản mục phải thu khác, nhà đầu tư cần thận trọng theo dõi các khoản giao dịch với bên liên quan"*.
