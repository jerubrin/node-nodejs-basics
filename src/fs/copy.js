import path from 'path'
import { stat, readdir, mkdir } from 'fs/promises'
import { createReadStream, createWriteStream } from 'fs'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const FROM_DIR = path.join(__dirname, 'files')
    const TO_DIR = path.join(__dirname, 'files_copy')
    copyDir(FROM_DIR, TO_DIR)
};

const copyDir = async (fromPath, toPath) => {
    const ls = await readdir(fromPath)
    try {
        await mkdir(toPath)
    } catch {
        throw Error('FS operation failed')
    }
    for(let file of ls) {
        const pathFromFile = path.join(fromPath, file)
        const pathToFile = path.join(toPath, file)
        const fileStat = await stat(pathFromFile)
        if(fileStat.isFile()) {
            createReadStream(pathFromFile).pipe(
                createWriteStream(pathToFile)
            )
        }
        if(fileStat.isDirectory()) {
            copyDir(pathFromFile, pathToFile)
        }
    }
}

copy();