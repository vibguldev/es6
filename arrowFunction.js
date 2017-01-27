var inputs = process.argv.slice(2);

var result = inputs.reduce((resultString, inputString) => {
  resultString = resultString + String(inputString[0]);
  return resultString
},'');

var printResultString = `[${inputs}] becomes \"${result}\"`;

console.log(printResultString);