import * as PIXI from 'pixi.js';
import LoadTextures from './loadTextures'
import Character from './character'
import Container = PIXI.Container;
import Sprite = PIXI.Sprite;
import NewText from './text'
import Keyboard from "./keyboard";
import SystemRenderer = PIXI.SystemRenderer;
import Stage, {default as stageGame} from './stageGame'
import GameEngine from './GameEngine'

class App {

    static appWidth: number = 800
    static appHeight: number = 600
    static beginImg: string = './img/knight iso char_idle_0.png'
    static renderer: SystemRenderer = PIXI.autoDetectRenderer(App.appWidth, App.appHeight, {backgroundColor: 0x061639})
    static stage: Container = new PIXI.Container()
    static stageGame: Stage = new Stage(App.stage, App.renderer, App.appHeight, App.appWidth)
    static character: Sprite = new Character(`${App.beginImg}`, App.stageGame.gameScene, App.appWidth)
    static drawPoints: NewText = new NewText(`0`, App.stageGame.gameScene, 100, App.appWidth)
    static playAgain: Keyboard = new Keyboard(32)
    static isStarted: boolean = false
    static GameEngine: GameEngine = new GameEngine(App.character, App.renderer, App.stage, App.stageGame, App.appHeight, App.appWidth, App.drawPoints, App.beginImg, false)

    constructor() {

        LoadTextures.load()
        App.initialize()
        App.startGame()

    }

    static initialize() {
        App.stageGame.begin()
        App.playAgain.press = () => {
            if (!App.isStarted) {
                App.isStarted = true
                App.stageGame.play()
                App.createSprites()
            }
        }
    }

    static createSprites() {
        App.GameEngine.start = App.isStarted
        App.GameEngine.checkStart()
    }

    static startGame() {

        requestAnimationFrame(App.startGame);
        App.renderer.render(App.stage);
        App.GameEngine.play()

    }
}

new App()
