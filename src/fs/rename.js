import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import fsPromises from 'fs/promises'

const rename = async () => {
    const fromFile = path.join(__dirname, 'files', 'wrongFilename.txt')
    const toFile = path.join(__dirname, 'files', 'properFilename.md')

    if (await exists(toFile)) throw Error('FS operation failed')
    try {
        await exists()
        await fsPromises.rename(fromFile, toFile)
    } catch {
        throw Error('FS operation failed')
    }
};

async function exists (path) {  
    try {
        await fsPromises.readFile(path)
        return true
    } catch(e) {
        return false
    }
}

await rename();