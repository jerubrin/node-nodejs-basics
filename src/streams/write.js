import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const file = path.join(__dirname, 'files', 'fileToWrite.txt');
    const ws = fs.createWriteStream(file);
    process.stdin.pipe(ws);
};

await write();