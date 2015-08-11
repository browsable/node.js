/**
 * Created by admin on 2015-08-11.
 */
// 1. 필요한 module require
// router를 만들러 옴
var express = require("express");

//express의 기능중 routing을 담당하는 것
router = express.Router();

router.get("/", function (req, res) {
    res.write("<h1>환영합니다.</h1>");
    res.end();
});
router.get("/intro", function (req, res) {
    res.write("<h1>회사 홈페이지입니다.</h1>");
    res.end();
});

//라우팅 관련 객체를 리턴
module.exports = router;