#!/bin/bash
# Script to update branding in all cheatsheet HTML files
# Adds FinPeace logo to header, updates compliance and footer

CHEATSHEET_DIR="/Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets"

for file in "$CHEATSHEET_DIR"/D*-cheatsheet-*.html; do
    filename=$(basename "$file")
    
    # Skip D03 (already updated manually)
    if [ "$filename" = "D03-cheatsheet-dong-tien-thang-du-bien-an-toan.html" ]; then
        echo "SKIP: $filename (already updated)"
        continue
    fi
    
    echo "UPDATING: $filename"
    
    # 1. Update header: wrap title-box in hdr-left with logo
    # Replace old header pattern with new one
    sed -i '' 's|<div class="hdr-title-box">|<div class="hdr-left">\
                <img src="finpeace-logo.png" alt="FinPeace" class="hdr-logo">\
                <div class="hdr-title-box">|' "$file"
    
    # Close the hdr-left div after hdr-title-box
    sed -i '' 's|</div>\(.*\)<div class="hdr-r">|</div>\
            </div>\1<div class="hdr-r">|' "$file"
    
    # 2. Update brand text
    sed -i '' 's|<span class="hdr-brand">KBSV NEXTGEN 2026</span>|<span class="hdr-brand"><span class="hdr-finpeace">FinPeace</span> × KBSV NEXTGEN 2026</span>|' "$file"
    
    # 3. Update logo text
    sed -i '' 's|<span class="hdr-logo-txt">FinPeace × KB Securities Vietnam · HO3</span>|<span class="hdr-logo-txt">Chủ trì: FinPeace · Đối tác: KB Securities Vietnam · HO3</span>|' "$file"
    
    # 4. Update compliance title
    sed -i '' 's|QUY CHUẨN TUÂN THỦ PHÁT NGÔN (COMPLIANCE WARNINGS)|QUY CHUẨN TUÂN THỦ PHÁT NGÔN — FinPeace × KBSV|' "$file"
    
    # 5. Update compliance text - replace the old text with new text mentioning FinPeace
    sed -i '' 's|tuyệt đối không tự ý bịa đặt hoặc tự tính toán các phương pháp định giá mà chưa được phê duyệt\.|tuyệt đối không tự ý bịa đặt hoặc tự tính toán các phương pháp định giá mà chưa được FinPeace \&amp; KBSV phê duyệt.|' "$file"
    
    # Also try with ... at the end 
    sed -i '' 's|tuyệt đối không tự ý bịa đặt hoặc tự tính toán các phương...|tuyệt đối không tự ý bịa đặt hoặc tự tính toán mà chưa được FinPeace \&amp; KBSV phê duyệt.|' "$file"
    
    # 6. Update footer
    sed -i '' 's|<span>SỞ GIAO DỊCH 3 (HO3) - KB SECURITIES VIETNAM © 2026</span>|<div class="ftr-left"><img src="finpeace-logo.png" alt="FinPeace" class="ftr-logo"><span class="ftr-brand">FinPeace × KB Securities Vietnam</span></div>|' "$file"
    sed -i '' 's|<span>TÀI LIỆU LƯU HÀNH NỘI BỘ - PHÙ HỢP TIÊU CHUẨN PDF PRINT-ONLY</span>|<span>TÀI LIỆU NỘI BỘ · KBSV NEXTGEN 2026 · SỞ GIAO DỊCH 3 (HO3) © 2026</span>|' "$file"
    
    echo "  DONE: $filename"
done

echo ""
echo "=== Branding update complete ==="
