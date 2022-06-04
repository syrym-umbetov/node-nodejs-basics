import fs from 'fs';
export const remove = async () => {
  // Write your code here
  fs.unlink('./files/fileToRemove.txt', (err) => {
    if (err) throw err;
    console.log('FS operation failed');
  });
};

remove();
