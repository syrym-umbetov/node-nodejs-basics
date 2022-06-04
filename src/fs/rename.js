import fs from 'fs';

export const rename = async () => {
  fs.rename('./files/wrongFilename.txt', 'properFilename.md', (err) => {
    if (err) throw err;
    console.log('FS operation failed');
  });
};
rename();
