"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OnOffKnob = (function () {
    function OnOffKnob() {
        this._state = false;
        this._x = 0;
        this._y = 0;
        this._radiusOn = 35;
        this._radiusOff = 45;
        this._knobId = "";
        this._knobObject = null;
    }
    OnOffKnob.prototype.addHandler = function () {
        this._knobObject.click(this.toggle());
    };
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
    Object.defineProperty(OnOffKnob.prototype, "knobObject", {
        get: function () {
            return this._knobObject;
        },
        set: function (knobObject) {
            this._knobObject = knobObject;
        },
        enumerable: true,
        configurable: true
    });
    OnOffKnob.prototype.toggle = function () {
        var toggleResult;
        if (this._state) {
            toggleResult = this._radiusOn;
        }
        else {
            toggleResult = this._radiusOff;
        }
        this._knobObject.animate({ transform: "r" + toggleResult + ", 0, 0" }, 1000, null);
        this._state = !this._state;
    };
    return OnOffKnob;
}());
exports.OnOffKnob = OnOffKnob;
