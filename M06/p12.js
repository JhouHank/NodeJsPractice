let express = require('express');
let app = express();

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('p12_test', {
        // 這裡有討論 空白 跟 # 的差異
        title: '小傑',
        items: ['胖丁', '小叮噹', '蠟筆小新', '小傑']
    });
});


app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});