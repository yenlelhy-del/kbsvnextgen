#!/bin/bash
# Fix the hdr-left closing div in all cheatsheet files (except D03 which is correct)
CHEATSHEET_DIR="/Users/yenle/Documents/kbsvnextgen/curriculum/lessons/cheatsheets"

for file in "$CHEATSHEET_DIR"/D*-cheatsheet-*.html; do
    filename=$(basename "$file")
    
    # Skip D03 (manually fixed)
    if [ "$filename" = "D03-cheatsheet-dong-tien-thang-du-bien-an-toan.html" ]; then
        continue
    fi
    
    # Check if hdr-left exists but the structure needs fixing
    if grep -q 'hdr-left' "$file"; then
        # The issue: after hdr-title-box closing </div>, we need to close hdr-left before hdr-r
        # Pattern: </div>\n            <div class="hdr-r">
        # Should be: </div>\n            </div>\n            <div class="hdr-r">
        
        # Check if fix is already applied (look for two consecutive </div> before hdr-r)
        if ! grep -q '</div>$' "$file" | head -1; then
            # Use python for reliable multi-line replacement
            python3 -c "
import re
with open('$file', 'r') as f:
    content = f.read()

# Fix: Add closing </div> for hdr-left before hdr-r
# Pattern: hdr-logo-txt line -> </div> -> <div class=\"hdr-r\">
# Need to add </div> to close hdr-left
old = '''</div>
            <div class=\"hdr-r\">'''
new = '''</div>
            </div>
            <div class=\"hdr-r\">'''

if content.count(old) == 1 and '</div>\n            </div>\n            <div class=\"hdr-r\">' not in content:
    content = content.replace(old, new, 1)
    with open('$file', 'w') as f:
        f.write(content)
    print(f'FIXED: $filename')
else:
    print(f'SKIP: $filename (already fixed or pattern not found)')
"
        fi
    fi
done

echo "=== Fix complete ==="
