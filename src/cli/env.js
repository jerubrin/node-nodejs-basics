const parseEnv = () => {
    const vals = []
    for(let val of Object.keys(process.env)){
        if(val.slice(0,4) === 'RSS_')
        vals.push(`${val}=${process.env[val]}`)
    };
    console.log(vals.join('; '))
};

parseEnv();