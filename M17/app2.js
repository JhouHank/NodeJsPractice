let express = require('express');
let app = express();

// 這裡是資料庫相關
let mysql = require('mysql');
let myDBconn = mysql.createConnection({
    host : "localhost", // 或是"127.0.0.1"
    port : "3306", // 預設3306 可以不用打
    user : "root",
    password : "root",
    database : "mask"
})

// 因為想要查看錯誤訊息
myDBconn.connect(function(err){
    if(err){
        console.log("資料庫有問題===========");
        console.log(err);
    }else{
        console.log("資料庫OK===========");
    }
});
// 這裡是資料庫相關 和M12 P12相同

// myDBconn.query(sql指令, f(){})
// myDBconn.query(sql指令, [如果sql指令包含問號就在這裡寫參數], f(){})

// 版本二：藍鳥 blue bird
// 藍鳥套件 => 可以把函式變成有promise的效果
let bluebird = require('bluebird');
bluebird.promisifyAll(myDBconn);

let sql1 = "select max(child_mask) as child_mask from inventory";
let sql2 = "select * from inventory where child_mask = ?";

// queryAsync會回傳一個promise，所以可以.then
myDBconn.queryAsync(sql1).then(function(data){
    console.log(data[0].child_mask);
    return myDBconn.queryAsync(sql2, [data[0].child_mask])
// 等到第一個sql結果收到了，繼續執行第二個sql
// return一個promise，所以可以.then
}).then(function(cat){
    console.log(cat[0].name);
})

app.get('/',function(req,res){
    res.send('123');
});

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});