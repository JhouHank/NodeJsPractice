// 引用、載入、匯入 express套件
// 因為我想要變成伺服器
let express = require('express');

// 使用、呼叫、執行express底下的 Router() 方法 // R要大寫
// 因為我想要獲得一個Router物件
// 透過Router物件來建立、設定路由清單
let cat = express.Router()

cat.get('/',function(req,res){
    res.send('<h1>這是member頁</h1>');
})

cat.get('/card',function(req,res){
    res.send('<h1>這是member/card頁</h1>');
})

// 把設定好的Router物件匯出
module.exports = cat;