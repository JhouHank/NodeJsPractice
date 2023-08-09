let express = require('express');
let dog = express.Router();

dog.get('/',function(req,res){
    res.send('<h1>這是product頁</h1>');
})

dog.get('/detail',function(req,res){
    res.send('<h1>這是detail頁</h1>');
})

module.exports = dog;