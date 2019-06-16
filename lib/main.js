"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var thing_1 = require("./thing");
var color_1 = require("./color");
var animal_1 = require("./animal");
var colors = new color_1.Colors("colors");
var animals = new animal_1.Animals("animals");
[1, 2, 3, 4, 5].forEach(function (item) {
    console.log(thing_1.makeThing(colors, animals).name);
});
