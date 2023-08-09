let express = require('express');
let app = express();

let page = express.Router();

page.get('/',function(req,res){
    res.send('<a href="http://localhost:2407/about">about</a>');
});
// 關於頁
page.get('/about',function(req,res){
    res.send('<a href="http://localhost:2407/info">info</a>');
});
// 資訊頁
page.get('/info',function(req,res){
    res.send('<a href="http://localhost:2407">home</a>');
});

app.use('/' , page);

app.listen(2407,function(){
    console.log("測試p20")
})