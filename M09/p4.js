let express = require('express');
let app = express();



app.get('/',function(req,res){
    res.send('123');
});
app.get('/:pika',function(req,res){
    console.log(req.params.pika);
    res.send('測試pika啦，pika的值是：' + req.params.pika);
    // let pika = req.params.pika;
});

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});