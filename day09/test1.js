//실습 1. 함수만들기
// 조건
/*
    매개변수로 두 개의 숫자를 입력받기
    두 인자의 곱을 '반환'하는 함수를 정의
    출력이 아닌 반환하는 함수
    
    // 콘솔창에 입력하고 싶다면 테스트
    console.log(multifly(3,7))
    console.log(multifly(2,2))
*/

const multifly = (num1, num2) => {
    return (num1 * num2);
}

console.log(multifly(3,4));

/* ======================================== */

//실습 2. 함수만들기
// square()함수를 만들어주세요
// 조건
/* 
    매개변수로 하나의 숫자를 입력받기
    입력받은 수의 제곱을 콘솔창에 출력하는 함수 정의

    // 콘솔창에 입력하고 싶다면 테스트
    square(4)
    square(11)
*/

const square = (nums) => {
    console.log(nums ** 2);
}

square(12);

/* ======================================== */

//실습 3. test1.html 파일

/* ======================================== */
//실습 4. if문
/*
let age = prompt("몇살이세요?");

if(age >= 20) {
    console.log('성인입니다.');
}else if(age >= 17) {
    console.log('고등학생입니다');
}else if(age >= 14) {
    console.log('중학생입니다');
}else if(age >= 8) {
    console.log('초등학생입니다')
}else {
    console.log('유아입니다.')
}
*/

/* ======================================== */

//실습 5. if문
// 실습 4에 이어 prompt를 이용해 성별 추가로 받기
// Age와 성별에 따라 “초등 여학생”, “중등 남학생”, “성인 남자“ 등등 출력하기
/*
let age = prompt("몇살이세요?");
let gender = prompt("성별이 어떻게 되세요?")

if(age >= 20) {
    if(gender === "남자") {
        console.log("성인 남자")
    }else {
        console.log("성인 여자");
    }
}else if(age >= 17) {
    if(gender === "남자") {
        console.log("고등학생 남자")
    }else {
        console.log("고등학생 여자");
    }
}else if(age >= 14) {
    if(gender === "남자") {
        console.log("중학생 남자")
    }else {
        console.log("중학생 여자");
    }
}else if(age >= 8) {
    if(gender === "남자") {
        console.log("초등학생 남자")
    }else {
        console.log("초등학생 여자");
    }
}else {
    if(gender === "남자") {
        console.log("남자 유아")
    }else {
        console.log("여자 유아");
    }
}
*/

/* ======================================== */

//실습 6.
let now = new Date().getHours();
now < 12 ? console.log("오전입니다") : console.log("오후입니다");

/* ======================================== */

//실습 7.
for(idx = 13; idx < 1000; idx++) {
    console.log((2*idx)+1);
} 

/* ======================================== */

//실습 8.
// for문을 이용해서 구구단 만들어보기!

/*
for(let a = 2; a < 10; a++) {
    for(let b = 1; b < 10; b++){
        let c = a * b
        console.log(`${a} x ${b} = ${c}`);
        b === 9 ? console.log(`---${a}단---`) : '';
    }
}
*/

//실습 9.
// 정수 n이 있을때 2 또는 3의 배수의 총합을 구하시오.
// 단, n은 0 < n <100
let mulNum = 0;

for(let i = 0; i < 100; i++) {
    if(i % 2 == 0) {
        continue;
    }
    mulNum += i;
}

console.log(mulNum);
