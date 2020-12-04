const fs = require('fs')
const input = fs.readFileSync('./input2.txt').toString();
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];


const formattedInput = input.split(/\n\n+/)
    .map(passport => passport.split(/[\n|\s]+/).flatMap(s => s.split(':')
    ));

function partOne() {
    let includes = false;
    return formattedInput.filter(el => {
        includes = false;
        requiredFields.every(field => {
            if (el.includes(field)) {
                includes = true;
                return true;
            } else {
                includes = false;
                return false;
            }
        });
        return includes;
    }).length;
}

console.log(partOne())