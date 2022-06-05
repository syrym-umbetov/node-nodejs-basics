import fs from 'fs';

export const copy = async () => {
  fs.copyFile('./files/', './files_copy', function (err) {
    if (err) throw err;
    console.log('FS operation failed');
  });
};
copy();
