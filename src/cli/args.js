const parseArgs = () => {
    const values = [];
    process.argv.forEach((val, i) => {
        if(val.slice(0, 2) === '--') {
            values.push(`${val.slice(2)} is ${process.argv[i+1]}`)
        }
    });
    console.log(values.join(', '))
};

parseArgs();