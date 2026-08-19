# KBSV NextGen 2026 — Workflow Vận Hành

## 1. Workflow Tuyển Dụng

```
Đăng tuyển → Nhận CV → Sàng lọc hồ sơ → PV 30 phút → Chấm Phiếu NTD-SV-01 → Kết luận → Thông báo
```

### Tài liệu sử dụng:
- **Người PV cầm:** `Bo_Cau_Hoi_Phong_Van.pdf` (PV-SV-02) — Cheat sheet 3 trang
- **Ghi điểm:** `Phieu_Danh_Gia_Sinh_Vien.pdf` (NTD-SV-01) — In 1 bản/ứng viên
- **Online:** `interview_evaluation.html` — Chấm điểm trên web (auto tính, radar chart)

### Quy trình PV 30 phút:
1. **0'–2':** Chào hỏi, giới thiệu chương trình
2. **2'–12':** Phần A — Attitude (Q1-Q4)
3. **12'–22':** Phần S — Skills (Q5-Q8)
4. **22'–27':** Phần K — Knowledge (Q9)
5. **27'–30':** Câu hỏi ngược + Kết thúc (Q10)

---

## 2. Workflow Đào Tạo 42 Ngày

```
Tuần 1-2: Micro-learning (18 module) → Tuần 3-6: Thực chiến Đua Top → Kết thúc: Tuyển chính thức
```

### Daily Routine (Tuần 3-6):
1. **Morning Briefing** (8h30-9h00): Review thị trường
2. **Content Lab** (14h-16h): Sản xuất nội dung
3. **Livestream 90'** (19h30-21h): Phiên phát sóng
4. **Leaderboard Update** (21h30): Cập nhật bảng xếp hạng
5. **Sudden Death Check** (Cuối ngày): Loại UV vi phạm

### Nội dung Module:
- Mỗi module: 1500+ từ bài đọc + bài tập + interactive + test + role-play
- Tài liệu đã có: Module 1, 4, 11, 12, 18 (trong `docs/03-dao-tao/`)
- Còn thiếu: Module 2-3, 5-10, 13-17, 19-22

---

## 3. Workflow Xuất PDF

```
Sửa file HTML (print-only) → Chrome headless → PDF A4 → Copy vào ~/Documents
```

### Lệnh xuất PDF:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-sandbox \
  --print-to-pdf="output.pdf" \
  --print-to-pdf-no-header \
  "file:///path/to/source.html"
```

---

## 4. Workflow Web Development

```
Edit HTML/CSS → python3 -m http.server 8080 → Test localhost:8080 → Deploy
```

### Pages hiện có:
| File | Chức năng | URL |
|------|-----------|-----|
| `index.html` | Landing page tuyển dụng | `/` |
| `learning_hub.html` | Kho khóa học online | `/learning_hub` |
| `interview_evaluation.html` | Phiếu đánh giá online | `/interview_evaluation` |
| `poster.html` | Poster tuyển dụng | `/poster` |
| `mobile_post.html` | Post mobile | `/mobile_post` |
