import * as PIXI from 'pixi.js';

const renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

const stage = new PIXI.Container();
const texture = PIXI.Texture.fromImage('./img/bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.anchor.set(0.5,0.5)
bunny.x = 400;
bunny.y = 300;
bunny.scale.set(2,2)
const fruitsImg = PIXI.Texture.fromImage('./img/Food.png')
const rectangle = new PIXI.Rectangle(70,70,10,10)
fruitsImg.frame = rectangle
const fruit = new PIXI.Sprite(fruitsImg)
fruit.x = 45
fruit.y =45
stage.addChild(fruit)


stage.addChild(bunny);
animate();

function animate() {
    requestAnimationFrame(animate);
    bunny.rotation += 0.01;
    renderer.render(stage);
}


//Aliases
let resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

