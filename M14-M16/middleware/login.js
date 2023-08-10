var { Error } = require('../response')
var login_render = function (req, res, next) {
    if(req.session.user) { // 檢查登入狀態
        next(); // 如果有登入，執行(下一個)函式
    } else {
        res.redirect('/login'); // 如果沒登入，轉到登入頁
    }
}
var login_api = function (req, res, next) {
    if(req.session.user) {
        next();
    } else {
        res.end(
            JSON.stringify(new Error('permission denied'))
        )
    }
}

module.exports = {
    login_render,
    login_api
}