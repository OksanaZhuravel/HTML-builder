const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');

const addFile = path.join(__dirname, 'text.txt');
const addText = fs.createWriteStream(addFile);

stdout.write('Все что ты запишешь, сохранится в файл text.txt. Попробуй.\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    sayFinish();
  }

  addText.write(data);
  stdout.write('Если хочешь закончить - сочетания клавиш ctrl + c или exit\n');
});
process.on('SIGINT', sayFinish);
function sayFinish() {
  stdout.write('Всего хорошего. Посмотри что получилось');
  exit();
}
