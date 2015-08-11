/**
 * Created by admin on 2015-08-11.
 */
    // 1. 필요한 module require
    var http = require("http"),
        express = require("express"), // 우선 실행되면 메모리에 올림
        app = express(), // app을 이용해서 사용자의 요청 처리
        path = require("path");
        //view를 처리하는 ejs는 require할 필요 없음 express에서 설정으로 가져올 수 있음

    // 2. routing module require
    var routes = require("./routes/viewRoutes");

    // 3. view setting
    // view 파일들이 모여있는 경로를 express에게 알려줌
    app.set("views",path.join(__dirname,"views"));
    //현재 working폴더 밑에 views라는 폴더를 만들어서 html 파일들 관리
    //view engine으로 어떤 걸 사용할 지 express에게 알려줌
    app.set("view engine", "ejs");

    // 4. express에 routing module 적용
    app.use("/",routes);

    // 5. 서버 생성 후 기동
    http.createServer(app).listen(5000, "localhost");
    console.log("서버기동 - 5000");