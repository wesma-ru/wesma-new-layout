import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BufferUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

document.addEventListener('DOMContentLoaded', function () {

    var scene = null;
    var camera = null;
    var renderer = null;
    var mixer = null;
    var clock = new THREE.Clock();
    var mousePos = { x: 0, y: 0 };
    var timer = 0;

    function handleMouseMove(event) {
        var tx = -1 + (event.clientX / window.innerWidth) * 2;
        var ty = 1 - (event.clientY / window.innerHeight) * 2;
        mousePos = { x: tx, y: ty };
    }

    function normalize(v, vmin, vmax, tmin, tmax) {
        var nv = Math.max(Math.min(v, vmax), vmin);
        var dv = vmax - vmin;
        var pc = (nv - vmin) / dv;
        var dt = tmax - tmin;
        var tv = tmin + (pc * dt);
        return tv;
    }

    function updatePos() {
        var targetX = normalize(mousePos.x, -1, 1, -0.1, 0.2);
        var targetY = normalize(mousePos.y, -1, 1, 0.1, 0.2);

        modelScene.rotation.y = targetX + 4.7;
        modelScene.rotation.x = targetY;

        var delta = clock.getDelta();
        if (mixer != null) {
            mixer.update(delta);
        };
    }

    function init3D() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector(".section-partners__canvas").appendChild(renderer.domElement);

        var ambientLight = new THREE.AmbientLight(0x080818);
        scene.add(ambientLight);

        var pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(-5, 1, 5);
        scene.add(pointLight);

        camera.position.z = 5;
        camera.position.y = 1;


        document.addEventListener('mousemove', handleMouseMove, false);

        document.querySelector(".section-partners__wrap-list").addEventListener("click", () => {
            stop.forEach(element => {
                element.repetitions = 1;
                element.clampWhenFinished = "true"
                element.play()
                // element.paused = "ture";
            });
            setTimeout(() => {
                document.querySelector(".section-partners__anchor").classList.add("active");
            }, durAnim * 1000)
        })
    }

    let stop = [];
    let modelScene;
    let durAnim = 0;

    function loadScene() {
        // Instantiate a loader
        var loader = new GLTFLoader();

        // Load a glTF resource
        loader.load('../3d/gltf/model-3.gltf',
            function (gltf) {
                modelScene = gltf.scene;

                var newMaterial = new THREE.MeshStandardMaterial({ color: 0x5E6262 });
                modelScene.traverse((o) => {
                    if (o.isMesh) o.material = newMaterial;
                });

                durAnim = gltf.animations[0].duration;

                modelScene.rotation.y = 4.7;

                modelScene.scale.y *= 0.8;
                modelScene.scale.x *= 0.8;
                modelScene.scale.z *= 0.8;

                scene.add(modelScene);

                mixer = new THREE.AnimationMixer(modelScene);

                gltf.animations.forEach(el => {
                    stop.push(mixer.clipAction(el))
                })


                console.log(gltf);
                render();
            });
    }

    function render() {
        requestAnimationFrame(render);

        updatePos();

        renderer.render(scene, camera);
    }

    init3D();
    loadScene();



}, false);