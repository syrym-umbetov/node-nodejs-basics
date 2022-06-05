import fs from 'fs';

export const list = async () => {
  // Write your code here
  fs.readdir('./files', (err, files) => {
    files.forEach((file) => console.log(file));
    if (err) throw err;
  });
};
list();
