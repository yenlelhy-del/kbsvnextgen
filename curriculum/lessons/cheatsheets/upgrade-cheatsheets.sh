#!/bin/bash
# Script to upgrade all cheatsheet HTML files to use shared CSS and new design
# Processes all D*-cheatsheet-*.html files in the cheatsheets directory

CHEATSHEET_DIR="/Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets"

for file in "$CHEATSHEET_DIR"/D*-cheatsheet-*.html; do
    filename=$(basename "$file")
    
    # Skip D03 (already updated)
    if [ "$filename" = "D03-cheatsheet-dong-tien-thang-du-bien-an-toan.html" ]; then
        echo "SKIP: $filename (already updated)"
        continue
    fi
    
    # Extract day code from filename (e.g., D01, D02)
    day_code=$(echo "$filename" | grep -oP 'D\d+')
    
    # Check if file still uses old inline <style> (not yet upgraded)
    if grep -q '<style>' "$file" && ! grep -q 'cheatsheet-style.css' "$file"; then
        echo "UPGRADING: $filename"
        
        # Extract the title from <title> tag
        page_title=$(grep -oP '(?<=<title>).*?(?=</title>)' "$file")
        # Extract doc title 
        doc_title=$(grep -oP '(?<=class="doc-title">).*?(?=</h1>)' "$file" | head -1)
        # Extract day label
        doc_day=$(grep -oP '(?<=class="doc-day">).*?(?=</div>)' "$file" | head -1)
        # Extract document code
        doc_code=$(grep -oP '(?<=class="hdr-code">).*?(?=</span>)' "$file" | head -1)
        
        # 1. Replace inline <style>...</style> with link to shared CSS
        sed -i '' '/<style>/,/<\/style>/c\
    <link rel="stylesheet" href="cheatsheet-style.css">' "$file"
        
        # 2. Add action bar after <body>
        # Create the action bar HTML
        action_bar="    <!-- Action Bar (hidden when printing) -->\n    <div class=\"action-bar\">\n        <div class=\"action-bar-left\">\n            <a class=\"btn-back\" onclick=\"goBackToHub()\">← Quay lại Learning Hub</a>\n            <span class=\"action-bar-title\">Cheatsheet · ${day_code}</span>\n        </div>\n        <button class=\"btn-download\" onclick=\"downloadAsPDF()\">⬇ Tải PDF (A4)</button>\n    </div>"
        
        # Insert action bar after <body>
        sed -i '' "s|<body>|<body>\n${action_bar}|" "$file"
        
        # 3. Add card type classes
        # MỤC TIÊU -> card-objective
        sed -i '' 's/class="card" style="margin-bottom: 15px;">/class="card card-objective" style="margin-bottom: 18px;">/' "$file"
        
        # CHECK-LIST -> card-checklist (second card in left column)  
        # Find the card that contains CHECK-LIST
        sed -i '' '/CHECK-LIST/{ s/class="card"/class="card card-checklist"/; }' "$file"
        # Also check for the parent div
        
        # CÔNG THỨC -> card-formula
        sed -i '' '/CÔNG THỨC\|Công thức/{ s/class="card" style="margin-bottom: 15px;">/class="card card-formula" style="margin-bottom: 18px;">/; }' "$file"
        
        # KỊCH BẢN -> card-dialogue
        sed -i '' '/KỊCH BẢN\|Kịch bản/{ s/class="card"/class="card card-dialogue"/; }' "$file"
        
        # 4. Add scripts before </body>
        script_block="    <script>\n        function goBackToHub() {\n            if (document.referrer \&\& document.referrer.includes('learning_hub')) {\n                window.history.back();\n            } else {\n                window.location.href = '/web/pages/learning_hub.html';\n            }\n        }\n        function downloadAsPDF() {\n            window.print();\n        }\n    </script>"
        
        sed -i '' "s|</body>|${script_block}\n</body>|" "$file"
        
        echo "  DONE: $filename"
    else
        echo "SKIP: $filename (already has shared CSS or no style tag)"
    fi
done

echo ""
echo "=== Upgrade complete ==="
echo "Total files in directory:"
ls "$CHEATSHEET_DIR"/D*-cheatsheet-*.html | wc -l
