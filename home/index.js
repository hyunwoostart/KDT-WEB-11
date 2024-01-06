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
