// 引用express套件
let express = require('express');
// 啟動express套件
let app = express();

// 伺服器想要提供get服務
app.get('/',function(req,res){
    res.send('至少提供一個服務給客戶');
});


app.listen(2407,function(){
    console.log("測試")
})