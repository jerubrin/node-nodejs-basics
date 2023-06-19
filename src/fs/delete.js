import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import fsPromises from 'fs/promises'

const remove = async () => {
    try {
        await fsPromises.rm(
            path.join(__dirname, 'files', 'fileToRemove.txt')
        )
    } catch {
        throw Error('FS operation failed')
    }
};

await remove();