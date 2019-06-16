import { Thing, makeThing } from './thing';
import { Colors } from './color';
import { Animals } from './animal';

var colors = new Colors("colors");
var animals = new Animals("animals");

[1,2,3,4,5].forEach(item =>
{
    console.log(makeThing(colors, animals).name)
});