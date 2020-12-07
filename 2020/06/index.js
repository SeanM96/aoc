const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const formattedInput = input.split('\n\n').map(e => (e.split('\n')));

const partOne = formattedInput.map(group => group.join('')).map(group => {
    const set = new Set()
    for (char in group) {
        set.add(group[char])
    }
    return set.size
}).reduce((a, b) => a + b);

const partTwo = formattedInput.map( group => {
    const set = new Set();
    const sizeOfGroup = group.length;
    const joined = group.join('');
    for (char in joined) {
        const numOfTimes = joined.split(joined[char]).length - 1;
        if(numOfTimes === sizeOfGroup) {
            set.add(joined[char])
        }
    }
    return set.size;
}).reduce((a, b) => a + b);;

console.log(partTwo)