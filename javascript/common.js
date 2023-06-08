//검색창 (.search) 찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//검색창 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 내부 실체 input 코드에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
//검색창 내부실체 input 요소에서 포커스 해제(blue) 되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
// 실시간 날짜 데이터
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();