let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('<img src="http://localhost:2407/find.png" />');
});

app.use(express.static(__dirname + '/media'))
// app.use(express.static('C:/\Lab/\M05' + '/media')) 把__dirname換成絕對路徑
// app.use(express.static('media')) 把資料夾名稱直接寫進去
// 這三種寫法都可以
console.log("========這是log========");
console.log( __dirname);
console.log("========這是log========");

app.listen(2407,function(){
    console.log("測試p7")
})