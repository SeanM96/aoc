const fs = require('fs');
const path = require('path');
const filePath = path.basename('input.txt');

const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' }, (err, data) => {
});

const list = fileData.split(',').map((x) => parseInt(x));

const calculateCodes = input => {
  for(let i = 0; i < input.length - 1; i++) {
      switch (input[i]) {
        case 1:
          input[input[i + 3]] = input[input[i + 2]] + input[input[i + 1]];
          i+=3;
          break;
        case 2:
          input[input[i + 3]] = input[input[i + 2]] * input[input[i + 1]];
          i+=3;
          break; 
        case 99:
          console.log(`input: ${input}`)
          return;
      }
  }
  console.log(input)
}

calculateCodes(list);