const btn = document.getElementById('btn');
const def = document.getElementById('default');
const input = document.getElementById('input');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.value);
    // alert('하하하');
});
btn.addEventListener('mouseover', () => {
    console.log('올라간다');
});
btn.addEventListener('mouseleave', () => {
    console.log('나간다');
});
input.addEventListener('focus', () => {
    console.log('되나');
});
input.addEventListener('blur', () => {
    console.log('블러효과?');
});
input.addEventListener('keydown', () => {
    console.log('keydown');
});
input.addEventListener('keyup', () => {
    console.log('keyup');
});

// this
// 그 함수가 속해 있던 객체 참조
// 뭔가를 클릭할때 불러오는 함수(콜백함수)에서 this는 그 뭔가를 의미함

/* 화살표함수에서의 this*/
/*
화살표 함수는 자체적인 this를 가지지 않고, 부모 범위의 this를 가져옵니다.
이를 Lexical scoping이라고 합니다. 
화살표 함수 내에서 this를 사용하려면 해당 함수를 둘러싼 스코프에서 this가 정의되어 있어야 합니다.
만약 화살표 함수가 객체의 메서드로 사용되는 경우, 해당 객체의 메서드로 호출될 때 this는 그 객체를 가리킵니다. 
하지만 화살표 함수가 전역 범위에서 호출되거나 다른 컨텍스트에서 호출될 때는 주의가 필요합니다.
*/


//preventDeafult
def.addEventListener('click', function (e) {
    e.preventDefault(); // form 전송을 막는 메소드
    console.log(this);
    this.textContent= '클릭함';
});