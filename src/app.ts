import * as PIXI from 'pixi.js';
import LoadTextures from './loadTextures'
import Fruit from './fruit'
import Character from './character'
import Container = PIXI.Container;
import Sprite = PIXI.Sprite;
import NewText from './text'
import Keyboard from "./keyboard";
import SystemRenderer = PIXI.SystemRenderer;

class App {

    static appWidth: number = 800
    static appHeight: number = 600
    static renderer: SystemRenderer = PIXI.autoDetectRenderer(App.appWidth, App.appHeight, {backgroundColor: 0x061639})
    static stage: Container = new PIXI.Container()
    static beginScene: Container = new Container()
    static gameScene: Container = new Container()
    static gameOverScene: Container = new Container();
    static character: Sprite = new Character('./img/knight iso char_idle_0.png', App.gameScene, App.appWidth)
    static spritesList: Array<Fruit> = []
    static life: number = 10
    static points: number = 0
    static drawPoints: any = new NewText(`${App.points}`, App.gameScene, 100, App.appWidth)
    static playInterval: number;
    static playAgain: Keyboard = new Keyboard(32)


    constructor() {
        App.initialize()
        App.startGame()
    }

    static initialize() {

        document.body.appendChild(App.renderer.view);
        App.stage.addChild(App.beginScene)
        new NewText('Press The Spaces', App.beginScene, App.appHeight, App.appWidth)

        App.playAgain.press = () => {

            App.renderer.backgroundColor = 0x1099bb;
            App.beginScene.visible = false
            App.stage.addChild(App.gameScene).visible = true;
            App.stage.addChild(App.gameOverScene).visible = false;
            new LoadTextures()
            new NewText('Game Over', App.gameOverScene, App.appHeight, App.appWidth)
            App.createSprites()

        }
    }

    static createSprites() {

        App.playInterval = setInterval(() => {

            const id = Math.floor(Math.random() * 30)
            const newFruit = new Fruit(id, App.gameScene, App.appWidth)
            App.spritesList = newFruit.getList()

        }, 2500)
    }

    static startGame() {

        requestAnimationFrame(App.startGame);
        App.renderer.render(App.stage);
        App.play()

    }

    static play() {

        for (let i = 0; i < App.spritesList.length; i++) {

            const x = App.character,
                v = App.spritesList[i]
            v.move()
            App.checkCollision(x, v, i)
            App.checkEnd(v)

        }
    }

    static checkEnd(v: Sprite) {

        if (App.life <= 0) {

            v.visible = false
            App.gameScene.visible = false;
            App.gameOverScene.visible = true;
            App.renderer.backgroundColor = 0x061639;
            App.drawPoints.text = 0
            window.clearInterval(App.playInterval)

            App.playAgain.press = () => {

                App.gameScene.visible = true;
                App.gameOverScene.visible = false;
                App.renderer.backgroundColor = 0x1099bb;
                App.life = 10
                App.character.x = (this.appWidth / 2) - (App.character.width / 2)
                App.character.texture = PIXI.Texture.fromImage('./img/knight iso char_idle_0.png')
                App.createSprites()

            };
        }
    }

    static checkCollision(x: Sprite, v: Sprite, i: number) {

        const actualFruit = App.spritesList[i],
            list = App.spritesList,
            pCh = x.getBounds(),
            pF = v.getBounds(),
            mCh = pCh.x + (pCh.width / 2),
            mF = pF.x + (pF.width / 2)

        if (pCh.y <= pF.y && pCh.y + pCh.height >= pF.y && (Math.abs(mCh - mF) < 30)) {

            actualFruit.destroy()
            list.splice(i, 1)
            App.addPoint()
        }

        else if (pF.y >= App.appHeight - (App.appHeight - (pCh.y + pCh.height))) {

            actualFruit.destroy()
            list.splice(i, 1)
            App.life -= 1

        }
    }

    static addPoint() {
        App.drawPoints.text = App.points += 100
        App.drawPoints.toCenter()
    }
}

new App()
