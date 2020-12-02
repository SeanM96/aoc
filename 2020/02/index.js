const input = require('./input.json');

let count = 0;
const formattedInput = input.map(element => {
    return element.replace(':', '').split(' ');
});

function partOne() {
    formattedInput.forEach(element => {
        const minNum = element[0].match(/^(\d*)-/)[1];
        const maxNum = element[0].match(/-(\d*)/)[1];
        const character = element[1];
        const password = element[2];

        const numOfTimes = element[2].split(element[1]).length - 1;
        const validPassword = numOfTimes > minNum && numOfTimes < maxNum;
        if (numOfTimes >= minNum && numOfTimes <= maxNum) {
            count++;
            console.log(count);
        }
    });
    console.log(count)
}

function partTwo() {
    formattedInput.forEach(element => {
        const firstPosition = element[0].match(/^(\d*)-/)[1];
        const secondPosition = element[0].match(/-(\d*)/)[1];
        const character = element[1];
        const password = [element[2].slice(0, 0), ' ', element[2].slice(0)].join('');

        if (password[firstPosition] === character) {
            if (password[secondPosition] !== character && password[secondPosition] !== undefined) {
                count++;
                validPassword = true;
                reason = 'First Char'
            }
        } else if (password[secondPosition] === character) {
            if (password[firstPosition] !== character) {
                count++;
                validPassword = true;
                reason = 'Second char'
            }
        }
    });
}



