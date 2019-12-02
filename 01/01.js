const readline = require('readline');
const fs = require('fs');

let total = 0;
const readInterface = readline.createInterface({
    input: fs.createReadStream('./input.txt'),
});

const calculateFuel = input => {
    return Math.floor(input / 3) - 2;
}

readInterface.on('line', (line) => {
    console.log(calculateFuel(line));
    total += calculateFuel(line);
    console.log(total)
})
