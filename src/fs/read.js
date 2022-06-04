import fs from 'fs';
export const read = async () => {
  // Write your code here
  fs.readFile('./files/fileToRead.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
read();
