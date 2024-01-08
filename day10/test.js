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