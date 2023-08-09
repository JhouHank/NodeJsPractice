let express = require('express');
let app = express();

let temp = "/";
function cat(req,res){
    res.end('meow');
}

app.get(temp, cat);
app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});
