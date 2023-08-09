let express = require('express');
let app = express();
let routerbees = require('./bees');
let routerdogs = require('./dogs');

app.use('/bee',routerbees);
app.use('/dog',routerdogs);

app.get('/',function(req, res){
    res.send('這是根頁');
})


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});