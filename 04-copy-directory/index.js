const fs = require('fs');
const fsPromises = fs.promises;
const copy = fsPromises.copyFile;
const path = require('path');

(function copyDir() {
  fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
    if (err) {
      throw new Error('new error');
    }
    console.log('Copy folder');
  });
  fsPromises.readdir(path.join(__dirname, 'files')).then((files) => {
    files.forEach((file) => {
      let filePath = path.join(__dirname, 'files', file);
      copy(filePath, path.join(__dirname, 'files-copy', file));
      console.log(file);
    });
  });
})();
