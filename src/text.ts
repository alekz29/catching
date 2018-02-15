import Container = PIXI.Container;

class newText extends PIXI.Text {

    static styles = {
        fontFamily: 'Arial',
        fontSize: 45,
        fill: "white",
        align: 'right'
    }

    constructor(private t: string, public parent: Container, private appHeight: number, private appWidth: number) {

        super(t, newText.styles)

        this.toCenter()
        this.parent.addChild(this)

    }

    public toCenter() {
        this.x = this.appWidth / 2 - (this.width / 2)
        this.y = this.appHeight / 2 - (this.height / 2)
    }
}

export default newText