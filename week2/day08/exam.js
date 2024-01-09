// // 오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태
// let cat = {
//     // ket : value형태
//     name: "고양이",
//     age: 2,
//     isCute: true,
//     mew: function() {
//         return "야옹!"
//     },
// };

// console.log(cat);
// console.log(cat.name);
// console.log(cat.isCute);
// console.log(cat.mew());

// // typeof 데이터가 어떤 타입인지 알려주는 키워드
// console.log(typeof "Hello");
// console.log(typeof true);
// const types = 20;
// console.log(typeof 20);



//문자형 변환
let num = 123;
console.log(typeof num)

let a = String(num);
console.log(typeof a);

let b = num.toString() // null과 undefiend에서 사용불가
console.log(typeof b);


// String() 함수를 사용하여 숫자를 문자열로 변환 후 출력
let num2 = 123;
let strNum2 = String(num2);
console.log(typeof strNum2);

// 직접 String(num2)를 출력
let num3 = 123;
console.log(typeof String(num3));

