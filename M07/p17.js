let express = require('express');
let app = express();

// app.set( key , value )
// ==> 設定變數的感覺
app.set('aabbcc', 2407);

app.get('/',function(req,res){
    res.send('蛤');
});

// 引用我自己寫好的路由
// require('')
let myRouter = require('./p17_router.js');  //.js可以拿掉
app.use('/', myRouter);

// app.get( key )
// ==> 取得變數的感覺
app.listen( app.get('aabbcc') , function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});