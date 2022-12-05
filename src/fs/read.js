import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { createReadStream } from 'fs'

const read = async () => {
    const file = path.join(__dirname, 'files', 'fileToRead.txt')
    const rs = createReadStream(file)
    const data = []
    rs.on('data', chunk => {data.push(chunk)})
    rs.on('end', () => console.log(data.join('')))
    rs.on('error', () => {throw Error('FS operation failed')})
};

await read();