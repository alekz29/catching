import Container = PIXI.Container;

class Human extends PIXI.Sprite {
    constructor(private img: string, parent: Container = null) {
        super(PIXI.Texture.fromImage(img))
        this.scale.set(1.5, 1.5)
        this.x = (400) - (85*1.5)/2//(this.width / 2)
        this.y = 450

        if (parent) {
            parent.addChild(this)
        }
    }
}

export default Human