/**
 * Created by admin on 2015-08-11.
 */

    var express = require("express"),
        router = express.Router();

    router.get("/",function(req,res){ // "/"는 /product임  상대경로를 가리킴
        res.write("<h1>상품페이지 입니다.</h1>");
        res.end();
    });
    router.get("/notebook",function(req,res){ // "/notebook"는 /product/notebook임  상대경로를 가리킴
        res.write("<h1>노트북페이지 입니다.</h1>");
        res.end();
    });

    module.exports = router;