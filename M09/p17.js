let express = require('express');
let app = express();

app.get('/09[0-9]{8}',function(req,res){
    res.send('手機ok');
});

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});