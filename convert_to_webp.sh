#!/bin/bash

# Convert PNG files to WebP
for file in public/*.png; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .png)
        cwebp -q 80 "$file" -o "public/${filename}.webp"
    fi
done

# Convert JPG files to WebP
for file in public/*.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .jpg)
        cwebp -q 80 "$file" -o "public/${filename}.webp"
    fi
done

echo "Conversion complete!" 