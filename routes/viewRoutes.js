/**
 * Created by admin on 2015-08-11.
 */
// require할때마다 무조건 실행되는 것 아님 메모리에 express 이미 실행되고 있다믄 그 객체를 그대로 가져와서 사용함
var express = require("express"),
    router=express.Router();

    //get, post 방식에 따라 method 선택
    router.get("/", function(req,res){
        res.render("index",{
            msg : "홍길동"
        });
    });

    module.exports = router;