import re
import html

def clean_html(file_path, output_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Loại bỏ tags style, script
    content = re.sub(r'<style[^>]*>([\s\S]*?)</style>', ' ', content)
    content = re.sub(r'<script[^>]*>([\s\S]*?)</script>', ' ', content)
    
    # Thay thế các tag HTML bằng khoảng trắng
    content = re.sub(r'<[^>]+>', ' ', content)
    
    # Unescape HTML entities
    content = html.unescape(content)
    
    # Chuẩn hóa khoảng trắng
    content = re.sub(r'\s+', ' ', content)
    content = re.sub(r' (?=[.,!?;:])', '', content)
    
    # Tách dòng sau mỗi dấu chấm để dễ đọc hơn
    content = content.replace('. ', '.\n')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)

clean_html('/Users/yenle/.gemini/antigravity-ide/brain/b2bcff27-8909-4e25-8244-ac3dbda93669/.system_generated/steps/4/content.md', '/Users/yenle/Documents/Sale Support Hub/SalesGPT/clean_finpeace.txt')
clean_html('/Users/yenle/.gemini/antigravity-ide/brain/b2bcff27-8909-4e25-8244-ac3dbda93669/.system_generated/steps/5/content.md', '/Users/yenle/Documents/Sale Support Hub/SalesGPT/clean_donghanh.txt')
print("Successfully cleaned files!")
