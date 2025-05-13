const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa los grados Celsius: ", function(celsius) {
  const f = (Number(celsius) * 9 / 5) + 32;
  console.log(`${celsius} grados Celsius son ${f} grados Fahrenheit.`);
  rl.close();
});
