import os
from PIL import Image

def convert_png_to_webp(root_directory):
    for root, _, files in os.walk(root_directory):  # Recursively walk through folders
        for filename in files:
            if filename.lower().endswith(".png"):
                png_path = os.path.join(root, filename)
                webp_filename = os.path.splitext(filename)[0] + ".webp"
                webp_path = os.path.join(root, webp_filename)

                try:
                    with Image.open(png_path) as img:
                        img.save(webp_path, "webp", lossless=True)
                    print(f"Converted: {png_path} → {webp_path}")
                except Exception as e:
                    print(f"Failed to convert {png_path}: {e}")

# Call the function with your assets directory
convert_png_to_webp(r"D:\Passion\TSA\Webmasters\Swad-v7\frontend\src\assets")
