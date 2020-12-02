const input = require('./input.json');

function partOne() {
    input.forEach(element => {
        const formattedElement = element.replace(':', '').split(' ');
        const minNum = formattedElement[0].match(/^(\d*)-/)[1];
        const maxNum = formattedElement[0].match(/-(\d*)/)[1];
        const character = formattedElement[1];
        const password = formattedElement[2];

        const numOfTimes = password.split(character).length - 1;
        if (numOfTimes >= minNum && numOfTimes <= maxNum) {
            count++;
        }
    });
    console.log(count)
}

function partTwo() {
    input.forEach(element => {
        const formattedElement = element.replace(':', '').split(' ');
        const firstPosition = formattedElement[0].match(/^(\d*)-/)[1];
        const secondPosition = formattedElement[0].match(/-(\d*)/)[1];
        const character = formattedElement[1];
        const password = [formattedElement[2].slice(0, 0), ' ', formattedElement[2].slice(0)].join('');

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
    console.log(count)
}
partOne();
count = 0;
partTwo();


