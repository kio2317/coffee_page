
//페이지 스크롤에 따른 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // Badge 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 상단으로 이동 버튼 보이기
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  } else {
    // Badge 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 상단 이동 버튼 숨기기
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});
toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});

// 나타날 fade-in 들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 하나씩 반복 처리
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
// swiper 
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생
  loop: true// 반복 재생 
});
// promotion
new Swiper('.promotion .swiper', {
  autoplay: true, // 자동 재생
  loop: true, // 반복재생
  slidesPerView: 3, // 한 번에 보여주는 슬라이드 개수
  spaceBetween: 10, //  슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});
// 토글 버튼
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
//  토글 버튼 클릭시 실행 코드
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});
// 애니메이션 처리
gsap.to('.floating1', 1.5, {
  delay: 1, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정
  y: 15, // 'transtion:translateY(수치)와 같음 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복하는지 설정 -1무한 반복
  yoyo: true, //  한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
})

gsap.to('.floating2', 2, {
  delay: .5, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정
  y: 15, // 'transtion:translateY(수치)와 같음 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복하는지 설정 -1무한 반복
  yoyo: true, //  한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
})

gsap.to('.floating3', 2.5, {
  delay: 1.5 , // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정
  y: 20, // 'transtion:translateY(수치)와 같음 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복하는지 설정 -1무한 반복
  yoyo: true, //  한 번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut // Easing 함수 적용
})
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 감시할 장면 scene 추가
      triggerHook: .8 //화면 80% 지점에서 보여지는 효과
    })
    .setClassToggle(spyEl, 'show') // 화면에 보이면 show클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러 장면을 할당(!필수!)
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
});