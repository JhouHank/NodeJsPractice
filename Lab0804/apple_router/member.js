// 引用、載入、匯入 express套件
// 因為我想要變成伺服器
let express = require('express');

// 使用、呼叫、執行套件底下的 Router() 方法
// 因為我想要獲得一個Router物件
// 透過router物件 建立、設定 路由清單
let cat = express.Router()

cat.get('/',function(req,res){
    res.send('<h1>這是member頁</h1>');
})

cat.get('/card',function(req,res){
    res.send('<h1>這是card頁</h1>');
})

module.exports = cat;