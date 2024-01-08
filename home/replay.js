// const array = [];
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;


// // for 문
// for(let i = 0; i < 100; i++) {
//     array.push(i+1);
//     sum1 += array[i];
// }

// // for of 문
// for (arr of array) {
//     sum2 += arr;
// }

// // forEach문
// array.forEach((arr) => {
//     sum3 += arr;
// })

// console.log(array);
// console.log(sum1, sum2, sum3);


// // filter, includes
const fruits1 = ['사과', '복숭아', '딸기', '바나나', '키위'];
const fruits2 = ['키위', '사과', '딸기'];

let same = fruits1.filter((fruit) => {
    return fruits2.includes(fruit);
})
let diff = fruits1.filter((fruit) => {
    return !fruits2.includes(fruit);
})

console.log(same);
console.log(diff);


// for of 문으로 작성
/*
const same = [];
const diff = [];

for (let fruit of fruits1) {
    if (fruits2.includes(fruit) ? same.push(fruit) : diff.push(fruit));
}
console.log(same);
console.log(diff);
*/
