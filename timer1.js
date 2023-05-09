const terminalEntry = process.argv.slice(2);
let num = terminalEntry.filter(num => {
  return num > 0;
});

const timer = function(num) {
  for (let i = 0; i < num.length; i++) {
    setTimeout(() => {
      console.log("beep");
      process.stdout.write('\u0007')
      //process.stdout.write('\x07');
    }, num[i] * 1000 );
  }
;}

timer(num);