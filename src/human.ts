import Container = PIXI.Container;
import Keyboard from "./keyboard";

class Human extends PIXI.Sprite {
    right = new Keyboard(39)
    left = new Keyboard(37)

    constructor(private img: string, parent: Container = null, private appWidth: number) {
        super(PIXI.Texture.fromImage(img))
        this.scale.set(1.5, 1.5)
        this.x = (this.appWidth / 2) - (85 * 1.5) / 2//(this.width / 2)
        this.y = 450
        if (parent) {
            parent.addChild(this)
        }
        this.left.press = () => {
            this.x -= 10
        };

        this.left.release = () => {
            if (!this.right.isDown) {
                this.x -= 10
            }
        };
        this.right.press = () => {
            this.x += 10
        };

        this.right.release = () => {
            if (!this.left.isDown) {
                this.x += 10
            }
        };
    }


}

export default Human