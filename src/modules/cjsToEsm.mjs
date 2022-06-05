import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const random = Math.random();
console.log(random);
let unknownObject;

if (random > 0.5) {
  unknownObject = fs.readFile('./files/a.json', (err) => {
    if (err) throw err;
  });
} else {
  unknownObject = fs.readFile('./files/b.json', (err) => {
    if (err) throw err;
  });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export { unknownObject, createMyServer };
