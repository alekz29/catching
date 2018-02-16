import Container = PIXI.Container;
import Fruit from './fruit'
import Keyboard from "./keyboard";
import * as PIXI from "pixi.js";
import Sprite = PIXI.Sprite;
import SystemRenderer = PIXI.SystemRenderer;
import NewText from './text'
import StageGame from './stageGame'


class GameEngine {
    static appWidth: number
    static appHeight: number
    static life: number = 10
    static points: number = 0
    static spritesList: Array<Fruit> = []
    static numberInterval: number;
    static play: Keyboard = new Keyboard(32)
    static character: Sprite
    static stageGame: StageGame
    static stage: Container
    static textPoint: NewText
    static renderer: SystemRenderer
    static beginImg: string
    static lvl: number = 2500


    constructor(public character: Sprite, public renderer: SystemRenderer, public stage: Container, public stageGame: any, public appHeight: number, public appWidth: number, private textPoint: any, public beginImg: string, public start: boolean) {
        GameEngine.appWidth = this.appWidth
        GameEngine.appHeight = this.appHeight
        GameEngine.stageGame = this.stageGame
        GameEngine.textPoint = this.textPoint
        GameEngine.stage = this.stage
        GameEngine.renderer = this.renderer
        GameEngine.character = this.character
        GameEngine.beginImg = this.beginImg

    }

    public checkStart() {
        if (this.start) {
            GameEngine.createFruits()
        }
    }

    static createFruits() {
        GameEngine.numberInterval = setInterval(() => {
            const id = Math.floor(Math.random() * 30)
            const newFruit = new Fruit(id, GameEngine.stageGame.gameScene, GameEngine.appWidth)
            GameEngine.spritesList = newFruit.getList()

        }, GameEngine.lvl)

    }

    public play() {

        for (let i = 0; i < GameEngine.spritesList.length; i++) {

            const x = GameEngine.character,
                v = GameEngine.spritesList[i]
            v.move()
            GameEngine.checkCollision(x, v, i)
            GameEngine.checkEnd(v)
        }
    }

    static checkEnd(v: Sprite) {

        if (GameEngine.life <= 0) {

            v.visible = false
            GameEngine.stageGame.gameOver(v)
            GameEngine.textPoint.text = '0'
            GameEngine.points = 0
            GameEngine.textPoint.toCenter()
            window.clearInterval(GameEngine.numberInterval)

            GameEngine.play.press = () => {

                if (GameEngine.life <= 0) {
                    GameEngine.life = 10
                    GameEngine.stageGame.play()
                    GameEngine.character.x = (this.appWidth / 2) - (GameEngine.character.width / 2)
                    GameEngine.character.texture = PIXI.Texture.fromImage(`${this.beginImg}`)
                    GameEngine.createFruits()
                }
            };
        }
    }

    static checkCollision(x: Sprite, v: Sprite, i: number) {

        const actualFruit = GameEngine.spritesList[i],
            list = GameEngine.spritesList,
            pCh = x.getBounds(),
            pF = v.getBounds(),
            mCh = pCh.x + (pCh.width / 2),
            mF = pF.x + (pF.width / 2)

        if (pCh.y <= pF.y && pCh.y + pCh.height >= pF.y && (Math.abs(mCh - mF) < 30)) {

            actualFruit.destroy()
            list.splice(i, 1)
            GameEngine.addPoint()
        }

        else if (pF.y >= GameEngine.appHeight - (GameEngine.appHeight - (pCh.y + pCh.height))) {

            actualFruit.destroy()
            list.splice(i, 1)
            GameEngine.life -= 1

        }
    }

    static addPoint() {
        const actualPoints = GameEngine.points += 100
        GameEngine.textPoint.text = `${actualPoints}`
        GameEngine.textPoint.toCenter()
    }
}

export default GameEngine
