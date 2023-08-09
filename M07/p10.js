// 如果我獲得一個字串
// 這個字串的組成是 "key=value&key=value&..."
// 我可以透過querystring套件的parse方法 幫我把字串變成物件
let apple = require('querystring');
let str = 'name=Pikachu&age=18&cat=987654321';
let obj = apple.parse(str);

// p9
console.log('-------------------------------');
console.log(obj);
console.log('-------------------------------');
// p10
obj.name = "皮";
obj.age = 20;

let temp = apple.stringify(obj);
console.log('-------------------------------');
console.log(temp);
console.log('-------------------------------');