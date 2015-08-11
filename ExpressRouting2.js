/**
 * Created by admin on 2015-08-11.
 */
    // 1. 필요한 module require

    // express를 사용하지 않은 경우

    var http = require("http"),
        express = require("express"),
        app = express(); // app을 이용해서 사용자의 요청 처리

    // 2. 사용자의 request path를 처리하는 router module을 require
    var routes = require("./routes");
    var product  = require("./routes/product");

    app.use("*",function(req,res,next){
        res.writeHeader(200, {
            "Content-Type": "text/html; charset=utf8"
        }); //여기까지만 하면 여기서 request처리가 끝나버림
        next(); //request를 지속적으로 처리하라 -> 밑의 app.use()처리로 넘어감
    });
    app.use("/",routes); // 사용자 경로가 /로 시작하면 routes로 가라  localhost:5000/ 경로로 들어온 request 모두 다 거침
    app.use("/product",product);
    // 모든 처리는 express(app)를 이용해서 처리

    //index.js에서 걸러지지 않은 임의의 사이트들은 request처리가 끝나지않은 상태 . 이곳으로 넘어옴
    app.use("*",function(req,res){
        res.write("<h1>페이지가 존재하지 않음</h1>");
        res.end;
    });

    // express의 사용자 요청 처리 기능을 이용하여 클라이언트의 request를 처리
    http.createServer(app).listen(5000,"localhost");


    console.log("서버기동 - 5000");