// 프로젝트 리스트
const projectData = [
  {
    id: 1,
    name: 'AI 드림쌤',
    background: './assets/images/bg/project-dreamssam.png',
    link: 'https://ejy55n.cafe24.com/04.dream_ssam/html/',
  },
  {
    id: 2,
    name: 'Dream Writing\n웹버전 전환',
    background: './assets/images/bg/project-dreamwriting.png',
    link: 'https://aiwrite-web-app.i-screamreport.com/home',
  },
  {
    id: 3,
    name: 'AI 디지털 교과서',
    background: './assets/images/bg/project-aidt.png',
  },
  {
    id: 4,
    name: '수학의 세포들 고도화',
    background: './assets/images/bg/project-mathcell.png',
    link: 'https://dev.mathcell-es.i-screamreport.com/home',
  },
  {
    id: 5,
    name: '챗봇 체험단',
    background: './assets/images/bg/project-chatbot.png',
    link: 'https://ejy55n.cafe24.com/chatbot-tester/html/',
  },
  {
    id: 6,
    name: 'AI 중등 생활기록부',
    background: './assets/images/bg/project-middleAi.png',
    link: 'https://ejy55n.cafe24.com/03.analytics_middle/html/',
  },
];

document.addEventListener('DOMContentLoaded', event => {
  // main
  const mainName = gsap.timeline();
  mainName
    .to('.main-bold', { duration: 2, autoAlpha: 1, y: -30 })
    .to('.main-name', { duration: 2, autoAlpha: 1, y: -30, delay: -1 });

  // intro bubble
  const introBubble = gsap
    .timeline({
      scrollTrigger: {
        trigger: '.intro-section',
        toggleActions: 'restart pause reverse pause',
        start: '-3rem center',
        end: '60% center',
        scrub: 1,
      },
      defaults: {
        duration: 1,
        autoAlpha: 1,
        ease: 'power2.in',
      },
    })
    .to('.bubble1', {}, 0)
    .to('.bubble2', {}, 3)
    .to('.bubble3', {}, 6)
    .to('.bubble4', {}, 9)
    .to('.bubble5', {}, 12)
    .to('.bubble6', {}, 15);

  // career list
  const careerTit = gsap
    .timeline({
      scrollTrigger: {
        trigger: '.career-ball',
        toggleActions: 'restart pause reverse pause',
        start: 'top center',
        scrub: 1,
      },
      defaults: {
        duration: 0.3,
        autoAlpha: 1,
        ease: 'power2.in',
      },
    })
    .to('.item1', {}, 0)
    .to('.item2', {}, 0.1)
    .to('.item3', {}, 0.3)
    .to('.item4', {}, 0.5);

  // career ball
  gsap.to('.career-ball', {
    scrollTrigger: {
      trigger: '.career-ball',
      toggleActions: 'restart pause reverse pause',
      start: '3rem center',
      scrub: 1,
    },
    y: '95rem',
    ease: 'none',
    duration: 5,
  });
  careerTit, 3;
});

//swiper 생성
const swiperWrapper = document.querySelector('.swiper-wrapper');
projectData.forEach(project => {
  const slide = project.link ? document.createElement('a') : document.createElement('div');

  if (project.link) {
    slide.href = project.link;
    slide.target = '_blank';
    slide.rel = 'noopener noreferrer';
  }

  slide.className = 'swiper-slide project-item';
  slide.style.backgroundImage = `url(${project.background})`;
  slide.innerHTML = `<span>${project.name.replace('\n', '<br>')}</span>`;
  swiperWrapper.appendChild(slide);
});

// swiper script
const swiper = new Swiper('.project-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  // 디교 swiper 찾기
  const projectItem = document.querySelector('.swiper-slide.project-item:nth-child(3)');

  // 플로팅 UI 요소 생성
  const floatingUI = document.createElement('div');
  floatingUI.className = 'project-floating';
  floatingUI.innerText =
    '현재 진행중인 교육부 주관사업으로 외부 노출시 민형사상의 책임을 질 수 있어, 코드 및 디자인 노출이 엄격하게 금지되어 있습니다. 따라서 해당 프로젝트는 경력 기술서로만 확인하실 수 있는점 양해 부탁드리겠습니다.';
  floatingUI.style.display = 'none'; // 초기에는 숨김

  projectItem.appendChild(floatingUI);

  // 마우스 움직임 이벤트 핸들러
  projectItem.addEventListener('mousemove', e => {
    const rect = projectItem.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // 마우스 위치
    floatingUI.style.left = `${offsetX - floatingUI.offsetWidth - 10}px`;
    floatingUI.style.top = `${offsetY - floatingUI.offsetHeight - 10}px`;
    floatingUI.style.display = 'block';
  });

  // 마우스가 영역을 벗어날 때 숨김
  projectItem.addEventListener('mouseleave', () => {
    floatingUI.style.display = 'none';
  });
});
