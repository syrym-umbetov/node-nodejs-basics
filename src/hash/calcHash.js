import { readFile } from 'fs';
export const calculateHash = async () => {
  const { createHash } = await import('crypto');
  readFile('./files/fileToCalculateHashFor.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    const hash = createHash('sha256');
    console.log(hash.update(data).digest('hex'));
  });
};
calculateHash();
