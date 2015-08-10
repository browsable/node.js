
//(function(exports,require,module,__filename,__dirname){
//exports는 module.exports의 reference module.exports = exports;와 같음
// 이 모듈은 return 되는 게 module.exports가 리턴됨

    var PI = Math.PI;
    var name = "홍길동";
    console.log("이거 실행되나?");

    function calcArea(input) {
        return input*input*PI;
    }

    //module.exports.calc = calcArea;
    //module.exports.myName = name;
    exports.calc = calcArea;
    exports.myName = name;
    //module.exports = calcArea로 넘기면 함수 자체가 넘어감 사용할때는 circleM = require후 함수처름 circleM을 씀 : circleM(5)
    //exports.calc = calcArea; 이렇게 써도 됨
//})();