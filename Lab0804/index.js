// 匯入套件
let express = require('express');
// 使用套件
// 透過app這個變數來使用express這個物件
let app = express();

// 匯入自己寫的路由
let aabb = require('./apple_router/member.js');
let ccdd = require('./apple_router/product.js');

// 使用自己寫的路由
app.use('/member', aabb);
app.use('/product', ccdd);

// 當使用者發送了一個get請求，並且是請求連接到'/'這個路由時，要執行後面的函式
// req是從前端發送到伺服器端的請求，res是從伺服器端發送到前端的回應
// send代表發送與結束
app.get('/',function(req,res){
    res.send('<h1>這裡是index頁</h1>');
})
// 設定伺服器要「監聽」的埠號
// 當伺服器開始監聽後，伺服器就能夠接收前端使用者的請求
app.listen(2407,function(){
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});