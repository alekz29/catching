import Container = PIXI.Container;

class Fruit extends PIXI.Sprite {
    constructor(private id: number, parent: Container = null) {

        super(PIXI.Texture.fromFrame(`${id}`))
        this.scale.set(1.5, 1.5)
        const me = this
        this.x = Math.random() * (800 - this.width)
        this.y = 150 //-Math.random()*100
        if (parent) {
            parent.addChild(me)
        }
    }
}

export default Fruit