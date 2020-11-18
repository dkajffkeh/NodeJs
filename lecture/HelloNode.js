'use strict'

function run(){

 console.log("3초후 실행");

}
//시작과 끝은 Stack 영역에 쌓이지만 setTimeout 은 run 을
//Task Queue 로 이전시켜버림

/*
When ?? setTimeOut, setInterval  setImmediate 
Promise resolve reject 등등이 주로 테스크 큐로 이전됨.
테스크 큐에는 여러줄이 있지만 그 우선순위는 변경또한 가능(인위적으로).

*/
console.log("시작");
setTimeout(run,3000);
console.log("끝")


var sayNode = function(){
console.log("Node");
}
//==== 함수가 es6 에선 어떻게 변해왔나 =====//
let es = 'ES';
const newObject = {

sayJS(){
    console.log("JS");
},
sayNode,
[es+6]:'Fantastic'
};

// ArrowFunction


const add3 = (x,y) => x+y;
console.log(add3(5,6));

//Distructuring
 
//rest문법

const array = ['nodejs' , {} , 10 , true];
const [node,obj,...bool] = array;


//callBack async Promise
const plus = new Promise((resolve,reject) => {
const a = 1;
const b = 2;

if(a+b<2){
    resolve( a + b );
} else {
    reject( a + b );
}
});

plus
    .then((success)=>{
        console.log(success);
    })
    .catch((fail)=>{
        console.error(fail);
    })

 
