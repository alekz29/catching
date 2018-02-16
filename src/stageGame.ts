import * as PIXI from "pixi.js";
import SystemRenderer = PIXI.SystemRenderer;
import Container = PIXI.Container;
import NewText from "./text";
import Sprite = PIXI.Sprite;


class stageGame {

    public beginScene: Container = new Container()
    public gameScene: Container = new Container()
    public gameOverScene: Container = new Container();

    constructor(private stage: Container, public renderer: SystemRenderer, private appHeight: number, private appWidth: number) {
        stage.addChild(this.beginScene).visible = true
        stage.addChild(this.gameScene).visible = false;
        stage.addChild(this.gameOverScene).visible = false;
    }

    public begin() {
        document.body.appendChild(this.renderer.view);
        new NewText('Press The Spaces', this.beginScene, this.appHeight, this.appWidth)
    }

    public play() {

        this.renderer.backgroundColor = 0x1099bb;
        this.beginScene.visible = false;
        this.gameScene.visible = true;
        this.gameOverScene.visible = false;

    }

    public gameOver(sprite: Sprite) {
        sprite.visible = false
        new NewText('Game Over', this.gameOverScene, this.appHeight, this.appWidth)
        this.renderer.backgroundColor = 0x061639;
        this.beginScene.visible = false;
        this.gameScene.visible = false;
        this.gameOverScene.visible = true;

    }
}

export default stageGame