// merge-png-to-pdf.js
//
// Instalacja:
// npm install pdf-lib
//
// Uruchomienie:
// node merge-png-to-pdf.js output.pdf image1.png image2.png image3.png

const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

async function mergePngToPdf(outputFile, inputFiles) {
    if (!inputFiles.length) {
        throw new Error("Brak plików PNG.");
    }

    const pdfDoc = await PDFDocument.create();

    for (const file of inputFiles) {
        if (!fs.existsSync(file)) {
            throw new Error(`Plik nie istnieje: ${file}`);
        }

        const ext = path.extname(file).toLowerCase();

        if (ext !== ".png") {
            throw new Error(`Nieobsługiwany format: ${file}`);
        }

        const imageBytes = fs.readFileSync(file);

        const pngImage = await pdfDoc.embedPng(imageBytes);

        const width = pngImage.width;
        const height = pngImage.height;

        const page = pdfDoc.addPage([width, height]);

        page.drawImage(pngImage, {
            x: 0,
            y: 0,
            width,
            height,
        });

        console.log(`Dodano: ${file} (${width}x${height})`);
    }

    const pdfBytes = await pdfDoc.save();

    fs.writeFileSync(outputFile, pdfBytes);

    console.log(`\nPDF zapisany: ${outputFile}`);
}

async function main() {
    const [, , outputFile, ...inputFiles] = process.argv;

    if (!outputFile || inputFiles.length === 0) {
        console.log(`
Użycie:
node merge-png-to-pdf.js output.pdf image1.png image2.png ...

Przykład:
node merge-png-to-pdf.js dokument.pdf 1.png 2.png 3.png
`);
        process.exit(1);
    }

    try {
        await mergePngToPdf(outputFile, inputFiles);
    } catch (err) {
        console.error("Błąd:", err.message);
        process.exit(1);
    }
}

main();