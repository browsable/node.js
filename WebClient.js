/**
 * Created by admin on 2015-08-11.
 */
    // 1. 필요한 module을 require
    var http = require("http");

    //접속정보를 표현하기 위한 객체를 하나 생성
    //http://localhost:5000/
    var options = {
        host : "localhost",
        port : 5000,
        method : "GET",
        path : "/"
    }


    var req = http.request(options, function (res){
        console.log("상태코드 : " + res.statusCode);
        console.log(res.headers);
        //서버가 보내준 데이터를 받아야 함
        res.setEncoding("utf8");
        //서버와 클라이언트간의 data 전송이 끝나면 data event가 발생하게 됨
        res.on("data", function(result){
            console.log(result);
        });
    });

    //실제 요청을 보냄
    req.end();
