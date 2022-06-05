import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
export const compress = async () => {
  // Write your code here
  const gzip = createGzip();
  const source = createReadStream('./files/fileToCompress.txt');
  const destination = createWriteStream('archive.gz');

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

compress();
