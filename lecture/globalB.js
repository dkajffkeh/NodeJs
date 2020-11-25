const A = require("./globalA");

global.message=`안녕하세요`;

console.log(A());

console.log(__filename,__dirname);

const path = require('path');

console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));
