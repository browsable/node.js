/**
 * Created by admin on 2015-08-11.
 */

    // 1. 필요한 module require
    // event 처리를 하려면 events라는 module이 필요
    // event.EventEmitter 함수를 상속
    var events = require("events"),
        util = require("util"); // 상속처리를 쉽게 하기 위해서 util module을 이용

    // 객체를 생성하기 위해서 함수 작성
    function Car() {
        this.name = "sonata";
    }

    //상속처리
    util.inherits(Car,events.EventEmitter);

    //객체를 생성. 해당객체는 이벤트를 등록하고 처리할 수 있는 객체
    var car = new Car();

    //이벤트를 발생시키기전에 이벤트를 등록\
    //이벤트를 등록할 때는 on 함수를 이용
    car.on("CAR FORWARD", function(){
        //이벤트 처리 함수
        console.log("자동차가 전진해요!!");
    });

    car.on("CAR STOP", function(){
        //이벤트 처리 함수
        console.log("자동차가 멈춰요!!");
    });

    //event를 임의로 발생 시킴
    car.emit("CAR FORWARD");

