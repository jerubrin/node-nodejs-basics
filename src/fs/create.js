import path from 'path'
import { writeFile, readFile } from 'fs/promises'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
    const TEXT = 'I am fresh and young'
    const ERROR_MSG = 'FS operation failed'
    const file = path.join(__dirname, 'files', 'fresh.txt')
    const isExists = await exists(file)
    if(isExists) throw Error(ERROR_MSG)
    await writeFile(file, TEXT, { encoding: "utf8", flag: "w" },)
};

async function exists (path) {  
    try {
        await readFile(path)
        return true
    } catch(e) {
        return false
    }
}

await create();