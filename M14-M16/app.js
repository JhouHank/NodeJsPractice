var express = require('express');
var bodyParser = require('body-parser');
// 因為看到 ./ 所以是自己寫的js檔案，而非套件
var index = require('./router/index')
var session = require('express-session');
var app = express();
//session設定
app.use(session({
    secret: 'iamagooddeveloperofjavascript,iwoilllearnaboutallofthisapplication',
    resave: false,
    saveUninitialized: false,

    cookie:{
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 10 * 60*1000
    }
}))

// app.use 可以掛中介程式
// 因為我想要接收client端來的json資料
app.use(bodyParser.json());

// app.use 可以掛我自己寫的function
// => 如果把資料放在這裡 res.locals.aa
// => ejs模板可以直接取用 mySession
app.use(function(req, res, next){
    res.locals.mySession = req.session;
    next();
});
app.set('view engine', 'ejs');

// 註冊index路由
app.use('/', index)

app.listen(2407);
