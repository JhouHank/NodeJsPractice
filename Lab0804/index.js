let express = require('express');
let app = express();

let aabb = require('./apple_router/member.js');
let ccdd = require('./apple_router/product.js');
app.use('/member', aabb);
app.use('/product', ccdd);
app.get('/',function(req,res){
    res.send('<h1>這裡是index頁</h1>');
})
//----------------------------
app.listen(2407,function(){
    console.log("測試0804專案")
});