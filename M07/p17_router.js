let express = require('express');
let router = express.Router()

router.get('/ccc',function(req,res){
    let temp = req.app.get('aabbcc'); //2407
    // send意思是把東西送出並且結束的意思
    res.send('路由成功' + temp);
})

module.exports = router;