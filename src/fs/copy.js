export const copy = async () => {
  let fs = require('fs');
  fs.copyFile('./files', './files_copy', function (err) {
    if (err) throw err;
    console.log('FS operation failed');
  });
};
