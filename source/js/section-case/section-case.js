import * as PIXI from 'pixi.js';
import { TwistFilter } from 'pixi-filters';


document.addEventListener('DOMContentLoaded', function () {

    var body = document.body,
        html = document.documentElement;

    const app = new PIXI.Application({
        width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth),
        height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
        backgroundColor: null,
        transparent: true
    });

    app.stage.interactive = true;

    const container = new PIXI.Container();
    app.stage.addChild(container);


    let arrItem = Array.prototype.slice.call(document.querySelectorAll(".case__item"));

    app.loader
        .add('bg_grass', '../img/section-case/test-big-300-KB-3644x2311.jpg')
        .load(build);

    let bifferArr = [];

    function build() {

        arrItem.forEach(element => {

            // Create a new texture
            const texture = app.loader.resources.bg_grass.texture;

            // Create the simple plane
            const verticesX = 10;
            const verticesY = 10;
            const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);

            plane.width = element.scrollWidth;
            plane.height = element.scrollHeight;

            plane.x = element.getBoundingClientRect().x + pageXOffset;
            plane.y = element.getBoundingClientRect().y + pageYOffset;

            const buffer = plane.geometry.getBuffer('aVertexPosition');

            bifferArr.push(buffer);

            app.stage.addChild(plane);
        });
    }

    console.log(bifferArr);

    // const displacementSprite = PIXI.Sprite.from('../img/displace.png');

    // app.stage.addChild(displacementSprite);

    // const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

    // displacementFilter.padding = 10;

    // app.stage.filters = [displacementFilter];

    // console.log(displacementFilter);

    // displacementFilter.scale.x = 100;
    // displacementFilter.scale.y = 100;
    // displacementSprite.anchor.set(0.5);

    // const displacementSprite = PIXI.Sprite.from('../img/displace.png');

    // app.stage.addChild(displacementSprite);

    const displacementFilter = new TwistFilter();

    displacementFilter.angle = 1.5;

    app.stage.filters = [displacementFilter];

    console.log(displacementFilter);

    app.stage
        .on('mousemove', onPointerMove)
        .on('touchmove', onPointerMove);

    function onPointerMove(eventData) {
        // displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
        displacementFilter.offset.x = eventData.data.global.x;
        displacementFilter.offset.y = eventData.data.global.y;
    }

    document.body.appendChild(app.view);

}, false)
















