let express = require('express');
let app = express();

// http://localhost:2407
app.get('/',function(req,res){
    res.sendFile(__dirname + '/app2.html');
});

// http://localhost:2407/time777
app.get('/time777',function(req,res){
    let d = new Date();
    res.send(`我的中原標準時間 : ${d.toLocaleTimeString()}`);
});


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});