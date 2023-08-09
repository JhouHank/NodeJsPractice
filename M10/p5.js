let express = require('express');
let app = express();

let temp = "/";
function func1(req, res, next){
    res.write('a');
    next();
}
function func2(req, res, next){
    res.write('b');
    next();
}
function func3(req, res, next){
    res.end('c');
}

app.get(temp, [func1, func2, func3]);
app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});
