const cntText = document.getElementById('cntText');
console.log(cntText);
cntText.textContent = 'hi';
cntText.innerText = '안녕하세요';
cntText.innerHTML = '여기는 <b>첫번째</b> 태그입니다.';
/*
    textContent: 요소안에 텍스트를 가져오거나 수정
    innerText: 요소안에 텍스트를 가져오거나 수정
    
    textContent vs innerText
    textContent: 공백 문자 그래도 반환, IE9 이전 버전사용 불가
    innerText: 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소 수정 불가

    innerHTML: 입력된 문자열을 HTML형식으로!
*/

// classList
cntText.classList.add('title');
cntText.classList.remove('title');
cntText.classList.toggle('title-big');
console.log(cntText.classList.contains('title'));

/* 
    * add: 클래스 추가
    * remove: 클래스 제거
    * toggle: 클래스가 있으면 제거 , 없으면 추가
    * contains: 해당 클래스가 있는지 boolean 값 반환
*/

// setAttribute 
const link = document.querySelector('a');
console.log(link);
link.setAttribute('href', 'https://www.naver.com');
const img = document.querySelector('img');
img.setAttribute('src', 'https://i.namu.wiki/i/sfvk_xnvWlwCiFo3X6cdfzf621AlwLjGRZ88bIcrIt99EwxqOQVGGp7gMEH6gllADZl1kLJdIeJD3Ooq4LOYOg.webp')
img.setAttribute('width', '200');
const input = document.getElementById('input');
input.setAttribute('placeholder', '이름을 입력하세요');
// 다른 노드에 접근하기