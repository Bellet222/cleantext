// Простой скрипт для генерации иконок PWA
// Требуется: npm install canvas (опционально)
// Или используйте онлайн-генератор: https://realfavicongenerator.net/

const fs = require('fs');
const path = require('path');

// Создаем простые SVG иконки разных размеров
const sizes = [192, 512];

sizes.forEach(size => {
  const svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.125}" fill="url(#gradient)"/>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop stop-color="#06b6d4"/>
      <stop offset="1" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>
  <text x="${size/2}" y="${size/2 + size*0.1}" font-family="Arial, sans-serif" font-size="${size*0.4}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">CT</text>
</svg>`;
  
  // Для PNG нужно использовать canvas или конвертировать SVG в PNG
  // Пока сохраняем как SVG, можно конвертировать через онлайн-сервис
  fs.writeFileSync(path.join(__dirname, `../public/icon-${size}.svg`), svg);
  console.log(`Created icon-${size}.svg`);
});

console.log('\nДля создания PNG файлов:');
console.log('1. Используйте онлайн-конвертер: https://cloudconvert.com/svg-to-png');
console.log('2. Или установите canvas: npm install canvas');
console.log('3. Или используйте ImageMagick: convert icon-192.svg icon-192.png');

