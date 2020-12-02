const input = require('./input.json');

const total = 2020;

function partOne() {
    return input.every(item => {
        const remainder = total - item;
        const otherElement = input.find(item => item === remainder);
        if (otherElement) {
            console.log(item)
            console.log(otherElement)
            console.log(item * otherElement)
            return false;
        }
        return true;
    })
};

function partTwo() {
    const results = [];
    return input.every(item => {
        const otherElement = input.find(newItem => {
            return input.find(newerItem => {
                const result = newItem + newerItem + item === total && newerItem;
                if (result) {
                    results.push(result);
                    results.push(newItem)
                }
                return newItem + newerItem + item === total;
            }
            );
        });
        if (otherElement) {
            console.log('Solution: ' + (item * results[0] * results[1]));
            return false;
        }
        return true;
    })
};