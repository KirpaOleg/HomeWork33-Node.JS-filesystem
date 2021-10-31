const os = require('os');
const path = require('path');
const fs = require('fs');

const platform = `1. Платформа - ${os.platform()}`;
const version = `2. Версия ядра - ${os.version()}`;
const arch = `3. Архитектурa ЦП - ${os.arch()}`;
const release = `4. Версия ОС - ${os.release()}`;
const model = `5. Модель процессора - ${os.cpus()[0].model}`;
const speed = `6. Скорость процессора - ${os.cpus()[0].speed}`;
const totalmem = `7. Колличество общей памяти в байтах - ${os.totalmem()}`;
const freemem = `8. Колличество свободной памяти в байтах - ${os.freemem()}`;
const hostname = `9. Имя компютера - ${os.hostname()}`;
const type = `10. Название ОС - ${os.type()}`;


const info = `${platform}\n${version}\n${arch}\n${release}\n${model}\n${speed}\n${totalmem}\n${freemem}\n${hostname}\n${type}`;


fs.mkdir(path.join(path.dirname(__dirname), 'homework'), err => {
  if (err) throw new Erorr(err);
  console.log('Folder was created');
});

fs.writeFile(path.join(path.dirname(__dirname), 'homework', 'info.txt'), info, err => {
  if (err) throw new Erorr(err);
  console.log('File was created');
});

fs.readFile(path.join(path.dirname(__dirname), 'homework', 'info.txt'), 'utf-8', (err, data) => {
  if (err) throw new Erorr(err);
  console.log('File was read >>>', data);
});