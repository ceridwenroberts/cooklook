/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = './public'; // Change this to your image directory
const CODE_DIR = './src'; // Change this to your code directory
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

function getAllFiles(dir, fileList = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const images = getAllFiles(IMAGE_DIR).filter(file =>
  IMAGE_EXTENSIONS.includes(path.extname(file))
);
const codeFiles = getAllFiles(CODE_DIR);
const unusedImages = images.filter(image => {
  const imageName = path.basename(image);
  return !codeFiles.some(codeFile => fs.readFileSync(codeFile, 'utf8').includes(imageName));
});

console.log('Unused Images:', unusedImages);
