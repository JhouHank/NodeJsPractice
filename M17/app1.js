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

// 版本一：callback hell
let sql1 = "select max(child_mask) as child_mask from inventory";
myDBconn.query(sql1, function(err , data){
    // 假設沒有錯誤的情況下，我要直接看我獲得的資料
    // console.log(data);               // [RowDataPacket{child_mask : 2629}]
    // console.log(data[0]);            // RowDataPacket{child_mask : 2629}
    console.log(data[0].child_mask);    // 2629

    // 放在這裡可以確保，第一段SQL回來以後才會去執行第二段SQL => 昨天分頁兩段query
    let sql2 = "select * from inventory where child_mask = ?";
    myDBconn.query(sql2,[data[0].child_mask],function(err, cat){
        console.log(cat[0].name);
    });
})

app.get('/',function(req,res){
    res.send('123');
});

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});