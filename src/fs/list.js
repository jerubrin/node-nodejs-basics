import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { readdir } from 'fs/promises'

const list = async () => {
    try {
        const dir = path.join(__dirname, 'files')
        const ls = await readdir(dir)
        for(let file of ls) {
            console.log(file)
        }
    } catch {
        throw Error('FS operation failed')
    }
};

await list();