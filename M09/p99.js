let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname + 'p99.html');
});
app.get('/product/:pid',function(req,res){
    res.send(`給妳產品${ req.params.pid }號`);
    // 未來收到的資料大多會跟資料庫進行結合
    // 想像如下
    // select * from 產品 where 產品編號 = req.params.pid
});


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});