// 실습2
const meInfo = {
    name: "지현우",
    mbti: "isfp",
    city: "서울",
}

console.log(`안녕하세요 저는 ${meInfo.name}라고 합니다. 제 mbti는 ${meInfo.mbti}이고, 현재 ${meInfo.city}에 살고 있습니다`);

// 실습3
console.log(`${typeof 3} isn't ${typeof "하하하"} data type.
Typeof를 boolean 이나 null에 사용하면, ${typeof {}} 결과를 얻을 수 있습니다.`);


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