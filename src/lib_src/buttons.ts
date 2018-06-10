import Snap from "snapsvg";

export class OnOffKnob {
    private _state: boolean;
    private _x: number;
    private _y: number;
    private _radiusOn: number;
    private _radiusOff: number;
    private _knobId: string;
    private _knobObject: Snap;

    constructor() {
        // init on-off knob
        this._state = false;
        this._x = 0;
        this._y = 0;
        this._radiusOn = 35;
        this._radiusOff = 45;
        this._knobId = "";
        this._knobObject = null; // snap.select("#on-off-knob");
    }

    public addHandler(): void {
        this._knobObject.click(this.toggle());
    }

    public get state(): boolean {
        return this._state;
    }

    public set state(state: boolean) {
        this._state = state;
    }

    public get x(): number {
        return this._x;
    }

    public set x(x: number) {
        this._x = x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
    }

    public get knobId(): string {
        return this._knobId;
    }

    public set knobId(knobId: string) {
        this._knobId = knobId;
    }

    public get knobObject(): Snap {
        return this._knobObject;
    }

    public set knobObject(knobObject: Snap) {
        this._knobObject = knobObject;
    }

    public toggle(): void {
        let toggleResult: number;

        if (this._state) {
            toggleResult = this._radiusOn;
        } else {
            toggleResult = this._radiusOff;
        }

        this._knobObject.animate({ transform: "r" + toggleResult + ", 0, 0" }, 1000, null);
        this._state = !this._state;
    }
}
