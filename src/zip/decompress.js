import fs from 'fs'
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const gzFile = path.join(__dirname, 'files', 'archive.gz');
    const file = path.join(__dirname, 'files', 'fileToCompress.txt');
    const rs = fs.createReadStream(gzFile);
    const ws = fs.createWriteStream(file);
    rs.pipe(zlib.createGunzip()).pipe(ws);
};

await decompress();