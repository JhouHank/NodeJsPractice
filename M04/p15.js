let express = require('express');
let app = express();

app.get('/',function(req,res){
    res.send('原神！啟動！');
});

app.listen(2407,function(){
    console.log("測試p15")
})