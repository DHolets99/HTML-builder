const path = require('path');
const fs = require('fs');

const input = fs.createReadStream('text.txt', 'utf-8');
const output = fs.createWriteStream('text.txt');

let data = '';

output.on('data', chunk => data += chunk);
output.on('data', output.write(data));

//input.on('data', chunk => data += chunk);
input.on('error', () => console.log('errrrror'));
input.on('end', () => console.log(data));