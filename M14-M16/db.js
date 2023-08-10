var mysql  = require('mysql');

// module被省略掉了 => module.exports.exec
// 如果物件沒有exec屬性，就會立刻被新增
// 當前新增的值，是一個箭頭函式
exports.exec = (sql,data,callback) => {
    const connection = mysql.createConnection({
        host:'localhost',
        port: '3306',
        user:'root',
        password:'root',
        database:'mask',
        // 是否可以允許使用者一口氣傳入很多SQL指令
        multipleStatements: true,
    });
    connection.connect();

    connection.query(sql,data,function(error,results,fields){
        if(error) {
            console.log(error)
        };
        callback(results, fields);
    })
    connection.end();
}