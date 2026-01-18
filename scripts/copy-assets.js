const fs = require("fs");
const path = require("path");

const srcRenderer = path.join(__dirname, "..", "src", "renderer");
const distRenderer = path.join(__dirname, "..", "dist", "renderer");

// Ensure dist/renderer directory exists
if (!fs.existsSync(distRenderer)) {
  fs.mkdirSync(distRenderer, { recursive: true });
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

console.log("Assets copied successfully!");
