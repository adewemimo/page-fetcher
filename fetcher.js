const URL = process.argv[2];
const fileName = process.argv[3];

import fetch from 'node-fetch';
import fs from 'fs';

const downloadWrite = async (url, file) => {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.text();
        fs.writeFile(file, data, err => {
            if (err) {
                throw err;
            }else{
                fs.stat(file, (err, stats) => {
                    if (err) {
                        throw err;
                    }else{
                        console.log(`Downloaded and saved ${stats.size} bytes to ${file}`);
                    }
                });  
            }
        });
    } else {
        console.log(`Could not access ${url}`);
    }
}

downloadWrite(URL, fileName);


