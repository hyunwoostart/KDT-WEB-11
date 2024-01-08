// 문자열 관련 메소드

let str = 'Happy day~! ';

/*
length: 문자열의 길이를 반환(공백포함)
str.length 

str.toUpperCase() // 문자열 전체를 대문자
str.toLowerCase() // 문자열 전체를 소문자

indexOf('') // 매개변수로 문자열을 받아서 몇번째 인덱스인지 숫자 반환
str.indexOf('p')

str.slice(5, 9)

replace(문자열1, 문자열2)
str.replace('p', 'a') 문자열 1을 문자열 2로 변경

replaceAll(문자열1, 문자열2)
str.replaceAll('p', 'a') 문자열 1을 찾아서 모두 문자열2로 바꿔줌

repeat(n): 문자열에 대해 n번 반복
str.repeat(3)

trim(): 문자열의 양끝 공백 없애기
str.trim()

split(): 매개변수로 들어온 문자열을 기준으로 str을 쪼개서 배열로 저장
str.split('')
str.split(' ')
*/

// 문자열 관련 메소드

/*
push(): 배열 끝에 추가
let days = ['월', '화', '수']
days.push('목');
console.log(days);


pop(): 배열 끝 요소 제거
let days = ['월', '화', '수']
days.pop()
console.log(days);
*/

/* 
shift, unshift 배열 앞에 제거/추가
추가
days.unshift('일');
console.log(days);

제거
days.shift();
console.log(days);
*/

// 배열함수, includes
// 해당 배열에 저장한 요소가 있는지 확인하는 메소드
// [].includes(요소);

/*
let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.includes(3));
console.log(numbers.includes(7));

const words = ['spray', 'limit', 'elite', 'excberant', 'destruction', 'present'];

console.log(words.includes('football'));
console.log(words.includes('elite'));
*/

// 추가적인 배열관련 method
/*
arr.length : 배열의 길이 반환
arr.indexOf() : 문자열에서의 indexOf()와 마찬가지로 매개변수에 해당하는 배열의 인덱스를 받아옴, 단 배개변수로 문자열만 넣을 수 있는 것은 아님!
arr.reverse() : 배열 순서 뒤집어서 반환
arr.join() : join 안의 문자열 기준으로 문자열로 병합
*/

// 메소드 체이닝
/*
- 각각의 메소드를 연결해서 사용하는 개념
- 단, 사용한 메소드가 반환(return)값을 가지고 있는 경우에만 사용 가능
- 'hello'.split('') -> ['h', 'e', 'l', 'l', 'o']
- 배열에는 revese()라는 메소드가 존재
- 'hello'.split('').reverse()는 ['h', 'e', 'l', 'l', 'o'].reverse() 와 동일한 것!
- ['h', 'e', 'l', 'l', 'o'].reverse() -> [‘o’,’l’,’l’,’e’,’h’] 와 동일
- ‘hello’.split(““).reverse().join(“”) → [‘o’,’l’,’l’,’e’,’h’].join(“”) 과 동일
*/

// 배열에서의 for
/*
// 배열, 기본 for문 사용하기
let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ['사과', '바나나', '수박', '포도', '파인애플'];

let numbersLength = numbers.length;
let fruitsLength = fruits.length;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let number of numbers) {
    console.log(number);
}

for (let fruit of fruits) {
    console.log(fruit);
}
*/

// 배열, [].forEach
/*
let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ['사과', '바나나', '수박', '포도', '파인애플'];


numbers.forEach((number, index, array) => {
    console.log(number, index, array);
}) 


fruits.forEach((fruit, i, array) => {
    console.log((fruit, i, array));
})
*/

// 배열의 합
/*
let numbers = [1, 2, 3, 4, 5, 6];
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum1 = sum1 + numbers[i];
}

for (let num of numbers) {
    sum2 = sum2 + num;
}

numbers.forEach((num) => {
    sum3 = sum3 + num;
})

console.log(sum1, sum2, sum3);
*/

/*
let numbers = [1, 2, 3, 4, 5, 6];
let arr;

arr = numbers.filter(function(num) {
    return num > 3;
})

console.log(arr);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
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
// 두 배열에서 동일한 요소만을 가지는 배열 same 만들기
// 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기


let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '참외', '오렌지', '파인애플', '망고'];

const result = (fruits1, fruits2) => {
    return fruits1.filter(fruit => fruits2.includes(fruit));
}
const result2 = (fruits1, fruits2) => { 
    return fruits1.filter(fruit => !fruits2.includes(fruit));
}

let same = result(fruits1, fruits2);
let diff = result2(fruits1, fruits2);

console.log(same);
console.log(diff);