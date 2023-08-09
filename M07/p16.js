const bodyParser = require('body-parser');
const express = require('express');
const app = express();

var jsonParser = bodyParser.json()//解析JSON資料
var urlencodedParser = bodyParser.urlencoded({extended:true})//解析Form Data

// p23的測試
// URL: http://localhost:2407/test
// URL: http://localhost:2407/test?aa=皮卡丘&bb=胖丁
app.get('/test', function(req,res){
    console.log(req.query);
    res.send('測試get啦' + req.query.aa);
})
// p23的測試

// p26的測試
// URL: http://localhost:2407/test
app.post('/form', urlencodedParser , function(req,res){
    console.log(req.body);
    res.send('測試post啦' + req.body);
})
// p26的測試

// p28的測試
// URL: http://localhost:2407/test
app.post('/json', jsonParser , function(req,res){
    console.log(req.body);
    res.send('測試json啦' + req.body);
})
// p28的測試



app.post('/json',jsonParser,function (req,res){
    console.log(req.body);//可以從req.body中抓取解析的資料
    res.send('皮卡丘' + req.body)
})

app.post('/form',urlencodedParser,function(req,res){
    console.log(req.body);
    res.send('胖丁' + req.body)
})


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});