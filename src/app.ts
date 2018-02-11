import * as PIXI from 'pixi.js';
import textureToCache from './textureToCache'
import Fruit from './fruit'
import Human from './human'

const renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb}),
    stage = new PIXI.Container();
textureToCache()
document.body.appendChild(renderer.view);


const x = new Human('./img/knight iso char_idle_0.png',stage)









new Fruit(5,stage)
new Fruit(8,stage)
console.log(new Fruit(5,stage))
startGame();

function startGame() {
    requestAnimationFrame(startGame);
    renderer.render(stage);
}
