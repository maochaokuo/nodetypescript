"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Thing = /** @class */ (function () {
    function Thing(color, animal) {
        this._color = color;
        this._animal = animal;
    }
    Object.defineProperty(Thing.prototype, "animal", {
        get: function () {
            return this._animal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Thing.prototype, "name", {
        get: function () {
            return this._color.name + " " + this._animal.name;
        },
        enumerable: true,
        configurable: true
    });
    return Thing;
}());
exports.Thing = Thing;
function pickOne(list) {
    var idx = Math.floor(Math.random() * list.length);
    return list[idx];
}
exports.makeThing = function (colorList, animalList) {
    return new Thing(pickOne(colorList), pickOne(animalList));
};
