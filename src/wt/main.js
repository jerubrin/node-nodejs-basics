import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const numCPUs = cpus().length;
const worker = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const res = [];
    for(let i = 0; i < numCPUs; i++) {
        const workRes = await new Promise((resolve) => {
            const currentWorker = new Worker(worker, {workerData: 10 + i});
            currentWorker.on('message', msg => 
                resolve({status: 'resolved', data: msg})
            );
            currentWorker.on('error', () => 
                resolve({status: 'error', data: null})
            );
            currentWorker.on('exit', () => 
                resolve({status: 'error', data: null})
            );
        });
        res.push(workRes);
    }
    console.log(res);
};

await performCalculations();