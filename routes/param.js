/**
 * Created by admin on 2015-08-12.
 */
    //routing module
    var express = require("express"),
        router = express.Router();

        //동적url 바인딩
        /*// /뒤의 문자를 변수로 잡음
         router.get("/",function(req,res){
         res.render("param",{
         name : ""
         }); //param.ejs
         });

        router.get("/:userName", function(req,res){
            var uName = req.params.userName; //URL이 http://localhost:5000/홍길동 이라면 홍길동을 가져옴
            res.render("param",{
                name : uName
            })
        });*/
        /*//Query String
        router.get("/",function(req,res){
            var name = req.query.myName;
            res.render("param",{
                name : name
            }); //param.ejs
        });*/

        router.get("/",function(req,res){
            res.sendFile("login.html",{
                root : "./"
            });
        })
        //Form tag Post 방식으로 전달
        router.post("/",function(req,res){
            //html form으로부터 데이터를 받음
            //body-parser라는 module을 이용해야 편하게 받을 수 있음
            var id = req.body.uID;
            var pw = req.body.uPW;
            if(id=="test" && pw=="1234"){
                res.render("loginSuccess")
            }else{
                res.render("loginFail");
            }
        });

    module.exports = router;

