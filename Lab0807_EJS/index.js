let express = require('express');
let app = express();

app.use('/',express.static('css'));
app.set('views', './abc'); //更改預設觀看的資料夾名稱
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home', {
        title: '小傑',
        test: "<h1>123</h1>",
        test2: function(){
            console.log(123);
        },
        test3: 789,
        items: ['胖丁', '小叮噹', '蠟筆小新', '小傑']
    });
});




app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});