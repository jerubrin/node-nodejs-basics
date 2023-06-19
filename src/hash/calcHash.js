import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import fsPromises from 'fs/promises'
import { createHash } from 'crypto'

const calculateHash = async () => {
    const text = await fsPromises.readFile(
        path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    )
    const hash = createHash('sha256').update(text).digest('hex');
    console.log(hash)
};

await calculateHash();