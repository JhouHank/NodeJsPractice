let express = require('express');
let bp = require('body-parser');
let app = express();

// 如果裡面沒有放{extended:true}會出現錯誤訊息
let up = bp.urlencoded({extended:true});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/p5.html');
});

app.get('/getdata',function(req,res){
    // 我應該會收到使用者傳來的資料
    // 在URL上面的資料
    // console.log(req.query);
    // p8研究stringify
    let temp = JSON.stringify(req.query);
    // console.log(temp);
    res.send( '收到的資料是：' + temp );
});

app.post('/bee', up ,function(req,res){
    // 我應該會收到使用者傳來的資料
    // 如果用post傳表單資料，要記得用body-parser
    console.log(req.body);
    res.send( '收到的資料是：' + req.body.dogname );
});


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});