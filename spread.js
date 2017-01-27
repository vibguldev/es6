let inputNumbers = process.argv.slice(2);
var minimum = Math.min(...inputNumbers);

console.log(`The minimum of [${inputNumbers}] is ${minimum}`);