class Keyboard {

    constructor(public code?: number, public isDown = false, public isUp = true, public press: any = undefined, public release: any = undefined) {
        this.addEvents()
    }

    downHandler = (event: any) => {
        if (event.keyCode === this.code) {
            if (this.isUp && this.press) this.press();
            this.isDown = true;
            this.isUp = false;
        }
        event.preventDefault();
    };
    upHandler = (event: any) => {
        if (event.keyCode === this.code) {
            if (this.isDown && this.release) this.release();
            this.isDown = false;
            this.isUp = true;
        }
        event.preventDefault();
    };
    addEvents = () => {
        window.addEventListener(
            "keydown", this.downHandler.bind(this), false
        );
        window.addEventListener(
            "keyup", this.upHandler.bind(this), false
        );
    }


}

export default Keyboard
