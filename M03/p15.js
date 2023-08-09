let http = require('http');

let server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Node.js123');
    res.end('Hello World');
});

server.listen(80);
console.log("測試p15");