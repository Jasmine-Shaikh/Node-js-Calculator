// Node js => Process => argv

const input = process.argv.slice(2);

let operation = input[0];
let a = +input[1];
let b = +input[2];

//Crypto 
import { randomInt } from 'crypto'; // EJS 

// add, sub, mult, divide, sin, cos, tan, random

switch (operation) {
  case "add":
    console.log(a + b);
    break;
  case "sub":
    console.log(a - b);
    break;
  case "mult":
    console.log(a * b);
    break;
  case "divide":
    console.log(a / b);
    break;
  case "sin":
    console.log(Math.sin(a));
    break;
  case "cos":
    console.log(Math.cos(a));
    break;
  case "tan":
    console.log(Math.tan(a));
    break;
  case "random":
    console.log(randomInt(0,10000));
    break;
  default:
    break;
}
