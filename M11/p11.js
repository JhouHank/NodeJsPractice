let express = require('express');
let app = express();

//M11 P09 在討論express-session 怎麼使用
let session = require('express-session');
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
//M11 P09 在討論express-session 怎麼使用

//M11 P11 上半部
app.get('/',function(req, res){
    
    if(req.session.views){
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        req.session.views++
        res.write(`<p>瀏覽次數 : ${ req.session.views } </p>`);
        res.write(`<p>Cookie ID : ${ req.session.id } </p>`);
        res.write(`<p>Cookie過期時間 : ${ req.session.cookie.maxAge / 1000 }秒</p>`);
        res.end('bb-bee');
    } else {
        req.session.views = 1;
        res.end('aa-apple');
    }
})
//M11 P11 上半部


//M11 P11 下半部先討論 req.session 到底是什麼
app.get('/name',function(req,res){
    req.session.aabbcc = "pikachu";
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    // console.log(req.session);
    res.write(`<p> ${ req.session.aabbcc } </p>`);
    res.end();
});
//M11 P11 下半部先討論 req.session 到底是什麼


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});