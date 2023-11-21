const swiper = new Swiper(".mySwiper", {
  allowTouchMove: true,
  slidesPerView: "auto",
  speed: 75000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  freeMode: true,
  spaceBetween: 0,
  centeredSlides: true,
});

const swiperReverse = new Swiper(".mySwiperReverse", {
  allowTouchMove: true,
  slidesPerView: "auto",
  speed: 75000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
    pauseOnMouseEnter: true,
  },

  spaceBetween: 0,
  centeredSlides: true,
});
document.querySelector(".mySwiper").addEventListener("mouseover", (e) => {
  console.log("hi");
  swiper.autoplay.pause();
});

/* slider-animation gsap */

function scrollGsap() {

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".containerScroll");
let sections = gsap.utils.toArray(".panel");
let getRandomColor = gsap.utils.random(
  "red,blue,orange,purple".split(","),
  true
);

let scrollTween = gsap.to(".containerScroll", {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    start: "center center",
    end: () => "+=" + container.offsetWidth,
    invalidateOnRefresh: true,
  },
});

const addSection = () => {
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("panel", getRandomColor());
  sectionEl.textContent = "New section " + sections.length;

  const st = scrollTween.scrollTrigger,
    oldProgress = st.progress;

  container.append(sectionEl);

  sections.push(sectionEl);

  gsap.set(container, { "--width": sections.length * 100 + "%" });

  ScrollTrigger.refresh();

  st.scroll(
    st.start +
      ((st.end - st.start) * oldProgress * (sections.length - 2)) /
        (sections.length - 1)
  );
  st.update(); 
  st.endAnimation(); 
};

}
// проверка

// Функция для проверки разрешения экрана
function isDesktopResolution() {
  var resolution = screen.width;
  return resolution >= '490'; // Замените это значение желаемым разрешением
}

// Ваш JS-код
if (isDesktopResolution()) {
  // Ваш код здесь
  scrollGsap()
}


// animation section  about-me__grid

let tl = gsap.timeline();

tl.from(".is-header-text", { opacity: 0, y: 100, duration: 1 })

  .from("#header-grid", { opacity: 0, y: 30, duration: 1 }, "-=0.7")
  .from(".is-header-btn", { opacity: 0, duration: 1 }, "-=0.7");

gsap.from(".is-about-top", {
  scrollTrigger: ".is-about-top",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#about-me__grid", {
  scrollTrigger: "#about-me__grid",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".slider-text", {
  scrollTrigger: ".slider-text",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".block-experience", {
  scrollTrigger: ".block-experience",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#block-exp-1", {
  scrollTrigger: "#block-exp-1",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#block-exp-2", {
  scrollTrigger: "#block-exp-2",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#block-exp-3", {
  scrollTrigger: "#block-exp-3",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".block-review-top", {
  scrollTrigger: ".block-review-top",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".block-review-bottom", {
  scrollTrigger: ".block-review-bottom",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#block-exp-4", {
  scrollTrigger: "#block-exp-4",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from("#block-exp-5", {
  scrollTrigger: "#block-exp-5",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".share-h3", {
  scrollTrigger: ".share-h3",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".share-learn-text", {
  scrollTrigger: ".share-learn-text",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".nav-share-grid", {
  scrollTrigger: ".nav-share-grid",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".card-one", {
  scrollTrigger: ".card-one",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".card-two", {
  scrollTrigger: ".card-two",

  opacity: 0,
  y: 150,
  duration: 1,
});

gsap.from(".card-three", {
  scrollTrigger: ".card-three",

  opacity: 0,
  y: 150,
  duration: 1,
});


gsap.from(".footer-h3", {
  scrollTrigger: ".footer-h3",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".network", {
  scrollTrigger: ".network",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".footer-left", {
  scrollTrigger: ".footer-left",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".footer-right", {
  scrollTrigger: ".footer-right",

  opacity: 0,
  y: 100,
  duration: 1,
});

gsap.from(".agreement-link", {
  scrollTrigger: ".agreement-link",
  opacity: 0,
  y: 30,
  duration: 1,
});

gsap.from(".header-copyright", {
  scrollTrigger: ".header-copyright",
  opacity: 0,
  y: 30,
  duration: 1,
});

function gsapAnimationMob() {

  gsap.from("#scroll-link-1", {
    scrollTrigger: "#scroll-link-1",
  
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.from("#scroll-link-2", {
    scrollTrigger: "#scroll-link-2",
  
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.from("#scroll-link-3", {
    scrollTrigger: "#scroll-link-3",
  
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.from("#scroll-link-4", {
    scrollTrigger: "#scroll-link-4",
  
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.from("#scroll-link-5", {
    scrollTrigger: "#scroll-link-5",
  
    opacity: 0,
    y: 100,
    duration: 1,
  });

  
}

gsapAnimationMob()
