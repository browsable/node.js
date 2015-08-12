/**
 * Created by admin on 2015-08-12.
 */
    // 1. 필요한 모듈 require
    var mysql = require("mysql");

    // 2. 접속정보를 가지고 있는 객체를 생성
    var option = {
        host : "localhost",
        port : 3306,
        user : "nodejs",
        password : "nodejs",
        database : "library"
    };
   var conn = mysql.createConnection(option);

    //DB 접속
    conn.connect();

    //DB 질의
    //ResultSet rs = conn.query("select * from books"); 와 같은 동기 방식이 아님 비동기식으로 처리해줌

    conn.query("select * from books", function(err, result, field){
        console.log(err);
        console.log(result); // query의 결과인 result는 javascript 객체형태로 반환됨 (편하다)
        console.log(field);
        //자원 해제
        conn.end();
    });
