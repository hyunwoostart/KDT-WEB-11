//실습1
/*
const multifly = (num1, num2) => {
    return num1 * num2
}

console.log(multifly(3,5));
*/

//실습2
/*
const square = (num) => {
    return num ** 2
}

console.log(square(5));
*/

//실습3

let num1 = Number(prompt('첫번째 숫자를 입력해주세요'));
let num2 = Number(prompt('두번째 숫자를 입력해주세요'));

const add = () => {
    alert(num1 + num2);
}

const sub = () => {
    alert(num1 - num2);
}

const mul = (num1, num2) => {
    alert(num1 * num2);
}

const divide = (num1, num2) => {
    alert(num1 / num2);
}


//실습4
/*
let age = Number(prompt('숫자를 입력해주세요'));

if(age >= 20) {
    console.log('성인');
} else if(age >= 17) {
    console.log('고등학생');
} else if(age >= 14) {
    console.log('중학생');
} else if(age >= 8) {
    console.log('초등학생');
} else {
    console.log('유아')
}
*/

//실습5
/* 
let age = Number(prompt('숫자를 입력해주세요'));
let gender = prompt('성별이 어떻게 되세요? 남자/여자')

if(age >= 20) {
    if(gender === "남자") {
        console.log('남자 성인');
    } else {
        console.log('여자 성인')
    }
} else if(age >= 17) {
    if(gender === "남자") {
        console.log('남자 고등학생');
    } else {
        console.log('여자 고등학생')
    }
} else if(age >= 14) {
    if(gender === "남자") {
        console.log('남자 중학생');
    } else {
        console.log('여자 중학생')
    }
} else if(age >= 8) {
    if(gender === "남자") {
        console.log('남자 초등학생');
    } else {
        console.log('여자 초등학생')
    }
} else {
    if(gender === "남자") {
        console.log('남자 유아');
    } else {
        console.log('여자 유아')
    }
}
*/

//실습6
/*
let now = new Date().getHours();
now < 12 ? console.log('오전입니다') : console.log('오후입니다');
*/

//실습7
/*
for(i = 1; i < 1000; i++) {
    if(i % 13 == 0 && i % 2 !== 0) {
        console.log(i);
    }
}
*/
//실습7 - 추가 prompt 명령어 받기
/* 
let numInput = Number(prompt('숫자를 입력해주세요'));

for(i = 1; i < numInput; i++) {
    if(i % 13 == 0 && i % 2 !== 0) {
        console.log(i);
    }
}
*/

//실습8
/*
for(dan = 2; dan < 10; dan++) {
    console.log(`---${dan}단---`);
    for(i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}
*/

//실습9
/*
let n = 0;
let sum = 0;

while(n < 100) {
    if(n % 2 != 0 || n % 3 != 0) {
        sum += n;
    }
    n++;
}
console.log(sum);
*/

//실습9 - 강의
/* 
let num = 100;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
*/

// 실습1
// 1 ~ 100까지의 배열을 for문을 사용해서 만들기!
// 그리고 해당 배열의 합을 for, for of, for Each 문으로 사용해서 구하기

let array = []
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

// for 문
for(let i = 0; i < 100; i++) {
    array.push(i+1);
    sum1 += array[i];
}

// for of 문
for (let arr of array) {
    sum2 += arr;
}

// forEach 문
array.forEach((arr) => {
    sum3 += arr;
});

console.log(sum1, sum2, sum3);
console.log(array);

// 실습2
// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지","파인애플", "망고"];

// 방법1
/*
let same = [];
let diff = [];

fruits1.forEach((fruits) => {
    if(fruits2.includes(fruits)) {
        same.push(fruits);
    }
});

fruits1.forEach((fruits) => {
    if(!fruits2.includes(fruits)) {
        diff.push(fruits);
    }
})

console.log(same);
console.log(diff);
*/

// 방법2
/*
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지","파인애플", "망고"];

let same = fruits1.filter((fruits) => fruits2.includes(fruits));
let diff = fruits1.filter(fruits => !fruits2.includes(fruits));

console.log(same);
console.log(diff);
*/
