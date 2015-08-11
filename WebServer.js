/**
 * Created by admin on 2015-08-11.
 */

    // 1. 필요한 module require
    // 웹서버를 만들기 위해 필요한 module은 http 내장 module
    var http = require("http");

    http.createServer(function(req,res){
        //클라이언트의 request를 분석해서 사용자가 보내준 데이터를 받고 로직처리하고
        //클라이언트에게 response를 이용해서 결과를 돌려줌
        //클라이언트에게 결과 돌려주는 부분만 처리
        //http라는 프로토콜에 맞춰서 처리
        res.writeHeader(200, { // 상태코드 200
            "Content-Type": "text/html; charset=utf8"
        });
        res.write("서버가 전달하는 메시지");
        res.write("이것은 소리없는 아우성");
        res.write("서버가 전달하는 메시지");
        res.write("메시지 전달 끝");
        res.end();//응답 종료!!
    }).listen(5000, "localhost");
    console.log("서버실행 - 5000");