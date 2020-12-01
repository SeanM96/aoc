const readline = require('readline');
const fs = require('fs');

let total = 0;
const readInterface = readline.createInterface({
  input: fs.createReadStream('./input.txt'),
});

const algorithm = (input) => Math.floor(input / 3) - 2;

const calculateFuel = (input) => {
  const baseMass = algorithm(input);
  let fuelMass = algorithm(baseMass);
  let total = fuelMass + baseMass;
  while (fuelMass >= 9) {
    fuelMass = algorithm(fuelMass);
    total += fuelMass;
  }
  return total;
};

readInterface.on('line', (line) => {
  total += calculateFuel(line);
});
