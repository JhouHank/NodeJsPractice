let express = require('express');
let app = express();

app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('p10_test',{
        // 這裡有討論-號跟=號的差異
        title:'<i>皮卡丘</i>',
        description:'胖丁'
    });
});


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});