// 함수
// 함수 선언문 (기본적인 형태)
// function sayHello(){
//     console.log('지역 hello');
// };
// console.log("전역 hello")
// sayHello();

/*
// 함수선언문
// 덧셈 기능이 있는 함수를 선언
sumFunc(15, 10); // 호이스팅
const num1 = 10; //전역변수
function sumFunc(num2, num3) { // num2, num3는 매개변수 ()안에 변수들을 매개변수
    const num1 = 11;
    const sum = num1 + num2 + num3;
    // console.log("지역",num1);
    console.log("결과",sum);
    // return 함수 제일 마지막에 사용, 값을 다시 전달
    return sum;
}
// console.log("전역", num1);
sumFunc(65, 10); // ()안에 값은 인자
let result = sumFunc(30,20);
// let result = 61;
console.log(result);
*/

// 함수표현식
// let sayHello = function(num) {
//     console.log(num);
//     console.log("Hello");
// }
// sayHello(20);

let multifly = (num1, num2) => {
    const nums = num1 * num2
    return nums;
}

console.log(multifly(3,7));

let square = (num3) => {
    const nums = num3 ** 2;
    console.log(nums);
}
square(8);

