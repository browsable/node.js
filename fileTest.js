/**
 * Created by admin on 2015-08-11.
 */
    // 1. 필요한 module require
    var fs = require("fs");

    // 비동기 방식으로 파일 read
    // 파일 내용을 다 읽어올 때까지 프로그램이 block되지 않음
    fs.readFile("data.txt","utf8",function(err, data){
        if(err){
            console.log("파일 읽기 실패");
        }else{
            console.log("비동기로 읽은 내용은 : " + data);
        }
    });

    // 동기 방식으로 파일 read
    var data = fs.readFileSync("data.txt","utf8");
    console.log("동기로 읽은 내용은 : " + data);
