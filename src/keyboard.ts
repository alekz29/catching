class Keyboard {

    constructor(public code: number, public isDown = false, public isUp = true, public press: Function = undefined, public release: Function = undefined) {
        this.addEvents()
    }

    downHandler = (event: KeyboardEvent) => {

        if (event.keyCode === this.code) {

            if (this.isUp && this.press) this.press();
            this.isDown = true;
            this.isUp = false;

        }
        event.preventDefault();
    };

    upHandler = (event: KeyboardEvent) => {

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
