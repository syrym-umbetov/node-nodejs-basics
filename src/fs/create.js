import fs from 'fs';

export const create = async () => {
  fs.writeFile('./files/fresh.txt', 'I am fresh and young', function (err) {
    if (err) throw err;
    console.log('FS operation failed');
  });
};
create();
