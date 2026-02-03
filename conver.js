const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folder = './img'; // Tu carpeta de imagenes

fs.readdirSync(folder).forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(folder, file);
        const outputPath = path.join(folder, path.parse(file).name + '.webp');

        sharp(inputPath)
            .webp({ quality: 80 }) // Calidad 80%
            .toFile(outputPath)
            .then(() => console.log(`✅ Convertido: ${file}`))
            .catch(err => console.error(`❌ Error en ${file}:`, err));
    }
});