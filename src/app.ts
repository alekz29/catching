import * as PIXI from 'pixi.js';
import textureToCache from './textureToCache'
import Fruit from './fruit'


const renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb}),
    stage = new PIXI.Container();

textureToCache()
document.body.appendChild(renderer.view);

new Fruit(5,stage)
new Fruit(8,stage)



startGame();

function startGame() {
    requestAnimationFrame(startGame);
    renderer.render(stage);
}
