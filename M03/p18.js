var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type' : 'text/html ; charset=UTF-8'
    });
    // 亂碼 => 編碼 => utf-8
    res.write('皮卡丘1');
    res.write('皮卡丘2');
    // end之後服務就終止了，所以要記得寫在最後
    res.end('Hello Cat');
}).listen(2407);

console.log("測試p18");