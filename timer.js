 
// let startDate = new Date();
// let endDate = new Date();
// console.log(endDate - startDate);

function alertTerminal(sec){
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log('beeped!');
  }, sec * 1000)
}

let input = process.argv;
input = input.slice(2);
for (const value of input) {
  alertTerminal(value);
}
console.log(input);