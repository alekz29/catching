import * as PIXI from "pixi.js";


class LoadTexture {

    fruitsImg = PIXI.Texture.fromImage('./img/Food.png')

    constructor() {
        this.load()
    }

    load() {

        let position: number = 16,
            i: number = 0,
            length: number = 6

        for (i; i < 6; i++) {

            for (let j = 0; j < length; j++) {

                const rectangleNEW = new PIXI.Rectangle(position * i, position * j, position, position),
                    fruitImg = this.fruitsImg.clone(),
                    id: number = i === 0 ? j : i * length + j

                fruitImg.frame = rectangleNEW
                PIXI.Texture.addToCache(fruitImg, `${id}`)

            }
        }
    }
}

export default LoadTexture