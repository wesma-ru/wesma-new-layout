import { gsap, TweenMax, Quad, TimelineLite } from "gsap";

let animCard = Array.prototype.slice.call(
  document.querySelectorAll(".develop__item")
);

// if (animCard != null) {
//     animCard.forEach(element => {

//         let top = element.querySelector(".line__top");
//         let left = element.querySelector(".line__left");
//         let bottom = element.querySelector(".line__bottom");
//         let right = element.querySelector(".line__right");

//         let containerBg = document.querySelector(".develop__background");

//         element.addEventListener("mouseenter", () => {
//             gsap.to(top, { duration: 0.07, width: "100%", });
//             gsap.to(right, { duration: 0.07, height: "100%", delay: 0.07 });
//             gsap.to(bottom, { duration: 0.07, width: "100%", delay: 0.14 });
//             gsap.to(left, { duration: 0.07, height: "100%", delay: 0.21 });

//             gsap.to(top, { duration: 0.07, width: 15, delay: 0.21 });
//             gsap.to(left, { duration: 0.07, height: 0, delay: 0.28 });
//             gsap.to(bottom, { duration: 0.07, width: 0, delay: 0.35 });
//             gsap.to(right, { duration: 0.07, height: 0, delay: 0.42 });

//             console.log(element.dataset.image);

//             containerBg.style.background = `URL("${element.dataset.image}") no-repeat center / cover`;
//         });

//         // element.addEventListener("mouseleave", () => {
//         //     gsap.to(top, { duration: 0.1, width: 15, })
//         //     gsap.to(left, { duration: 0.1, height: 0, delay: 0.1 })
//         //     gsap.to(bottom, { duration: 0.1, width: 0, delay: 0.2 })
//         //     gsap.to(right, { duration: 0.1, height: 0, delay: 0.3 })
//         // })
//     });
// }

if (animCard != null) {
  let containerBg = document.querySelector(".develop__background");

  animCard.forEach((element) => {
    if (element.classList.contains("active")) {
      containerBg.style.background = `URL("${element.dataset.image}") no-repeat center / cover`;
    }
  });

  let fadeOut = gsap.fromTo(
    containerBg,
    1,
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.98 }
  );

  let fadeIn = gsap.fromTo(
    containerBg,
    1,
    { opacity: 0, scale: 0.98 },
    { opacity: 1, scale: 1 }
  );

  let timer;

  animCard.forEach((element) => {
    let top = element.querySelector(".line__top");
    let left = element.querySelector(".line__left");
    let bottom = element.querySelector(".line__bottom");
    let right = element.querySelector(".line__right");

    element.addEventListener("mouseenter", () => {
      if (!element.classList.contains("active")) {
        clearTimeout(timer);

        animCard.forEach((el) => {
          el.classList.remove("active");
        });

        element.classList.add("active");

        fadeOut.restart();

        timer = setTimeout(() => {
          containerBg.style.background = `URL("${element.dataset.image}") no-repeat center / cover`;
          fadeIn.restart();
        }, 1000);
      }

      var timeline = new TimelineLite();

      timeline
        .to(top, { duration: 0.1, width: "100%", onComplete: ()=> {
          top.style.left = "initial";
          top.style.right = "0";
        } })
        .to(right, { duration: 0.1, height: "100%", onComplete: ()=> {
          right.style.top = "initial";
          right.style.bottom = "0";
        } })
        .to(bottom, { duration: 0.1, width: "100%", onComplete: ()=> {
          bottom.style.right = "initial";
          bottom.style.left = "0";
        } })
        .to(left, { duration: 0.1, height: "100%", onComplete: ()=> {
          left.style.bottom = "initial";
          left.style.top = "0";
        } });

      timeline
      .to(top, { duration: 0.1, width: "0%", onComplete: ()=> {
        top.style.right = "initial";
        top.style.left = "0";
      } })
      .to(right, { duration: 0.1, height: "0%", onComplete: ()=> {
        right.style.bottom = "initial";
        right.style.top = "0";
      } })
      .to(bottom, { duration: 0.1, width: "0%", onComplete: ()=> {
        bottom.style.left = "initial";
        bottom.style.right = "0";
      } })
      .to(left, { duration: 0.1, height: "0%", onComplete: ()=> {
        left.style.top = "initial";
        left.style.bottom = "0";
        top.style.width = "15px";
      } });
    });

    element.addEventListener("mouseleave", () => {
      var timeline = new TimelineLite();

      timeline
        .to(top, { duration: 0.1, width: "100%", onComplete: ()=> {
          top.style.left = "initial";
          top.style.right = "0";
        } })
        .to(right, { duration: 0.1, height: "100%", onComplete: ()=> {
          right.style.top = "initial";
          right.style.bottom = "0";
        } })
        .to(bottom, { duration: 0.1, width: "100%", onComplete: ()=> {
          bottom.style.right = "initial";
          bottom.style.left = "0";
        } })
        .to(left, { duration: 0.1, height: "100%", onComplete: ()=> {
          left.style.bottom = "initial";
          left.style.top = "0";
        } });

      timeline
      .to(top, { duration: 0.1, width: "0%", onComplete: ()=> {
        top.style.right = "initial";
        top.style.left = "0";
      } })
      .to(right, { duration: 0.1, height: "0%", onComplete: ()=> {
        right.style.bottom = "initial";
        right.style.top = "0";
      } })
      .to(bottom, { duration: 0.1, width: "0%", onComplete: ()=> {
        bottom.style.left = "initial";
        bottom.style.right = "0";
      } })
      .to(left, { duration: 0.1, height: "0%", onComplete: ()=> {
        left.style.top = "initial";
        left.style.bottom = "0";
        top.style.width = "15px";
      } });
    });

  });
}
