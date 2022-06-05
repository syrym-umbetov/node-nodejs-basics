import fs from 'fs';
export const write = async () => {
  // Write your code here
  process.stdin.pipe(
    fs.createWriteStream('./files/fileToWrite.txt', { flags: 'w' })
  );
};
write();
