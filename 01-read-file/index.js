const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
const text = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
text.on('data', (data) => stdout.write(data));
