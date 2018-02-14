import Container = PIXI.Container;

class newText extends PIXI.Text {
    static styles = {
        fontFamily: 'Arial',
        fontSize: 45,
        fill: "white",
        align: 'right'
    }
    constructor(private t: string,public parent:Container,private appHeight:number,private appWidth:number) {
        super(t, newText.styles)
        this.x = appWidth/2 - ( this.width/2)
        this.y = appHeight/2 - ( this.height/2)
        this.parent.addChild(this)

    }
}

export default newText