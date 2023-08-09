let express = require('express');
let session = require('express-session');
let bp = require('body-parser');
let app = express();
app.use(bp.urlencoded({extended:true}));
// M07

// M11 P9 express-session
let x = session({
    secret:"iamironman",
    resave:true,
    saveUninitialized:true,
    cookie:{
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 50 * 1000
    }
})
app.use(x);
// M11 P9 express-session

// PDF截圖沒有截到的
// => 如果使用者URL為 http://localhost:2407/form
// => 則使用者會獲得一個html檔案
app.get('/form',function(req,res){
    res.sendFile( __dirname + '/p16.html');
});

// M11 P15
app.get('/login',function(req,res){
    if(req.session.user){
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.write(`<p>${req.session.user.account} 你已經登入囉！</p>`);
        res.write(`<p>登入時間 ${req.session.user.logined_at}</p>`);
        res.end('asdfasf');
    }else{
        // 重新導向
        res.redirect('/form');
    }
});

// M11 P15
app.post('/login',function(req, res){
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    // console.log(req.body)
    // res.send('我好了');
    // 判斷是否已經登入
    if(req.session.user444){
        res.write(`<p> ${req.session.user.account123} 你已經登入囉！</p>`);
        res.write(`<p>登入時間 ${req.session.user.login_time}</p>`);
    }else{
        // 原本以為 : 如果使用者「沒有」輸入帳號密碼
        // 測試後覺得 :  
        // 應該改成如果<form>底下找不到指定的<input name>會比較恰當
        // 如果當真要判斷「沒有」值，應該要改為空字串
        if(req.body.act == undefined || req.body.pwd == undefined){
            res.write(`<p>沒有傳遞值，無法登入哦！</p>`);
        }else{
            // 預設帳號密碼
            let account777 = 'asdf';
            let password888 = '123';
            // 處理請求
            if(req.body.act === account777 && req.body.pwd === password888){
                res.write(`<p>登入成功！</p>`)
                // 將登入狀態寫入session
                req.session.user444 = {
                    'account123' : req.body.act,
                    'login_time' : new Date(Date.now())
                }
            } else {
                res.write(`<p>登入失敗，帳號或密碼錯誤！</p>`)
            }
        }
    }
    res.end('登入流程結束');
})

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});