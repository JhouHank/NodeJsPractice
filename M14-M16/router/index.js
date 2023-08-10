var express = require("express");
var db = require('../db')
var { Success, Error } = require('../response')
var  {login_render, login_api } = require('../middleware/login')
var index  = express.Router();

// '/' 當使用者訪問根目錄的時候
index.get('/', function(req, res){
    // 跳轉到有頁數的路由
    res.redirect('/1')
})
// '/數字' 變數代稱 透過正規表達式檢核
index.get('/:page([0-9]+)', function(req, res){
    var page = req.params.page

    // 如果使用者的數字小於零，那我要重新幫他導向到'/1'
    if(page <= 0 ) {
        res.redirect('/1');
        // return
    }
    // 每頁資料數
    var nums_per_page = 10
    // 起始查詢的index值
    var offset = (page - 1) * nums_per_page

    db.exec(`SELECT * FROM inventory LIMIT ${offset}, ${nums_per_page};`, [], function(data, fields) {
        db.exec(`SELECT COUNT(*) AS COUNT FROM inventory`, [], function(nums, fields) {
            var last_page = Math.ceil(nums[0].COUNT / nums_per_page)

            //避免請求超過最大頁數
            if(page > last_page) {
                res.redirect('/'+last_page)
                // return
            }

            res.render('index',{
                data: data,
                curr_page: page,
                // 本頁資料數量
                total_nums: nums[0].COUNT,
                // 總數除以每頁筆數，再無條件取整數
                last_page: last_page
            })
        })
    })
})

index.get('/detail/:id([0-9]+)', login_api, function(req, res){
    var sql = `SELECT * FROM inventory WHERE id = ?;`
    var data = [req.params.id]
    db.exec(sql, data, function(results, fields) {
        if(results[0]){
            res.end(
                JSON.stringify(new Success(results[0]))
            )
        } else {
            res.end(
                JSON.stringify(new Error('no result'))
            )
        }
    })
})

index.get('/add', login_render, function(req, res){
    res.render('add')
})

index.post('/insert', login_api, function(req, res){
    var body = req.body
    var sql = `INSERT INTO inventory(name, phone, address, adult_mask, child_mask) VALUES(?,?,?,?,?);`
    var data = [body.name, body.phone, body.address, parseInt(body.adult_mask), parseInt(body.child_mask)]
    db.exec(sql, data, function(results, fields) {
        if(results.insertId){
            res.end(
                JSON.stringify(new Success('insert success'))
            )
        } else {
            res.end(
                JSON.stringify(new Error('insert failed'))
            )
        }
    })
})

index.post('/update', login_api, function(req, res){
    var body = req.body
    var sql = `UPDATE inventory SET name = ?, phone = ?, address = ?, adult_mask = ?, child_mask = ? WHERE id = ?`;
    var data = [body.name, body.phone, body.address, parseInt(body.adult_mask), parseInt(body.child_mask), parseInt(body.id)]
    db.exec(sql, data, function(results, fields) {
        if(results.affectedRows){
            res.end(
                JSON.stringify(new Success('update success'))
            )
        } else {
            res.end(
                JSON.stringify(new Error('update failed'))
            )
        }
    })
})

index.post('/delete', login_api, function(req, res){
    var body = req.body
    var sql = `DELETE FROM inventory WHERE id = ?;`
    var data = [parseInt(body.id)]
    db.exec(sql, data, function(results, fields) {
        //使用affectedRows，判斷是否有被刪除
        if(results.affectedRows){
            res.end(
                JSON.stringify(new Success('delete success'))
            )
        } else {
            res.end(
                JSON.stringify(new Error('delete failed'))
            )
        }
    })
})

//user
index.get('/login', function(req, res){
    res.render('login')
})
index.post('/login', function(req, res){
    var sql =   `UPDATE user SET updated_at=NOW() WHERE account=? and password=?;
                SELECT * FROM user WHERE account=? and password=?;`
    var data = [req.body.account, req.body.password, req.body.account, req.body.password]
    db.exec(sql, data, function(results, fields) {
        console.log( "a.皮卡丘" );
        console.log("============");
        console.log( results[0] );
        console.log("============");
        console.log( results[1] );
        console.log("============");
        console.log( results[1].length );
        
        // 原本輸入 aa 和 bb 也可以登入
        // => 因為空陣列在if的判斷式會透過ToBoolean轉成Truthy值，也就是True
        // 所以必須要針對原本的if進行修改
        // => 採取的方向是：如果select回來的結果有一筆資料，才算登入成功
        if(results[1].length == 1) {
            req.session.user = {
                id: results[1].id,
                account: results[1].account,
                rights: results[1].rights,
                updated_at: results[1].updated_at
            }
            res.end(
                JSON.stringify(new Success('login success'))
            )
        } else {
            res.end(
                JSON.stringify(new Error('login failed'))
            )
        }
    })
})

// 這個路由匯出以後，是app.js使用
module.exports = index;

