import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const write = (str) => process.stdout.write(str)

const read = async () => {
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    const rs = fs.createReadStream(file, { encoding: 'utf-8' });
    rs.on('data', chunk => write(chunk))
};

await read();