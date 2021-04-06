import html2canvas from "../modules/html2canvas.min";

document.addEventListener('DOMContentLoaded', function () {

    ////////////// Стирание текста

    let arrText = Array.prototype.slice.call(document.querySelectorAll(".section-partners__text"));

    arrText.forEach(element => {

        html2canvas(element, { backgroundColor: null }).then(function (canvas) {
            // document.body.appendChild(canvas)
            // element.parentNode.appendChild(canvas);

            let elHeight = element.clientHeight;
            let elWidth = element.clientWidth;

            let width = canvas.width;
            let height = canvas.height;
            let ctx = canvas.getContext('2d');
            let idData = ctx.getImageData(0, 0, width, height);
            let datums = [];

            for (let i = 0; i < 20; i++) {
                datums.push(ctx.createImageData(width, height));
            }

            for (let f = 0; f < width; f++) {
                for (let k = 0; k < height; k++) {

                    for (let l = 0; l < 2; l++) {
                        let n = 4 * (k * width + f);
                        let m = Math.floor(20 * (Math.random() + 2 * f / width) / 3);

                        for (let p = 0; p < 4; p++) {
                            datums[m].data[n + p] = idData.data[n + p];
                        }
                    }
                }
            }

            datums.forEach((imageData, i) => {
                let cloned = canvas.cloneNode();

                cloned.style.transition = `all 1.5s ease-out ${i / 36}s`;

                cloned.style.width = elWidth + "px"

                cloned.getContext('2d').putImageData(imageData, 0, 0);


                element.parentNode.querySelector(".section-partners__item-canvas").style.height = elHeight + "px";

                element.style.display = "none";

                element.parentNode.querySelector(".section-partners__item-canvas").appendChild(cloned);

                document.querySelector(".section-partners__wrap-list").addEventListener("click", () => {
                    setTimeout(() => {
                        let angle = (Math.random() + 0.5) * 2 * Math.PI;

                        cloned.style.transform = `rotate(${15 * Math.random() - 0.5}deg) translate(${60 * Math.cos(angle)}px, ${60 * Math.sin(angle)}px)`;
                        cloned.style.opacity = "0";
                    })
                })
            })
        })
    });

}, false);