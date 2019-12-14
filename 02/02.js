const fs = require('fs');
const path = require('path');

const filePath = path.basename('input.txt');

let intValue;
fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    const values = data.split(',');
    intValue = values.map((x) => parseInt(x, 10));
  } else {
    console.log(err);
  }
});

const intCode = (input) => {
  input.forEach((element) => {
    switch (element) {
      case 99:
        return;
      case 1:
        input[element + 3] = input[element + 2] + input[element + 1];
      case 2:
        input[element + 3] = input[element + 2] * input[element + 1];
    }
  });
};
