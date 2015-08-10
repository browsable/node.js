
// 1.필요한 module을 우리 프로그램으로 불러들여야함 require("모듈명")
// 2. 내장 모듈인 http을 사용해서 변수를 생성
  var http = require("http");

 // 웹서버 생성 후 서비스 기동
 // 웹서버 기동 후 클라이언트가 접속하면 처리를 해야함
 // 클라이언트가 request를 보내면 그에 상응하는 처리를 한 후 결과를 이용해서 response를 보냄
 // http.createServer(???) - 함수를 이용해서 request처리
 // 해당 함수에 request에 대한 객체와 response에 대한 객체를 같이 전달해야함
  http.createServer(function (req,res) {
        // 1. req객체를 이용해서 클라이언ㅌ가 보내준 데이터를 받음
        // 2. 보내준 데이터로 로직처리(DB처리 포함)
        // 3. 처리된 결과를 다시 클라이언트에게 res객체를 통해서 보내줌

       // 지금은 결과처리만 test해보자 - 특정 문자열을 클라이언트에게 전송하는 프로그램을 만든다
       // 데이터를 보내기 전에 http header부터 보내야 함
       res.writeHeader(200, {
           "Content-Type"  : "text/html; charset=utf8"
       }); // 200 : 요청성공, 404 : Not Found 등등
      res.write("<h1>이것은 소리없는 아우성</h1>");
      res.end();
  }).listen(5000, "localhost"); // port number, ip
  console.log("서버기동 - 5000");