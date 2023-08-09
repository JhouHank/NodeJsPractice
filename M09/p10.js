let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('根頁');
});

app.get('/ab+c',function(req,res){
    // b+c 代表 加號左側的字可以出現一次以上
    res.send('我在測試+');
});
app.get('/ab?c',function(req,res){
    // b?c 代表 問號左側的字可以省略(留著也沒關係)
    res.send('我在測試?');
});
app.get('/AB*',function(req,res){
    // B* 代表 星號後面出現任何東西都可以(可以有很多)(沒有也沒關係)
    res.send('我在測試*');
});


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});