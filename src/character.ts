import Container = PIXI.Container;
import Keyboard from "./keyboard";
import * as PIXI from "pixi.js";
import Texture = PIXI.Texture;

class Character extends PIXI.Sprite {

    right = new Keyboard(39)
    left = new Keyboard(37)

    static loadLeft = (() => {
        let b: number = 0,
            leftAnimation: Array<Texture> = []
        for (b; b < 6; b++) {
            leftAnimation.push(PIXI.Texture.fromImage(`./img/knight iso char_run left_${b}.png`))
        }
        return leftAnimation
    })()

    static loadRight = (() => {
        let rightAnimation: Array<Texture> = [],
            b: number = 0;
        for (b; b < 6; b++) {
            rightAnimation.push(PIXI.Texture.fromImage(`./img/knight iso char_run right_${b}.png`))
        }
        return rightAnimation
    })()

    static indexLeft: number = 0
    static indexRight: number = 0

    constructor(private img: string, parent: Container = null, private appWidth: number) {
        super(PIXI.Texture.fromImage(img))
        this.scale.set(1.5, 1.5)
        this.x = (this.appWidth / 2) - (85 * 1.5) / 2
        this.y = 450
        if (parent) {
            parent.addChild(this)
        }
        this.left.press = () => {

            Character.indexRight = 0
            Character.indexLeft += 1

            if (Character.indexLeft > 5) {
                Character.indexLeft = 0
            }
            if (this.x > this.appWidth - (this.appWidth + (85) / 5)) {
                this.x -= 15
            }

            this.texture = Character.loadLeft[Character.indexLeft]

        };

        this.left.release = () => {

            if (!this.right.isDown && this.x > this.appWidth - (this.appWidth + (85) / 5)) {
                this.x -= 15
            }

        };

        this.right.press = () => {

            Character.indexLeft = 0
            Character.indexRight += 1

            if (Character.indexRight > 5) {
                Character.indexRight = 0
            }
            if (this.x < this.appWidth - this.width / 1.2) {
                this.x += 15
            }

            this.texture = Character.loadRight[Character.indexRight]

        };

        this.right.release = () => {

            if (!this.left.isDown && this.x < this.appWidth - this.width / 1.2) {
                this.x += 15
            }

        };
    }
}

export default Character