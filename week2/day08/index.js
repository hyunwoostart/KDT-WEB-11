// 실습2
// const meInfo = {
//     name: "지현우",
//     mbti: "isfp",
//     city: "서울",
//     study: function () {
//         return 'js';
//     },
// };

// console.log(`안녕하세요 저는 ${meInfo.name}라고 합니다. 제 mbti는 ${meInfo.mbti}이고, 현재 ${meInfo.city}에 살고 있습니다`);
// console.log(meInfo.study());

// 실습3
// console.log(`${typeof 3} isn't ${typeof "하하하"} data type.
// Typeof를 boolean 이나 null에 사용하면, ${typeof null} 결과를 얻을 수 있습니다.`);


// 실습 준비
/* 
let mathScore = prompt("수학 점수를 입력 하세요");
let engScore = prompt("영어 점수를 입력 하세요");

let avg = (mathScore + engScore) / 2;

console.log(avg);


let num = 123;

let a = String(num);
console.log(typeof a);

let b = num.toString();
console.log(typeof b);
*/

// 실습4
let mathScore = "77";
let engScore = "88";

let avg = (Number(mathScore) + Number(engScore)) / 2;

console.log(avg);

// 형변환: 데이터의 타입을 변환시켜주는 것
// let mathScore = prompt('수학 점수를 입력하세요');
// let engScore = prompt('영어 점수를 입력하세요');

// let avg = (Number(mathScore) + Number(engScore)) / 2;

// console.log(avg);

// 연산자
let num = 5;
num += 10; // num + 10;
console.log(num);

let result1, result2;
let nums = 10, nums2 = 15;

result2 = ++nums2; // 10
result2 = ++nums2; // 11

console.log(result2);

// 논리 연산자
// || or 연산자는 둘중 하나만 조건이 일치해도 통과
// && and 연산자는 두개 모두 조건이 일치해야 통과
// ! not연산자는 반대
let name = "뽀로로"
let age = 18;
let isAdult = age > 19; // false

if( name === "뽀로로" || age >= 19) {
    console.log('통과');
} else {
    console.log('돌아가');
}

if(!isAdult) { //isAdult가 false냐?
    console.log('돌아가');
} else {  
    console.log('통과');
}

