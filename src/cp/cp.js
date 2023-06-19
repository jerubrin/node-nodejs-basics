import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const file = path.join(__dirname, 'files', 'script.js');
    const node = fork(file, args);
    node.on('close', () => process.exit());
};

spawnChildProcess(['-args', '-for', '-test']);