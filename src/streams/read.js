import fs from 'fs';
export const read = async () => {
  // Write your code here
  fs.createReadStream('./files/fileToRead.txt').pipe(process.stdout);
};
read();
