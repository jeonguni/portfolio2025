// 프로젝트 리스트
const projectData = [
  { id: 1, name: "AI 드림쌤", background: "./assets/images/bg-1.jpg" },
  {
    id: 2,
    name: "Dream Writing\n웹버전 전환",
    background: "./assets/images/bg-1.jpg",
  },
  {
    id: 3,
    name: "AI 디지털 교과서",
    background: "./assets/images/bg-1.jpg",
  },
  {
    id: 4,
    name: "수학의 세포들 고도화",
    background: "./assets/images/bg-1.jpg",
  },
  { id: 5, name: "챗봇 체험단", background: "./assets/images/bg-1.jpg" },
  {
    id: 6,
    name: "AI 중등 생활기록부",
    background: "./assets/images/bg-1.jpg",
  },
];

//swiper 생성
const swiperWrapper = document.querySelector(".swiper-wrapper");
projectData.forEach((project) => {
  const slide = document.createElement("div");
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
