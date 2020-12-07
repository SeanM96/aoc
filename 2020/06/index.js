const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
const formattedInput = input.split('\n\n').map(e => (e.split('\n')));

const partOne = formattedInput.map(group => group.join('')).map(group => {
    const answers = new Set()
    for (charIndex in group) {
        answers.add(group[charIndex])
    }
    return answers.size
}).reduce((a, b) => a + b);

const partTwo = formattedInput.map(group => {
    const answers = new Set();
    const sizeOfGroup = group.length;
    const wholeGroup = group.join('');
    for (charIndex in wholeGroup) {
        const numOfTimes = wholeGroup.split(wholeGroup[charIndex]).length - 1;
        if (numOfTimes === sizeOfGroup) {
            answers.add(wholeGroup[charIndex])
        }
    }
    return answers.size;
}).reduce((a, b) => a + b);;

console.log(partOne)
console.log(partTwo)