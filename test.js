/**
 * Created by admin on 2015-08-11.
 */

    // 1. 프로그램에서 사용할 module을 require
    // 2. 만약 외부 module이나 내부 module을 이용할 때는 그냥 module의 이름만 적음
    // 만약 내가 파일을 만들었을 때 이 module파일을 이용하기 위해서는 폴더 위치를 명시
    var obj= require("./testModule");
    // require("testModule") 이름만 쓰면 node_modules라는 폴더 내에서 찾음
    // 해석 1 .node_modules라는 폴더내에서 testModule.js를 찾아서 실행시켜서 객체를 받아옴
    // 해석 2. node_modules라는 폴더 내에서 testModule라는 폴더를 찾고 그 폴더내의 index.js를 실행시켜 결과를 받아옴
    // global object 중에 process라는 object가 존재 - 현재 node process에 대한 정보를 담고 있는 객체
    console.log(process.cwd()); // process가 작업중인 디렉터리 경로
    console.log(obj.test1);
    console.log(obj.test2);
    console.log(obj.myInfo());

