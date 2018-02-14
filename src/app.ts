import * as PIXI from 'pixi.js';
import LoadTextures from './loadTextures'
import Fruit from './fruit'
import Human from './human'
import Container = PIXI.Container;
import Sprite = PIXI.Sprite;


class App {

    static renderer: any = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb})
    static stage: Container = new PIXI.Container()
    static character: Sprite = new Human('./img/knight iso char_idle_0.png', App.stage)
    static spritesList: Array<Fruit> = []

    constructor() {
        App.initialize()
        App.createSprites()
        App.startGame()
    }

    static initialize() {
        document.body.appendChild(App.renderer.view);
        new LoadTextures()
    }
    
    static createSprites() {
        setInterval(() => {
            const id = Math.floor(Math.random() * 30)
            const newFruit = new Fruit(id, App.stage)
            App.spritesList = newFruit.getList()
        }, 5000)
    }

    static startGame() {
        requestAnimationFrame(App.startGame);
        App.renderer.render(App.stage);
        for (let i = 0; i < App.spritesList.length; i++) {
            App.spritesList[i].move()
            const x = App.character
            const v = App.spritesList[i]
            if (App.checkCollision(x, v)) {
                console.log('poprawne ?')
            }
        }
    }

    static checkCollision(x: Sprite, v: Sprite/*fruit*/) {

        const pH = x.getBounds();
        const pF = v.getBounds();
        const mH = pH.x + (pH.width / 2)
        const mF = pF.x + (pF.width / 2)
        return pH.y <= pF.y && pH.y + pH.height >= pF.y && (Math.abs(mH - mF) < 30)

    }
}

new App()
