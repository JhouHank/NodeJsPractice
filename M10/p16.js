let express = require('express');
let app = express();

app.use(function(req, res, next){
    console.log(new Date().toString());
    next();
})
app.use(function(req, res, next){
    if(req.query.pwd !== 'apple'){
        res.end('not allow');
    }else{
        next();
    }
})

app.get('/', function(req, res){
    res.end('homepage');
});
app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});
