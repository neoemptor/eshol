class OnOffKnob {
    private _state: boolean;
    private _x: number;
    private _y: number;
    private _radiusOn: number;
    private _radiusOff: number;
    private _knobId: string;

    constructor() {
        // init on-off knob
        this._state = false;
        this._x = 0;
        this._y = 0;
        this._radiusOn = 35;
        this._radiusOff = 45;
        this._knobId = "";
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

    public toggle(): number {
        let toggleResult: number;

        if (this._state) {
            toggleResult = this._radiusOff;
        } else {
            toggleResult = this._radiusOn;
        }
        this._state = !this._state;

        return toggleResult;
    }
}
