// 실습1
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

// 실습2
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지","파인애플", "망고"];

let same = fruits1.filter((fruits) => fruits2.includes(fruits));
let diff = fruits1.filter((fruits) => !fruits2.includes(fruits));

console.log(same);
console.log(diff);
