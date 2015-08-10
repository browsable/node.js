
    // 1. 사용할 module require
    var circleM = require("./circleModule"); // require하면 circleModule의 javascript 코드 실행 후  module.exports를 리턴받아옴

    console.log("프로그램 시작");
    var area = circleM.calc(5);

    console.log("반지름 5인 원의 넓이는 : " + area);
    console.log("이름 : " + circleM.myName);

