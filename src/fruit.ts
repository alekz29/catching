import Container = PIXI.Container;


class Fruit extends PIXI.Sprite {
    static fruitsList: Array<Fruit> = []
    fruitsList: Array<Fruit>;

    constructor(private id?: number, parent: Container = null) {

        super(PIXI.Texture.fromFrame(`${id}`),)
        this.scale.set(1.5, 1.5)
        this.x = Math.random() * (800 - this.width)
        this.y = -Math.random() * 200
        if (parent) {
            parent.addChild(this)
        }
        this.fruitsToArray()
    }

    move() {
        this.y += 5//1.5

    }

    fruitsToArray() {
        this.fruitsList = Fruit.fruitsList = [...Fruit.fruitsList].concat([this])
    }

    getList() {
        return this.fruitsList
    }

}

export default Fruit
