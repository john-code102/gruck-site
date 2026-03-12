import fs from 'fs';

const commonTop = fs.readFileSync('common_top.html', 'utf-8');
console.log(commonTop);