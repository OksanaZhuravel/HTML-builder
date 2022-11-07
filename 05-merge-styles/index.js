const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const pathStyle = path.join(__dirname, 'styles');
const pathDist = path.join(__dirname, 'project-dist/bundle.css');
const addStyles = fs.createWriteStream(pathDist);

fsPromises.readdir(pathStyle).then(async (files) => {
  files.forEach(async (file) => {
    let filePath = path.join(pathStyle, file);
    let fileName = path.basename(filePath);
    let ext = path.extname(filePath);
    if (ext === '.css') {
      let css = fs.createReadStream(path.join(pathStyle, fileName));
      css.on('data', (data) => {
        addStyles.write(data.toString() + '\n');
      });
    }
  });
});
