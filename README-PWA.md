# PWA Иконки

Для полноценной работы PWA нужны PNG иконки. 

## Быстрый способ создания иконок:

1. **Онлайн-генератор** (рекомендуется):
   - Перейдите на https://realfavicongenerator.net/
   - Загрузите файл `public/icon.svg`
   - Скачайте сгенерированные иконки
   - Поместите `icon-192.png` и `icon-512.png` в папку `public/`

2. **Или используйте ImageMagick**:
   ```bash
   convert public/icon.svg -resize 192x192 public/icon-192.png
   convert public/icon.svg -resize 512x512 public/icon-512.png
   ```

3. **Или используйте Node.js с canvas**:
   ```bash
   npm install canvas
   node scripts/generate-icons.js
   ```

После создания иконок PWA будет полностью функциональным!

