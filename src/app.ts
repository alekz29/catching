import * as PIXI from 'pixi.js';
import textureToCache from './textureToCache'


const renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb}),
    stage = new PIXI.Container();

textureToCache()
document.body.appendChild(renderer.view);


const sprite = PIXI.Sprite.fromFrame("29");
sprite.x = Math.random() * 800 - 20
sprite.y = 150
stage.addChild(sprite)


startGame();

function startGame() {
    requestAnimationFrame(startGame);
    renderer.render(stage);
}
