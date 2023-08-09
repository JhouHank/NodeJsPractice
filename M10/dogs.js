let express = require("express");
let router = express.Router();

router.get('/',function(req, res){
    res.send('這是狗狗頁(路由)');
})
router.get('/about',function(req, res){
    res.send('這是狗狗about頁(路由)');
})

module.exports = router;