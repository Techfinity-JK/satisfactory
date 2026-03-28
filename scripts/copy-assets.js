const fs = require("fs");
const path = require("path");

const srcRenderer = path.join(__dirname, "..", "src", "renderer");
const distRenderer = path.join(__dirname, "..", "dist", "renderer");
const srcFonts = path.join(__dirname, "..", "src", "assets", "fonts");
const distFonts = path.join(__dirname, "..", "dist", "assets", "fonts");

// Ensure dist directories exist
if (!fs.existsSync(distRenderer)) {
  fs.mkdirSync(distRenderer, { recursive: true });
}
if (!fs.existsSync(distFonts)) {
  fs.mkdirSync(distFonts, { recursive: true });
}

// Copy HTML and CSS files
const filesToCopy = ["index.html", "styles.css"];

filesToCopy.forEach((file) => {
  const srcPath = path.join(srcRenderer, file);
  const destPath = path.join(distRenderer, file);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${file}`);
  }
});

// Copy font files
if (fs.existsSync(srcFonts)) {
  fs.readdirSync(srcFonts).forEach((file) => {
    if (file.endsWith(".woff2")) {
      fs.copyFileSync(path.join(srcFonts, file), path.join(distFonts, file));
      console.log(`Copied font: ${file}`);
    }
  });
}

console.log("Assets copied successfully!");
