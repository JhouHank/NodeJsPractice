let express = require("express");
let router = express.Router();

router.get('/',function(req, res){
    res.send('這是蜜蜂頁(路由)');
})
router.get('/about',function(req, res){
    res.send('這是蜜蜂about頁(路由)');
})

module.exports = router;