// var
/*
var name = "홍길동";
var name = "나비"
var age; // 값이 할당되지 않을때는 undefined 가 할당
age = 20; // 값을 할당 가능
console.log(age);
age = 10;
console.log(age);
*/

// let
/*
let name = "홍길동"
//let name = "나비" // 중복 선언 불가
console.log(name);
name = "성춘향";
console.log(name);
*/

/* 
// const 
const user = {name: '지현우'}

user.name = '이가인';
user.hobby = '축구';

console.log(user);
*/

// 데이터 타입
let myName = "홍길동";
var email = 'gildong@naver.com';
let city = '서울';
console.log(myName, email, city);
console.log("안녕하세요 " + myName + " 입니다.");
console.log(`안녕하세요 ${email} 입니다.`);

// Number
let number = 123;
console.log(number);

//Boolean
const checked = true;
const isShow = false;
console.log(checked, isShow);

// undefined
// 미할당 데이터
let noData;
console.log(noData);

//Null
//의도적으로 비어있음을 의미할때
let empty = null;
console.log(empty);

// Array(배열)
let colors = ['red', 'orange', 'yellow', 'green'];
console.log(colors[0], colors[1]);
console.log(colors.length); // 배열의 길이
colors.push('blue'); // 배열추가 (맨뒤)
colors.unshift('navy') // 배열추가 (맨앞)
colors.pop(); // 배열제거 (맨뒤)
colors.shift(); // 배열제거 (맨앞)
console.log(colors.indexOf('yellow'));// index값 찾기, 없을 땐 -1
console.log(colors.includes('green')) // 값존재유무, 존재시 true / 없을 땐 false
console.log(colors.reverse()); // 배열 반전 reverser();
console.log(colors);


let bestColor = ['red', 'black', 'yellow', 'green', 'blue', 'navy', 'purple'];
console.log(bestColor[2]);

bestColor.push('white'),
console.log(bestColor);

console.log(bestColor.indexOf('black'));

console.log(bestColor.reverse());



