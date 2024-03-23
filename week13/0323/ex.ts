// 1번
const olimpic_newgame: readonly [object, boolean] = [
    {
        name: '쇼트트랙',
        type: '혼성 계주',
        year: 1000,
    },
    true,
]

// 함수실습

// 화살표 함수
const sum1 = (x: number, y: number) => {
    return x + y;
};
console.log(sum1(5, 11));

// 2번
function sum2(...a: number[]) {
    let sum = 0;
    a.forEach((el) => (sum += el));
    return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

// 제네릭 이용해서 함수 arrElement 선언하기
// 배열과 인덱스 번호를 매개변수로 받고,
// Arr[index]에 대한 요소를 리턴하는 함수 만들기,
// 함수의 리턴 타입까지 작성하기

// generic
// 선언할 때 타입을 지정하기 어려운 케이스가 존재
// - 생성 시점에 타입을 명시
// => 재사용성 증가
// ==> 타입을 변수처럼 사용한다
// <T> 형태로 주로 사용


// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만든다!
// T => type 만 올 수 있음
// function arrElement<T>(arr: T[], i: number) {
//     if(arr.length < i) {
//         return false;
//     }
//     return arr[i];
// }

// 제네릭 실습
function arrElement<T>(arr: T[], index: number): T | boolean {
    if(arr.length <= index) return false;
    return arr[index];
}

console.log(arrElement([1,2,3], 1));
console.log(arrElement([1,2,3], 5));