let express = require('express');
let app = express();

let api = express.Router();

// APIs
// User API
api.get('/getUser',function(req,res){
    res.json({
        type:"api",
        WTF:"what the fuck",
        content:"This is User API"
    });
});
// City API
api.get('/getCity',function(req,res){
    res.json({
        type:"api",
        "原神":"啟動",
        content:"This is City API"
    });
});

app.use('/api' , api);

// 自訂404
app.use(function(req , res){
    res.send("找不到啦");
})

app.listen(2407,function(){
    console.log("測試p23")
})