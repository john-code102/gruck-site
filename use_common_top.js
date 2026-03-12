import fs from 'fs';

const commonTop = fs.readFileSync('common_top.html', 'utf-8');
document.writeln(commonTop);
console.log(commonTop);