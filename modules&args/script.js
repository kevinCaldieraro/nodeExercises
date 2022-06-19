let calc = require('./calc');

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let result;

if (args[0] == 's') {
  result = calc.sum(a, b);
} else if (args[0] == 'm') {
  result = calc.mult(a, b);
} else {
  console.log('Valor inválido');
}

console.log(result);
