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


//preventDeafult
def.addEventListener('click', function (e) {
    e.preventDefault(); // form 전송을 막는 메소드
    console.log(this);
    this.textContent= '클릭함';
});