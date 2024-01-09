// let numbers = [1, 2, 3, 4, 5, 6];
// let colors = ['빨', '주', '노', '초', '파', '남', '보'];

// 기본 for문
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// for of문
// for ( {}안에서 사용할 변수 of 배열 )
// for (let number of numbers) {
//     console.log(number);
// }

// for (let color of colors) {
//     console.log(color);
// }

// forEach()문
// 변수명.forEach
// numbers.forEach(function() {

// }) 
// numbers.forEach((number, i, arr) => {
//     console.log(number, i, arr);
// })

/*
colors.forEach((color, idx) => {
    console.log(color, idx);
})

//for in문
let colors2 = [
    {color:'red'}, 
    {color:'blue'}, 
    {color:'yellow'}
]
// 보통 객체(키-값)에 주로 사용.
// for ( {}안에 사용할 키값 of 배열 ) {}
for ( let index in colors ) {
    // console.log(index);
    console.log(colors[index]);
    // // console.log(colors2[index]);
}
*/

// let numbers = [1, 2, 3, 4, 5, 6];
// let colors = ['red', 'orange', '노', '초', '파', '남', '보'];

// let arr;
// let arr2;
// filter() 조건에 부합하는 배열 요소만 반환
// arr = numbers.filter( function({} 안에서 사용할 변수) {} )
// filter() {}안에는 조건식이 나오는게 일반적
/*
arr = numbers.filter((number) => {
    return number > 3;
})
// 화살표함수의 특징중 하나는 { return 을} 생략가능
arr2 = colors.filter((color) => {
    return color.length >2;
})
console.log(arr);
console.log(arr2);
*/

// 배열안에 있는 값을 더할때는 그 더한값의 변수는 전역변수
/*
let sum1 = 0;
for (let number of numbers) {
    sum1 += number;
}
console.log(sum1);
*/

//실습1
/*
let array = [];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for(let i = 0; i < 100; i++) {
    array.push(i+1);
    sum1 += array[i];
}

for(let arr of array) {
    sum2 += arr;
}

array.forEach((arr) => {
    sum3 += arr;
})

console.log(sum1, sum2, sum3);
console.log(array);

//실습2
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지","파인애플", "망고"];

const result = (fruits1, fruits2) => {
    return fruits1.filter(fruit => fruits2.includes(fruit))
}

let same = result(fruits1, fruits2);

console.log(same);

*/

// 보충설명
// do - while문 - 사용빈도 아주 적음
/*
let i = 0;
do {
    console.log(colors[i]);
    i++;
} while (i <colors.length);
*/

// for문 //for of문 
// map() = forEach랑 비슷

// 배열의 합 (sum1, sum2, sum3 전역변수로 사용)

// 실습1
/*
const arrays = [];
for (let i = 1; i <= 100; i++) {
    arrays.push(i);
}
console.log(arrays);

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < arrays.length; i++) {
    sum1 += arrays[i];
}

console.log(sum1);

for (let arr of arrays) {
    sum2 += arr;
}
console.log(sum2);

arrays.forEach(arr => {
    sum3 += arr;
}) 

console.log(sum3);
*/


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

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지","파인애플", "망고"];

let same = fruits1.filter((fruits) => fruits2.includes(fruits));
let diff = fruits1.filter((fruits) => !fruits2.includes(fruits));

console.log(same);
console.log(diff);
