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

// p21與p22很像，只有這裡不一樣
app.use('/' , api);
// p21與p22很像，只有這裡不一樣

app.listen(2407,function(){
    console.log("測試p21")
})