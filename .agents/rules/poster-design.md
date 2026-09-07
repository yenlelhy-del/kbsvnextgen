# Quy Chuẩn Thiết Kế Poster & Banner — KBSV NextGen 2026

Tài liệu này ghi nhớ toàn bộ Quy tắc (Rules) & Quy trình (Workflow) chuẩn hóa thiết kế ấn phẩm truyền thông, Poster, Banner cho chương trình **KBSV NextGen 2026 (Sở Giao dịch 3 HO3 — KB Securities Vietnam × FinPeace)**.

---

## 🎨 1. QUY CHUẨN THƯƠNG HIỆU & HỆ THỐNG ĐỒ HỌA (BRAND & GRAPHICS)

- **Bảng màu chính:**
  - Yellow: `#F5A623` (KBSV Yellow)
  - Brown: `#8B7355` (KBSV Brown)
  - Warm Background: `#FAFAF7` / `#FFFDF9` (Light & Energetic)
  - Dark Accent: `#1A1A1A` (Dùng cho Footer & Contrast Card)
- **Typography:** `Space Grotesk` (Tiêu đề lớn / Display), `Inter` (Nội dung / Body).
- **Thứ tự Logo Header (BẮT BUỘC):**
  - **Bên Trái (Vị trí 1):** Logo FinPeace (`finpeace-logo.png`).
  - **Ở Giữa:** Vạch phân cách dọc (`rgba(139, 115, 85, 0.25)`).
  - **Bên Phải (Vị trí 2):** Logo KB Securities Vietnam (`kbsv-logo.jpeg`).
- **Dress Code chuẩn sự kiện:** Trang phục lịch sự, chỉn chu (Ưu tiên **Trắng & Vàng**).

---

## 🦊 2. QUY CHUẨN SỬ DỤNG MASCOT (MASCOT GUIDELINES)

- **Sử dụng Mascot chính thức:** Dùng đúng bộ Mascot ứng dụng chính thức (`assets/mascot/flexi-official-ok.png`, `assets/mascot/flexi-official-haohuc.png`).
- **Kích thước Mascot:** Tỷ lệ lớn nổi bật (`280px - 290px`), đặt ở khung card bên phải với khung thoại (speech bubble) truyền cảm hứng.
- **Kỹ thuật chống hỏng ảnh (CRITICAL):** Luôn mã hóa & nhúng trực tiếp **Base64 Data URI** (`data:image/png;base64,...`) cho ảnh Mascot & Logo trong mã nguồn HTML để 100% không bị lỗi hỏng đường dẫn ảnh.

---

## 🚫 3. NGUYÊN TẮC BIỂU TƯỢNG (NO AI EMOJIS)

- **TUYỆT ĐỐI KHÔNG DÙNG EMOJI HỆ THỐNG / AI TRAIN CHUẨN:** Không dùng các emoji ⏰, 📍, 👔, 🚀, 📋, ✨, 🎯, 🎉 trong thiết kế ấn phẩm chính thức.
- **DÙNG BỘ SVG MOTION GRAPHIC ICONS ĐỘC BẢN:** Thay thế 100% bằng SVG Vector Icons stroke 2.2px bo tròn, phối màu chuẩn thương hiệu (`#F5A623`, `#8B7355`).

---

## 📍 4. THÔNG TIN LIÊN HỆ CỐ ĐỊNH & THÔNG ĐIỆP

- **Địa điểm trụ sở HO3:** `Sở Giao dịch 3 — Tầng 16, Tháp 2, Capital Place, 29 Liễu Giai, Hà Nội`.
- **Thông điệp / Slogan chủ đạo:** *"Chủ động gia nhập Thế hệ Tư vấn - Môi giới Không Giới Hạn"*.
- **Thông tin Chân trang (Footer):**
  - Quét mã QR Zalo + Link: `https://zalo.me/g/bgdg5wdypeno2kcefxoh`
  - Website chính thức: `nextgen.finpeace.cloud`

---

## 🛠️ 5. QUY TRÌNH XUẤT FILE (EXPORT WORKFLOW)

1. Tạo mã nguồn HTML vuông 1200x1200px (Sử dụng CSS Flexbox/Grid, font Google, base64 images).
2. Render xuất file ảnh PNG chất lượng cao (1200x1200px) qua Chrome Headless.
3. Đồng bộ file ảnh vào thư mục `assets/posters/` và trình duyệt trực tiếp với người dùng.
