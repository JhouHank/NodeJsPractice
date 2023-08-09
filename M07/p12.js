let apple = require('querystring');
let str = 'name=皮&age=18&cat=987654321';

// p12
let x = apple.escape(str)
let y = apple.unescape(str)
console.log('-------------------------------');
console.log(`原始字串：${str}`);
console.log('-------------------------------');
console.log(`編碼後字串：${x}`);
console.log('-------------------------------');
console.log(`解碼後字串：${y}`);
console.log('-------------------------------');