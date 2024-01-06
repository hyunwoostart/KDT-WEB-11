// 반복문
// for문
/* 
    for(초기값; 조건식; 증감식) {
        // 반복 코드
    }
*/
// step1. 0부터 5까지 1씩증가
for(let i = 0; i < 6; i++) {
    console.log(i);
}
// step2. 5부터 0까지 1씩감소
for(let i = 5; i >= 0; i--) {
    console.log(i);
}
// step3. 1부터 10까지 중에서 짝수 출력
// sol1. 반복문과 조건문 활용
for(let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// sol2. 증감값 변경
for(let i = 2; i <= 10; i = i+2) {
    console.log(i)
}
// step4. 배열과함께
const colors = ["red", "oragnge", "yellow", "green", "blue", "navy", "purple"];
for(let i = 0; i < colors.length; i++) {
    console.log(`무지개 ${i + 1}번째 색상은 ${colors[i]}`);
}

// 이중for문 - for 중첩문
// for문 안에 또 for문
/* 
    for() {
        for() {

        }
    }
*/

// 실습7
// 1부터 10000까지 숫자 중에서 13배수 출력
/* 
const inputNum = Number(prompt("숫자 입력하세요"));

for(let i = 13; i < inputNum; i++) {
    if(i % 2 !== 0 && i % 13 == 0) {
        console.log(i)
    }
}
*/

//실습8
for(let dan = 2; dan <= 9; dan++) {
    console.log(`===${dan}단===`);
    for (let i = 1; i < 10; i++)
        console.log(`${dan} x ${i}  = ${dan*i}`)
}
