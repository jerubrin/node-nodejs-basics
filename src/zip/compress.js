import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const gzFile = path.join(__dirname, 'files', 'archive.gz');
    const rs = fs.createReadStream(file);
    const ws = fs.createWriteStream(gzFile);
    rs.pipe(zlib.createGzip()).pipe(ws);
};

await compress();