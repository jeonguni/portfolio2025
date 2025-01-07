// 프로젝트 리스트
const projectData = [
  {
    id: 1,
    name: "AI 드림쌤",
    background: "./assets/images/bg/project-dreamssam.png",
    link: "https://ai-virtual-tutor.i-screamreport.com/signin?p=1986990",
  },
  {
    id: 2,
    name: "Dream Writing\n웹버전 전환",
    background: "./assets/images/bg/project-dreamwriting.png",
    link: "https://dev-aiwrite-web-app.i-screamreport.com/home",
  },
  {
    id: 3,
    name: "AI 디지털 교과서",
    background: "./assets/images/bg/project-aidt.png",
    link: "https://www5-dev3.smart-aidt.com/math/student/analyze",
  },
  {
    id: 4,
    name: "수학의 세포들 고도화",
    background: "./assets/images/bg/project-mathcell.png",
    link: "https://dev.mathcell-es.i-screamreport.com/home",
  },
  {
    id: 5,
    name: "챗봇 체험단",
    background: "./assets/images/bg/project-chatbot.png",
    link: "https://ejy55n.cafe24.com/chatbot-tester/html/",
  },
  {
    id: 6,
    name: "AI 중등 생활기록부",
    background: "./assets/images/bg/project-middleAi.png",
    link: "https://dev.ms-stud.i-screamreport.com/main/analysis?p=123",
  },
];

document.addEventListener("DOMContentLoaded", (event) => {
  // main
  const mainName = gsap.timeline();
  mainName
    .to(".main-bold", { duration: 2, autoAlpha: 1, y: -30 })
    .to(".main-name", { duration: 2, autoAlpha: 1, y: -30, delay: -1 });

  // intro bubble
  const introBubble = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".intro-section",
        toggleActions: "restart pause reverse pause",
        start: "-3rem center",
        end: "60% center",
        scrub: 1,
      },
      defaults: {
        duration: 1,
        autoAlpha: 1,
        ease: "power2.in",
      },
    })
    .to(".bubble1", {}, 0)
    .to(".bubble2", {}, 3)
    .to(".bubble3", {}, 6)
    .to(".bubble4", {}, 9)
    .to(".bubble5", {}, 12)
    .to(".bubble6", {}, 15);

  // career list
  const careerTit = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".career-ball",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        scrub: 1,
      },
      defaults: {
        duration: 0.3,
        autoAlpha: 1,
        ease: "power2.in",
      },
    })
    .to(".item1", {}, 0)
    .to(".item2", {}, 0.3)
    .to(".item3", {}, 0.5);

  // career ball
  gsap.to(".career-ball", {
    scrollTrigger: {
      trigger: ".career-ball",
      toggleActions: "restart pause reverse pause",
      start: "3rem center",
      scrub: 1,
    },
    y: "76.4rem",
    ease: "none",
    duration: 5,
  });
  careerTit, 3;
});

//swiper 생성
const swiperWrapper = document.querySelector(".swiper-wrapper");
projectData.forEach((project) => {
  const slide = document.createElement("a");
  slide.href = project.link;
  slide.target = "_blank";
  slide.rel = "noopener noreferrer";
  slide.className = "swiper-slide project-item";
  slide.style.backgroundImage = `url(${project.background})`;
  slide.innerHTML = `<span>${project.name.replace("\n", "<br>")}</span>`;
  swiperWrapper.appendChild(slide);
});

// swiper script
const swiper = new Swiper(".project-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
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
