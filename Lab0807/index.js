let express = require("express");
let app = express();

// ↓　請在這裡引用靜態檔案
// 如果寫成下面這樣這樣，assets底下的所有資料都可以使用，但「資料夾的路徑」在使用時也要加進去
// 我的圖片路徑是 lab0807/assets/images/find.png
// 在html要使用圖片時，href就要寫成 http://localhost:2407/images/find.png  
// ("http://localhost:2407/"可以省略)
app.use(express.static('assets'));
// app.use('/',express.static('assets')); // 這樣寫是跟上面一樣意思


// 如果寫成下面這樣這樣，assets底下的所有資料都可以使用，但「資料夾的路徑」在使用時就會加一層在前面，
// 我的圖片路徑是 lab0807/assets/images/find.png
// 在html要使用圖片時，href就要寫成 http://localhost:2407/no123/images/find.png  (一樣可省略"http://localhost:2407/")
// app.use('/no123',express.static('assets'));
// ↑　請在這裡引用靜態檔案

// 如果要引用特定資料夾到根目錄上，可以這樣寫
// app.use('/',express.static('assets/images')); 
// 我的圖片路徑是 lab0807/assets/images/find.png
// 在html要使用圖片時，href就要寫成 http://localhost:2407/find.png  (一樣可省略"http://localhost:2407/")

app.get('/', function (req, res) {
    // 把index.html當作回應
    // __dirname是一個全域變數，用於表示目前執行的 JavaScript 檔案所在的目錄的絕對路徑
    // 在lab0807資料夾中，__dirname就代表 lab0807
    res.sendFile(__dirname + '/index.html');
    // res.sendFile(`${__dirname}/assets/js/index123.html`); //所以寫成這樣是可以吃的到的
})

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});