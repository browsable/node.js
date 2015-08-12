/**
 * Created by admin on 2015-08-12.
 */

 // 1. 필요한 module require
    var http = require("http"),
        express = require("express"),
        app = express(),
        path = require("path"),
        bodyParser = require("body-parser");
 // 2. routing module require
    var routes = require("./routes/param");

 // 3. view setting
    app.set("views", path.join(__dirname,"views"));
    app.set("view engine", "ejs");

 // 4. express 설정
    app.use(bodyParser()); // express에 body parser를 적용시킴 - form 태그(post)이용가능해짐
    app.use("/",routes);

 // 5. 서버 생성 후 기동
    http.createServer(app).listen(5000,"localhost");
    console.log("서버기동 - 5000");
