import { stdin, stdout } from 'process';

const transform = async () => {
    stdin.on('data', data => stdout.write(
        data.slice(0, -1).reverse() + '\n'
    ))
};

await transform();