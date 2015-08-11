/**
 * Created by admin on 2015-08-11.
 */
    // 1. 필요한 module require

    //express를 사용하지 않은 경우

    var http = require("http");
    http.createServer(function(req,res){
        // 1. request path를 알아내요
        var path = req.url; // 사용자 요청경로
        res.writeHeader(200, {
            "Content-Type" : "text/html; charset=utf8"
        });
        if(path=="/"){
            res.write("<h1>환영합니다.</h1>");
        }else if(path=="/intro"){
            res.write("<h1>회사페이지입니다.</h1>");
        }else if(path=="/product"){
            res.write("<h1>상품페이지입니다.</h1>");
        }else if(path=="/product/notebook"){
            res.write("<h1>노트북페이지입니다.</h1>");
        }else{
            res.write("<h1>존재하지 않는 페이지입니다.</h1>");
        }
        res.end();
    }).listen(5000, "localhost");
    console.log("서버기동 - 5000");