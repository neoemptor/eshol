var OnOffKnob = (function () {
    function OnOffKnob() {
        this._state = false;
        this._x = 0;
        this._y = 0;
        this._radiusOn = 35;
        this._radiusOff = 45;
        this._knobId = "";
    }
    Object.defineProperty(OnOffKnob.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnOffKnob.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnOffKnob.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnOffKnob.prototype, "knobId", {
        get: function () {
            return this._knobId;
        },
        set: function (knobId) {
            this._knobId = knobId;
        },
        enumerable: true,
        configurable: true
    });
    OnOffKnob.prototype.toggle = function () {
        var toggleResult;
        if (this._state) {
            toggleResult = this._radiusOff;
        }
        else {
            toggleResult = this._radiusOn;
        }
        this._state = !this._state;
        return toggleResult;
    };
    return OnOffKnob;
}());
