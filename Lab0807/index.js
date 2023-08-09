let express = require("express");
let app = express();

// ↓　請在這裡引用靜態檔案
// app.use(express.static('assets'))
app.use('/',express.static('assets'))
app.use('/css',express.static('css'))
app.use('/js',express.static('js'))
// ↑　請在這裡引用靜態檔案

app.get('/', function (req, res) {
    // 把index.html當作回應
    res.sendFile(__dirname + '/index.html');
})

app.listen(2407, function () {
    console.log('啟動中: ' + new Date().toLocaleTimeString())
});