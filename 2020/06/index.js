const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString();

const formattedInput = input.split('\n\n').map(e => (e.split('\n'))).map(nested => nested.join());

const removeDuplicateCharacters = string => (string
    .split('')
    .filter((element, index, arr) => (arr.indexOf(element) === index))
    .join('').replace(',', ''));

const partOne = formattedInput.
    map(element => removeDuplicateCharacters(element).length).
    reduce((a, b) => a + b);

console.log(partOne)