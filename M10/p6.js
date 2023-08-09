let express = require('express');
let app = express();

function notNumber(req, res ,next){
    if(isNaN(parseInt(req.params.age))){
        res.end("you have to input your age in number");
    }else{
        next();
    }
}

function younger(req, res ,next){
    if(req.params.age < 18){
        res.end("too young");
    }else{
        next();
    }
}

function func(req, res, next){
    res.end(`you are ${req.params.age} years old`);
}

app.get("/age/:age", [notNumber, younger, func]);
// app.get(/下訂單, [登入? , 庫存? , 促銷?])

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});
