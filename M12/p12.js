let mysql = require('mysql');

let conn = mysql.createConnection({
    host : "localhost", // "127.0.0.1"
    port : "3306", // 預設3306 可以不用打
    user : "root",
    password : "root",
    database : "labdb"
})

conn.connect(function(aa){
    console.log('====');
    console.log(aa);
    console.log('====');
});

// P??
// conn.query('create table labdb.cat (apple int PRIMARY KEY AUTO_INCREMENT)',function(err){
//     console.log('=============');
//     console.log(err);
//     console.log('=============');
// });

// P16
// conn.query("insert into cat (dog) values ('日本柴犬')",function(err){
//     console.log('=============');
//     console.log(err);
//     console.log('=============');
// });

// P17
conn.query("select * from cat where apple >=? and apple <=?",
    [4,6] ,
    function(err, rows){
    if(err){
        console.log("========有錯誤發生了========")
        console.log(err);
        console.log("========有錯誤發生了========")
    }else{
        // rows       是陣列 => 為select語法查詢的結果
        // rows[]     取得指定的陣列資料 => 發現取得的內容是物件
        // rows[].dog 因為是物件所以可以透過屬性名稱取得屬性值
        console.log("==========沒有錯誤==========")
        console.log(rows[0].dog);
        console.log(rows[1].dog);
        console.log(rows[2].dog);
        console.log("==========沒有錯誤==========")
    }
});