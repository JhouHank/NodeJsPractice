let express = require("express");
let app = express();

// p14
let multer = require("multer");
// p19 - 設定使用者上傳的資料夾和檔案名稱
let myStorage = multer.diskStorage({
    destination: function(req, file, cb){
    // 資料夾要自己創建，依照小組的規劃進行命名和安排
        cb(null, "upload1213"); 
    },
    filename: function(req, file, cb){
        // Date.now()回傳數字，但不是我們想的20230808
        // =>請把滑鼠懸浮到now()身上，觀察vscode給的描述
        cb(null , Date.now() + '-' + file.originalname);
    }
});
let apple = multer({
    storage:myStorage,
    // p21 - 增加過濾檔案類型 - 開始
    fileFilter: function(req, file, cb){
        // 請根據需要的情況撰寫判斷條件
        // => 教學PDF判斷的是使用者必須給gif檔案
        // => 如果使用者沒給gif就給錯誤訊息
        if(file.mimetype != 'image/gif'){
            return cb(new Error('貓貓 錯誤的檔案格式'))
        }
        cb(null, true);
    }
    // p21 - 增加過濾檔案類型 - 結束
}); 
// p19 - 設定使用者上傳的資料夾和檔案名稱

// p14設置檔案存放的路徑
// let apple = multer({dest:'upload4564/'}); 
// p14設置檔案存放的路徑


app.post('/cat', apple.single("myfile"), function(req,res){

    // p18 - 觀察檔案的資料
    let file = req.file;
    console.log('檔案類型：' + file.mimetype);
    console.log('原始檔名：' + file.originalname);
    console.log('檔案大小：' + file.size);
    console.log('檔案存放路徑：' + file.path);
    // p18
    
    res.send('成功33');
});
// p14

app.get('/' , function(req,res){
    res.sendFile(__dirname + '/p14.html');
});

app.listen(2407, function () {
    console.log('原神！啟動！時間：' + new Date().toLocaleTimeString())
});