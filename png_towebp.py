import os
from PIL import Image

# Path to scan for .webp files
base_dir = r"D:\Passion\TSA\Webmasters\Swad-v7\frontend\src\assets"

# Quality setting (0-100), 80 is usually a good tradeoff
QUALITY = 80

def optimize_webp(filepath):
    try:
        with Image.open(filepath) as img:
            # Pillow automatically detects WebP format

            # Save image with optimized settings to reduce file size
            img.save(filepath, "WEBP", quality=QUALITY, method=6) 
            # method=6 is the slowest but best compression for WebP
        print(f"Optimized: {filepath}")
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

def scan_and_optimize(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(".webp"):
                full_path = os.path.join(root, file)
                optimize_webp(full_path)

if __name__ == "__main__":
    scan_and_optimize(base_dir)
