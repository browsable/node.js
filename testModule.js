/**
 * Created by admin on 2015-08-11.
 */

    //1. 필요한 module require

    var test1 = 100;
    var test2 = 200;

    // module 사용시 실제로 return 되는 객체는
    // module.exports 객체
    // 기본적으로 빈 객체
    exports.test1 = test1;
    exports.test2 = test2;
    exports.myInfo = function (){
        return "Hello!";
    }
    //module.exports = "HI !!!";