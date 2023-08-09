let express = require('express');
let app = express();

// EJS
app.set('view engine','ejs');
// EJS

// css
app.use('/css',express.static('css'))
// css

// 這裡是資料庫相關 和M12 P12相同
let mysql = require('mysql');
let myDBconn = mysql.createConnection({
    host : "localhost", // "127.0.0.1"
    port : "3306", // 預設3306 可以不用打
    user : "root",
    password : "root",
    database : "mask"
})

myDBconn.connect(function(err){
    if(err){
        console.log("資料庫有問題===========");
        console.log(err);
    }else{
        console.log("資料庫OK===========");
    }
});
// 這裡是資料庫相關 和M12 P12相同


app.get('/',function(req,res){
    res.redirect('/pages/1'); // 當有人進來/時，轉去page/1
    // let sql = "select * from inventory limit 20,10";
    // myDBconn.query(sql, function(err, rows){
    //     if(err){
    //         console.log("SQL指令執行錯誤===========");
    //         console.log(err);
    //     } else {
    //         console.log("SQL執行OK================");
    //         // console.log(rows);
    //     }
    //     // res.send("資料庫測試中");
    //     res.render('p9', {
    //         apple:rows,
    //         last_page:3,
    //         curr_page:1,
    //         total_nums:28
    //     })
    // });
});

// P13 這裡開始討論分頁
app.get('/pages/:page([0-9]+)' ,function(req,res){
    let myPage = req.params.page;
    if(myPage <= 0){
        res.redirect('/pages/1');
    }
    // LIMIT的第二個數字 => 每頁資料量
    let eachPage = 10;
    // LIMIT的第一個數字 => 起始位置
    let offset = (myPage - 1 ) * eachPage;

    myDBconn.query(`select * from inventory limit ${ offset }, ${ eachPage }`, function(err,rows){
        if(err){
            console.log("SQL指令執行錯誤===========");
            console.log(err)
        } else {
            console.log("SQL執行OK================");
            // console.log(rows);
        }

        myDBconn.query('select count(*) as zoo from inventory', function(err2,totalRecord){
            if(err2){
                console.log("SQL指令執行錯誤===========");
                console.log(err2);
            } else {
                console.log(`SQL執行成功，總共有${totalRecord[0].zoo}筆`);

                let last_page = Math.ceil(totalRecord[0].zoo / eachPage);
                if(myPage > last_page){
                    res.redirect(`/pages/${last_page}`);
                }
                res.render('p9', {
                    apple:rows,
                    curr_page: myPage,
                    total_nums: totalRecord[0].zoo,
                    last_page: last_page
                })
            }
        })





    })
})
// P13 這裡開始討論分頁

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});