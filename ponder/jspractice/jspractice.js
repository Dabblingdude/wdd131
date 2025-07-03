// Going over variable types and declarations.

const PI = 3.1415;
let radius = 3;

let area = radius * radius * PI; 

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);

const one = 1;
const two = '2';

let global = "I'm global";

function exampleFunction() {
    let block = "I'm block level or local";
    console.log(block);
}
console.log(global)
exampleFunction();