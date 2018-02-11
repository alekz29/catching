import * as PIXI from "pixi.js";

const createTexture = () => {
    const fruitsImg = PIXI.Texture.fromImage('./img/Food.png')
    let position:number = 16,
        i:number = 0,
        length:number = 6
    for (i; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            const rectangleNEW = new PIXI.Rectangle(position * i, position * j, position, position)
            const fruitImg = fruitsImg.clone()
            fruitImg.frame = rectangleNEW
            const id:number = i === 0 ? j : i * length + j
            PIXI.Texture.addToCache(fruitImg, `${id}`)
        }
    }
}
export default createTexture